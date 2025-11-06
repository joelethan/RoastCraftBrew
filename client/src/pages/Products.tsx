import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ethiopianImage from '@assets/generated_images/Ethiopian_light_roast_product_e4b3e28f.png';
import colombianImage from '@assets/generated_images/Colombian_medium_roast_product_0b211431.png';
import sumatraImage from '@assets/generated_images/Sumatra_dark_roast_product_260d85ff.png';

const allProducts = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    origin: "Yirgacheffe, Ethiopia",
    roastLevel: "Light" as const,
    tastingNotes: ["Floral", "Citrus", "Bergamot"],
    price: 18.99,
    image: ethiopianImage,
  },
  {
    id: 2,
    name: "Colombian Supremo",
    origin: "Huila, Colombia",
    roastLevel: "Medium" as const,
    tastingNotes: ["Chocolate", "Caramel", "Nutty"],
    price: 16.99,
    image: colombianImage,
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    origin: "Lake Toba, Sumatra",
    roastLevel: "Dark" as const,
    tastingNotes: ["Earthy", "Spicy", "Tobacco"],
    price: 17.99,
    image: sumatraImage,
  },
  {
    id: 4,
    name: "Kenya AA",
    origin: "Nyeri, Kenya",
    roastLevel: "Medium" as const,
    tastingNotes: ["Berry", "Wine", "Citrus"],
    price: 19.99,
    image: ethiopianImage,
  },
  {
    id: 5,
    name: "Guatemala Antigua",
    origin: "Antigua, Guatemala",
    roastLevel: "Medium" as const,
    tastingNotes: ["Cocoa", "Apple", "Spice"],
    price: 17.49,
    image: colombianImage,
  },
  {
    id: 6,
    name: "Brazil Santos",
    origin: "São Paulo, Brazil",
    roastLevel: "Dark" as const,
    tastingNotes: ["Chocolate", "Nuts", "Caramel"],
    price: 15.99,
    image: sumatraImage,
  },
];

export default function Products() {
  const [selectedRoast, setSelectedRoast] = useState<string>("All");

  const filteredProducts = selectedRoast === "All" 
    ? allProducts 
    : allProducts.filter(p => p.roastLevel === selectedRoast);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-4" data-testid="text-page-title">
                Our Coffee Collection
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Explore our selection of premium single-origin coffee beans, each with its own unique flavor profile
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {["All", "Light", "Medium", "Dark"].map((roast) => (
                  <Button
                    key={roast}
                    variant={selectedRoast === roast ? "default" : "outline"}
                    onClick={() => setSelectedRoast(roast)}
                    data-testid={`button-filter-${roast.toLowerCase()}`}
                  >
                    {roast} Roast
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
