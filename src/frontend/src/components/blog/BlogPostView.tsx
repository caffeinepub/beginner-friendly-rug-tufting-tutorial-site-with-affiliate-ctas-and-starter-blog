import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { blogPost } from '../../content/blogPost';
import { updateSEO } from '../../lib/seo';

interface BlogPostViewProps {
  onClose: () => void;
}

export default function BlogPostView({ onClose }: BlogPostViewProps) {
  useEffect(() => {
    updateSEO({
      title: `${blogPost.title} - Learn Rug Tufting`,
      description: blogPost.excerpt,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-warm-cream/95 backdrop-blur-sm border-b border-warm-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button 
            onClick={onClose}
            variant="ghost"
            className="text-warm-brown hover:text-terracotta"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Blog Post Content */}
      <article className="w-full py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Hero Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-warm-lg">
              <img 
                src="/assets/generated/tufted-rug-texture.dim_1200x800.png" 
                alt="Beautiful tufted rug texture"
                className="w-full h-auto"
              />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-warm-brown mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-warm-brown/80 leading-relaxed">
                {blogPost.introduction}
              </p>
            </div>

            {/* Decorative Divider */}
            <div className="my-12">
              <img 
                src="/assets/generated/handmade-dividers.dim_1600x400.png" 
                alt="Decorative divider"
                className="w-full h-16 object-cover opacity-40"
              />
            </div>

            {/* Essential Tools Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-warm-brown mb-6">
                Essential Tools for Beginners
              </h2>
              <p className="text-warm-brown/80 mb-6 leading-relaxed">
                Before you start your rug tufting journey, you'll need a few key tools. 
                Don't worry—you don't need everything at once! Here are the essentials:
              </p>
              
              <Card className="border-warm-border bg-warm-cream/30 shadow-warm mb-6">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {blogPost.tools.map((tool, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-terracotta font-bold mr-3 text-lg">{index + 1}.</span>
                        <div>
                          <strong className="text-warm-brown">{tool.name}:</strong>
                          <span className="text-warm-brown/80"> {tool.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <p className="text-warm-brown/80 leading-relaxed">
                These tools will get you started, and as you progress, you can add more colors of yarn 
                and experiment with different textures and techniques.
              </p>
            </section>

            {/* Decorative Divider */}
            <div className="my-12">
              <img 
                src="/assets/generated/handmade-dividers.dim_1600x400.png" 
                alt="Decorative divider"
                className="w-full h-16 object-cover opacity-40"
              />
            </div>

            {/* Basic Process Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-warm-brown mb-6">
                The Basic Rug Making Process
              </h2>
              <p className="text-warm-brown/80 mb-6 leading-relaxed">
                Rug tufting might seem intimidating at first, but once you understand the basic steps, 
                you'll find it's actually quite straightforward and incredibly fun!
              </p>

              <div className="space-y-6">
                {blogPost.process.map((step, index) => (
                  <Card key={index} className="border-warm-border bg-white shadow-warm">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-terracotta rounded-full flex items-center justify-center shrink-0 mr-4">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-warm-brown mb-2">
                            {step.title}
                          </h3>
                          <p className="text-warm-brown/80 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-warm-brown/80 mt-6 leading-relaxed">
                Each step becomes easier with practice, and soon you'll be creating beautiful rugs 
                that reflect your personal style and creativity.
              </p>
            </section>

            {/* Decorative Divider */}
            <div className="my-12">
              <img 
                src="/assets/generated/handmade-dividers.dim_1600x400.png" 
                alt="Decorative divider"
                className="w-full h-16 object-cover opacity-40"
              />
            </div>

            {/* Course Recommendation Section */}
            <section className="mb-12">
              <Card className="border-2 border-terracotta bg-gradient-to-br from-soft-peach to-warm-cream shadow-warm-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-warm-brown mb-4">
                    Ready to Master Rug Tufting?
                  </h2>
                  <p className="text-warm-brown/80 mb-6 leading-relaxed">
                    While this guide gives you a great foundation, learning from a comprehensive course 
                    can help you avoid common mistakes and achieve professional results much faster. 
                    A structured course provides detailed video tutorials, troubleshooting tips, and 
                    expert guidance every step of the way.
                  </p>
                  <p className="text-warm-brown/80 mb-6 leading-relaxed">
                    If you're serious about creating beautiful handmade rugs, I highly recommend checking 
                    out this beginner-friendly rug making course. It covers everything from choosing the 
                    right materials to advanced finishing techniques that will make your rugs look truly 
                    professional.
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-6 text-lg rounded-full shadow-warm transition-all hover:shadow-warm-lg hover:scale-105"
                  >
                    <a href="https://kramis-teppich.coachy.net/lp/rug-making-tutorial/?aff=lishayK007" target="_blank" rel="noopener noreferrer">
                      Explore the Complete Course
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-warm-brown mb-6">
                Start Your Creative Journey Today
              </h2>
              <p className="text-warm-brown/80 mb-4 leading-relaxed">
                Rug tufting is more than just a craft—it's a creative outlet that brings joy, relaxation, 
                and a sense of accomplishment. Whether you want to decorate your home, give unique handmade 
                gifts, or even start a small business, rug making offers endless possibilities.
              </p>
              <p className="text-warm-brown/80 leading-relaxed">
                Remember, every expert was once a beginner. Take your time, enjoy the process, and don't 
                be afraid to experiment with colors and designs. Your first rug might not be perfect, 
                but it will be uniquely yours—and that's what makes handmade creations so special.
              </p>
            </section>

            {/* Final CTA Section with Extra Spacing */}
            <section className="mt-16 pt-8 border-t-2 border-warm-border">
              <p className="text-center text-warm-brown/90 text-lg leading-relaxed">
                If you're interested in rug tufting, here's a complete course—{' '}
                <a 
                  href="https://kramis-teppich.coachy.net/lp/rug-making-tutorial/?aff=lishayK007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terracotta font-semibold hover:underline inline-flex items-center gap-1"
                >
                  open the link
                  <ExternalLink className="h-4 w-4" />
                </a>
              </p>
            </section>

            {/* Back Button */}
            <div className="text-center pt-12">
              <Button 
                onClick={onClose}
                variant="outline"
                size="lg"
                className="border-2 border-terracotta text-terracotta hover:bg-terracotta/10 rounded-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
