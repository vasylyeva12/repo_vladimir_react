import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
     try {
        let res = await fetch("https://exam-server-5c4e.onrender.com/categories/all");
        let data = await res.json();

        setCategories(data);
     }catch(err){
        console.log(err);
     }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

  return (
    <div>
        <ul>
            {
                categories && categories.map(category => <li key={category.id}><Link to={`/products/${category.id}`}>{category.title}</Link></li>)
            }
        </ul>
    </div>
  )
}

export default Categories