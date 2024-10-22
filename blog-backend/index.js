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
        content: "The first step for starting an online business is to assess the viability of your new business idea. Your business doesn’t have to be focused on a physical product. The most significant thing is to figure out what problem you’re solving or what need you’re fulfilling. There’s a tremendous possibility out there for the right idea."
    },
    {
        id: 2,
        title: "10 Financial Ratios for Business",
        image: "http://localhost:5000/images/2.png",
        excerpt: "The financial statement used for obtaining swift integration of an entity’s performance in key areas is known as ratio analysis. The ratio analysis aims to compare relationships between financial statement accounts that enable managers or investors to determine the [...]",
        content: "A quick ratio shows that a firm can meet its financial obligations and pay off its liabilities even in the case of an unanticipated situation. This ratio indicates the extent to which a company has quick assets to pay off its current liabilities. The higher the ratio, the Higher the solvency level of the company and the less the risk of being bankrupt."
    },
    {
        id: 3,
        title: "5 Important Elements for Every Sales Proposal",
        image: "http://localhost:5000/images/3.jpg",
        excerpt: "A sales proposal is sometimes a mere formality—the customer has already made up his or her mind about whether he or she is going to buy. At other times, a sales proposal makes all the difference. All decision-makers and [...]",
        content: "It means an agency engaged in selling and arranging transportation, accommodations, tours, and trips for travellers. In addition to booking reservations, they assist customers in choosing their destination, transportation, and lodging and inform travellers of passport and visa requirements, rates of currency exchange, and import duties."
    },
    {
        id: 4,
        title: "5 BEST SMALL INVESTMENT BUSINESS IDEAS IN INDIA",
        image: "http://localhost:5000/images/4.png",
        excerpt: "The following are the 5  best small investment business ideas: Travel Agency It means an agency engaged in selling and arranging transportation, accommodations, tours, and trips for travellers. In addition to booking reservations, they assist customers in choosing their [...]",
        content: "Whether your proposal is one page or 20 pages (we’ll talk about length in a minute), always lead with an executive summary. Diving right into the technical aspects of your proposal is tempting, and it will probably appeal to hands-on buyers and influencers. However, the details do not interest some buyers and most high-level influencers, who seek a quick answer to the question: “What’s in it for us?”"
    },
    {
        id: 5,
        title: "Aatmanirbhar Bharath Abhiyan",
        image: "http://localhost:5000/images/5.png",
        excerpt: "In his fifth address to the nation, Prime Minister Narendra Modi launched Atma-Nirbhar Bharat Abhiyan(ABA). The objective of this ‘Self-Reliant India Mission’ is to bring a special economic package that will offer relief measures across all the sectors in [...]",
        content: "To regain economic power amidst the pandemic, the relief packages announced the total amount whooping Rs.20 lakh crore. Finance Minister, Nirmala Sitaraman, addressed the fiscal policies and relief measure that comes under this package. With the ongoing economic ramifications, the ABA policy ensures that it doesn’t leave any sector untouched by the revival, particularly in MSMEs, which are the heart of the economy."
    },
    {
        id: 6,
        title: "Advantages and Disadvantages of Project Finance",
        image: "http://localhost:5000/images/6.png",
        excerpt: "What is project finance? Project financing is the process of providing funds for a particular project, frequently one involving construction or finance, in which the creditors rely on working capital and project revenues to recover their initial investments. Essentially, [...]",
        content: "Project financing is the process of providing funds for a particular project, frequently one involving construction or finance, in which the creditors rely on working capital and project revenues to recover their initial investments.Essentially, this means that the investor understands the financial flows and recognizes that the only way to pay off debts is by generating profits. In other words, project investments are meant to ensure that the project funds itself, and consequently, they constitute the sole guarantee of project completion"
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