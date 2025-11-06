import { Card } from "@/components/ui/card";
import { Coffee, Search, Flame, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Sourcing",
    description: "We travel the world to find the finest single-origin beans, building lasting relationships with farmers.",
  },
  {
    icon: Coffee,
    title: "Selection",
    description: "Each bean is carefully evaluated for quality, flavor profile, and potential through rigorous cupping sessions.",
  },
  {
    icon: Flame,
    title: "Roasting",
    description: "Our master roasters craft each batch with precision, bringing out the unique characteristics of every origin.",
  },
  {
    icon: PackageCheck,
    title: "Packaging",
    description: "Freshly roasted beans are carefully packaged to preserve flavor and delivered to your door within days.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 bg-card" data-testid="section-process">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Process
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From farm to cup, every step is guided by our commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 text-center" data-testid={`card-step-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="font-ui text-sm text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
