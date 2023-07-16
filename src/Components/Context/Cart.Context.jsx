import { useContext,createContext,useState } from "react";

const CartContext = createContext({

  Cart:[],
  setCart:()=>Promise,
  handleQuantity:()=>null,
  handleSave:()=>null,



});

export const useCart = () => useContext(CartContext);

export default function CartContextProvider({children}){

  let [Cart,setCart] = useState([]);



  //INCREMENT AND DECREMENT HANDLER

  function handleQuantity(id=0,type=''){

    let cart_copy = [...Cart];
    
    let matchedData = cart_copy.find((d)=> d.id ===id)

    if(matchedData){

      if(type==='decrement' && matchedData.quantity >1){

        matchedData.quantity -=1;

      }
      else if(type==='increment'){

        matchedData.quantity +=1;

      }

      setCart(cart_copy);


    

  }
  else{
    alert('error:No matched data found')
  }}

  function handleSave(id,qty,newPrice){

    // console.log(id,qty,newPrice);

    let cart_copyf = [...Cart];

    for(let i=0; i< Cart.length; i++){

      if(Cart[i].id === id){
        Cart[i].quantity=qty;
        Cart[i].NewPrice=newPrice;
      }
    }
    setCart(cart_copyf);
      // console.log(Cart)
  }



  let value ={
    Cart,
    setCart,
    handleQuantity,
    handleSave,

  
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

