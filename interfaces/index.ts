export interface ProfileData {
  about: AboutData;
  services: ServicesData;
}

export interface PageData {
  title: string;
  description: string;
}

export interface AboutData extends PageData {
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
