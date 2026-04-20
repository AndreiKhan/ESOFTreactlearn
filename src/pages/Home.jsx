import '@/pages/Home.scss'
import Filters from '@/components/Filters'
import SpecialDeal from '@/components/SpecialDeal'
import Dropdown from '@/components/Dropdown'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const sort = [
  { id: 1, value: 'Low to High', name: 'Low to High' },
  { id: 2, value: 'High to Low', name: 'High to Low' },
]

const categoryProducts = products.filter((product) => product.category === 'tv')

function Home() {
  return (
    <div className='home'>
      <aside className='home__filter'>
        <Filters />
        <SpecialDeal />
      </aside>
      <div className='home__container'>
        <div className='home__header'>
          <p className='home__quantity'>
            {categoryProducts.length} products
          </p>
          <div className='home__sort'>
            <p className='home__sort-label'>Sort by:</p>
            <Dropdown
              options={sort}
            />
          </div>
        </div>
        <div className='home__catalog'>
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
