import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function CourseRecommendationSection() {
  const affiliateLink = '[PASTE AFFILIATE LINK HERE]';

  return (
    <section className="w-full py-20 bg-gradient-to-br from-soft-peach via-warm-cream to-soft-peach">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-warm-brown mb-4">
              Why Take a Rug Making Course?
            </h2>
            <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto">
              While you can learn rug tufting on your own, following a step-by-step course 
              helps you master the craft faster and with better results.
            </p>
          </div>

          <Card className="border-warm-border bg-white shadow-warm-lg mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-warm-brown mb-6 text-center">
                Benefits of Structured Learning
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-terracotta shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-warm-brown mb-1">Learn Faster</h4>
                    <p className="text-warm-brown/70">
                      Skip the trial and error with proven techniques and clear instructions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-terracotta shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-warm-brown mb-1">Avoid Mistakes</h4>
                    <p className="text-warm-brown/70">
                      Learn from experts who guide you around common beginner pitfalls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-terracotta shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-warm-brown mb-1">Professional Finishing</h4>
                    <p className="text-warm-brown/70">
                      Master the techniques that make your rugs look polished and professional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-terracotta shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-warm-brown mb-1">Build Confidence</h4>
                    <p className="text-warm-brown/70">
                      Gain the skills and knowledge to tackle any rug design with confidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-6 text-lg rounded-full shadow-warm transition-all hover:shadow-warm-lg hover:scale-105"
                >
                  <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                    Explore the Course
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>

                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-terracotta text-terracotta hover:bg-terracotta/10 px-8 py-6 text-lg rounded-full transition-all"
                >
                  <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                    Get Started Today
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
