import {

  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import Aurora from './ui/aurora';
import { Accordion } from '@radix-ui/react-accordion';
  


const FAQ = () => {
  const faqs = [
    {
      question: 'What do I need to rent a car?',
      answer: 'You need a valid driver\'s license, a credit card in your name, and proof of insurance. International renters may also need a passport and international driver\'s permit.',
    },
    {
      question: 'What is the minimum age to rent a car?',
      answer: 'The minimum age to rent a car is 21 years old. Drivers under 25 may be subject to a young driver surcharge.',
    },
    {
      question: 'Can I modify or cancel my booking?',
      answer: 'Yes! You can modify or cancel your booking up to 24 hours before your pickup time for a full refund. Changes made within 24 hours may incur fees.',
    },
    {
      question: 'Is insurance included?',
      answer: 'Basic insurance coverage is included in all our rentals. Additional coverage options are available for purchase at checkout.',
    },
    {
      question: 'Can I pick up and drop off at different locations?',
      answer: 'Yes, we offer one-way rentals. Additional fees may apply depending on the distance between locations.',
    },
    {
      question: 'What happens if I return the car late?',
      answer: 'Late returns are charged hourly for up to 2 hours. After 2 hours, you will be charged for an additional day.',
    },
    {
      question: 'Are there mileage limits?',
      answer: 'Most rentals include unlimited mileage. Some specialty and luxury vehicles may have mileage restrictions.',
    },
    {
      question: 'What fuel policy do you have?',
      answer: 'We operate a full-to-full policy. You receive the car with a full tank and return it full. Otherwise, refueling charges will apply.',
    },
    {
      question: 'Can I add an additional driver?',
      answer: 'Yes, you can add additional drivers for a small daily fee. They must meet the same requirements as the primary driver.',
    },
    {
      question: 'What if the car breaks down?',
      answer: 'We provide 24/7 roadside assistance. Simply call our support line and we\'ll arrange help or a replacement vehicle.',
    },
    {
      question: 'Do you offer long-term rentals?',
      answer: 'Yes! We offer special rates for rentals longer than 7 days. Contact us for monthly rental options and discounts.',
    },
  ];

  return (

    <div className="min-h-screen mx-auto    w-full bg-black pb-2 mt-[-20] relative overflow-hidden" id="FAQ">
            <Aurora className="absolute inset-0 z-10 min-h-screen w-full"
  colorStops={["#6438c2", "#8b78c9", "#bfa1e2", "#616161", "#6438c2"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.9}
/>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mx-auto  mb-12">
            <h1 className="text-4xl   mx-auto font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-white text-lg">
              Find answers to common questions about our car rental service
            </p>
          </div>

          <Card>
            <CardContent className="p-6 text-white bg-black border border-[#6438c2]">
              <Accordion type="single" collapsible className= "w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-[#6438c2]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We are here to help!
            </p>
            <a href="/contact" className="text-primary text-white hover:underline font-medium">
              Contact Our Support Team →
            </a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;