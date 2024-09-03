import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import "./App.scss"

// const products = [
//     {
//         id: "1",
//         title: "Product 1",
//         price: 20,
//         img: "url"
//     }
// ]

const App = () => {
    const [products, setProducts] = useState([]);

    const handleSend = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const object = Object.fromEntries(formData);

        setProducts([...products, {id: uuidv4(), ...object}]);

    }
    
    const handleRemove = (productId) => {
        setProducts(products.filter(item => item.id !== productId));
    }

    return (
        <div className="container">
            <form className='form' onSubmit={handleSend}>
                <div className="form__item">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id='title'
                        name='title'
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="url">Url</label>
                    <input
                        type="text"
                        id='url'
                        name='url'
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id='price'
                        name='price'
                    />
                </div>

                <div className="form__item">
                    <label htmlFor="modificator">Modificator</label>
                    
                    <select name="modificator" id="modificator">
                        <option value="10">Sale 10%</option>
                        <option value="20">Sale 20%</option>
                    </select>
                </div>

                <button type='submit' className='btn'>GET USER</button>
            </form>

            <div className="products">
            {
                products && products.map(item => (
                    <div className='item' key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.url} alt="" />
                        <p>{item.price}</p>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default App