import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Coffee Lane, Portland, OR 97209",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(503) 555-BREW",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@artisancoffee.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 7am-6pm, Sat-Sun: 8am-5pm",
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
                Get in Touch
              </h1>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a question about our coffee? Want to learn more about wholesale opportunities? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="font-display text-3xl font-bold mb-8">Send Us a Message</h2>
                <ContactForm />
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="p-6" data-testid={`card-info-${index}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-ui font-semibold mb-1">
                              {info.title}
                            </h3>
                            <p className="font-ui text-muted-foreground">
                              {info.content}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                <Card className="mt-8 p-6 bg-card">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Visit Our Roastery
                  </h3>
                  <p className="font-ui text-muted-foreground mb-4">
                    Stop by our roastery to see the roasting process in action, sample our latest offerings, and chat with our team about all things coffee.
                  </p>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <p className="font-ui text-muted-foreground text-sm">Map placeholder</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
