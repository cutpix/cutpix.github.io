import { promises as fs } from "fs";

import { ProfileInfo, ListItem } from "@/interfaces";

export const getProfileInfo = async () => {
  const file = await fs.readFile(
    process.cwd() + "/data/profile-info.json",
    "utf8"
  );
  const data: ProfileInfo = JSON.parse(file);

  const infoList: ListItem[] = [
    {
      label: "Age",
      value: data.birthday,
    },
    {
      label: "Residence",
      value: data.residence,
    },
    {
      label: "Freelance",
      value: data.status,
    },
    {
      label: "Address",
      value: data.location,
    },
  ];

  return {
    about: data.about,
    info: infoList,
  };
};
