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

