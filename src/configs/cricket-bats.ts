type CricketBatsType = {
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

export const CricketBats: CricketBatsType[] = [
  {
    id: 1,
    name: "SS Master 1000",
    type: "English Willow",
    price: 5000,
    rating: 4.2,
    image: "https://example.com/images/ss-master-1000.jpg",
    popular: false,
    discount: 10,
    discountPrice: 4500,
    company: "SS",
  },
  {
    id: 2,
    name: "SS Ton Gold",
    type: "Kashmir Willow",
    price: 7000,
    rating: 4.5,
    image: "https://example.com/images/ss-ton-gold.jpg",
    popular: true,
    discount: 15,
    discountPrice: 5950,
    company: "SS",
  },
  {
    id: 3,
    name: "MRF Genius Grand Edition",
    type: "English Willow",
    price: 8000,
    rating: 4.7,
    image: "https://example.com/images/mrf-genius-grand-edition.jpg",
    popular: true,
    discount: 12,
    discountPrice: 7040,
    company: "MRF",
  },
  {
    id: 4,
    name: "MRF Virat King",
    type: "Kashmir Willow",
    price: 12000,
    rating: 4.8,
    image: "https://example.com/images/mrf-virat-king.jpg",
    popular: true,
    discount: 20,
    discountPrice: 9600,
    company: "MRF",
  },
  {
    id: 5,
    name: "Gray-Nicolls Kronus 200",
    type: "English Willow",
    price: 15000,
    rating: 4.6,
    image: "https://example.com/images/gray-nicolls-kronus-200.jpg",
    popular: false,
    discount: 5,
    discountPrice: 14250,
    company: "Gray-Nicolls",
  },
  {
    id: 6,
    name: "Gray-Nicolls Legend",
    type: "English Willow",
    price: 20000,
    rating: 4.9,
    image: "https://example.com/images/gray-nicolls-legend.jpg",
    popular: true,
    discount: 10,
    discountPrice: 18000,
    company: "Gray-Nicolls",
  },
  {
    id: 7,
    name: "Kookaburra Ghost",
    type: "Kashmir Willow",
    price: 10000,
    rating: 4.3,
    image: "https://example.com/images/kookaburra-ghost.jpg",
    popular: false,
    discount: 8,
    discountPrice: 9200,
    company: "Kookaburra",
  },
  {
    id: 8,
    name: "Kookaburra Kahuna",
    type: "English Willow",
    price: 18000,
    rating: 4.7,
    image: "https://example.com/images/kookaburra-kahuna.jpg",
    popular: true,
    discount: 12,
    discountPrice: 15840,
    company: "Kookaburra",
  },
  {
    id: 9,
    name: "SG RSD Spark",
    type: "Kashmir Willow",
    price: 4500,
    rating: 4.1,
    image: "https://example.com/images/sg-rsd-spark.jpg",
    popular: false,
    discount: 5,
    discountPrice: 4275,
    company: "SG",
  },
  {
    id: 10,
    name: "SG Sunny Tonny",
    type: "English Willow",
    price: 8500,
    rating: 4.6,
    image: "https://example.com/images/sg-sunny-tonny.jpg",
    popular: true,
    discount: 10,
    discountPrice: 7650,
    company: "SG",
  },
  {
    id: 11,
    name: "SG Player Edition",
    type: "English Willow",
    price: 12000,
    rating: 4.8,
    image: "https://example.com/images/sg-player-edition.jpg",
    popular: true,
    discount: 15,
    discountPrice: 10200,
    company: "SG",
  },
]
