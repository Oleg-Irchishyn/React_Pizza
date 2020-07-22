import React from 'react'

const Categories = ({ items, onClickItem }) => {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((item, index) => (
          <li onClick={(e) => onClickItem(item)} key={`${item}_${index}`}>{item}</li>)
        )}
      </ul>
    </div>
  )
}

export default Categories;
