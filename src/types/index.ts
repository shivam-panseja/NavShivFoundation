export interface Contributor {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ActivityType {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}