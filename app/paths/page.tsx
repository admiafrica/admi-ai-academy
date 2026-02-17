import Link from "next/link";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { learningPaths } from "../data/learning-paths";
import { generateFAQSchema } from "../utils/structured-data";

export const metadata = {
  title: "Career Paths | ADMI AI Academy",
  description: "Explore career path programs designed to launch you into AI roles like Creative Specialist, Marketing Analyst, or Business Analyst.",
};

export default function PathsPage() {
  const faqs = [
    {
      question: "How long does it take to become career-ready?",
      answer: "Our career paths range from 10-12 weeks of intensive training. Most graduates start applying for roles immediately after completion, with many securing positions within 3 months. You'll graduate with a portfolio of real projects and industry-recognized certification."
    },
    {
      question: "Do I need prior AI experience to start?",
      answer: "No prior AI experience required. Our career paths are designed to take you from beginner to job-ready. We start with fundamentals and build practical skills progressively, ensuring you're confident applying for entry to mid-level AI roles."
    },
    {
      question: "What kind of jobs can I get after completing a career path?",
      answer: "Graduates work as AI Creative Specialists, Marketing Analysts, Business Analysts, Content Creators, Data Analysts, and more. We provide career support including resume reviews, portfolio development, and connections to hiring partners across Africa's growing AI job market."
    },
    {
      question: "Are payment plans available?",
      answer: "Yes! We offer flexible payment plans over 3-6 months to make career transformation accessible. Contact our admissions team to discuss options that work for your budget."
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#C55A11] to-[#8B1A1F] section-padding">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose Your Career Path
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto">
              Structured programs that prepare you for specific AI career roles.
            </p>
          </div>
        </section>

        {/* Paths Grid */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="space-y-8">
              {learningPaths.map((path) => (
                <div 
                  key={path.id}
                  className="card-light-hover overflow-hidden"
                >
                  <div className="md:flex">
                    {/* Left Column - Career Info */}
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm font-semibold text-ai-teal mb-2">CAREER PATH</div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{path.title}</h2>
                          <p className="text-lg text-gray-600">{path.tagline}</p>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">{path.description}</p>

                      {/* Career Roles */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-900 mb-3">Job Titles You Can Pursue:</div>
                        <div className="flex flex-wrap gap-2">
                          {path.targetAudience.slice(0, 4).map((role, idx) => (
                            <span 
                              key={idx}
                              className="px-4 py-2 rounded-lg bg-ai-primary/10 border border-ai-primary/20 text-gray-900 font-medium text-sm"
                            >
                              {role}
                            </span>
                          ))}
                          {path.targetAudience.length > 4 && (
                            <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm">
                              +{path.targetAudience.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Key Skills */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-900 mb-3">Key Career Skills:</div>
                        <div className="grid grid-cols-2 gap-2">
                          {path.outcomes.slice(0, 4).map((skill, idx) => (
                            <div 
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <span className="text-ai-primary mt-0.5 flex-shrink-0">✓</span>
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link 
                          href={`/paths/${path.slug}`}
                          className="btn btn-primary btn-small"
                        >
                          Explore Career Path
                        </Link>
                        <Link 
                          href="/enquiry"
                          className="btn btn-secondary btn-small"
                        >
                          Get Career Advice
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Career Outcomes */}
                    <div className="md:w-1/3 bg-gradient-to-br from-ai-teal/5 to-ai-primary/5 p-8 border-l border-gray-200">
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-900 mb-4">Career Outlook</div>
                        
                        <div className="space-y-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="text-2xl font-bold text-ai-primary mb-1">{path.duration}</div>
                            <div className="text-xs text-gray-600">Time to Career-Ready</div>
                          </div>

                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="text-2xl font-bold text-ai-teal mb-1">85%+</div>
                            <div className="text-xs text-gray-600">Career Advancement Rate</div>
                          </div>

                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <div className="text-2xl font-bold text-gray-900 mb-1">High</div>
                            <div className="text-xs text-gray-600">Market Demand</div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-300">
                        <div className="text-xs text-gray-600 mb-2">Programme Investment</div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">{path.price}</div>
                        <div className="text-xs text-gray-600">Flexible payment plans</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-20 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="bg-white rounded-lg border border-gray-200 p-6 group hover:border-[#C55A11] transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between hover:text-[#C55A11] transition-colors">
                    <span>How long does it take to become career-ready?</span>
                    <span className="transform group-open:rotate-180 transition-transform text-[#C55A11]">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    Our career paths range from 10-12 weeks of intensive training. Most graduates start applying for roles immediately after completion, with many securing positions within 3 months. You'll graduate with a portfolio of real projects and industry-recognized certification.
                  </p>
                </details>

                <details className="bg-white rounded-lg border border-gray-200 p-6 group hover:border-[#C55A11] transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between hover:text-[#C55A11] transition-colors">
                    <span>Do I need prior AI experience to start?</span>
                    <span className="transform group-open:rotate-180 transition-transform text-[#C55A11]">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    No prior AI experience required. Our career paths are designed to take you from beginner to job-ready. We start with fundamentals and build practical skills progressively, ensuring you're confident applying for entry to mid-level AI roles.
                  </p>
                </details>

                <details className="bg-white rounded-lg border border-gray-200 p-6 group hover:border-[#C55A11] transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between hover:text-[#C55A11] transition-colors">
                    <span>What kind of jobs can I get after completing a career path?</span>
                    <span className="transform group-open:rotate-180 transition-transform text-[#C55A11]">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    Graduates work as AI Creative Specialists, Marketing Analysts, Business Analysts, Content Creators, Data Analysts, and more. We provide career support including resume reviews, portfolio development, and connections to hiring partners across Africa's growing AI job market.
                  </p>
                </details>

                <details className="bg-white rounded-lg border border-gray-200 p-6 group hover:border-[#C55A11] transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between hover:text-[#C55A11] transition-colors">
                    <span>Are payment plans available?</span>
                    <span className="transform group-open:rotate-180 transition-transform text-[#C55A11]">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    Yes! We offer flexible payment plans over 3-6 months to make career transformation accessible. Contact our admissions team to discuss options that work for your budget.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
