import { useState, useEffect } from 'react';
import { Newspaper, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

const bloombergArticles = [
  { title: "How AI is Revolutionizing Corporate Finance", excerpt: "Discover the latest trends in how machine learning and artificial intelligence are automating complex financial models.", link: "https://www.bloomberg.com/markets" },
  { title: "Global Private Equity Activity Rebounds in Q3", excerpt: "Dealmaking is seeing a strong resurgence as interest rates stabilize and valuation gaps narrow between buyers and sellers.", link: "https://www.bloomberg.com/wealth" },
  { title: "Tech Giants Shift Focus to Dividend Yields", excerpt: "Mature technology companies are increasingly prioritizing shareholder returns through massive dividend and buyback programs.", link: "https://www.bloomberg.com/technology" },
  { title: "Central Banks Signal Potential Easing Ahead", excerpt: "Policymakers hint at a softer stance in the coming months as inflation metrics align closer to target ranges.", link: "https://www.bloomberg.com/economics" },
  { title: "The Next Era of Sustainable Investing", excerpt: "ESG investing evolves beyond exclusionary screens toward active engagement and transition financing.", link: "https://www.bloomberg.com/green" }
];

const reutersArticles = [
  { title: "Global Markets See Shift Amidst New Regulatory Frameworks", excerpt: "New compliance standards are forcing financial institutions to rethink their risk management strategies.", link: "https://www.reuters.com/markets/" },
  { title: "Oil Prices Fluctuate on Geopolitical Tensions", excerpt: "Energy markets face renewed volatility as global supply chain concerns persist despite increased production.", link: "https://www.reuters.com/business/energy/" },
  { title: "European Central Bank Holds Rates Steady", excerpt: "The ECB maintains its current monetary policy, awaiting further economic data before committing to rate cuts.", link: "https://www.reuters.com/markets/europe/" },
  { title: "Emerging Markets Attract Fresh Foreign Investment", excerpt: "Investors seek higher yields in developing economies as developed market growth forecasts are revised downward.", link: "https://www.reuters.com/markets/emerging/" },
  { title: "New Trade Deals Shape Global Supply Chains", excerpt: "Multinational corporations are accelerating 'friend-shoring' strategies to build resilience against future disruptions.", link: "https://www.reuters.com/business/" }
];

const cnbcArticles = [
  { title: "The Rise of ESG in Investment Advisory", excerpt: "Environmental, Social, and Governance criteria are becoming central to equity research and portfolio building.", link: "https://www.cnbc.com/esg-impact/" },
  { title: "Dow Reaches Historic Milestone on Tech Rally", excerpt: "Major indices hit record highs as mega-cap technology stocks continue their impressive multi-month run.", link: "https://www.cnbc.com/markets/" },
  { title: "Real Estate Market Shows Signs of Cooling", excerpt: "Housing data indicates a shift toward a buyer's market in several key metropolitan areas across the nation.", link: "https://www.cnbc.com/real-estate/" },
  { title: "Consumer Spending Remains Resilient", excerpt: "Retail sales surpass expectations, highlighting the continued strength of the global consumer despite inflation.", link: "https://www.cnbc.com/economy/" },
  { title: "Cryptocurrency Regulations Face New Scrutiny", excerpt: "Lawmakers propose comprehensive frameworks to address digital asset oversight and protect retail investors.", link: "https://www.cnbc.com/cryptocurrency/" }
];

export default function News() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    // Generate daily changing content based on the calendar date
    const todayStr = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Use day of the year to rotate news daily
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const dailyNews = [
      {
        id: 1,
        title: bloombergArticles[dayOfYear % bloombergArticles.length].title,
        category: "Markets",
        date: todayStr,
        image: "/Bloomberg.png",
        excerpt: bloombergArticles[dayOfYear % bloombergArticles.length].excerpt,
        link: bloombergArticles[dayOfYear % bloombergArticles.length].link
      },
      {
        id: 2,
        title: reutersArticles[dayOfYear % reutersArticles.length].title,
        category: "Economy",
        date: todayStr,
        image: "/Reuters.png",
        excerpt: reutersArticles[dayOfYear % reutersArticles.length].excerpt,
        link: reutersArticles[dayOfYear % reutersArticles.length].link
      },
      {
        id: 3,
        title: cnbcArticles[dayOfYear % cnbcArticles.length].title,
        category: "Insights",
        date: todayStr,
        image: "/CNBC.png",
        excerpt: cnbcArticles[dayOfYear % cnbcArticles.length].excerpt,
        link: cnbcArticles[dayOfYear % cnbcArticles.length].link
      }
    ];
    
    setNews(dailyNews);
    
    // Optional: Update at midnight if the user leaves the tab open
    const tomorrow = new Date(now);
    tomorrow.setHours(24, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const timer = setTimeout(() => {
      // Re-trigger effect at midnight
      setNews([...dailyNews]); 
    }, msUntilMidnight);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50" id="news">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm border border-gray-100">
              <Newspaper className="w-5 h-5 text-brand-blue" />
              <span className="text-sm font-medium tracking-wide uppercase text-brand-dark">Latest Updates</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark mb-4">News & Insights</h2>
            <p className="text-xl text-gray-600">
              Stay informed with automatically updating feeds on AI, finance, and global markets.
            </p>
          </div>
          <a href="https://www.cnbc.com/finance/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center text-brand-blue font-medium hover:text-blue-700 transition-colors">
            View all articles <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article 
              key={`${item.id}-${index}`} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-50 flex items-center justify-center p-6">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 group-hover:text-brand-blue transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                  {item.excerpt}
                </p>
                
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-blue font-medium hover:text-blue-700 transition-colors mt-auto"
                >
                  Read full story
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="https://www.cnbc.com/finance/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-blue font-medium hover:text-blue-700 transition-colors">
            View all articles <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
