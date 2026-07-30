import { useState, useEffect } from 'react';
import { Newspaper, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

const today = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

const MOCK_NEWS = [
  {
    id: 1,
    title: "How AI is Revolutionizing Corporate Finance",
    category: "Technology",
    date: today,
    image: "/CNBC.png",
    excerpt: "Discover the latest trends in how machine learning and artificial intelligence are automating complex financial models.",
    link: "https://www.cnbc.com/technology/"
  },
  {
    id: 2,
    title: "Global Markets See Shift Amidst New Regulatory Frameworks",
    category: "Markets",
    date: today,
    image: "/Reuters.png",
    excerpt: "New compliance standards are forcing financial institutions to rethink their risk management strategies.",
    link: "https://www.reuters.com/markets/"
  },
  {
    id: 3,
    title: "The Rise of ESG in Investment Advisory",
    category: "Insights",
    date: today,
    image: "/Bloomberg.png",
    excerpt: "Environmental, Social, and Governance criteria are becoming central to equity research and portfolio building.",
    link: "https://www.bloomberg.com/green"
  }
];

export default function News() {
  const [news, setNews] = useState(MOCK_NEWS);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://finance.yahoo.com/news/rss');
        const data = await response.json();
        
        if (data.status === 'ok') {
          const defaultImages = [
            'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=600'
          ];
          
          const fetchedNews = data.items.slice(0, 3).map((item: any, index: number) => ({
            id: index + 1,
            title: item.title,
            category: "Finance",
            date: today,
            image: defaultImages[index % defaultImages.length],
            excerpt: item.description?.replace(/<[^>]+>/g, '')?.substring(0, 120) + '...' || "Read more about this latest financial market update.",
            link: item.link
          }));
          setNews(fetchedNews);
        }
      } catch (error) {
        // Silently fallback to mock data on fetch failure
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
    
    // Periodically update every 15 minutes to avoid hitting API rate limits too hard
    const interval = setInterval(fetchNews, 15 * 60 * 1000);
    return () => clearInterval(interval);
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
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-dark text-xs font-bold tracking-wider uppercase rounded-full">
                    {item.category}
                  </span>
                </div>
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
