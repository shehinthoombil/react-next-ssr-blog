async function fetchBlog(id) {
    const res = await fetch(`http://localhost:5000/blogs/${id}`)
    return res.json();
}
export default async function BlogDetails({ params }) {
    const blog = await fetchBlog(params.id)

return(
    <div>
         <h1>{blog.title}</h1>
         <img src={blog.image} alt={blog.title} />
        <p>{blog.content}</p>
    </div>
)
}