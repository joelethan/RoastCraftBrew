import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  origin: string;
  roastLevel: "Light" | "Medium" | "Dark";
  tastingNotes: string[];
  price: number;
  image: string;
}

const roastColors = {
  Light: "bg-amber-200 text-amber-900",
  Medium: "bg-amber-600 text-white",
  Dark: "bg-amber-900 text-white",
};

export default function ProductCard({
  name,
  origin,
  roastLevel,
  tastingNotes,
  price,
  image,
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden group hover-elevate transition-transform duration-300 hover:scale-[1.02]" data-testid={`card-product-${name.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid={`img-product-${name.toLowerCase().replace(/\s/g, '-')}`}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-display text-xl font-semibold mb-1" data-testid={`text-product-name-${name.toLowerCase().replace(/\s/g, '-')}`}>
              {name}
            </h3>
            <p className="font-ui text-sm text-muted-foreground" data-testid={`text-product-origin-${name.toLowerCase().replace(/\s/g, '-')}`}>
              {origin}
            </p>
          </div>
          <Badge className={roastColors[roastLevel]} data-testid={`badge-roast-${roastLevel.toLowerCase()}`}>
            {roastLevel}
          </Badge>
        </div>

        <div className="mb-4">
          <p className="font-ui text-xs text-muted-foreground mb-2">Tasting Notes:</p>
          <div className="flex flex-wrap gap-2">
            {tastingNotes.map((note, index) => (
              <Badge key={index} variant="outline" className="text-xs" data-testid={`badge-note-${note.toLowerCase()}`}>
                {note}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="font-display text-2xl font-bold" data-testid={`text-price-${name.toLowerCase().replace(/\s/g, '-')}`}>
            ${price.toFixed(2)}
          </span>
          <Button
            size="sm"
            data-testid={`button-add-cart-${name.toLowerCase().replace(/\s/g, '-')}`}
            onClick={() => console.log(`Added ${name} to cart`)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
