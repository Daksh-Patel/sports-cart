import { StaticImageData } from "next/image"
import Bat from "../assets/images/bat.png"
import Ball from "../assets/images/ball.png"
import BadmintonImage from "../assets/images/badminton.png"
import FootballImage from "../assets/images/football.png"
import { ProductsType } from "./type"
import { CricketBats } from "./cricket-bats"
import { CricketBalls } from "./cricket-balls"
import { Badminton } from "./badminton"
import { Football } from "./football"

type CategoriesItemsType = {
  categoryId: number
  name: string
  image: StaticImageData
  products: ProductsType[]
}

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
]
