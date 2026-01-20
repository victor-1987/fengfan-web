
export interface CloudService {
  id: string;
  name: string;
  icon: string;
  category: 'public' | 'software';
  description: string;
}

export interface SystemItem {
  id: string;
  name: string;
  icon: string;
  category: 'hardware' | 'solution';
  description: string;
}

export interface ProductHighlight {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isImageLeft: boolean;
  tag?: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  logo: string;
  stats: string;
  description: string;
  videoThumb: string;
}

export interface HardwareItem {
  id: string;
  name: string;
  spec: string;
  image: string;
}
