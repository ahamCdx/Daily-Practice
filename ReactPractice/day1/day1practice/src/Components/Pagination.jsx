import React, { use, useEffect, useState } from 'react'

const Pagination = () => {
    const [product , setProduct] = useState([]);
    const [currentPage , setCurrentPage] = useState(1);

     async function fetchingData(){
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}`)
            let res = await data.json()
            setProduct(res)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchingData()
    },[currentPage])

  return (
    <div>
      {product.map((ele)=>(
        <div>
            <p>{ele.title}</p>
        </div>
      ))}
      <button disabled={currentPage===1} onClick={()=>setCurrentPage((prev)=>prev-1) }>Prev</button>
      <button disabled={currentPage===10} onClick={()=>setCurrentPage((prev)=>prev+1) }>Next</button>
    </div>
  )
}

export default Pagination
