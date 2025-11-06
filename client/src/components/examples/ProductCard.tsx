import ProductCard from '../ProductCard';
import ethiopianImage from '@assets/generated_images/Ethiopian_light_roast_product_e4b3e28f.png';

export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        name="Ethiopian Yirgacheffe"
        origin="Yirgacheffe, Ethiopia"
        roastLevel="Light"
        tastingNotes={["Floral", "Citrus", "Bergamot"]}
        price={18.99}
        image={ethiopianImage}
      />
    </div>
  );
}
