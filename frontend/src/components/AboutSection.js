import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    "Focus on local businesses",
    "Simple, reliable solutions",
    "Affordable pricing",
    "No technical hassle"
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              About Fordgeit
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              We Build Digital Homes for Local Businesses
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At Fordgeit, we believe every local business deserves a strong online presence. 
              We specialize in creating professional, mobile-friendly websites that help shops, 
              restaurants, clinics, and service providers connect with their customers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our mission is simple: make getting online easy, affordable, and effective. 
              No technical jargon, no hidden costs, just honest service and quality work.
            </p>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in animation-delay-200">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-green-100">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">7</div>
              <div className="text-purple-100">Days Avg Delivery</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-orange-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
