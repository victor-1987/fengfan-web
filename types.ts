
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
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isImageLeft: boolean;
}

// Update CaseStudy interface to support different case types (Software, Hardware, and Microsoft Cloud)
export interface CaseStudy {
  id: string;
  industry?: string;
  product?: string;
  title?: string;
  description: string;
  metric?: string;
  icon?: string;
  accent?: string;
  logo?: string;
  stats?: string;
  videoThumb?: string;
  company?: string;
}

export interface HardwareItem {
  id: string;
  name: string;
  spec: string;
  image: string;
}

export interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; desc: string; path: string; icon: string }[];
}