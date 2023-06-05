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
      "assets/men-category-img.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    image:
      "assets/women-category.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    image:
      "assets/kids-header.jpg",
  },
];
