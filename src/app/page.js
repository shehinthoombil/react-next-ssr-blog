import Link from "next/link";

 //Fetch blog data from your backend API
export default async function Home() {
  const res = await fetch('http://localhost:5000/blogs', { cache: 'no-store' });
  const blogs = await res.json();

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-t-lg" />
            <Link href={`/${blog.id}`}>
              <h2 className="text-xl font-semibold mt-4 text-red-500 cursor-pointer">
                {blog.title}
              </h2>
            </Link>

            <p className="text-gray-600 mt-2">{blog.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
