import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import EnquiryForm from "../components/EnquiryForm";

export const metadata = {
  title: "Enquire Now | ADMI AI Academy",
  description: "Get in touch with ADMI AI Academy. Speak to an advisor about our programmes and start your AI journey.",
};

export default function EnquiryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="section-padding bg-gradient-to-br from-[#8B1A1F] to-[#6d1419]">
          <div className="max-w-6xl mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Info */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's Start Your <span className="text-white">AI Journey</span>
                </h1>
                <p className="text-lg text-white/95 mb-8">
                  Have questions about our programmes? Want to speak with an admissions advisor? 
                  Fill out the form and we'll get back to you within 24 hours.
                </p>

                {/* Contact Info */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Email Us</div>
                      <a href="mailto:ai@admi.africa" className="text-white/90 hover:text-white underline">
                        ai@admi.africa
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl flex-shrink-0">
                      📱
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Call Us</div>
                      <a href="tel:+254123456789" className="text-white/90 hover:text-white underline">
                        +254 123 456 789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Visit Us</div>
                      <p className="text-white/90">
                        ADMI Campus<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl flex-shrink-0">
                      💬
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">WhatsApp</div>
                      <p className="text-white/90">
                        Chat with us instantly using the WhatsApp button below
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <h3 className="font-semibold text-white mb-3">Office Hours</h3>
                  <div className="space-y-2 text-white/90 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-[#0f0f1e]/50 rounded-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map or Additional Info Section */}
        <section className="py-20 bg-[#0f0f1e]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Prefer to Visit in Person?
              </h2>
              <p className="text-lg text-white/70">
                Schedule a campus tour and meet our team face-to-face
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-semibold text-white mb-2">Campus Tours</h3>
                <p className="text-white/70 text-sm">
                  Visit our state-of-the-art facilities and meet the team
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="font-semibold text-white mb-2">Coffee Chats</h3>
                <p className="text-white/70 text-sm">
                  Have a casual conversation with our admissions advisors
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="font-semibold text-white mb-2">Open Days</h3>
                <p className="text-white/70 text-sm">
                  Join our monthly open days to learn more about our programmes
                </p>
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
