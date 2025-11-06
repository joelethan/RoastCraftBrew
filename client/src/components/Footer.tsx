import { Link } from "wouter";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-card mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4" data-testid="text-footer-brand">
              Artisan Coffee
            </h3>
            <p className="font-ui text-sm text-muted-foreground">
              Crafting exceptional coffee experiences since 2020
            </p>
          </div>

          <div>
            <h4 className="font-ui font-semibold mb-4">Products</h4>
            <ul className="space-y-2 font-ui text-sm">
              <li>
                <Link href="/products" data-testid="link-footer-products">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    All Coffee
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" data-testid="link-footer-light">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Light Roast
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" data-testid="link-footer-medium">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Medium Roast
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/products" data-testid="link-footer-dark">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Dark Roast
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-ui font-semibold mb-4">Company</h4>
            <ul className="space-y-2 font-ui text-sm">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-process">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Our Process
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-ui font-semibold mb-4">Connect</h4>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-instagram"
                onClick={() => console.log("Instagram clicked")}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-facebook"
                onClick={() => console.log("Facebook clicked")}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                data-testid="button-twitter"
                onClick={() => console.log("Twitter clicked")}
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="font-ui text-sm text-muted-foreground">
            © 2024 Artisan Coffee Roasters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
