import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    image:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/4/72fb5b5d-c956-4010-b9bd-ab64bc6f793f1683198565079-Nautica.png",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    image:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/5/7/11425e04-2b70-4dfd-a33f-69dac216755b1683463186281-Shop-By-Category_WP_04.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    image:
      "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/2ab2f5b3-441a-430c-a605-2ac9d06007c01604906586315-28-Essentials-Dresses.jpg",
  },
];
