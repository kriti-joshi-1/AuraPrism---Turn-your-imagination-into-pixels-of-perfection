import React from 'react';
import { Sparkles, Palette, Zap, Shield, Heart, Star } from 'lucide-react';
import MistBackground from '../components/MistBackground';
import PyramidLogo from '../components/PyramidLogo';

const About: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      
      <div className="relative z-10 min-h-screen pt-20 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <PyramidLogo />
            </div>
            <h1 className="font-racing text-4xl md:text-6xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-4">
              About AuraPrism
            </h1>
            <p className="text-foreground/80 text-lg">
              Transforming imagination into stunning visual reality
            </p>
          </div>

          {/* Mission Statement */}
          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed text-center">
              AuraPrism is more than just an image generator—it's a gateway to unlimited creativity. 
              We believe that everyone deserves the power to bring their wildest imaginations to life, 
              transforming simple words into breathtaking visual masterpieces through the magic of AI.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                AI-Powered Magic
              </h3>
              <p className="text-foreground/70 text-sm">
                Advanced artificial intelligence transforms your words into stunning visual art with unprecedented quality and creativity.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Palette className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Personal Gallery
              </h3>
              <p className="text-foreground/70 text-sm">
                Save, organize, and showcase your creations in your personal gallery. Build a collection of your artistic journey.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Lightning Fast
              </h3>
              <p className="text-foreground/70 text-sm">
                Generate high-quality images in seconds. No waiting, no delays—just instant creative satisfaction.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Secure & Private
              </h3>
              <p className="text-foreground/70 text-sm">
                Your creations and personal data are protected with enterprise-grade security and privacy measures.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Made with Love
              </h3>
              <p className="text-foreground/70 text-sm">
                Crafted by passionate creators who believe in the power of art and technology working in harmony.
              </p>
            </div>

            <div className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
              <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">
                Unlimited Potential
              </h3>
              <p className="text-foreground/70 text-sm">
                From abstract art to photorealistic scenes—explore endless possibilities limited only by your imagination.
              </p>
            </div>
          </div>

          {/* Technology Section */}
          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Powered by Innovation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">
                  Cutting-Edge AI
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Built on state-of-the-art machine learning models trained on millions of images, 
                  ensuring every creation is unique and high-quality.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">
                  User-Centric Design
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Our intuitive interface makes powerful AI accessible to everyone, 
                  from complete beginners to professional artists.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">
                  Continuous Learning
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Our AI continuously improves, learning from each interaction to deliver 
                  better results and understand your creative vision.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">
                  Responsible AI
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  We're committed to ethical AI practices, ensuring our technology promotes 
                  creativity while respecting artistic integrity and copyright.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="glass rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-4">
                AuraPrism was born from a simple belief: that creativity shouldn't be limited by technical skills or artistic training. 
                We envisioned a world where anyone could transform their imagination into beautiful, professional-quality artwork 
                with nothing more than words.
              </p>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our journey began with a team of passionate technologists, artists, and dreamers who saw the incredible potential 
                of AI to democratize creativity. We spent countless hours perfecting our algorithms, refining our interface, 
                and listening to our community to create something truly special.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Today, AuraPrism serves thousands of creators worldwide, from professional artists seeking inspiration to 
                hobbyists exploring their creative side. Every image generated through our platform represents someone's 
                unique vision brought to life—and that's what drives us forward every day.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-foreground/80 mb-6">
              Join thousands of creators who are already using AuraPrism to bring their visions to life.
            </p>
            
            <a
              href="/generate"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-purple-900 font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Creating Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;