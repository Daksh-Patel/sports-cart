import { ProductsType } from "./type"

import SGClub from "../assets/images/ball/sg_club.png"
import KookaburraCountry from "../assets/images/ball/kookabura_country.png"
import SGClubWhite from "../assets/images/ball/Sg_club_white.png"
import GNPink from "../assets/images/ball/GN_pink.png"
import SGPink from "../assets/images/ball/Sg_pink.png"
import KookaburraTurf from "../assets/images/ball/kookaburra_turf.png"

export const CricketBalls: ProductsType[] = [
  {
    id: 11,
    name: "SG Club Red",
    type: "Leather",
    price: 500,
    rating: 4.3,
    image: SGClub,
    popular: false,
    discount: 10,
    discountPrice: 450,
    company: "SG",
  },
  {
    id: 12,
    name: "Kookaburra County Match",
    type: "Leather",
    price: 1200,
    rating: 4.8,
    image: KookaburraCountry,
    popular: true,
    discount: 15,
    discountPrice: 1020,
    company: "Kookaburra",
  },
  {
    id: 13,
    name: "SG Club",
    type: "Leather",
    price: 150,
    rating: 4.1,
    image: SGClubWhite,
    popular: false,
    discount: 5,
    discountPrice: 142.5,
    company: "SG",
  },
  {
    id: 15,
    name: "Gray-Nicolls Pink Elite",
    type: "Pink Leather",
    price: 1000,
    rating: 4.6,
    image: GNPink,
    popular: false,
    discount: 10,
    discountPrice: 900,
    company: "Gray-Nicolls",
  },
  {
    id: 16,
    name: "SG Pink Test",
    type: "Leather",
    price: 1500,
    rating: 4.9,
    image: SGPink,
    popular: false,
    discount: 15,
    discountPrice: 1275,
    company: "SG",
  },
  {
    id: 17,
    name: "Kookaburra Turf",
    type: "Pink Leather",
    price: 1800,
    rating: 4.7,
    image: KookaburraTurf,
    popular: false,
    discount: 10,
    discountPrice: 1620,
    company: "Kookaburra",
  },
]
