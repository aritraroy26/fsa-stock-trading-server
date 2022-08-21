import { db } from "./db";

export const buyStock = async (numberOfSharesToPurchase, currentSharePrice) => {
  const cost = numberOfSharesToPurchase * currentSharePrice;
  await db
    .getConnection()
    .collection("users")
    .updateOne(
      {},
      { $inc: { numberOfShares: numberOfSharesToPurchase, cashValue: -cost } }
      //$inc -> increment operator. as we are using this operator the arithmetic operation is done as below
      //cashValue: -cost is the mongo way for cashValue: cashValue - cost
      //numberOfShares: numberOfSharesToPurchase is the mongo way for numberOfShares: numberOfShares + numberOfSharesToPurchase
    );
};
