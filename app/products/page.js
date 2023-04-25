import React, { Suspense } from 'react';
import Link from 'next/link';
import ProductList from '@/components/productList'; 
import CategoryList from '@/components/categoryList';
async function getProducts(){
    const res= await fetch('https://api.escuelajs.co/api/v1/products?limit=6')
    const products = await res.json();
    return products;
}
async function getCategries(){
    const res= await fetch('https://api.escuelajs.co/api/v1/categories')
    const categories = await res.json();
    return categories;
} 

const ProductsPage = async ()=> {
    const products = await getProducts();
    const categories = await getCategries();
    return (
        <>
            <Suspense fallback={<p>Loading Categories...</p>}>
                <CategoryList categories={categories} />
            </Suspense>
            <Suspense fallback={<p>Loading Products...</p>}>
                <ProductList products={products} />
            </Suspense>
        </>
    );
}
export default ProductsPage;