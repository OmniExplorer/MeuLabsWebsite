import { siteConfig } from '@/data/siteConfig';

export function cleanWhatsappNumber() {
  return siteConfig.whatsappNumber.replace(/[^\d]/g, '');
}

export function whatsappHref(message: string) {
  return `https://wa.me/${cleanWhatsappNumber()}?text=${encodeURIComponent(message)}`;
}

export function counselorMessage(courseName?: string) {
  if (!courseName) {
    return "Hi Meu Labs, I'm interested in finding the right course for my child. Could a student counselor help me choose?";
  }
  return `Hi Meu Labs, I'm interested in ${courseName}. Could you help me with the next intake?`;
}
