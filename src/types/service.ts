export interface IService {
  id: number;
  title: string;
  description: string;
  image: string;
  order: number;
  content: string;
  slug: string;
  date?: string;
  key: string;
  comingSoon?: boolean;
  imagePosition?: string;
}
