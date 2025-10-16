export interface GalleryEvent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date?: string;
}

export const galleryEvents: GalleryEvent[] = [
  {
    id: "csaf25",
    title: "CSAF 2025",
    subtitle: "The Cybersecurity & Awareness Fair 2025",
    description: "The Cal Poly Pomona Cybersecurity and Awareness Fair is where awareness and the advancement of the cybersecurity industry is happening along with the recruitment of CPP’s cybersecurity talent.",
    date: "Fall 2025"
  },
  {
    id: "symposium25",
    title: "Innovation Symposium 2025",
    subtitle: "College of Business Administration annual CBA Innovation Symposium",
    description: "The day-long event will bring together industry leaders, entrepreneurs, and academic experts to explore emerging trends in business and technology.",
    date: "Spring 2025"
  },
  {
    id: "conf24",
    title: ".conf24",
    subtitle: "Splunk .conf24 User Conference",
    description: "Splunk's flagship user conference. It’s the most anticipated event of the year created specifically for those who know, use, and love Splunk.",
    date: "Summer 2024"
  }
];
