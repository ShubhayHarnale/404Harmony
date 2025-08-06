import Header from "@/components/header";

export default function News() {
  const newsArticles = [
    {
      title: "404Harmony Closes $50M Series A to Accelerate Longevity Innovation",
      date: "December 15, 2024",
      excerpt: "Leading venture capital firms join our mission to revolutionize the intersection of longevity and vitality, funding breakthrough research and startup development.",
      category: "Funding",
      readTime: "3 min read"
    },
    {
      title: "New Partnership with Stanford Longevity Center Advances Research",
      date: "November 28, 2024",
      excerpt: "Collaborative research initiative will focus on developing next-generation biomarkers for healthy aging and personalized longevity interventions.",
      category: "Research",
      readTime: "4 min read"
    },
    {
      title: "Portfolio Company VitalTech Achieves FDA Breakthrough Designation",
      date: "November 10, 2024",
      excerpt: "Revolutionary cellular regeneration therapy developed in our studio receives fast-track approval status, marking a major milestone for the longevity industry.",
      category: "Portfolio",
      readTime: "5 min read"
    },
    {
      title: "404Harmony Studio Launches Third Longevity Startup This Year",
      date: "October 22, 2024",
      excerpt: "NeuralAge emerges from our studio with groundbreaking AI-powered brain health optimization platform, securing $8M in seed funding.",
      category: "Studio",
      readTime: "3 min read"
    },
    {
      title: "CEO Sarah Chen Named to Forbes 40 Under 40 Healthcare List",
      date: "October 5, 2024",
      excerpt: "Recognition highlights her leadership in advancing longevity science and building the next generation of health optimization companies.",
      category: "Awards",
      readTime: "2 min read"
    },
    {
      title: "Global Longevity Summit 2024: Key Insights from Our Team",
      date: "September 18, 2024",
      excerpt: "Our experts shared breakthrough research findings and industry predictions at the world's largest gathering of longevity researchers and entrepreneurs.",
      category: "Events",
      readTime: "6 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Funding': 'bg-blue-100 text-blue-800',
      'Research': 'bg-purple-100 text-purple-800',
      'Portfolio': 'bg-[#3dab38]/10 text-[#3dab38]',
      'Studio': 'bg-orange-100 text-orange-800',
      'Awards': 'bg-yellow-100 text-yellow-800',
      'Events': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated on our latest developments, partnerships, and breakthroughs in longevity and vitality innovation.
            </p>
          </div>
          
          {/* News Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {newsArticles.map((article, index) => (
              <article key={index} className="group cursor-pointer">
                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 h-full">
                  <div className="p-8">
                    {/* Category and Date */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="font-heading text-xl font-bold text-gray-900 mb-4 group-hover:text-[#3dab38] transition-colors duration-300">
                      {article.title}
                    </h2>
                    
                    {/* Date */}
                    <p className="text-sm text-gray-500 mb-4">{article.date}</p>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 leading-relaxed mb-6">{article.excerpt}</p>
                    
                    {/* Read More */}
                    <div className="flex items-center text-[#3dab38] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Read More</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}