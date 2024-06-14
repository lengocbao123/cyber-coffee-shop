import { db } from "@/lib/db";

export const getCategories = () => {
  return db.category.findMany({ where: {} });
};
