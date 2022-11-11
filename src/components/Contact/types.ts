

  type IconType = 'logo-github' | 'logo-linkedin' | 'mail'
  
  export interface ContactType {
    icon: IconType;
    text: string;
    link?: string
  }

  export interface InputType {
    user_name: string;
    user_email: string;
    message: string;
  }