import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IService } from '@/types/service';

const servicesDirectory = path.join(process.cwd(), 'src/content/services');

export async function getAllServices(): Promise<IService[]> {
  const fileNames = fs.readdirSync(servicesDirectory);
  const services = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fullPath = path.join(servicesDirectory, fileName);
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
        imagePosition: data.imagePosition ?? 'center'
      };
    });

  return services.map(service => ({
    ...service,
    order: service.id
  })).sort((a, b) => a.order - b.order);
}

export async function getServiceBySlug(slug: string): Promise<IService> {
  const fullPath = path.join(servicesDirectory, `${slug}.md`);
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
    key: data.key
  };
}