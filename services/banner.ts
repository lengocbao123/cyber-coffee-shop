import { db } from "@/lib/db";

export const getBanners = () => {
  return db.banner.findMany({
    where: {
      isAvailable: true,
    },
  });
};
