
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How does the service builder work?",
    answer: "Our service builder uses a modular, Lego-style approach that lets you select and customize exactly the services you need. Simply drag and drop service blocks, configure options, and see real-time pricing and delivery estimates. You can start from scratch or use one of our pre-built service kits as a foundation."
  },
  {
    question: "Can I modify my service package after purchasing?",
    answer: "Yes, you can modify your service package at any time through your dashboard. Adding or removing services will adjust your quote accordingly. For projects already in progress, our team will work with you to accommodate changes with minimal disruption to your timeline."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Absolutely. We offer various support and maintenance packages that can be added to any service bundle. These include regular updates, security patches, performance monitoring, content updates, and technical support. You can select these options during the build process or add them later."
  },
  {
    question: "How do you handle project management and communication?",
    answer: "Each client is assigned a dedicated project manager who serves as your main point of contact throughout the process. Communication happens through your personalized dashboard where you can track progress, share feedback, request changes, and schedule consultations. We also offer regular video updates and milestone reviews."
  },
  {
    question: "What makes your approach different from other digital agencies?",
    answer: "Unlike traditional agencies that offer fixed packages or custom quotes that lack transparency, our modular approach gives you complete control and visibility. You only pay for what you need, see exactly what each service costs, and can scale up or down as your requirements change. Our platform also provides real-time progress tracking and simplified communication."
  }
];

export default function FaqSection() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and technology.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
