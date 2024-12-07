import { ProductsType } from "./type"

import NikeFlight from "../assets/images/football/nike_flight.png"
import AdidasEspana from "../assets/images/football/adidas-espana.png"
import SelectBrillant from "../assets/images/football/select_brillant.png"
import WilsonSoccer from "../assets/images/football/wilson-soccer.png"
import AdidasBrazuca from "../assets/images/football/adidas-brazuca.png"
import NikeTiempo from "../assets/images/football/nike-tiempo.png"

export const Football: ProductsType[] = [
  {
    id: 41,
    name: "Nike Flight",
    type: "Football",
    price: 5000,
    rating: 4.8,
    image: NikeFlight,
    popular: false,
    discount: 15,
    discountPrice: 4250,
    company: "Nike",
  },
  {
    id: 42,
    name: "Adidas Tango España",
    type: "Football",
    price: 4500,
    rating: 4.7,
    image: AdidasEspana,
    popular: false,
    discount: 10,
    discountPrice: 4050,
    company: "Adidas",
  },
  {
    id: 44,
    name: "Select Brillant Super",
    type: "Football",
    price: 6000,
    rating: 4.9,
    image: SelectBrillant,
    popular: false,
    discount: 20,
    discountPrice: 4800,
    company: "Select",
  },
  {
    id: 45,
    name: "Wilson Traditional Soccer Ball",
    type: "Football",
    price: 1500,
    rating: 4.3,
    image: WilsonSoccer,
    popular: false,
    discount: 5,
    discountPrice: 1425,
    company: "Wilson",
  },
  {
    id: 46,
    name: "Adidas Brazuca",
    type: "Football",
    price: 7000,
    rating: 4.8,
    image: AdidasBrazuca,
    popular: true,
    discount: 10,
    discountPrice: 6300,
    company: "Adidas",
  },
  {
    id: 47,
    name: "Nike Tiempo Premier League",
    type: "Football",
    price: 5500,
    rating: 4.6,
    image: NikeTiempo,
    popular: false,
    discount: 15,
    discountPrice: 4675,
    company: "Nike",
  },
]
