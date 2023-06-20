import { IContentAboutSkills } from "@store/content/content.types";

export type TSelect = {
  lists: IContentAboutSkills[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
