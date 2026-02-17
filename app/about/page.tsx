import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "About Us | ADMI AI Academy",
  description: "Learn about ADMI AI Academy - Africa's premier AI training institute for creative professionals, marketers, and business analysts.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#2D5F5D] to-[#1a4442] section-padding">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About ADMI AI Academy
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto">
              We're on a mission to make AI skills accessible to Africa's creative and business professionals, 
              empowering them to thrive in the AI-powered future.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    ADMI AI Academy was born from a simple observation: AI is transforming every industry, 
                    yet access to quality AI training in Africa remains limited.
                  </p>
                  <p>
                    As part of the Africa Digital Media Institute (ADMI) family, we've spent over a decade 
                    training Africa's top creative talent. Now, we're bringing that same commitment to 
                    excellence to AI education.
                  </p>
                  <p>
                    Our programmes are designed by industry practitioners who understand both the technology 
                    and the unique challenges and opportunities of the African market.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-ai-primary/10 to-ai-teal/10 rounded-xl border border-ai-primary/30 p-8 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-4xl font-bold text-ai-primary mb-2">500+</div>
                <div className="text-gray-600">Students Trained</div>
                <div className="mt-6 text-4xl font-bold text-ai-teal mb-2">95%</div>
                <div className="text-gray-600">Completion Rate</div>
              </div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-light p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To equip Africa's professionals with practical AI skills that drive career growth 
                  and business innovation.
                </p>
              </div>

              <div className="card-light p-8">
                <div className="text-4xl mb-4">👁️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  An Africa where every creative and business professional can harness AI to 
                  amplify their impact.
                </p>
              </div>

              <div className="card-light p-8">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, accessibility, practical focus, and a deep commitment to African 
                  success stories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading mb-12 text-center">
              What Makes Us Different
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-ai-primary flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Practical, Not Theoretical</h3>
                  <p className="text-gray-600">
                    Every lesson focuses on real-world applications. You'll build actual projects, 
                    not just learn concepts. By the end, you'll have a portfolio that demonstrates 
                    your skills to employers.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-ai-teal flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Industry-Relevant Tools</h3>
                  <p className="text-gray-600">
                    We focus on the AI tools that companies are actually using today - ChatGPT, Claude, 
                    Midjourney, Runway, and more. You'll learn the platforms that matter.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-ai-red flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className= "text-xl font-bold text-gray-900 mb-2">African Context</h3>
                  <p className="text-gray-600">
                    Our case studies, examples, and projects are rooted in African markets and challenges. 
                    You'll learn to apply AI in contexts that matter to your career.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-ai-primary flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ADMI Legacy</h3>
                  <p className="text-gray-600">
                    As part of ADMI, we bring over a decade of experience in creative education, 
                    industry connections, and a track record of launching successful careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading mb-6 text-center">
              Learn from Industry Experts
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our faculty are working professionals with years of experience in AI, creative technology, 
              marketing, and business intelligence. They don't just teach AI - they use it every day.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card-light p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-ai-primary to-ai-teal flex items-center justify-center text-white text-3xl">
                    👤
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Faculty {i}</h3>
                  <p className="text-ai-primary mb-3 text-sm">AI & Creative Tech Specialist</p>
                  <p className="text-gray-600 text-sm">
                    10+ years of experience in AI implementation and creative technology.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ADMI Connection */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-heading mb-4">
                Part of the ADMI Family
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ADMI AI Academy is a specialized division of the Africa Digital Media Institute, 
                Kenya's leading creative media training institution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-light p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About ADMI</h3>
                <p className="text-gray-600 mb-4">
                  Since 2013, ADMI has been training Africa's top creative talent in film, music production, 
                  animation, and digital media. Our alumni work at leading creative agencies, production houses, 
                  and media companies across the continent.
                </p>
                <a 
                  href="https://admi.africa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ai-primary hover:text-ai-primary-hover font-semibold"
                >
                  Learn more about ADMI
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="card-light p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why It Matters</h3>
                <p className="text-gray-600">
                  When you join ADMI AI Academy, you're joining a network of over 2,000 creative 
                  professionals across Africa. You'll have access to ADMI's industry connections, 
                  career support services, and alumni community - giving you opportunities beyond 
                  just learning AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-[#C1272D] to-[#8B1A24]">
          <div className="section-container max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-white/95 mb-8">
              Start your AI journey with Africa's premier AI training institute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/paths"
                className="btn btn-primary"
              >
                View Programmes
              </Link>
              <Link 
                href="/enquiry"
                className="btn btn-white-outline"
              >
                Contact Us
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
