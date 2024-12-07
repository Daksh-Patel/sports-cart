import { ProductsType } from "./type"

import YonexAstrox from "../assets/images/badminton/yonex-astrox.png"
import LiNing from "../assets/images/badminton/li-ning.png"
import VictorBrave from "../assets/images/badminton/victor-brave.png"
import BabolatFeel from "../assets/images/badminton/babolat_feel.png"
import YonexVoltric from "../assets/images/badminton/yonex-voltric.png"
import LiNingSuper from "../assets/images/badminton/la-ning-super.png"
import VictorAuraspeed from "../assets/images/badminton/victor-auraspeed.png"

export const Badminton: ProductsType[] = [
  {
    id: 21,
    name: "Yonex Astrox 100 ZZ",
    type: "Badminton Racket",
    price: 12000,
    rating: 4.9,
    image: YonexAstrox,
    popular: true,
    discount: 15,
    discountPrice: 10200,
    company: "Yonex",
  },
  {
    id: 22,
    name: "Li-Ning N90 III",
    type: "Badminton Racket",
    price: 10500,
    rating: 4.8,
    image: LiNing,
    popular: false,
    discount: 10,
    discountPrice: 9450,
    company: "Li-Ning",
  },
  {
    id: 23,
    name: "Victor Brave Sword 12",
    type: "Badminton Racket",
    price: 8000,
    rating: 4.5,
    image: VictorBrave,
    popular: false,
    discount: 12,
    discountPrice: 7040,
    company: "Victor",
  },
  {
    id: 24,
    name: "Babolat X Feel",
    type: "Badminton Racket",
    price: 6500,
    rating: 4.2,
    image: BabolatFeel,
    popular: false,
    discount: 8,
    discountPrice: 5980,
    company: "Babolat",
  },
  {
    id: 25,
    name: "Yonex Voltric Z Force II",
    type: "Badminton Racket",
    price: 11000,
    rating: 4.7,
    image: YonexVoltric,
    popular: false,
    discount: 10,
    discountPrice: 9900,
    company: "Yonex",
  },
  {
    id: 26,
    name: "Li-Ning Super Series 9900",
    type: "Badminton Racket",
    price: 9500,
    rating: 4.6,
    image: LiNingSuper,
    popular: false,
    discount: 15,
    discountPrice: 8075,
    company: "Li-Ning",
  },
  {
    id: 27,
    name: "Victor Auraspeed 90K",
    type: "Badminton Racket",
    price: 10500,
    rating: 4.4,
    image: VictorAuraspeed,
    popular: false,
    discount: 10,
    discountPrice: 9450,
    company: "Victor",
  },
]
