import React from 'react';
import { Card, CardContent } from './ui/card';
import { FileText, Code, Rocket } from 'lucide-react';
import { processSteps } from '../mock';

const iconMap = {
  FileText: FileText,
  Code: Code,
  Rocket: Rocket
};

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-blue-100">
            Get your business online in three simple steps
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.id}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-blue-300/50 -translate-x-1/2 z-0"></div>
                )}

                <Card className="bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative z-10">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <span className="text-2xl font-bold text-blue-600">{step.id}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-blue-100">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in animation-delay-500">
          <p className="text-xl text-white mb-6">Ready to get started?</p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
