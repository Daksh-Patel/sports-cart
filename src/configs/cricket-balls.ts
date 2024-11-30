type CricketBallType = {
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

export const CricketBalls: CricketBallType[] = [
  {
    id: 1,
    name: "SG Club Red",
    type: "Leather",
    price: 500,
    rating: 4.3,
    image: "https://example.com/images/sg-club-red.jpg",
    popular: true,
    discount: 10,
    discountPrice: 450,
    company: "SG",
  },
  {
    id: 2,
    name: "Kookaburra County Match",
    type: "Leather",
    price: 1200,
    rating: 4.8,
    image: "https://example.com/images/kookaburra-county-match.jpg",
    popular: true,
    discount: 15,
    discountPrice: 1020,
    company: "Kookaburra",
  },
  {
    id: 3,
    name: "SS Club",
    type: "Tennis",
    price: 150,
    rating: 4.1,
    image: "https://example.com/images/ss-club.jpg",
    popular: false,
    discount: 5,
    discountPrice: 142.5,
    company: "SS",
  },
  {
    id: 4,
    name: "MRF Genius",
    type: "Tennis",
    price: 200,
    rating: 4.5,
    image: "https://example.com/images/mrf-genius.jpg",
    popular: true,
    discount: 10,
    discountPrice: 180,
    company: "MRF",
  },
  {
    id: 5,
    name: "Gray-Nicolls Pink Elite",
    type: "Pink Leather",
    price: 1000,
    rating: 4.6,
    image: "https://example.com/images/gray-nicolls-pink-elite.jpg",
    popular: true,
    discount: 10,
    discountPrice: 900,
    company: "Gray-Nicolls",
  },
  {
    id: 6,
    name: "SG Pink Test",
    type: "Pink Leather",
    price: 1500,
    rating: 4.9,
    image: "https://example.com/images/sg-pink-test.jpg",
    popular: true,
    discount: 15,
    discountPrice: 1275,
    company: "SG",
  },
  {
    id: 7,
    name: "Kookaburra Pink Turf",
    type: "Pink Leather",
    price: 1800,
    rating: 4.7,
    image: "https://example.com/images/kookaburra-pink-turf.jpg",
    popular: true,
    discount: 10,
    discountPrice: 1620,
    company: "Kookaburra",
  },
]
