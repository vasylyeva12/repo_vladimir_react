import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([]);

    const [breadcrumbs, setBreadcrumbs] = useState([]);

    const [title, setTitle] = useState("All Products")

    const {categoryId} = useParams();

    const fetchProductsByCategory = async (categoryId) => {
        try {
           let res = await fetch(`https://exam-server-5c4e.onrender.com/categories/${categoryId}`);
           let {data, category} = await res.json();
   
           setProducts(data);

           setBreadcrumbs([
            {
                link: "/",
                name: "Main page"
            }, 
            {
                link: "/categories",
                name: "Categories page"
            },
            {
                link: `/categories/${category.id}`,
                name: category.title
            }
        ])

        setTitle(category.title)
        }catch(err){
           console.log(err);
        }
       }

       const fetchProductsAll = async (categoryId) => {
        try {
           let res = await fetch(`https://exam-server-5c4e.onrender.com/products/all`);
           let data = await res.json();
   
           setProducts(data);

           setBreadcrumbs([
            {
                link: "/",
                name: "Main page"
            }, 
            {
                link: "/products/all",
                name: "Products All"
            }
        ])

        setTitle("All Products")
        }catch(err){
           console.log(err);
        }
       }

    useEffect(()=>{
        if(categoryId){
            fetchProductsByCategory(categoryId)
        }else {
            fetchProductsAll();
        }
    },[categoryId])

  return (
    <div>

        <div>
            {
                breadcrumbs && breadcrumbs.map(item => <><Link key={item.link} to={item.link}>{item.name}</Link> / </>)
            }
        </div>

            <h2>{title}</h2>
        <ul>
            {
                products && products.map(product => <li key={product.id + product.title}>{product.title}</li>)
            }
        </ul>
    </div>
  )
}

export default Products