export interface ProfileInfo {
  about: string;
  info: ListItem[];
}

export interface ProfileData {
  about: string;
  birthday: string;
  residence: string;
  status: string;
  location: string;
}

export interface ListItem {
  label: string;
  value: string;
}
