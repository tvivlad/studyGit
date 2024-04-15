import React from 'react'

const SelectCategory = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value='' key=''>
        Все категории
      </option>
      <option value='/category/electronics' key='1'>
        Электроника
      </option>
      <option value='/category/jewelery' key='2'>
        Драгоценности
      </option>
      <option value="/category/men's clothing" key='3'>
        Мужская одежда
      </option>
      <option value="/category/women's clothing" key='4'>
        Женская одежда
      </option>
    </select>
  )
}

export default SelectCategory
