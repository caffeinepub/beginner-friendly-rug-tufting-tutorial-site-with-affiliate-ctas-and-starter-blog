import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HomeHeroSection() {
  const affiliateLink = '[PASTE AFFILIATE LINK HERE]';

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-warm-cream via-soft-peach to-warm-cream">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/yarn-texture-hero.dim_1600x900.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-warm-brown leading-tight">
            Learn the Art of Rug Making at Home
          </h1>
          
          <p className="text-xl md:text-2xl text-warm-brown/80 leading-relaxed">
            Start creating beautiful handmade rugs with no experience needed. 
            Discover a relaxing, creative hobby that anyone can master.
          </p>
          
          <div className="pt-4">
            <Button 
              asChild
              size="lg"
              className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-6 text-lg rounded-full shadow-warm transition-all hover:shadow-warm-lg hover:scale-105"
            >
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                Start Your Rug Making Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
