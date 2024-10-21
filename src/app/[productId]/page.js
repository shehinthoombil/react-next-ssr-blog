'use client'; // Mark this component as a Client Component

import { useEffect, useState } from 'react';

export default function BlogDetails({ params }) {

    const [product, setProduct] = useState({
        id: '',
        title: "",
        image: "",
        excerpt: "",
        content: ""
    })

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const res = await fetch(`http://localhost:5000/blogs/${params.productId}`);
                const data = await res.json();
                console.log(data.product.id);
                setProduct(data.product) // Process the data as needed
            } catch (error) {
                console.error('Error fetching blog details:', error);
            }
        };

        fetchBlogDetails();
    }, [params.productId]); // Dependency array ensures useEffect runs when productId changes

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <p className="text-gray-600 mt-2">{product.excerpt}</p>
            <h2 className="text-gray-600 mt-2">{product.content}</h2>
        </div>
    );
}
