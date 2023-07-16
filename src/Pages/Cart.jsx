import React from 'react';
import { useCart } from '../Components/Context/Cart.Context';
import CartCard from '../Components/Card/CartCard';

export default function Cart(){

  let {Cart=[],handleQuantity=()=>{},handleSave=()=>{}} = useCart([]);


  return (
   <div style={{height:'800px'}}>
  <div className='container'>
    <div className="col-12">
      <div className="row">
        {Cart.map((d,i) => <CartCard data={d} key={`cart-item-${i}`} handleSave={handleSave} handleQuantity={handleQuantity}/>)}
      </div>
    </div>
  </div>
  </div>
)
}