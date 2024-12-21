import CategoryProduct from "@/components/category/category-product-card"
import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Categories",
}

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>
}) {
  const { categoryId } = await params

  return <CategoryProduct categoryId={categoryId} />
}
