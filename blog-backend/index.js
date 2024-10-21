const express = require('express');
const cors = require('cors');
const { data } = require('autoprefixer');

const app = express()
const PORT = 5000;
//allow cross-origin requests from the Next.js frontend

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000' // Enclose the URL in quotes and ensure 'http://' is correct
}));
const blogs = [
    {
        id: 1,
        title: "8 Steps to Starting Online Busines",
        image: "http://localhost:5000/images/1.png",
        excerpt: "Launching an online business can be an affordable plan to become an entrepreneur And with the wide variety of e-commerce platforms and channel options, you have more access than ever to get your products and services in front of [...]",
        content: "Full content for the 8 steps to starting online business."
    },
    {
        id: 2,
        title: "10 Financial Ratios for Business",
        image: "http://localhost:5000/images/2.png",
        excerpt: "The financial statement used for obtaining swift integration of an entity’s performance in key areas is known as ratio analysis. The ratio analysis aims to compare relationships between financial statement accounts that enable managers or investors to determine the [...]",
        content: "Full content for 10 financial ratios for business."
    },
    {
        id: 3,
        title: "5 Important Elements for Every Sales Proposal",
        image: "http://localhost:5000/images/3.jpg",
        excerpt: "A sales proposal is sometimes a mere formality—the customer has already made up his or her mind about whether he or she is going to buy. At other times, a sales proposal makes all the difference. All decision-makers and [...]",
        content: "Full content for 10 financial ratios for business."
    },
    {
        id: 4,
        title: "5 BEST SMALL INVESTMENT BUSINESS IDEAS IN INDIA",
        image: "http://localhost:5000/images/4.png",
        excerpt: "The following are the 5  best small investment business ideas: Travel Agency It means an agency engaged in selling and arranging transportation, accommodations, tours, and trips for travellers. In addition to booking reservations, they assist customers in choosing their [...]",
        content: "Full content for 10 financial ratios for business."
    },
    {
        id: 5,
        title: "Aatmanirbhar Bharath Abhiyan",
        image: "http://localhost:5000/images/5.png",
        excerpt: "In his fifth address to the nation, Prime Minister Narendra Modi launched Atma-Nirbhar Bharat Abhiyan(ABA). The objective of this ‘Self-Reliant India Mission’ is to bring a special economic package that will offer relief measures across all the sectors in [...]",
        content: "Full content for 10 financial ratios for business."
    },
    {
        id: 6,
        title: "Advantages and Disadvantages of Project Finance",
        image: "http://localhost:5000/images/6.png",
        excerpt: "What is project finance? Project financing is the process of providing funds for a particular project, frequently one involving construction or finance, in which the creditors rely on working capital and project revenues to recover their initial investments. Essentially, [...]",
        content: "Full content for 10 financial ratios for business."
    },

]

app.use(express.static('public'));


app.get('/blogs', (req, res) => {
    res.json(blogs)
})

app.get('/blogs/:id', (req, res) => {
    const blog = blogs.find((b) => b.id == parseInt(req.params.id))
    console.log(blog);
    
    if (blog) {
        res.status(200).json({ product: blog })
    } else {
        res.status(404).json({ error: "Blog not found" })
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})