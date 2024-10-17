const express = require('express');
const cors = require('cors')

const app = express()
const PORT = 5000;
//allow cross-origin requests from the Next.js frontend

app.use(cors())
const blogs = [
    {
        id: 1,
        title: "8 Steps to Starting Online Busines",
        image: "https://example.com/online-business.jpg",
        excerpt: "Launching an online business can be an affordable plan to become an entrepreneur...",
        content: "Full content for the 8 steps to starting online business."
    },
    {
        id: 2,
        title: "10 Financial Ratios for Business",
        image: "https://example.com/financial-ratios.jpg",
        excerpt: "The financial statement used for obtaining swift integration...",
        content: "Full content for 10 financial ratios for business."
    }
]

app.get('/blogs', (req, res) => {
    res.json(blogs)
})

app.get('/blogs/:id', (req, res) => {
    const blog = blogs.find((b) => b.id == parseInt(req.params.id))
    if (blog) {
        res.json(blog)
    } else {
        res.status(404).json({ error: "Blog not found" })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})