import Hero from '../Hero';
import heroImage from '@assets/generated_images/Coffee_roasting_hero_image_4fd3661b.png';

export default function HeroExample() {
  return (
    <Hero
      title="Crafted with Passion, Roasted to Perfection"
      subtitle="Experience the art of small-batch coffee roasting. Every bean carefully selected, every roast meticulously crafted."
      ctaText="Explore Our Coffee"
      ctaLink="/products"
      backgroundImage={heroImage}
    />
  );
}
