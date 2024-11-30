import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface ProductCardProps {
  href: string
  title: string
  imageSrc: StaticImageData
}

const CategoriesCard = (props: ProductCardProps) => {
  const { href, title, imageSrc } = props

  return (
    <Link href={href} className='group/item boxShadow p-3 rounded-xl'>
      <div className='p-4 bg-[#ebecf0] rounded-xl overflow-hidden'>
        <h3 className='text-2xl font-bold text-black text-center pb-4'>
          {title}
        </h3>

        <Image
          src={imageSrc}
          alt={title}
          className='w-full ease-in-out duration-300 max-h-[200px] object-contain  group-hover/item:scale-110'
        />
      </div>
    </Link>
  )
}

export default CategoriesCard
