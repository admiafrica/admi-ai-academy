import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { getPathBySlug, getAllSlugs } from "../../data/learning-paths";
import { generateCourseSchema, generateBreadcrumbSchema } from "../../utils/structured-data";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const path = getPathBySlug(params.slug);
  
  if (!path) {
    return {
      title: "Path Not Found | ADMI AI Academy",
    };
  }

  return {
    title: `${path.title} | ADMI AI Academy`,
    description: path.description,
  };
}

export default function PathDetailPage({ params }: { params: { slug: string } }) {
  const path = getPathBySlug(params.slug);

  if (!path) {
    notFound();
  }

  const courseSchema = generateCourseSchema(path);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://ai.admi.africa" },
    { name: "Learning Paths", url: "https://ai.admi.africa/paths" },
    { name: path.title, url: `https://ai.admi.africa/paths/${path.slug}` }
  ]);

  return (
    <>
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#C55A11] to-[#a04a0e] section-padding">
          <div className="section-container">
            <Link 
              href="/paths"
              className="inline-flex items-center gap-2 text-white hover:text-white/90 mb-8 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Paths
            </Link>

            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{path.title}</h1>
                <p className="text-xl text-white/95 font-semibold mb-4">{path.tagline}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white">
                <span className="text-white/80 text-sm">Duration: </span>
                <span className="font-semibold">{path.duration}</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white">
                <span className="text-white/80 text-sm">Level: </span>
                <span className="font-semibold">{path.level}</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white">
                <span className="text-white/80 text-sm">Next Intake: </span>
                <span className="font-semibold">{path.nextIntake}</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-white backdrop-blur-sm text-ai-red font-bold">
                {path.price}
              </div>
            </div>

            <p className="text-lg text-white/95 mb-8">{path.description}</p>

            <div className="flex gap-4">
              <Link 
                href="/enquiry"
                className="px-8 py-4 rounded-lg bg-white text-ai-primary font-semibold hover:bg-white/95 shadow-md transition-all"
              >
                Enrol Now
              </Link>
              <Link 
                href="/enquiry"
                className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading mb-8">Programme Curriculum</h2>
            <div className="space-y-6">
              {path.modules.map((module, idx) => (
                <div 
                  key={idx}
                  className="card-light-hover p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-ai-primary flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-ai-teal mb-1">{module.week}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start gap-2 text-gray-600">
                            <span className="text-ai-primary mt-1">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading mb-8">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {path.outcomes.map((outcome, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 card-light p-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-ai-teal flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading mb-8">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {path.tools.map((tool, idx) => (
                <div 
                  key={idx}
                  className="card-light p-4 text-center hover:border-ai-primary transition-colors"
                >
                  <div className="text-gray-900 font-semibold mb-1">{tool.name}</div>
                  <div className="text-xs text-gray-500">{tool.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading mb-8">Portfolio Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {path.projects.map((project, idx) => (
                <div 
                  key={idx}
                  className="card-light p-6"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">📁</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project}</h3>
                      <p className="text-gray-500 text-sm">Build a complete project to showcase in your portfolio</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <h2 className="section-heading mb-8">Perfect For</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {path.targetAudience.map((audience, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-ai-primary/10 to-ai-teal/10 rounded-lg border border-ai-primary/20 p-4 text-center"
                >
                  <span className="text-gray-900 font-semibold">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-[#C1272D] to-[#8B1A24]">
          <div className="section-container max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/95 mb-8">
              Next cohort starts {path.nextIntake}. Limited spaces available.
            </p>
            <Link 
              href="/enquiry"
              className="btn btn-white"
            >
              Enrol Now →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
