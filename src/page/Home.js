import {useEffect, useState} from 'react'
import Products from '../components/Products'
import Nav from '../components/Nav'
import useQuery from '../hooks/useQuery'
const Home = () => {
    const {data,loading,error} = useQuery(`/products`)
    const [products,setProducts] = useState([])
    useEffect(()=>{
      if(data) setProducts(data)
    },[data])
    
  return (
    <>
      
      <div>
        <Nav/>
        <Products products={products}/>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <h2 style={{textAlign: 'center'}}>code by: Trương Hoàng Long</h2>
    </div>
    </>
  )
}

export default Home