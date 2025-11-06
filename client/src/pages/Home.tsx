import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import StorySection from "@/components/StorySection";
import ProcessSteps from "@/components/ProcessSteps";
import Footer from "@/components/Footer";
import heroImage from '@assets/generated_images/Coffee_roasting_hero_image_4fd3661b.png';
import ethiopianImage from '@assets/generated_images/Ethiopian_light_roast_product_e4b3e28f.png';
import colombianImage from '@assets/generated_images/Colombian_medium_roast_product_0b211431.png';
import sumatraImage from '@assets/generated_images/Sumatra_dark_roast_product_260d85ff.png';
import roastingImage from '@assets/generated_images/Roasting_process_craftsmanship_image_af7e7f87.png';

export default function Home() {
  const featuredProducts = [
    {
      name: "Ethiopian Yirgacheffe",
      origin: "Yirgacheffe, Ethiopia",
      roastLevel: "Light" as const,
      tastingNotes: ["Floral", "Citrus", "Bergamot"],
      price: 18.99,
      image: ethiopianImage,
    },
    {
      name: "Colombian Supremo",
      origin: "Huila, Colombia",
      roastLevel: "Medium" as const,
      tastingNotes: ["Chocolate", "Caramel", "Nutty"],
      price: 16.99,
      image: colombianImage,
    },
    {
      name: "Sumatra Mandheling",
      origin: "Lake Toba, Sumatra",
      roastLevel: "Dark" as const,
      tastingNotes: ["Earthy", "Spicy", "Tobacco"],
      price: 17.99,
      image: sumatraImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero
          title="Crafted with Passion, Roasted to Perfection"
          subtitle="Experience the art of small-batch coffee roasting. Every bean carefully selected, every roast meticulously crafted."
          ctaText="Explore Our Coffee"
          ctaLink="/products"
          backgroundImage={heroImage}
        />
        <FeaturedProducts products={featuredProducts} />
        <StorySection
          image={roastingImage}
          title="Our Story"
          content="Founded in 2020 with a passion for exceptional coffee, we've dedicated ourselves to sourcing the finest single-origin beans from around the world. Every batch is roasted with care and precision, honoring the unique characteristics of each origin. We believe that great coffee starts with great relationships—with farmers, with our community, and with every person who enjoys our coffee."
        />
        <ProcessSteps />
      </main>
      <Footer />
    </div>
  );
}
