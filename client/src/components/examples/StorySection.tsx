import StorySection from '../StorySection';
import roastingImage from '@assets/generated_images/Roasting_process_craftsmanship_image_af7e7f87.png';

export default function StorySectionExample() {
  return (
    <StorySection
      image={roastingImage}
      title="Our Story"
      content="Founded in 2020 with a passion for exceptional coffee, we've dedicated ourselves to sourcing the finest single-origin beans from around the world. Every batch is roasted with care and precision, honoring the unique characteristics of each origin. We believe that great coffee starts with great relationships—with farmers, with our community, and with every person who enjoys our coffee."
    />
  );
}
