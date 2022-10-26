import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

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


    return <>
    {
        kandyUserObject.staff
        ? <>
        <button onClick={ () => setFiltered(filteredProducts.filter((obj) => obj.pricePerUnit > 2.0))}>Top Priced</button>
        <button onClick={ () => setFiltered(products)}>Show All</button>
        <button onClick={() => navigate("/products/create")}>Create Product</button>
        </>
        :<></>
    }
        <h2>List of Products</h2>

        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section className="productTypes" key={`products--${product.id}`}>
                            <header>Name: {product.name}</header>
                            <footer>Price: ${product.pricePerUnit}</footer>
                            <div>{product.productTypes.name}</div>
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

