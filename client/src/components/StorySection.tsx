interface StorySectionProps {
  image: string;
  title: string;
  content: string;
  reverse?: boolean;
}

export default function StorySection({ image, title, content, reverse = false }: StorySectionProps) {
  return (
    <section className="py-16 md:py-24" data-testid="section-story">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'md:order-2' : ''}>
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-md"
              data-testid="img-story"
            />
          </div>
          
          <div className={reverse ? 'md:order-1' : ''}>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" data-testid="text-story-title">
              {title}
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
