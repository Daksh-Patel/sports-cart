import SSInner from "../assets/images/innerGloves/SS_inner.png"
import SGInner from "../assets/images/innerGloves/sg_inner.png"
import KookaburraInner from "../assets/images/innerGloves/kookaburra_inner.png"
import GNInner from "../assets/images/innerGloves/GN_inner.png"

import { ProductsType } from "./type"

export const InnerGlovesItem: ProductsType[] = [
  {
    id: 51,
    name: "SS Cotton Inner Gloves",
    type: "Inner Gloves",
    price: 300,
    rating: 4.5,
    image: SSInner,
    popular: false,
    discount: 10,
    discountPrice: 270,
    company: "SS",
  },
  {
    id: 52,
    name: "SG Test Inner Gloves",
    type: "Inner Gloves",
    price: 350,
    rating: 4.7,
    image: SGInner,
    popular: false,
    discount: 15,
    discountPrice: 297.5,
    company: "SG",
  },

  {
    id: 54,
    name: "Kookaburra Cotton Padded Gloves",
    type: "Inner Gloves",
    price: 400,
    rating: 4.6,
    image: KookaburraInner,
    popular: false,
    discount: 12,
    discountPrice: 352,
    company: "Kookaburra",
  },
  {
    id: 56,
    name: "Gray-Nicolls Elite Inner Gloves",
    type: "Inner Gloves",
    price: 500,
    rating: 4.7,
    image: GNInner,
    popular: true,
    discount: 8,
    discountPrice: 460,
    company: "Gray-Nicolls",
  },
]
