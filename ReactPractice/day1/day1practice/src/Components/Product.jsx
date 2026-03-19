import React, { use, useEffect, useState } from 'react'

const Product = () => {
    const [fetchProducts , setFetchProducts] = useState([]);
    const [title , setTitle] = useState('');
    const [price , setprice]  = useState('')
    const [image , setImage]  = useState('')
    
    async function fetchingData(){
        try {
            const data = await fetch('https://fakestoreapi.com/products')
            const res = await data.json();
            setFetchProducts(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchingData()
    },[])

  return (
    <div>
      <form>
        <input type="text"
         placeholder='Enter title'
         value={title}
         />
         <input type="text" 
            placeholder='Imag URL'
            value={image}
         />
         <input type="text" 
           placeholder='Entter Price'
         />
         <button type='submi'>Add Product</button>
      </form>
      <div>
        {fetchProducts.map((product)=>(
            <div style={{border : '1px solid' , margin : '13px', display : 'flex' , flexDirection : 'column'}} key={product.id}>
                <img style={{width : '100px'}} src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Product
