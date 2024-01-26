"use server";

import { promises as fs } from "fs";

import { ProfileInfo, ProfileData, ListItem } from "@/interfaces";

export const getProfileInfo = async (): Promise<ProfileInfo> => {
  const file = await fs.readFile(
    process.cwd() + "/data/profile-info.json",
    "utf8"
  );
  const data: ProfileData = JSON.parse(file);

  const infoList: ListItem[] = [
    {
      label: "Age",
      value: calculateAge({ date: data.birthday }).toString(),
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

const calculateAge = ({ date }: { date: string }): number => {
  const birthDate = new Date(date);
  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthDate.getFullYear();

  // Adjust age if birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    return age - 1;
  }

  return age;
};
