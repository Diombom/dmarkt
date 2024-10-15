import Categories from "./compontents/Categories"
import NewProducts from "./compontents/NewProducts"
import ProductList from "./compontents/ProductList"
import Slider from "./compontents/Slider"

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl font-semibold">Featured Products</h2>
        <ProductList />
      </div>
      <div className="mt-24">
        <h2 className="text-2xl font-semibold">Categories</h2>
        <Categories />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h2 className="text-2xl font-semibold">New Products</h2>
        <NewProducts />
      </div>
    </div>
  )
}

export default HomePage