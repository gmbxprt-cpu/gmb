"use client";
import AccordionItem from './AccordionItem';

// 👇 New, shorter list with 8 of the most important questions
const faqData = [
    {
        question: "What is a Google Business Profile?",
        answer: "A Google Business Profile is a free listing that allows businesses to manage their presence on Google Search and Maps, showcasing essential information like hours, location, and services."
    },
    {
        question: "What information should I include in my Google Business Profile?",
        answer: "Include your business name, address, phone number, website, hours of operation, business category, and high-quality photos. Add descriptions and relevant attributes to provide comprehensive details."
    },
    {
        question: "How can I verify my Google Business Profile?",
        answer: "Verification can be done via postcard, phone call, email, or instant verification if you’ve already verified your business with Google Search Console. Follow the instructions provided by Google to complete verification."
    },
    {
        question: "What should I do if my business information is incorrect on Google?",
        answer: "Update your business information through Google Business Profile Manager. If the information still appears incorrect after updating, you can suggest an edit or contact Google support for further assistance."
    },
    {
        question: "How can I manage customer reviews on my Google Business Profile?",
        answer: "Log in to Google Business Profile Manager to read and respond to customer reviews. Engaging with reviews helps build trust and address any customer concerns."
    },
    {
        question: "Can I add posts to my Google Business Profile?",
        answer: "Yes, you can create posts about updates, offers, and events directly from Google Business Profile Manager. These posts appear in your listing and help engage potential customers."
    },
    {
        question: "Can I have multiple locations for my business?",
        answer: "Yes, you can manage multiple locations with Google Business Profile. Each location needs a separate profile, which can be managed through Google Business Profile Manager."
    },
    {
        question: "How often should I update my Google Business Profile?",
        answer: "Regular updates are recommended, especially when there are changes to your business hours, services, or promotions. Keeping your profile current ensures accurate information and improves customer engagement."
    }
];

export default function MobileFaq() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqData.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <section className="bg-white py-16 md:hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">FAQ</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-4">
            <span className="text-blue-600">Frequently Asked Questions</span> on GMB Optimization
          </h2>
          <div className="mt-8 space-y-3">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
