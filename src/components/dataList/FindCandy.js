import { useEffect, useState } from "react"

export const FindCandy = ({searchTermState}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/products/?_expand=productTypes`)
            .then(response => response.json())
            .then((productsArray) => {
              setFiltered(productsArray)
              setProducts(productsArray)
            })
        },
        []);

        useEffect(
            () => {           const searchedCandy = products.filter(product => {
                return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchedCandy)
        },
            [searchTermState]
        )


    return <>
        <h2>List of Products</h2>

        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section className="productTypes" key={`products--${product.id}`}>
                            <header>{product.name}</header>
                            <footer>${product.pricePerUnit}</footer>
                        </section>
                    }
                )
            }
        </article>

        {products.length < 1 && (
            <section className="products">
                <h4>There are no products to see here</h4>
            </section>
        )}
    </>
};

