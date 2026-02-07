import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { blogPost } from '../../content/blogPost';
import { BookOpen } from 'lucide-react';

interface BlogSectionProps {
  onOpenPost: () => void;
}

export default function BlogSection({ onOpenPost }: BlogSectionProps) {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-warm-brown mb-4">
              Beginner Tutorials
            </h2>
            <p className="text-lg text-warm-brown/70">
              Step-by-step guides to help you start your rug making journey
            </p>
          </div>

          <Card className="border-warm-border bg-warm-cream/30 shadow-warm hover:shadow-warm-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl text-warm-brown mb-2">
                    {blogPost.title}
                  </CardTitle>
                  <p className="text-warm-brown/70">
                    {blogPost.excerpt}
                  </p>
                </div>
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center shrink-0">
                  <BookOpen className="h-6 w-6 text-terracotta" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={onOpenPost}
                className="bg-terracotta hover:bg-terracotta-dark text-white rounded-full"
              >
                Read Full Tutorial
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
