import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        type: [],
        price: []
    })
    const [productType, setProductType] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then((productsArray) => {
              setProductType(productsArray)
            })
        },
        []);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

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
                <label htmlFor="name">Candy Type:</label>
                <input
                type="number"
                name="productTypesId"
                value={product.type.id}
                onChange={(evt) => {
                    const copy = { ...product };
                    copy.type = evt.target.value;
                    setProduct(copy)
                }}
                />
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

               // {/* <label htmlFor="type">Hard Candy:</label>
            //    <input type="checkbox"
            //    value={productType} onChange={
            //            (evt) => {
            //                const copy = {...productType}
              //              copy.type = evt.target.checked
              //              setProduct(copy)
               //         }
               //     }/> */}

            //    {
            //     <div className="form-group">
            //     <div className="products" key={product.id}>
            //         <select>{
            //             productType.map((obj) => {
            //                  return <option value="Type" {...obj.id}>{obj.name}</option>
            //             })
            //         }</select>
            //     </div>
            //     </div>}


//This WORKS

/*{ <div className="form-group">
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
</div> }*/
