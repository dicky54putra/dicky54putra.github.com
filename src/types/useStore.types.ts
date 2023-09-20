import { TContent } from "@store/content/content.types";
import { TPortfolioFilter } from "@store/portfolioFilter/portfolioFilter.types";
import { TRoutes } from "@store/store.types";
import { TTheme } from "@store/theme/theme.type";

export type StoreRootType = {
  route: TRoutes;
  content: TContent;
  portfolioFilter: TPortfolioFilter;
  theme: TTheme;
};
