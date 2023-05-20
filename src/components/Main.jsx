import { useEffect, useState } from 'react'

export function Main() {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }, [])
    
    const [loadCount, setLoadCount] = useState(5)

    const loadMore = () => {
        if (loadCount < products.length) {
            setLoadCount(loadCount + 5)
        }   
    }

    const noMoney = () => {
        alert('You have not enough money')
    }

    return (
        <div style={{gridArea: "m"}} className='border'>
            {products.slice(0, loadCount).map((product) => (
                <div className="">
                <h2 className='border-y text-center text-xl'>{product.title}</h2>
                <div className='flex justify-between'>
                    <img
                    className='m-4'
                    style={{width: "200px"}}
                    src={product.image} alt="" />
                    <div
                        style={{width: "400px"}}
                        className='m-3 text-center'>
                            {product.description}
                    </div>
                    <div className='m-3 text-2xl'>{'$ ' + product.price}
                        <button 
                            onClick={noMoney} 
                            className='ml-2 bg-indigo-200 hover:bg-indigo-300 rounded-2xl px-2 pb-1 transition duration-400 ease-in-out'>
                            Buy
                        </button>
                    </div>
                </div>
                </div>
            ))}
            <button onClick={loadMore} className=' bg-cyan-300 hover:bg-cyan-400 transition p-5 m-5 rounded-full'>Load more <br /> positions</button>
        </div>
    )
}