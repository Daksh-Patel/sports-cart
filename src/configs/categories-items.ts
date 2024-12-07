import Bat from "../assets/images/bat.png"
import Ball from "../assets/images/ball.png"
import BadmintonImage from "../assets/images/badminton.png"
import FootballImage from "../assets/images/football.png"
import InnerGloves from "../assets/images/inner-gloves.png"
import { CricketBats } from "./cricket-bats"
import { CricketBalls } from "./cricket-balls"
import { Badminton } from "./badminton"
import { Football } from "./football"
import { CategoriesItemsType } from "./type"
import { InnerGlovesItem } from "./inner-gloves"

export const CategoriesItems: CategoriesItemsType[] = [
  {
    categoryId: 1,
    name: "Cricket Bat",
    products: CricketBats,
    image: Bat,
  },
  {
    categoryId: 2,
    name: "Cricket Ball",
    products: CricketBalls,
    image: Ball,
  },
  {
    categoryId: 3,
    name: "Badminton",
    products: Badminton,
    image: BadmintonImage,
  },
  {
    categoryId: 4,
    name: "Football",
    products: Football,
    image: FootballImage,
  },
  {
    categoryId: 5,
    name: "Inner Gloves",
    products: InnerGlovesItem,
    image: InnerGloves,
  },
]
