import Link from "next/link";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { learningPaths } from "../data/learning-paths";
import { generateFAQSchema } from "../utils/structured-data";

export const metadata = {
  title: "Learning Paths | ADMI AI Academy",
  description: "Explore our AI training programmes designed for creative professionals, marketers, and business analysts.",
};

export default function PathsPage() {
  const faqs = [
    {
      question: "Do I need prior AI experience?",
      answer: "No prior AI experience is required. Our learning paths are designed for beginners to intermediate learners. We'll start with the fundamentals and build up your skills progressively."
    },
    {
      question: "What is the class schedule like?",
      answer: "Classes are held twice a week in the evenings (6-9 PM) to accommodate working professionals. We also offer weekend options for some programmes. All sessions are recorded for review."
    },
    {
      question: "Are payment plans available?",
      answer: "Yes! We offer flexible payment plans to make training accessible. You can pay in installments over 3-6 months. Contact our admissions team to discuss options that work for you."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes! Upon successful completion, you'll receive an official certificate from ADMI AI Academy, recognized across Africa's creative and tech industries."
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
              Choose Your Learning Path
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto">
              Specialized AI training programmes designed for your role and career goals. 
              All paths include hands-on projects, expert instruction, and career support.
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
                    {/* Left Column - Main Info */}
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{path.title}</h2>
                          <p className="text-lg text-ai-primary font-semibold">{path.tagline}</p>
                        </div>
                        <div className="badge-teal whitespace-nowrap">
                          {path.duration}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">{path.description}</p>

                      {/* Key Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Level</div>
                          <div className="text-gray-900 font-semibold">{path.level}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Next Intake</div>
                          <div className="text-gray-900 font-semibold">{path.nextIntake}</div>
                        </div>
                      </div>

                      {/* Tools Preview */}
                      <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-2">Tools You'll Master:</div>
                        <div className="flex flex-wrap gap-2">
                          {path.tools.slice(0, 4).map((tool, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                            >
                              {tool.name}
                            </span>
                          ))}
                          {path.tools.length > 4 && (
                            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                              +{path.tools.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Link 
                          href={`/paths/${path.slug}`}
                          className="btn btn-primary btn-small"
                        >
                          View Full Details
                        </Link>
                        <Link 
                          href="/enquiry"
                          className="btn btn-secondary btn-small"
                        >
                          Enrol Now
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Price & CTA */}
                    <div className="md:w-1/3 bg-ai-light-bg p-8 border-l border-gray-200">
                      <div className="text-center mb-6">
                        <div className="text-sm text-gray-500 mb-2">Programme Fee</div>
                        <div className="text-4xl font-bold text-gray-900 mb-1">{path.price}</div>
                        <div className="text-sm text-gray-600">Flexible payment plans available</div>
                      </div>

                      <div className="space-y-4 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <span className="text-ai-primary mt-0.5">✓</span>
                          <span>Expert-led instruction</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-ai-primary mt-0.5">✓</span>
                          <span>Hands-on projects</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C55A11] mt-0.5">✓</span>
                          <span>Career support</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C55A11] mt-0.5">✓</span>
                          <span>ADMI certificate</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C55A11] mt-0.5">✓</span>
                          <span>Lifetime alumni network</span>
                        </div>
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
                    <span>Do I need prior AI experience?</span>
                    <span className="transform group-open:rotate-180 transition-transform text-[#C55A11]">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    No prior AI experience is required. Our learning paths are designed for beginners to intermediate learners. 
                    We'll start with the fundamentals and build up your skills progressively.
                  </p>
                </details>

                <details className="bg-white rounded-lg border border-gray-200 p-6 group hover:border-[#C55A11] transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between hover:text-[#C55A11] transition-colors">
                    <span>What is the class schedule like?</span>
                    <span className="transform group-open:rotate-180 transition-transform text-[#C55A11]">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    Classes are held twice a week in the evenings (6-9 PM) to accommodate working professionals. 
                    We also offer weekend options for some programmes. All sessions are recorded for review.
                  </p>
                </details>

                <details className="bg-white rounded-lg border border-gray-200 p-6 group hover:border-[#C55A11] transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between hover:text-[#C55A11] transition-colors">
                    <span>Are payment plans available?</span>
                    <span className="transform group-open:rotate-180 transition-transform text-[#C55A11]">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    Yes! We offer flexible payment plans to make training accessible. You can pay in installments over 3-6 months. 
                    Contact our admissions team to discuss options that work for you.
                  </p>
                </details>

                <details className="bg-white rounded-lg border border-gray-200 p-6 group hover:border-[#C55A11] transition-colors">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between hover:text-[#C55A11] transition-colors">
                    <span>Will I get a certificate?</span>
                    <span className="transform group-open:rotate-180 transition-transform text-[#C55A11]">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    Yes! Upon successful completion, you'll receive an official certificate from ADMI AI Academy, 
                    recognized across Africa's creative and tech industries.
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
