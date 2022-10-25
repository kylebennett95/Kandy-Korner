import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [product, setProduct] = useState({
        name: "",
        type: [],
        price: []
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()

    // const localKandyUser = localStorage.getItem("kandy_user")
    // const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API

        const productToSendToAPI = {
            name: product.name,
            productTypesId: parseInt(product.type),
            pricePerUnit: parseInt(product.price)
        }
     

        return fetch(`http://localhost:8088/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/products")
            })
    }

    return (
        <form className="productForm">
            <h2 className="productForm_title">New Product</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Product name"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
                                setProduct(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                <label htmlFor="name">Type:</label>
                <option value={product.type} onChange={
                        (evt) => {
                            const copy = {...product}
                            copy.type = evt.target.checked
                            setProduct(copy)
                        }
                    }>Hard Candy</option>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Product price"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.price = evt.target.value
                                setProduct(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="button">
                Create Product
            </button>
        </form>
    )
}