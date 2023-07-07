import React from 'react'
import Product from './component/product/Product'
import Categories from './component/product/Categories'
import Categorie1 from './component/product/Categorie1'
import Categorie2 from './component/product/Categorie2'
import Updates from './component/product/Updates'
import Categories3 from './component/product/Categories3'

export default function Products() {
    return (
        <>
            <Product />
            <Categories />
            <Categorie1 />
            <Categorie2 />
            <Categories3/>
            <Updates />
        </>
    )
}
