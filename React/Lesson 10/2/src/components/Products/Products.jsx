import React from 'react'

const Products = () => {
    const products = useSelector(state => state.data);
    
    return (
        <div className="products">
            {
                products && products.map(item => (
                    <div className="item" key={item.id}>
                        <img src={item.image} alt={item.title} className="item__image" />

                        <div className='item__content'>
                            <h2 className='item__title'>{item.title}</h2>
                            <p className='item__subtitle'>{item.description}</p>
                        </div>

                        <div className='item__footer'>
                            <span className='item__price'>$ {item.price}</span>

                            <button className='btn btn-small'><CiShoppingBasket className='btn-icon' /></button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products