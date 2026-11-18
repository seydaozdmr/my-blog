import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { IService } from '@/types/service'
import { locales } from './i18n'
import type { Locale } from './translations'

const servicesDirectory = (locale: Locale) => {
  if (!locales.includes(locale)) throw new Error(`Unsupported locale: ${locale}`)
  return path.join(process.cwd(), 'src/content/services', locale)
}

function parseService(fileContents: string, slug: string): IService {
  const { data, content } = matter(fileContents)
  for (const key of ['title', 'description', 'image', 'key']) {
    if (typeof data[key] !== 'string' || !data[key].trim()) {
      throw new Error(`Invalid ${key} in service: ${slug}`)
    }
  }
  if (!Number.isInteger(data.id) || !Number.isFinite(data.order)) throw new Error(`Invalid id/order in service: ${slug}`)
  if (data.comingSoon !== undefined && typeof data.comingSoon !== 'boolean') throw new Error(`Invalid comingSoon in service: ${slug}`)
  if (data.date !== undefined && Number.isNaN(new Date(data.date).getTime())) throw new Error(`Invalid date in service: ${slug}`)
  return {
    id: data.id, title: data.title, description: data.description, image: data.image,
    key: data.key, content, slug, order: data.order, date: data.date ? new Date(data.date).toISOString() : undefined,
    comingSoon: data.comingSoon ?? false, imagePosition: data.imagePosition ?? 'center',
  }
}

export async function getAllServices(locale: Locale = 'tr'): Promise<IService[]> {
  const dir = servicesDirectory(locale)
  const filenames = (await fs.readdir(dir)).filter(filename => filename.endsWith('.md'))
  const services = await Promise.all(filenames.map(async filename =>
    parseService(await fs.readFile(path.join(dir, filename), 'utf8'), filename.slice(0, -3))))
  return services.sort((a, b) => a.order - b.order)
}

export async function getServiceBySlug(slug: string, locale: Locale = 'tr'): Promise<IService | null> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null
  try {
    return parseService(await fs.readFile(path.join(servicesDirectory(locale), `${slug}.md`), 'utf8'), slug)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null
    throw error
  }
}
