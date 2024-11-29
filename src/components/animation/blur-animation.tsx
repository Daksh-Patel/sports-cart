import { useInView, motion } from "framer-motion"
import { useRef } from "react"

interface BlurAnimationProps {
  text: string
}

const BlurAnimation = (props: BlurAnimationProps) => {
  const { text } = props
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.p
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 1 }}
      className='text-base md:text-lg max-w-[900px] mx-auto pt-4 text-[#c0c0c0]'
    >
      {text}
    </motion.p>
  )
}

export default BlurAnimation
