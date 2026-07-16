export interface Achievement {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface StudentStat {
  category: string;
  percentage: number;
  color: string;
  description: string;
}

export interface Quote {
  id: string;
  text: string;
  author: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  message: string;
}
