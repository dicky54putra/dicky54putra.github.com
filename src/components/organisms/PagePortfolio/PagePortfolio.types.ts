import {
  IContentAboutSkills,
  IContentPortfolioProject,
} from "@store/content/content.types";

export type TPagePortfolio = {
  data: IContentPortfolioProject[];
  tech: IContentAboutSkills[];
};
