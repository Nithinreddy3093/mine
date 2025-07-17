import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Find answers to common questions about SRM University.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((categoryItem) => (
            <Card key={categoryItem.category}>
            <CardHeader>
                <CardTitle>{categoryItem.category}</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                {categoryItem.questions.map((faq, index) => (
                    <AccordionItem value={`${categoryItem.category}-item-${index}`} key={index}>
                    <AccordionTrigger className="text-left text-base">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                    </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </CardContent>
            </Card>
        ))}
      </div>
    </div>
  )
}
