import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IService } from '@/types/service';

const getServicesDir = (locale = 'tr') =>
  path.join(process.cwd(), `src/content/services/${locale}`);

export async function getAllServices(locale = 'tr'): Promise<IService[]> {
  const dir = getServicesDir(locale);
  const fileNames = fs.readdirSync(dir);
  const services = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: data.id,
        title: data.title,
        description: data.description,
        content: content,
        image: data.image,
        slug: fileName.replace(/\.md$/, ''),
        date: data.date,
        key: data.key,
        comingSoon: data.comingSoon ?? false,
        imagePosition: data.imagePosition ?? 'center',
        order: data.id,
      };
    });

  return services.sort((a, b) => a.order - b.order);
}

export async function getServiceBySlug(slug: string, locale = 'tr'): Promise<IService> {
  const dir = getServicesDir(locale);
  const fullPath = path.join(dir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    content: content,
    image: data.image,
    slug: slug,
    date: data.date,
    order: data.order,
    key: data.key,
    comingSoon: data.comingSoon ?? false,
    imagePosition: data.imagePosition ?? 'center',
  };
}
