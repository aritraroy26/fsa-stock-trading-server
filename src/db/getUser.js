import { db } from "./db";

export const getUser = async (stockHistory) => {
  const user = await db.getConnection().collection("users").findOne({});
  return user;
};
