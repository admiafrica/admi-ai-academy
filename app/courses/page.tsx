import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Courses | ADMI AI Academy",
  description: "Browse our comprehensive AI courses across work, education, creative, business, and governance domains.",
};

export default function CoursesPage() {
  const courses = [
    // AI for Work
    {
      id: "ai-productivity",
      title: "AI for Productivity & Workflow Automation",
      category: "AI for Work",
      level: "Beginner",
      duration: "4 weeks",
      price: "KES 25,000",
      description: "Master AI tools to automate repetitive tasks, manage your time better, and boost daily productivity across your workflow.",
      topics: ["ChatGPT for work tasks", "Email automation", "Meeting summaries", "Task management AI tools"]
    },
    {
      id: "ai-data-analysis",
      title: "AI-Powered Data Analysis",
      category: "AI for Work",
      level: "Intermediate",
      duration: "6 weeks",
      price: "KES 35,000",
      description: "Learn to analyze data, create visualizations, and extract insights using AI-powered tools without coding.",
      topics: ["Data cleaning with AI", "Visualization tools", "Trend analysis", "Reporting automation"]
    },
    {
      id: "ai-excel-sheets",
      title: "AI for Excel & Spreadsheets",
      category: "AI for Work",
      level: "Beginner",
      duration: "3 weeks",
      price: "KES 20,000",
      description: "Supercharge your spreadsheet work with AI formulas, data analysis, and automation techniques.",
      topics: ["Excel AI features", "Google Sheets AI", "Formula generation", "Data manipulation"]
    },
    
    // AI for Education
    {
      id: "ai-classroom",
      title: "AI in the Classroom",
      category: "AI for Education",
      level: "Beginner",
      duration: "5 weeks",
      price: "KES 30,000",
      description: "Discover practical ways to integrate AI tools into your teaching practice to personalize learning and save time.",
      topics: ["Lesson planning with AI", "Personalized learning paths", "Assessment tools", "Classroom management"]
    },
    {
      id: "ai-content-educators",
      title: "AI Content Creation for Educators",
      category: "AI for Education",
      level: "Beginner",
      duration: "4 weeks",
      price: "KES 25,000",
      description: "Create engaging educational content, quizzes, and learning materials faster using AI tools.",
      topics: ["Educational content generation", "Quiz creation", "Visual aids", "Interactive materials"]
    },
    {
      id: "ai-student-analytics",
      title: "AI for Student Analytics & Insights",
      category: "AI for Education",
      level: "Intermediate",
      duration: "5 weeks",
      price: "KES 32,000",
      description: "Use AI to track student progress, identify learning gaps, and provide data-driven interventions.",
      topics: ["Learning analytics", "Performance tracking", "Early intervention", "Progress reporting"]
    },
    
    // AI for Creatives
    {
      id: "ai-image-generation",
      title: "AI Image Generation & Design",
      category: "AI for Creatives",
      level: "Beginner",
      duration: "5 weeks",
      price: "KES 35,000",
      description: "Master Midjourney, DALL-E, and Stable Diffusion to create stunning visuals and designs.",
      topics: ["Midjourney mastery", "DALL-E techniques", "Prompt engineering", "Style consistency"]
    },
    {
      id: "ai-video-production",
      title: "AI Video Production & Editing",
      category: "AI for Creatives",
      level: "Intermediate",
      duration: "6 weeks",
      price: "KES 40,000",
      description: "Create and edit professional videos using AI tools like Runway, Pika Labs, and Descript.",
      topics: ["AI video generation", "Automated editing", "VFX with AI", "Text-to-video"]
    },
    {
      id: "ai-content-creation",
      title: "AI Content Creation at Scale",
      category: "AI for Creatives",
      level: "Intermediate",
      duration: "5 weeks",
      price: "KES 32,000",
      description: "Learn to produce high-quality written, visual, and audio content efficiently using AI workflows.",
      topics: ["Content strategy", "Multi-format creation", "Brand consistency", "Content calendars"]
    },
    {
      id: "ai-voice-audio",
      title: "AI Voice & Audio Production",
      category: "AI for Creatives",
      level: "Beginner",
      duration: "4 weeks",
      price: "KES 28,000",
      description: "Create professional voice-overs, podcasts, and music using ElevenLabs, Suno, and other AI tools.",
      topics: ["Voice cloning", "Audio editing", "Music generation", "Podcast production"]
    },
    
    // AI for Business
    {
      id: "ai-business-strategy",
      title: "AI Strategy for Business Leaders",
      category: "AI for Business",
      level: "Intermediate",
      duration: "6 weeks",
      price: "KES 45,000",
      description: "Develop and implement AI strategies to drive business growth and operational efficiency.",
      topics: ["AI transformation roadmap", "Use case identification", "ROI measurement", "Team enablement"]
    },
    {
      id: "ai-customer-intelligence",
      title: "AI for Customer Intelligence",
      category: "AI for Business",
      level: "Intermediate",
      duration: "5 weeks",
      price: "KES 38,000",
      description: "Use AI to understand customer behavior, predict churn, and personalize experiences.",
      topics: ["Customer segmentation", "Churn prediction", "Personalization engines", "Sentiment analysis"]
    },
    {
      id: "ai-business-automation",
      title: "Business Process Automation with AI",
      category: "AI for Business",
      level: "Intermediate",
      duration: "6 weeks",
      price: "KES 40,000",
      description: "Automate business workflows, reduce manual work, and improve efficiency with AI tools.",
      topics: ["Process mapping", "Automation tools", "Workflow design", "Integration strategies"]
    },
    {
      id: "ai-forecasting",
      title: "AI for Forecasting & Predictive Analytics",
      category: "AI for Business",
      level: "Advanced",
      duration: "7 weeks",
      price: "KES 48,000",
      description: "Build predictive models for sales forecasting, demand planning, and business intelligence.",
      topics: ["Time series analysis", "Demand forecasting", "Risk prediction", "Scenario planning"]
    },
    
    // AI for Governance
    {
      id: "ai-ethics-policy",
      title: "AI Ethics & Policy Development",
      category: "AI for Governance",
      level: "Intermediate",
      duration: "5 weeks",
      price: "KES 35,000",
      description: "Understand AI ethics, develop policies, and ensure responsible AI implementation in organizations.",
      topics: ["AI ethics frameworks", "Policy development", "Bias mitigation", "Regulatory compliance"]
    },
    {
      id: "ai-public-services",
      title: "AI for Public Service Innovation",
      category: "AI for Governance",
      level: "Intermediate",
      duration: "6 weeks",
      price: "KES 38,000",
      description: "Apply AI to improve public services, citizen engagement, and government operations.",
      topics: ["Service delivery", "Citizen engagement", "Data-driven governance", "Smart cities"]
    },
    {
      id: "ai-civic-tech",
      title: "AI in Civic Technology",
      category: "AI for Governance",
      level: "Beginner",
      duration: "4 weeks",
      price: "KES 28,000",
      description: "Explore how AI can enhance civic participation, transparency, and community development.",
      topics: ["Digital democracy", "Transparency tools", "Community platforms", "Impact measurement"]
    }
  ];

  const categories = [
    { id: "work", name: "AI for Work", icon: "💼" },
    { id: "education", name: "AI for Education", icon: "📚" },
    { id: "creatives", name: "AI for Creatives", icon: "🎨" },
    { id: "business", name: "AI for Business", icon: "📈" },
    { id: "governance", name: "AI for Governance", icon: "🏛️" }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#C55A11] to-[#8B1A1F] section-padding">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Courses
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto">
              Expert-led AI training across 5 specialized domains. Practical skills you can apply immediately.
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="w-full bg-gray-50 py-12 border-b border-gray-200">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-ai-primary mb-2">500+</div>
                <div className="text-gray-600 text-sm">Professionals Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ai-primary mb-2">85%</div>
                <div className="text-gray-600 text-sm">Career Advancement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ai-primary mb-2">30+</div>
                <div className="text-gray-600 text-sm">Expert Instructors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ai-primary mb-2">15+</div>
                <div className="text-gray-600 text-sm">Portfolio Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Filters */}
        <section className="section-padding bg-white border-b border-gray-200">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="section-heading mb-4">
                Browse Our <span className="text-ai-primary">Course Catalog</span>
              </h2>
              <p className="section-subheading">
                {courses.length} courses across 5 specialized domains. All include hands-on projects, expert instruction, and ADMI certification.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-ai-primary hover:text-white text-gray-700 font-medium transition-all duration-200"
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Course Listing by Category */}
        <section className="section-padding bg-white">
          <div className="section-container">
            {categories.map((category) => {
              const categoryCourses = courses.filter(course => course.category === category.name);
              
              return (
                <div key={category.id} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-ai-primary/20">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
                    <span className="badge-teal ml-auto">{categoryCourses.length} Courses</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {categoryCourses.map((course) => (
                      <div 
                        key={course.id}
                        className="card-light-hover p-6"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="badge-teal text-xs">{course.level}</div>
                          <div className="text-2xl font-bold text-ai-primary">{course.price}</div>
                        </div>

                        <h4 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h4>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                        <div className="mb-4 pb-4 border-b border-gray-200">
                          <div className="text-xs font-semibold text-gray-500 mb-2">Key Topics:</div>
                          <div className="flex flex-wrap gap-2">
                            {course.topics.slice(0, 3).map((topic, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700"
                              >
                                {topic}
                              </span>
                            ))}
                            {course.topics.length > 3 && (
                              <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
                                +{course.topics.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>⏱️ {course.duration}</span>
                          <span>🎓 Certificate included</span>
                        </div>

                        <Link 
                          href="/enquiry"
                          className="btn btn-primary btn-small w-full"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding bg-gray-50">
          <div className="section-container">
            <h2 className="section-heading mb-12 text-center">
              What's Included in Every Course
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-light p-6 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Instruction</h3>
                <p className="text-gray-600">
                  Learn from practitioners actively working with AI in their fields
                </p>
              </div>

              <div className="card-light p-6 text-center">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On Projects</h3>
                <p className="text-gray-600">
                  Build real portfolio projects that demonstrate your skills
                </p>
              </div>

              <div className="card-light p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">ADMI Certificate</h3>
                <p className="text-gray-600">
                  Recognized certification upon successful completion
                </p>
              </div>

              <div className="card-light p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">African Context</h3>
                <p className="text-gray-600">
                  Case studies and examples relevant to African markets
                </p>
              </div>

              <div className="card-light p-6 text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Learning</h3>
                <p className="text-gray-600">
                  Online, in-person, and hybrid options to fit your schedule
                </p>
              </div>

              <div className="card-light p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Support</h3>
                <p className="text-gray-600">
                  Lifetime access to our alumni network and job opportunities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths CTA */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="bg-gradient-to-br from-ai-teal/10 to-ai-primary/10 rounded-2xl border-2 border-ai-primary/20 p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Looking for a Complete Career Path?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our learning paths bundle multiple courses into structured programs designed for specific career outcomes like AI Creative Specialist, AI Marketing Analyst, or AI Business Analyst.
              </p>
              <Link 
                href="/paths"
                className="btn btn-primary"
              >
                Explore Career Paths
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full bg-gradient-to-br from-[#8B1A1F] to-[#6d1419] section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-white/95 mb-8 leading-relaxed">
                Enroll in any course and get instant access to our learning platform. Flexible payment plans available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/enquiry"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-ai-red font-bold text-base hover:bg-white/95 transition-all duration-200 shadow-lg"
                >
                  Enroll Now →
                </Link>
                <Link 
                  href="/paths"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-transparent border-2 border-white text-white font-bold text-base hover:bg-white/10 transition-all duration-200"
                >
                  View Career Paths
                </Link>
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
