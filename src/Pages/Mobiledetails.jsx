import React,{useEffect,useState} from 'react';
import Fluidimage from '../Components/ImageM/ImageM';
import ProductCard from '../Components/Card/ProductCard';
import Image from 'react-bootstrap/Image';
import { useCart } from '../Components/Context/Cart.Context';


export default function Mobiledetails(){

  let [phones,setPhones] = useState([]);

 let {Cart,setCart} =  useCart();


  //FUNCTION FOR HANDLING ADD TO CART BUTTON EVENT

  function handleAddtocart(d){

    let cart_copy = [...Cart];

    cart_copy.push({...d,quantity:1});

    setCart(cart_copy);
    


  }

 

  //REMOVE FROM CART  

  function handleRemovefromcart(id){

    let cart_reducer = [...Cart];

    cart_reducer = cart_reducer.filter((d,i) => Cart.id===id);

    setCart(cart_reducer);

  }

  

  // FETCHING PRODUCTS.JSON DATA FROM MOCKS USING FETCH AND useEffect HOOK  

  useEffect(()=>{
   
    fetch("http://localhost:3000/mocks/products.json").then((reponse)=>reponse.json()).then((result)=>{
    if(result && result.data){
      setPhones(result.data)
    }}).catch((error) => console.log(error))


   return ()=> {};
  },[])

  return (   <div>
    <div className="container">
      <div className="row">
        <div className="col-md-12">

        <Fluidimage ImageB='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7KAWTA4HiHIdxcTOtP_tUlUyYbmqcIbiL7r40GgBYVwezjajj9ebLbSlSbkKTUt5WlY&usqp=CAU'/>
         
         {phones.map((d,i) => <ProductCard key={`prod-item-${i}`} data={d} handleRemovefromcart={handleRemovefromcart}handleAddtocart={handleAddtocart}/>)}

        </div>
       

      </div>
    </div>
  </div>)
}