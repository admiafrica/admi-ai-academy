import { LearningPath } from "../data/learning-paths";

export function generateCourseSchema(path: LearningPath) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": path.title,
    "description": path.description,
    "provider": {
      "@type": "Organization",
      "name": "ADMI AI Academy",
      "sameAs": "https://ai.admi.africa"
    },
    "offers": {
      "@type": "Offer",
      "category": "Paid",
      "price": path.price.replace("KES ", ""),
      "priceCurrency": "KES"
    },
    "courseCode": path.slug,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "blended",
      "courseWorkload": path.duration,
      "instructor": {
        "@type": "Organization",
        "name": "ADMI AI Academy Faculty"
      }
    },
    "educationalLevel": path.level,
    "timeRequired": path.duration,
    "teaches": path.outcomes,
    "coursePrerequisites": "No prior AI experience required",
    "availableLanguage": "en",
    "inLanguage": "en"
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ADMI AI Academy",
    "alternateName": "Africa Digital Media Institute AI Academy",
    "url": "https://ai.admi.africa",
    "logo": "https://ai.admi.africa/logo.png",
    "description": "ADMI AI Academy provides practical AI training for creative professionals, marketers, and business analysts in Africa.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-123-456-789",
      "contactType": "Admissions",
      "email": "ai@admi.africa",
      "areaServed": "KE",
      "availableLanguage": ["en"]
    },
    "sameAs": [
      "https://admi.africa",
      "https://twitter.com/admiafrica",
      "https://linkedin.com/company/admi"
    ]
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}
