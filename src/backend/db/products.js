import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id : uuid(),
    "category": "Men",
    "brand" : "Roadster",
    "name": "Cotton T-Shirt",
    "description": "Men printed White  Cotton t-shirt .",
    "price": "899",
    "in-stock" : true,
    "deliverTime": "3",
    "size" : "M",
    "rating" :"4",
    "image_url": "11523274349300-Roadster-Men-Navy-Blue-Solid-Henley-Neck-T-shirt-4911523274349105-1.jpg (210×280) (myntassets.com)"
  },
  {
    id : uuid(),
    "category": "Men",
    "brand": "HRX by Hrithik Roshan",
    "name" :"Solid T-shirt",
    "description": "Men Running Solid T-shirt.",
    "price": "1699",
    "in-stock" : true,
     "deliverTime": "2",
     "size" : "L",
     "rating" :"3",
    "image_url": "499aed44-5272-46be-8a6b-f44b9f1a6edd1683104062498-HRX-by-Hrithik-Roshan-Men-Tshirts-1421683104061159-1.jpg (210×280) (myntassets.com)"
  },

  {  id : uuid(),
    "category": "Men",
    "brand": "Puma",
    "name" : "Sports T-shirt",
    "description": "Puma Men sport style Core",
    "price": "1199",
    "in-stock" : true,
     "deliverTime": "7",   
     "size" : "L",
     "rating" :"3",
    "image_url": "https://m.media-amazon.com/images/I/61-huaSxhhL._AC_UL320_.jpg"
  },
  {  id : uuid(),
    "category": "Men",
    "brand": "Arrow",
    "name" : "Arrow Pants",
    "description": "Stylish chinos pants for men.",
    "price": "1699",
    "in-stock" : false,
     "deliverTime": "2",
     "size" : "M",
     "rating" :"5",
    "image_url": "https://m.media-amazon.com/images/I/91Y0Xm4x2TL._AC_UL320_.jpg"
  },
  {
    id : uuid(),
    "category": "Men",
    "brand": "Arrow",
    "name" :" Arrow Formal Shirt",
    "description": "Men's Full Sleeve Slim Fit Light Fawn Formal Shirt.",
    "price": "2000",
    "in-stock" : true,
     "deliverTime": "3",
     "rating" :"4",
     "size" : "L",
    "image_url": "https://m.media-amazon.com/images/I/81PwA2gcnLL._AC_UL320_.jpg"
  },
  {
    id : uuid(),
    "category": "Men",
    "brand": "Arrow",
    "name" :"Brown Formal Shirt",
    "description": "Men's Full Sleeve Contemporary Fit Medium Brown Formal Shirt.",
    "price": "1600",
    "in-stock" : true,
     "deliverTime": "3",
     "rating" :"5",
     "size" : "M",
    "image_url": "https://m.media-amazon.com/images/I/71y5kr+l8HL._AC_UL320_.jpg"
  },
  {
    id : uuid(),
    "category": "Women",
    "brand" : "DHRUVI TRENDZ",
    "name": "A-Line Western Dresses",
    "description": "Rayon Paper Printed Dress with Belt || Collared Neck On Fancy Button with Long Cuff Sleeve",
    "price": "379",
    "in-stock" : true,
     "deliverTime": "3",
     "rating" :"5",
     "size" : "M",
    "image_url": "https://m.media-amazon.com/images/I/81V1134YEfL._AC_UL320_.jpg"
  },
  {
    id : uuid(),
    "category": "Women",
    "brand" : "Miss Chase",
    "name": "Midi Dress",
    "description": "Women's Teal V-Neck Puff Sleeve Floral Wrap Midi Dress.",
    "price": "899",
    "in-stock" : true,
     "deliverTime": "4",
     "rating" :"4",
     "size" : "L",
    "image_url": "https://m.media-amazon.com/images/I/81V1134YEfL._AC_UL320_.jpg"
},
{
  id : uuid(),
    "category": "Women",
    "brand" : "Harpa",
    "name": "Flora Dress",
    "description": "Round Neck Printed Dresses.",
    "price": "599",
    "in-stock" : true,
     "deliverTime": "5",
     "rating" :"3",
     "size" : "XL",
    "image_url": "https://m.media-amazon.com/images/I/71qs3hHvSEL._AC_UL320_.jpg"
},
  {
    id : uuid(),
    "category": "Women",
    "brand" : "Ritu Kumar",
    "name": "Saree",
    "description": "A Pre-Draped Saree Indian saree for Women.",
    "price": "2999",
    "in-stock" : true,
     "deliverTime": "1",
     "rating" :"5",
     "size" : "M",
    "image_url": "https://m.media-amazon.com/images/I/71Cwza1GAIL._AC_UL320_.jpg"
  },
  {
    id : uuid(),
      "category": "Women",
      "brand" : "Ritu Kumar",
      "name": "Dhoti Salwar",
      "description": "Grey Printed Dhoti Salwar.",
      "price": "1950",
      "in-stock" : true,
       "deliverTime": "5",
       "rating" :"3",
       "size" : "XL",
      "image_url": "https://m.media-amazon.com/images/I/61XwRJ9l8EL._AC_UL320_.jpg"
  },
  {
    id : uuid(),
      "category": "Women",
      "brand" : "Ritu Kumar",
      "name": "Kurta With Pant",
      "description": "Yellow Printed Kurta With Pant.",
      "price": "5530",
      "in-stock" : true,
       "deliverTime": "5",
       "rating" :"4",
       "size" : "L",
      "image_url": "https://m.media-amazon.com/images/I/71cqTWof8KL._AC_UL320_.jpg"
  },
  
  {
    id : uuid(),
      "category": "Women",
      "brand" : "true Browns",
      "name": "Traditional three piece dress.",
      "description": "Women's Purple Textured Silk Overlay Jacket Blouse Pant Set",
      "price": "1000",
      "in-stock" : false,
       "deliverTime": "5",
       "rating" :"5",
       "size" : "M",
      "image_url": "https://m.media-amazon.com/images/I/41SJgG8bgFL._AC_UL320_.jpg"
  },
  {
    id : uuid(),
    "category": "Kids",
    "brand" : "Naughty Ninos",
    "name": "Kids Jumpsuit",
    "description": "Girl's Regular Overalls.",
    "price": "699",
      "in-stock" : true,
       "deliverTime": "5",
       "rating" :"5",
       "size" : "M",
    "image_url": "https://m.media-amazon.com/images/I/51tADDC2BNL._AC_UL320_.jpg"
  
  },
  
    {
      id : uuid(),
      "category": "Kids",
      "brand" : "TinySteps",
      "name": "Kids Etnic Wear",
      "description": "Kids Ethnic Wear Printed Cotton Kurta Pyjama Set for Baby Boys.",
      "price": "699",
      "in-stock" : true,
      "deliverTime": "5",
      "rating" :"4",
      "size" : "M",
      "image_url": "https://m.media-amazon.com/images/I/61B2DyHqlrL._AC_UL320_.jpg"
    
   },
  {
      id : uuid(),
      "category": "Kids",
      "brand" : "TinySteps",
      "name": "Pyjama Set",
      "description": "Boys Linen Blend Ethnic Kurta and Pyjama Set.",
      "price": "849",
      "in-stock" : false,
      "deliverTime": "5",
      "rating" :"5",
      "size" : "M",
      "image_url": "https://m.media-amazon.com/images/I/71LBoVQSWeL._AC_UL320_.jpg"
  }
]