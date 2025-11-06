# Coffee Roasting Company - Design Guidelines

## Design Approach
**Reference-Based:** Inspired by Blue Bottle Coffee and Stumptown Coffee's artisanal aesthetic, emphasizing craftsmanship, quality, and clean presentation with warm, inviting storytelling.

## Typography System
- **Display/Headings:** Playfair Display (serif, elegant)
  - H1: 4xl-6xl, font-bold
  - H2: 3xl-4xl, font-semibold
  - H3: 2xl-3xl, font-medium
- **Body/Secondary:** Lora (serif, readable for longer content)
  - Paragraphs: base-lg, font-normal
- **UI Elements:** Open Sans (sans-serif, clean)
  - Buttons, labels, captions: sm-base, font-medium

## Layout & Spacing
- **Container:** max-w-7xl with px-6 lg:px-8
- **Section Padding:** py-16 md:py-24 lg:py-32
- **Component Spacing:** Use Tailwind units: 4, 6, 8, 12, 16, 24 for consistent rhythm
- **Grid System:** 1-column mobile, 2-3 columns tablet/desktop for product grids

## Component Library

### Homepage
- **Hero Section:** Full-width immersive image (coffee roasting in action, beans close-up, or pour ritual) with centered overlay text and CTA. Use backdrop-blur-md on button background.
- **Story Section:** Two-column layout (text + artisanal photo), generous whitespace
- **Featured Products:** 3-column grid with product cards (image, name, origin, tasting notes snippet, price)
- **Process Preview:** Horizontal scroll of roasting stages with captions
- **Trust Indicators:** Customer quotes, quality certifications, sourcing partnerships

### Product Catalog
- **Filter Sidebar:** Roast level, origin, flavor profile filters
- **Product Grid:** 3-4 column masonry layout with hover scale effect (scale-105)
- **Product Cards:** Large image, bean name, origin badge, roast level indicator, tasting notes, price, "Add to Cart" CTA

### About Page
- **Mission Statement:** Large typography hero with background image
- **Roasting Process:** Step-by-step visual journey (4-6 cards with icons/images)
- **Team Section:** Grid of team member photos with roles
- **Values/Certifications:** Icon grid showcasing quality standards

### Contact Page
- **Split Layout:** Form (left) + Location/Hours info with map placeholder (right)
- **Form Fields:** Name, Email, Message with subtle border styling
- **Business Details:** Address, phone, email, hours in organized list format

## Images
- **Hero Image:** Large, atmospheric shot of coffee roasting process or beans (full-width, 70vh height)
- **Product Images:** Clean, well-lit product photography on neutral backgrounds
- **Process Images:** Documentary-style roasting process shots showing craftsmanship
- **About Page:** Authentic team photos, roastery interior shots
- **Background Textures:** Subtle coffee bean patterns or burlap textures where appropriate

## Navigation
- Sticky header with logo (left), centered nav links, cart icon (right)
- Mobile: Hamburger menu with full-screen overlay
- Footer: Multi-column (Products, Company, Connect, Newsletter signup)

## Interactive Elements
- Product cards: Subtle hover lift and shadow increase
- Buttons: Solid backgrounds with subtle hover brightness shift
- Images: Gentle zoom on hover for product photography
- Forms: Focus states with accent color border

## Accessibility
- High contrast text (#2F1B14 on #F5F5DC backgrounds)
- Clear focus indicators on all interactive elements
- Descriptive alt text for product images
- Semantic HTML structure throughout