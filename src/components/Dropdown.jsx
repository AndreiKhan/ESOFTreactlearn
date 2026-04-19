import { useState } from 'react'
import '@/components/Dropdown.scss'
import dropdownArrow from '@/assets/images/dropdown-arrow.svg'

function Dropdown({
  options
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState(options[0])
  
  return (
    <div
      className='dropdown'
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className='dropdown__input primary-input'>
        {value.name}
      </p>
      <img
        className={`dropdown__arrow ${isOpen && 'dropdown__arrow--open'}`} src={dropdownArrow}
        alt="arrow"
      />
      {isOpen && (
        <ul className='dropdown__options'>
          {options.map((option) => (
            <li className='dropdown__option'
              key={option.id}
              onClick={() => setValue(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
