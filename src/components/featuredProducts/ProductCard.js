import React from 'react'

function ProductCard(props) {
  return (
    <div className={`rounded-t-2xl bg-[#FBDABB] ${props.className}`} id={props.id}>
        {props.children}
    </div>
  )
}

export default ProductCard