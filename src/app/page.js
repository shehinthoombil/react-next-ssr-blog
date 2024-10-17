
export default async function Home() {
  //Fetch blog data from your backend API
  const res = await fetch('http://localhost:5000/blogs', { cache: 'no-store' });
  const blogs = await res.json();

  return (
    <div>
      <h1>Blog Lists</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
