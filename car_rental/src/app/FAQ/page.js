
'use client';

import MyNavbar from '@/components/navbar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Aurora from '@/components/ui/aurora';
import { Card, CardContent } from '@/components/ui/card';
  


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
      <MyNavbar />
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

// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import { Mail, Phone, MapPin, Clock } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submitted, fields cleared
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   return (
//     <div className="min-h-screen py-8">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
//             <p className="text-muted-foreground text-lg">
//               Have questions? We are here to help!
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Contact Information */}
//             <div className="space-y-6">
//               <Card>
//                 <CardContent className="pt-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Phone className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold mb-1">Phone</h3>
//                       <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
//                       <p className="text-muted-foreground text-sm">+1 (555) 987-6543</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="pt-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Mail className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold mb-1">Email</h3>
//                       <p className="text-muted-foreground text-sm">support@rentride.com</p>
//                       <p className="text-muted-foreground text-sm">info@rentride.com</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="pt-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <MapPin className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold mb-1">Address</h3>
//                       <p className="text-muted-foreground text-sm">
//                         123 Car Street<br />
//                         Auto City, AC 12345
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardContent className="pt-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Clock className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold mb-1">Business Hours</h3>
//                       <p className="text-muted-foreground text-sm">Mon-Fri: 8am - 8pm</p>
//                       <p className="text-muted-foreground text-sm">Sat-Sun: 9am - 6pm</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Send us a Message</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="name">Full Name</Label>
//                         <Input
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="John Doe"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="email">Email</Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="john@example.com"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="phone">Phone Number</Label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         type="tel"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="+1 (555) 123-4567"
//                       />
//                     </div>

//                     <div>
//                       <Label htmlFor="message">Message</Label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="How can we help you?"
//                         rows={6}
//                         required
//                       />
//                     </div>

//                     <Button
//                       type="submit"
//                       size="lg"
//                       className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
//                     >
//                       Send Message
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


