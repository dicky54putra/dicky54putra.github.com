import { TDevToArticle } from "./content.types.devTo";

interface IContentPortfolioProject {
  title: string;
  cover: string;
  demo: string;
  desc: string;
  tech: string;
}

interface IContentAboutWorkExperience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  jobdesk: string;
  logo: string;
}
interface IContentAboutEducation {
  logo: string;
  name: string;
  major: string;
  jobdesk: string;
  startDate: string;
  endDate: string;
}
interface IContentAboutSkills {
  name: string;
  image: string;
  all_project: boolean;
}

export type TContent = {
  portfolio?: {
    title: string;
    tech: string;
    project: IContentPortfolioProject[];
  };
  about?: {
    name: string;
    title: string;
    role: string;
    profile: string;
    desc: string;
    short_desc: string;
    work_experience: IContentAboutWorkExperience[];
    education: IContentAboutEducation[];
    skills: IContentAboutSkills[];
  };
  config?: {
    title: string;
    socials: Array<{ title: string; url: string }>;
    menus: Array<{ title: string; url: string }>;
    role: string;
    copyright: string;
    menu_open: string;
    menu_close: string;
  };
  article?: TDevToArticle[];
};
