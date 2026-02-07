import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-warm-cream border-t border-warm-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-warm-brown/70">
          <p className="flex items-center justify-center gap-2 text-sm">
            © 2026. Built with <Heart className="h-4 w-4 text-terracotta fill-terracotta" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terracotta hover:text-terracotta-dark font-medium transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
