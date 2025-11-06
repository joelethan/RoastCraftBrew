import FeaturedProducts from '../FeaturedProducts';
import ethiopianImage from '@assets/generated_images/Ethiopian_light_roast_product_e4b3e28f.png';
import colombianImage from '@assets/generated_images/Colombian_medium_roast_product_0b211431.png';
import sumatraImage from '@assets/generated_images/Sumatra_dark_roast_product_260d85ff.png';

export default function FeaturedProductsExample() {
  const products = [
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

  return <FeaturedProducts products={products} />;
}
