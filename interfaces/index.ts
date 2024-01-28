export interface ProfileData {
  about: AboutData;
  services: ServicesData;
}

export interface PageData {
  title: string;
}

export interface AboutData extends PageData {
  description: string;
  info: {
    list: ListItem[];
  };
}

export interface ServicesData extends PageData {
  items: ServiceType[];
}

export interface ServiceType {
  type: string;
  description: string;
  fa: string;
}

export interface ListItem {
  label: string;
  value: string;
}
