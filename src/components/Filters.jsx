import '@/components/Filters.scss'
import Dropdown from '@/components/Dropdown'
import MinMaxInput from '@/components/MinMaxInput'

const brands = [
  { id: 1, value: 'Samsung', name: 'Samsung' },
  { id: 2, value: 'LG', name: 'LG' },
  { id: 3, value: 'Sony', name: 'Sony' },
  { id: 4, value: 'TCL', name: 'TCL' },
]

const min = 0
const max = 5000

function Filters() {
  return (
    <form className='filters'>
      <h3 className='filters__title'>
        Filters
      </h3>
      <div className='filters__filters'>
        <div className='filters__filter'>
          <label className='filters__label'>
            Brand
          </label>
          <Dropdown
            options={brands}
          />
        </div>
        <div className='filters__filter'>
          <label className='filters__label'>
            Price Range
          </label>
          <MinMaxInput
            min={min}
            max={max}
          />
        </div>
        <button className='filters__button primary-button' type='button'>
          Apply Filters
        </button>
      </div>
    </form>
  )
}

export default Filters
