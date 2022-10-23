import { useEffect, useState } from "react";

export const ProductList = () => {
    const [products, productList] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((productsArray) => {
              productList(productsArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    return <>
        <h2>List of Products</h2>

        <article className="products">
            {
                products.map(
                    (product) => {
                        return <section className="products" key={`products--${product.id}`}>
                            <header>Name: {product.name}</header>
                            <footer>Price: ${product.pricePerUnit}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}

