import { useState } from 'react';
import HomeHeroSection from './components/sections/HomeHeroSection';
import WhatIsRugMakingSection from './components/sections/WhatIsRugMakingSection';
import CourseRecommendationSection from './components/sections/CourseRecommendationSection';
import BlogSection from './components/sections/BlogSection';
import BlogPostView from './components/blog/BlogPostView';
import Footer from './components/Footer';
import { updateSEO } from './lib/seo';
import { useEffect } from 'react';

function App() {
  const [showBlogPost, setShowBlogPost] = useState(false);

  useEffect(() => {
    if (!showBlogPost) {
      updateSEO({
        title: 'Learn Rug Tufting - Beginner-Friendly Handmade Rug Making Tutorials',
        description: 'Discover how to make beautiful handmade rugs at home with our beginner-friendly rug tufting tutorials. Learn the basics, get tool recommendations, and start your creative journey today.',
      });
    }
  }, [showBlogPost]);

  const handleOpenBlogPost = () => {
    setShowBlogPost(true);
  };

  const handleCloseBlogPost = () => {
    setShowBlogPost(false);
  };

  if (showBlogPost) {
    return <BlogPostView onClose={handleCloseBlogPost} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        <HomeHeroSection />
        <WhatIsRugMakingSection />
        <CourseRecommendationSection />
        <BlogSection onOpenPost={handleOpenBlogPost} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
