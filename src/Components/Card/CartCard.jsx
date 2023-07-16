import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import React,{useState} from 'react';


export default function CartCard({data,handleQuantity=(e)=>{},handleSave=(e)=>{}}){

  function handleSaveQty(){

   let localPrice = (data.quantity * data.price)

    handleSave(data.id,data.quantity,localPrice);

    alert(`Your Order ${data.title} Accepted and has been registered`)

  }



  return (
   
   <div className='card p-2 mt-3' style={{backgroundColor:'lightgray',border:'none',boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
    <div className="container">
        <div className="col-12">
      <div className="row">
      
          <div className="col-3">
            <Image src={data.thumbnail} style={{height:'206px',borderRadius:'10px'}} fluid/>
          </div>
          <div className="col-9">
     
                  <div className="row">
         <div className="row">
             <p className='text-start'style={{color:'grey',fontSize:'25px'}}><b>{data.title}</b></p>
            <p className='text-end' style={{marginTop:'-30px'}}><b>$ {data.price}</b></p>
         </div>
            </div>
           
            <div className="row">
              <div className="col-6">
                <p>Description: <small>( {data.description} )</small></p>
              </div>
            </div>
          
            <div className="row">
              <p>Discount: <b>{data.discountPercentage}</b>%</p>
              <p>Rating: <b>{data.rating}</b>%</p>
            </div>
            <div className="row">
              <p>Stock: <b>{data.stock}</b> N</p>
              <p>Brand: <b>{data.brand}</b></p>
            </div>
            <div className="row">
             <div className="col-6"> <p>Category: <b>{data.category}</b></p></div>
              <div className="col-3 text-end" >   
              </div>
              <div className="row">
            
              </div>
              
            </div>
             <div className='row d-flex flex-row-reverse'>
               <div className='col-3'>
                    <p><b>Quantity Adjust:</b></p>
  <Button variant="primary" onClick={()=>handleQuantity(data.id,'decrement')}>-</Button>
  <p>{data.quantity}</p>
  <Button variant="primary" onClick={()=>handleQuantity(data.id,'increment')}>+</Button>
  </div>
              </div>

              <Button varient='success'style={{marginTop:'-57px'}}onClick={handleSaveQty}>Place Order</Button>
            </div>
            <hr/>
            
            <div className="row">
              <div >
                <p className='text-start' style={{marginLeft:'291px'}} ><b>Ordered Qty: <span  style={{backgroundColor:'yellow',padding:'2px',borderRadius:'5px'}}> {data.quantity} </span></b></p>
                 <p className='text-center' style={{marginLeft:'400px'}} ><b>Total:</b></p>
                 <p className='text-end' style={{marginTop:'-38px'}}><b style={{backgroundColor:'yellow',padding:'2px',borderRadius:'5px'}}>${data.NewPrice?data.NewPrice:data.price}</b></p>
              </div>
              </div>


       
          </div>
          </div>
   </div>
 </div>
  )
}