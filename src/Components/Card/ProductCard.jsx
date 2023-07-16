import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import Image from 'react-bootstrap/Image';


export default function ProductCard({data={},handleAddtocart=(e)=>{},handleRemovefromcart=(e)=>{}}){

  let [button,SetButton] = useState('Add To Cart');
  let [buttonId,setbuttonId] = useState('addCart')




  function handleButtonName(){

    if(button === 'Add To Cart' && buttonId == 'addCart'){
      SetButton('Remove From Cart');
      setbuttonId('removeCart');
      handleAddtocart(data)
    }
    else if(button === 'Remove From Cart' && buttonId == 'removeCart'){
      SetButton('Add To Cart');
      setbuttonId('addCart');
      handleRemovefromcart(data.id);
    }
    
  

  }



  return (
   <div className='card p-2 mt-3' style={{backgroundColor:'lightgray',border:'none',boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}}>
    <div className="container">
        <div className="col-12" >
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
                      <Button varient='primary' id={buttonId}onClick={handleButtonName}style={{marginRight:'-187px',backgroundColor:'#164d8fe3'}}>{button}</Button>
              </div>
              
         
              </div>
            </div>

            </div>
          </div>
          </div>
        </div>
 
  )
}