import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Palette, ShoppingBag } from 'lucide-react';

export default function WhatIsRugMakingSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-warm-brown mb-4">
              What Is Rug Making?
            </h2>
            <p className="text-lg text-warm-brown/70 max-w-2xl mx-auto">
              Rug tufting is a creative craft where you use a special tool to punch yarn through fabric, 
              creating beautiful, textured rugs and wall hangings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Card className="border-warm-border bg-warm-cream/30 shadow-warm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-warm-brown mb-4">Essential Tools</h3>
                  <ul className="space-y-3 text-warm-brown/80">
                    <li className="flex items-start">
                      <span className="text-terracotta mr-2">•</span>
                      <span><strong>Tufting gun:</strong> The main tool that punches yarn through fabric</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta mr-2">•</span>
                      <span><strong>Yarn:</strong> Soft, colorful yarn in your favorite shades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta mr-2">•</span>
                      <span><strong>Frame:</strong> Holds your fabric taut while you work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-terracotta mr-2">•</span>
                      <span><strong>Cloth:</strong> Primary backing fabric for your design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center justify-center">
              <img 
                src="/assets/generated/tufting-tools-illustration.dim_1200x800.png" 
                alt="Rug tufting tools illustration"
                className="rounded-2xl shadow-warm w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-warm-border bg-warm-cream/30 shadow-warm hover:shadow-warm-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-terracotta" />
                </div>
                <h4 className="text-lg font-semibold text-warm-brown mb-2">Express Creativity</h4>
                <p className="text-warm-brown/70">
                  Design unique patterns and bring your artistic vision to life with endless color combinations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-warm-border bg-warm-cream/30 shadow-warm hover:shadow-warm-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-terracotta" />
                </div>
                <h4 className="text-lg font-semibold text-warm-brown mb-2">Relaxing Hobby</h4>
                <p className="text-warm-brown/70">
                  Enjoy the meditative, calming process of creating something beautiful with your hands.
                </p>
              </CardContent>
            </Card>

            <Card className="border-warm-border bg-warm-cream/30 shadow-warm hover:shadow-warm-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-6 w-6 text-terracotta" />
                </div>
                <h4 className="text-lg font-semibold text-warm-brown mb-2">Sell Your Work</h4>
                <p className="text-warm-brown/70">
                  Turn your passion into profit by selling your handmade rugs online or at local markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
