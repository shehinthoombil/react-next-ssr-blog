import React from 'react';

//fetch the blog details for the given productId
async function getBlogDetails(productId) {
    try {
        const res = await fetch(`http://localhost:5000/blogs/${productId}`);

        if (!res.ok) {
            throw new Error('Failed to fetch blog data');
        }

        const data = await res.json();
        // Return the product data
        return data.product || {};
    } catch (error) {
        console.error('Error fetching blog details:', error);
        return null;
    }
}

// Page component uses SSR data fetching
export default async function BlogDetailsPage({ params }) {
    // Extract productId from dynamic route params
    const { productId } = params;
    const product = await getBlogDetails(productId); // Fetch blog details S-S

    if (!product) {
        return <div>Blog post not found or error fetching details.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <p className="text-gray-600 mt-2">{product.excerpt}</p>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Full Content:</h2>
                <p className="text-gray-800">{product.content}</p>
            </div>
        </div>
    );
}
