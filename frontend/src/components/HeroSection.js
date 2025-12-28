import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { demoProjects } from '../mock';

const HeroSection = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold animate-pulse-slow">
                Digital Presence for Local Businesses
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Built Strong.
              <br />
              <span className="text-blue-600 dark:text-blue-400">Built Online.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
              We help local businesses build a strong online presence with simple, affordable websites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Your Website
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowDemoModal(true)}
                className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-6 text-lg rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  View Demo
                </span>
                <div className="absolute inset-0 border-2 border-blue-600 dark:border-blue-400 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="text-left">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Mobile Friendly</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">7 Days</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Avg Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzY2OTA0MDY3fDA&ixlib=rb-4.1.0&q=85"
                alt="Professional web design"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-bounce-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-bounce-slow animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <Dialog open={showDemoModal} onOpenChange={setShowDemoModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Our Portfolio</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 mt-4">
            {demoProjects.map((project) => (
              <div key={project.id} className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold mb-2 text-gray-500">Before</p>
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} before`}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2 text-green-600">After</p>
                    <img
                      src={project.afterImage}
                      alt={`${project.title} after`}
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
