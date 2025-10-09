"use client";
import AccordionItem from './AccordionItem';

// 👇 New list of 12 questions and answers
const faqData = [
  {
    question: "What is a Google Business Profile?",
    answer: "A Google Business Profile is a free listing that allows businesses to manage their presence on Google Search and Maps, showcasing essential information like hours, location, and services."
  },
  {
    question: "How do I create a Google Business Profile?",
    answer: "To create a Google Business Profile, go to Google Business Profile Manager, sign in with your Google account, and follow the prompts to enter your business information and verify your listing."
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
    question: "How do I update my business information?",
    answer: "Log in to Google Business Profile Manager, select your business, and update the relevant sections. Changes will be reviewed by Google before they go live."
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
    question: "How can I add photos to my Google Business Profile?",
    answer: "Upload photos through Google Business Profile Manager by selecting the “Photos” tab. You can add images of your business, products, and services to attract more attention."
  },
  {
    question: "What are Google Business Profile Insights?",
    answer: "Insights provide data on how customers interact with your profile, including how they found your business, actions taken, and the number of views and clicks. This helps you understand and improve your profile’s performance."
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

export default function DesktopFaq() {
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
    <section className="bg-white py-20 hidden md:block">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">FAQ</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
            <span className="text-blue-600">Frequently Asked Questions</span> on<br/>GMB Optimization
          </h2>
          <div className="mt-10 space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
