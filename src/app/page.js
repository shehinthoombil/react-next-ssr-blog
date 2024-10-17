
async function fetchBlogs(){
  const res = await fetch('http://localhost:5000/blogs')
  return res.json();
}

export default function Home() {
  //fectch blog data and render in server SSR
  const blogs =  fetchBlogs();

  return (
    <div>
      <h1>Blog Lists</h1>
      <div className="blog-list">
        <div className="blog-item">
          <img src="" alt=""></img>
          <h2>blog title</h2>
          <p>Launching an online business can be an affordable plan to become an entrepreneur. And with the wide variety of e-commerce platforms and channel options, you have more access than ever to get your products and services</p>
        </div>
      </div>
    </div>
  );
}
