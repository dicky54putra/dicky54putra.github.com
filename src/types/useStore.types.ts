import { TContent } from "@store/content/content.types";
import { TPortfolioFilter } from "@store/portfolioFilter/portfolioFilter.types";
import { TRoutes } from "@store/store.types";

export type StoreRootType = {
  route: TRoutes;
  content: TContent;
  portfolioFilter: TPortfolioFilter;
};
