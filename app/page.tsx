import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { learningPaths } from "./data/learning-paths";
import { generateOrganizationSchema } from "./utils/structured-data";

export default function Home() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section - Full Cover Image with Overlay */}
        <section className="relative w-full overflow-hidden section-padding min-h-[600px] lg:min-h-[700px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-image.png"
              alt="Students working with AI technology"
              fill
              className="object-cover"
              priority
            />
            {/* Left-side Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 via-25% to-transparent to-50%"></div>
          </div>

          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-6">
                🚀 Next Cohort Starts May 2026
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Build with AI.
                <br />
                Create the Future.
              </h1>
              
              <p className="text-lg md:text-xl text-white/95 mb-8">
                Master AI tools and technologies at Africa's leading creative media institute. 
                Transform your career with practical, industry-focused AI training.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/paths"
                  className="btn btn-primary"
                >
                  Explore Learning Paths
                </Link>
                <Link 
                  href="/enquiry"
                  className="btn btn-white-outline"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full bg-white section-padding py-16">
          <div className="section-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C55A11] mb-2">500+</div>
                <div className="text-sm text-gray-600 font-medium">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#2D5F5D] mb-2">95%</div>
                <div className="text-sm text-gray-600 font-medium">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#8B1A1F] mb-2">20+</div>
                <div className="text-sm text-gray-600 font-medium">AI Tools Covered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-[#C55A11] mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">Industry Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies Showcase */}
        <section className="w-full bg-gray-50 section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                Master the <span className="text-ai-primary">Latest AI Tools</span>
              </h2>
              <p className="section-subheading">
                Get hands-on experience with industry-leading AI platforms and technologies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'ChatGPT', icon: '🤖' },
                { name: 'Claude', icon: '💬' },
                { name: 'Midjourney', icon: '🎨' },
                { name: 'Runway', icon: '🎬' },
                { name: 'ElevenLabs', icon: '🎙️' },
                { name: 'Synthesia', icon: '🎥' },
                { name: 'Copy.ai', icon: '✍️' },
                { name: 'Jasper', icon: '📝' },
                { name: 'DALL-E', icon: '🖼️' },
                { name: 'Stable Diffusion', icon: '🎭' },
                { name: 'Adobe Firefly', icon: '🔥' },
                { name: 'Gamma', icon: '📊' }
              ].map((tool) => (
                <div key={tool.name} className="card-light p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <div className="text-sm font-semibold text-gray-700">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Paths Preview */}
        <section className="w-full bg-white section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                Choose Your <span className="text-ai-primary">Learning Path</span>
              </h2>
              <p className="section-subheading">
                Specialized programmes designed for your role and career goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {learningPaths.map((path) => (
                <Link 
                  key={path.id}
                  href={`/paths/${path.slug}`}
                  className="group card-light-hover p-8 relative"
                >
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-ai-teal/10 text-ai-teal text-sm font-semibold">
                    {path.duration}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6 group-hover:text-ai-primary transition-colors">
                    {path.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{path.tagline}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <span className="px-2.5 py-1 rounded-full bg-gray-100">{path.level}</span>
                    <span>•</span>
                    <span className="font-semibold text-ai-primary">{path.price}</span>
                  </div>
                  
                  <div className="flex items-center text-ai-primary font-semibold group-hover:gap-2 transition-all">
                    Learn More 
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Learning Journey */}
        <section className="w-full bg-white section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                Your <span className="text-ai-primary">Learning Journey</span>
              </h2>
              <p className="section-subheading">
                From enrollment to career transformation in 4 simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C55A11] text-white flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Choose Your Path</h3>
                <p className="text-sm text-gray-600">
                  Select the programme that matches your career goals and schedule
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#2D5F5D] text-white flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Learn & Practice</h3>
                <p className="text-sm text-gray-600">
                  Hands-on training with expert instructors and real-world projects
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8B1A1F] text-white flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Build Portfolio</h3>
                <p className="text-sm text-gray-600">
                  Create impressive projects that showcase your AI skills to employers
                </p>
              </div>

              <div className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#C55A11] text-white flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Launch Career</h3>
                <p className="text-sm text-gray-600">
                  Get certified and access our network of hiring partners
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-gray-50 section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                What Our <span className="text-ai-primary">Students Say</span>
              </h2>
              <p className="section-subheading">
                Real stories from graduates who transformed their careers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-light p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#C55A11] text-white flex items-center justify-center font-bold">
                    AM
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Aisha Mwangi</div>
                    <div className="text-sm text-gray-600">Marketing Manager</div>
                  </div>
                </div>
                <div className="text-yellow-500 mb-3">★★★★★</div>
                <p className="text-gray-700 italic leading-relaxed">
                  "The AI for Marketing programme completely transformed how I work. I've automated 60% of my content creation and tripled my productivity."
                </p>
              </div>

              <div className="card-light p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2D5F5D] text-white flex items-center justify-center font-bold">
                    JO
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">James Ochieng</div>
                    <div className="text-sm text-gray-600">Graphic Designer</div>
                  </div>
                </div>
                <div className="text-yellow-500 mb-3">★★★★★</div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Best investment in my career. The instructors are world-class and the practical approach made learning easy. Now offering AI design services."
                </p>
              </div>

              <div className="card-light p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#8B1A1F] text-white flex items-center justify-center font-bold">
                    SK
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Sarah Kimani</div>
                    <div className="text-sm text-gray-600">Business Analyst</div>
                  </div>
                </div>
                <div className="text-yellow-500 mb-3">★★★★★</div>
                <p className="text-gray-700 italic leading-relaxed">
                  "The BI programme gave me skills that made me invaluable to my company. Got a promotion within 3 months of completing the course!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Instructors */}
        <section className="w-full bg-white section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                Learn from <span className="text-ai-primary">Industry Experts</span>
              </h2>
              <p className="section-subheading">
                Our instructors are practicing professionals with real-world AI experience
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C55A11] to-[#2D5F5D] flex items-center justify-center text-white text-3xl font-bold">
                  DM
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Dr. David Maina</h3>
                <p className="text-sm text-gray-600 mb-2">AI Strategy Lead</p>
                <p className="text-xs text-gray-500">15+ years in AI & Machine Learning</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#2D5F5D] to-[#8B1A1F] flex items-center justify-center text-white text-3xl font-bold">
                  GW
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Grace Wanjiku</h3>
                <p className="text-sm text-gray-600 mb-2">Creative AI Director</p>
                <p className="text-xs text-gray-500">Former Adobe, Specializes in AI Design</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8B1A1F] to-[#C55A11] flex items-center justify-center text-white text-3xl font-bold">
                  MN
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Michael Njoroge</h3>
                <p className="text-sm text-gray-600 mb-2">Marketing AI Expert</p>
                <p className="text-xs text-gray-500">Built AI systems for 50+ brands</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C55A11] to-[#2D5F5D] flex items-center justify-center text-white text-3xl font-bold">
                  PA
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Prof. Peter Amolo</h3>
                <p className="text-sm text-gray-600 mb-2">Data Science Lead</p>
                <p className="text-xs text-gray-500">PhD in AI, 20+ years teaching</p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Outcomes */}
        <section className="w-full bg-gray-50 section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                Real <span className="text-ai-primary">Career Impact</span>
              </h2>
              <p className="section-subheading">
                Our graduates achieve measurable career growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-light p-8 text-center">
                <div className="text-5xl font-bold text-[#C55A11] mb-3">40%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Average Salary Increase</div>
                <p className="text-sm text-gray-600">
                  Graduates report significant income growth within 6 months
                </p>
              </div>

              <div className="card-light p-8 text-center">
                <div className="text-5xl font-bold text-[#2D5F5D] mb-3">85%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Career Advancement</div>
                <p className="text-sm text-gray-600">
                  Landed promotions, new roles, or started successful businesses
                </p>
              </div>

              <div className="card-light p-8 text-center">
                <div className="text-5xl font-bold text-[#8B1A1F] mb-3">3 Months</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Average Job Placement</div>
                <p className="text-sm text-gray-600">
                  Most graduates secure AI-enhanced roles within 90 days
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="w-full bg-white section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                Trusted by <span className="text-ai-primary">Leading Organizations</span>
              </h2>
              <p className="section-subheading">
                Our graduates work at top companies across Africa
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
              {[
                'Safaricom',
                'KCB Bank',
                'Equity Bank',
                'Nation Media',
                'Jumia',
                'M-KOPA',
                'Twiga Foods',
                'Flutterwave',
                'iHub',
                'Andela'
              ].map((partner) => (
                <div key={partner} className="card-light p-6 text-center">
                  <div className="font-semibold text-gray-700">{partner}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full bg-white section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                Why Choose <span className="text-ai-primary">ADMI AI Academy</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-light p-6">
                <div className="w-14 h-14 mb-4 rounded-lg bg-ai-primary/10 flex items-center justify-center text-3xl">
                  💼
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Practical & Industry-Focused</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn by doing with real-world projects and hands-on training that employers value
                </p>
              </div>

              <div className="card-light p-6">
                <div className="w-14 h-14 mb-4 rounded-lg bg-ai-teal/10 flex items-center justify-center text-3xl">
                  👥
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Faculty</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn from industry practitioners with years of experience in AI and creative tech
                </p>
              </div>

              <div className="card-light p-6">
                <div className="w-14 h-14 mb-4 rounded-lg bg-ai-red/10 flex items-center justify-center text-3xl">
                  🎓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ADMI Credentials</h3>
                <p className="text-gray-600 leading-relaxed">
                  Earn a certificate from Africa's most respected creative media institution
                </p>
              </div>

              <div className="card-light p-6">
                <div className="w-14 h-14 mb-4 rounded-lg bg-ai-primary/10 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get help with portfolio development, job placement, and career advancement
                </p>
              </div>

              <div className="card-light p-6">
                <div className="w-14 h-14 mb-4 rounded-lg bg-ai-teal/10 flex items-center justify-center text-3xl">
                  🔧
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Latest AI Tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access to cutting-edge AI platforms and tools used by leading companies
                </p>
              </div>

              <div className="card-light p-6">
                <div className="w-14 h-14 mb-4 rounded-lg bg-ai-red/10 flex items-center justify-center text-3xl">
                  🌍
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">African Context</h3>
                <p className="text-gray-600 leading-relaxed">
                  Training tailored to African markets, challenges, and opportunities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Cohort Calendar */}
        <section className="w-full bg-white section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                <span className="text-ai-primary">Upcoming Cohorts</span>
              </h2>
              <p className="section-subheading">
                Secure your spot in our next intake - limited spaces available
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card-light p-8 border-l-4 border-[#C55A11]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm font-semibold text-[#C55A11] mb-1">May 2026 Cohort</div>
                      <div className="text-2xl font-bold text-gray-900">Intake Opening</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      Open Now
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div>📅 Start Date: May 5, 2026</div>
                    <div>⏰ Duration: 8-12 weeks</div>
                    <div>👥 Spaces: 30 per programme</div>
                    <div>🎯 Early Bird: Ends April 1</div>
                  </div>
                  <Link href="/enquiry" className="btn btn-primary w-full">
                    Apply Now
                  </Link>
                </div>

                <div className="card-light p-8 border-l-4 border-gray-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-500 mb-1">September 2026 Cohort</div>
                      <div className="text-2xl font-bold text-gray-900">Next Intake</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                      Coming Soon
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div>📅 Start Date: September 1, 2026</div>
                    <div>⏰ Duration: 8-12 weeks</div>
                    <div>👥 Spaces: 30 per programme</div>
                    <div>🎯 Priority List: Open</div>
                  </div>
                  <Link href="/enquiry" className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 w-full">
                    Join Waitlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-gray-50 section-padding">
          <div className="section-container">
            <div className="mb-12 max-w-3xl mx-auto text-center">
              <h2 className="section-heading mb-4">
                Frequently Asked <span className="text-ai-primary">Questions</span>
              </h2>
              <p className="section-subheading">
                Everything you need to know about our programmes
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <details className="card-light p-6 cursor-pointer group">
                <summary className="font-bold text-gray-900 text-lg list-none flex justify-between items-center">
                  Do I need prior AI experience to enroll?
                  <span className="text-[#C55A11] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  No prior AI experience required! Our programmes are designed for professionals looking to integrate AI into their current roles. We start with fundamentals and progress to advanced applications.
                </p>
              </details>

              <details className="card-light p-6 cursor-pointer group">
                <summary className="font-bold text-gray-900 text-lg list-none flex justify-between items-center">
                  What are the programme schedules like?
                  <span className="text-[#C55A11] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  We offer flexible learning options including evening classes and weekend intensives. Most programmes run 8-12 weeks with 6-10 hours per week commitment, designed for working professionals.
                </p>
              </details>

              <details className="card-light p-6 cursor-pointer group">
                <summary className="font-bold text-gray-900 text-lg list-none flex justify-between items-center">
                  What kind of support do I get after completing?
                  <span className="text-[#C55A11] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Lifetime access to course materials, alumni network, quarterly masterclasses, job placement assistance, and ongoing career support from our team.
                </p>
              </details>

              <details className="card-light p-6 cursor-pointer group">
                <summary className="font-bold text-gray-900 text-lg list-none flex justify-between items-center">
                  Are payment plans available?
                  <span className="text-[#C55A11] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Yes! We offer flexible payment plans, early bird discounts, and corporate sponsorship options. Contact our admissions team to discuss the best option for you.
                </p>
              </details>

              <details className="card-light p-6 cursor-pointer group">
                <summary className="font-bold text-gray-900 text-lg list-none flex justify-between items-center">
                  Will I receive a certificate?
                  <span className="text-[#C55A11] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Yes, upon successful completion you'll receive an ADMI AI Academy Certificate recognized by employers across Africa. You'll also build a portfolio of practical AI projects.
                </p>
              </details>

              <details className="card-light p-6 cursor-pointer group">
                <summary className="font-bold text-gray-900 text-lg list-none flex justify-between items-center">
                  Can I attend classes remotely?
                  <span className="text-[#C55A11] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Yes! We offer both in-person and live online options. All sessions are recorded for flexible viewing, and you'll have full access to our online learning platform.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Alumni Community */}
        <section className="w-full bg-white section-padding">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="section-heading mb-6">
                    Join Our <span className="text-ai-primary">Alumni Network</span>
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    When you graduate, you become part of a thriving community of AI practitioners across Africa. Connect, collaborate, and grow together.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#C55A11]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        🤝
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Networking Events</div>
                        <div className="text-sm text-gray-600">Monthly meetups, workshops, and conferences</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#2D5F5D]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        💼
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Job Opportunities</div>
                        <div className="text-sm text-gray-600">Exclusive access to our hiring partner network</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#8B1A1F]/10 flex items-center justify-center flex-shrink-0 mt-1">
                        📚
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">Continuous Learning</div>
                        <div className="text-sm text-gray-600">Free masterclasses and updates on new AI tools</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="card-light p-6 text-center">
                    <div className="text-3xl font-bold text-[#C55A11] mb-2">500+</div>
                    <div className="text-sm text-gray-600">Active Alumni</div>
                  </div>
                  <div className="card-light p-6 text-center">
                    <div className="text-3xl font-bold text-[#2D5F5D] mb-2">12+</div>
                    <div className="text-sm text-gray-600">Events/Year</div>
                  </div>
                  <div className="card-light p-6 text-center">
                    <div className="text-3xl font-bold text-[#8B1A1F] mb-2">30+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="card-light p-6 text-center">
                    <div className="text-3xl font-bold text-[#C55A11] mb-2">100%</div>
                    <div className="text-sm text-gray-600">Free Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-br from-[#8B1A1F] to-[#6d1419] section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-xl text-white/95 mb-8 leading-relaxed">
                Join the next cohort starting May 2026. Limited spaces available.
              </p>
              <Link 
                href="/enquiry"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-ai-red font-bold text-base hover:bg-white/95 transition-all duration-200 shadow-lg"
              >
                Enrol Now →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

