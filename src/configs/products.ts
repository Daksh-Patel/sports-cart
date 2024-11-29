import { StaticImageData } from "next/image"
import Bat from "../assets/images/bat.png"
import Ball from "../assets/images/ball.png"
import Badminton from "../assets/images/badminton.png"
import Football from "../assets/images/football.png"

type ProductsType = {
  id: number
  name: string
  image: StaticImageData
}

export const ProductItems: ProductsType[] = [
  {
    id: 1,
    name: "Cricket Bat",
    image: Bat,
  },
  {
    id: 2,
    name: "Cricket Ball",
    image: Ball,
  },
  {
    id: 3,
    name: "Badminton",
    image: Badminton,
  },
  {
    id: 4,
    name: "Football",
    image: Football,
  },
]
