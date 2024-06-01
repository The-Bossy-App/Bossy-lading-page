import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@src/components/ui/accordion";
import { ArrowRight, ChevronRight } from "lucide-react";
export interface IFAQProps {}

const FAQ: React.FC<IFAQProps> = (props) => {
  const id = React.useId();
  const faqs = React.useMemo(
    () => [
      {
        question: "What’s BossyPay App?",
        answer:
          "BossyPay is a free, secure and easy way to pay other people in your neighbourhood.",
      },
      {
        question: "How BossyPay works?",
        answer: "",
      },
      {
        question: "How to activate BossyPay account?",
      },
      {
        question: "How to connect my credit card?",
      },
      {
        question: "What should I do when I forgot my pin?",
      },
      {
        question: "How to change password?",
        answer: "By click",
      },
      {
        question: "Is BossyPay available for everyone?",
        answer: "No, BossyPay is only available for people in Nigeria.",
      },
      {
        question: "Can I send my money to others by ID?",
      },
    ],
    []
  );
  return (
    <section id="faq" className="text-center space-y-10">
      <h2 className="xl:text-6xl md:text-5xl text-4xl font-semibold">
        Frequently Asked Questions
      </h2>
      <p className="lg:w-8/12 mx-auto text-grey-600">
        Here’s common frequently asked questions about BossyPay. Still have some
        questions? Click button below to submit your questions.
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full grid lg:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-6 gap-4"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            value={`item-${index}-${id}`}
            key={`item-${index}-${id}`}
            className="bg-grey-200 px-6 py-4 border-0 rounded-2xl h-fit"
          >
            <AccordionTrigger className="text-xl font-medium text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-grey-700 text-left text-lg">
              {faq.answer || "This section is under construction."}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <button className="py-3.5 rounded-2xl bg-primary-800 text-white px-10">
        Contact us <ArrowRight className="inline ml-2" />
      </button>
    </section>
  );
};
export default FAQ;
