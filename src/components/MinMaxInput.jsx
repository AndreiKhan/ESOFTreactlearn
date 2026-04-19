import '@/components/MinMaxInput.scss'

function MinMaxInput({
  min,
  max,
}) {

  return (
    <div className='min-max-input'>
      <input
        className='min-max-input__input primary-input'
        placeholder={min}
      />
      <input
        className='min-max-input__input primary-input'
        placeholder={max}
      />
    </div>
  )
}

export default MinMaxInput
