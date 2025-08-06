import Header from "@/components/header";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=400&h=400&fit=crop&crop=face",
      bio: "Sarah brings over 15 years of experience in healthcare innovation and venture capital. Previously a Partner at Andreessen Horowitz, she led investments in breakthrough longevity technologies. Sarah holds an MD from Harvard Medical School and an MBA from Stanford Graduate School of Business."
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Co-Founder & Chief Scientific Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Rodriguez is a renowned researcher in cellular regeneration and aging biology. Former Director of Longevity Research at the National Institute on Aging, he has published over 100 peer-reviewed papers and holds 25 patents in anti-aging therapeutics. PhD in Molecular Biology from MIT."
    },
    {
      name: "Amanda Foster",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Amanda previously served as VP of Operations at three successful healthcare startups, including two unicorn exits. She specializes in scaling operations for high-growth companies in regulated industries. MBA from Wharton, BS in Bioengineering from UC Berkeley."
    },
    {
      name: "James Kim",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "James is a serial entrepreneur and technology leader with expertise in AI-driven health platforms. Previously CTO at two healthcare unicorns, he has led engineering teams of 200+ developers. Former Google engineer with MS in Computer Science from Stanford."
    },
    {
      name: "Dr. Lisa Park",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Park is a board-certified physician specializing in preventive medicine and longevity. She has spent 20 years in clinical practice and research, focusing on biomarkers of aging and personalized health optimization. MD from Johns Hopkins, fellowship in Geriatric Medicine."
    },
    {
      name: "Robert Thompson",
      role: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "Robert brings extensive financial leadership experience from both Fortune 500 companies and high-growth startups. Former CFO at two successful biotech companies through IPO. CPA with MBA in Finance from NYU Stern School of Business."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation at the intersection of longevity and vitality.
            </p>
          </div>
          
          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-lg font-semibold text-[#3dab38] mb-6">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}