import { ProfileData, AboutData, ServicesData } from "@/interfaces";
import { promises as fs } from "fs";
import moment from "moment";

class ProfileService {
  private filename: string = "profile-info.json";

  public async getAboutData(): Promise<AboutData> {
    const { about } = await this.readDataFile<ProfileData>(this.filename);

    about.info.list.map((item, idx) => {
      const dateValue = moment(item.value, "YYYY-MM-DD");

      if (dateValue.isValid()) {
        item.value = this.calculateAge({ date: item.value }).toString();
      }
    });

    return about;
  }

  public async getServicesData(): Promise<ServicesData> {
    const { services } = await this.readDataFile<ProfileData>(this.filename);
    return services;
  }

  private async readDataFile<T>(filename: string): Promise<T> {
    try {
      const filePath = `${process.cwd()}/data/${filename}`;
      const fileContent = await fs.readFile(filePath, "utf8");

      return JSON.parse(fileContent) as T;
    } catch (error) {
      console.error(`Error reading or parsing ${filename}`, error);
      throw error;
    }
  }

  private calculateAge = ({ date }: { date: string }): number => {
    const birthDate = moment(date);
    const currentDate = moment();

    return currentDate.diff(birthDate, "years");
  };
}

const profileService = new ProfileService();

export default profileService;
