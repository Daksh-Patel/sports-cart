type FootballType = {
  id: number
  name: string
  type: string
  price: number
  rating: number
  image: string
  popular: boolean
  discount: number
  discountPrice: number
  company: string
}

export const Football: FootballType[] = [
  {
    id: 1,
    name: "Nike Flight",
    type: "Football",
    price: 5000,
    rating: 4.8,
    image: "https://example.com/images/nike-flight.jpg",
    popular: true,
    discount: 15,
    discountPrice: 4250,
    company: "Nike",
  },
  {
    id: 2,
    name: "Adidas Tango España",
    type: "Football",
    price: 4500,
    rating: 4.7,
    image: "https://example.com/images/adidas-tango-espana.jpg",
    popular: true,
    discount: 10,
    discountPrice: 4050,
    company: "Adidas",
  },
  {
    id: 3,
    name: "Puma Future Grip",
    type: "Football",
    price: 4000,
    rating: 4.5,
    image: "https://example.com/images/puma-future-grip.jpg",
    popular: false,
    discount: 5,
    discountPrice: 3800,
    company: "Puma",
  },
  {
    id: 4,
    name: "Select Brillant Super",
    type: "Football",
    price: 6000,
    rating: 4.9,
    image: "https://example.com/images/select-brillant-super.jpg",
    popular: true,
    discount: 20,
    discountPrice: 4800,
    company: "Select",
  },
  {
    id: 5,
    name: "Wilson Traditional Soccer Ball",
    type: "Football",
    price: 1500,
    rating: 4.3,
    image: "https://example.com/images/wilson-traditional-soccer-ball.jpg",
    popular: false,
    discount: 5,
    discountPrice: 1425,
    company: "Wilson",
  },
  {
    id: 6,
    name: "Adidas Brazuca",
    type: "Football",
    price: 7000,
    rating: 4.8,
    image: "https://example.com/images/adidas-brazuca.jpg",
    popular: true,
    discount: 10,
    discountPrice: 6300,
    company: "Adidas",
  },
  {
    id: 7,
    name: "Nike Tiempo Premier League",
    type: "Football",
    price: 5500,
    rating: 4.6,
    image: "https://example.com/images/nike-tiempo-premier-league.jpg",
    popular: false,
    discount: 15,
    discountPrice: 4675,
    company: "Nike",
  },
]
