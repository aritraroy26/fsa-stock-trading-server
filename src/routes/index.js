import { buyStockRoute } from "./buyStockRoute";
import { getStockHistoryRoute } from "./getStockHistoryRoute";
import { getUserInfoRoute } from "./getUserInfoRoute";
import { sellStockRoute } from "./sellStockRoute";

export const routes = [
  getUserInfoRoute,
  getStockHistoryRoute,
  buyStockRoute,
  sellStockRoute,
];
