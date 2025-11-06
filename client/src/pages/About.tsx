import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import { Card } from "@/components/ui/card";
import roasteryImage from '@assets/generated_images/Roastery_interior_about_page_bcf1a652.png';
import roastingImage from '@assets/generated_images/Roasting_process_craftsmanship_image_af7e7f87.png';

export default function About() {
  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every bean is carefully selected and roasted to perfection.",
    },
    {
      title: "Sustainable Sourcing",
      description: "We work directly with farmers who share our commitment to environmental and social responsibility.",
    },
    {
      title: "Craftsmanship",
      description: "Our master roasters bring decades of experience to every batch, ensuring consistency and excellence.",
    },
    {
      title: "Community",
      description: "We believe in building lasting relationships with our customers, farmers, and local community.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" data-testid="text-page-title">
                About Us
              </h1>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                We're more than just a coffee roaster. We're a team of passionate coffee enthusiasts dedicated to bringing you the finest coffee experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <img
                  src={roasteryImage}
                  alt="Our Roastery"
                  className="w-full h-auto rounded-md"
                  data-testid="img-roastery"
                />
              </div>
              <div>
                <h2 className="font-display text-4xl font-bold mb-6">Our Mission</h2>
                <p className="font-body text-lg text-muted-foreground mb-4">
                  Since our founding in 2020, we've been on a mission to elevate the coffee experience. We travel the world to source exceptional beans, build relationships with farmers, and roast each batch with precision and care.
                </p>
                <p className="font-body text-lg text-muted-foreground">
                  Our small-batch approach ensures that every bag of coffee you receive is fresh, flavorful, and represents the very best of what coffee can be.
                </p>
              </div>
            </div>

            <div className="mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2">
                  <img
                    src={roastingImage}
                    alt="Roasting Process"
                    className="w-full h-auto rounded-md"
                    data-testid="img-process"
                  />
                </div>
                <div className="md:order-1">
                  <h2 className="font-display text-4xl font-bold mb-6">Our Craft</h2>
                  <p className="font-body text-lg text-muted-foreground mb-4">
                    Roasting coffee is both an art and a science. Our master roasters combine years of experience with cutting-edge technology to bring out the unique characteristics of each origin.
                  </p>
                  <p className="font-body text-lg text-muted-foreground">
                    We carefully monitor temperature, airflow, and time to develop the perfect roast profile for each coffee, ensuring consistency while celebrating the distinct flavors of every bean.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="font-display text-4xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="p-8" data-testid={`card-value-${index}`}>
                    <h3 className="font-display text-2xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="font-ui text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps />
      </main>
      <Footer />
    </div>
  );
}
