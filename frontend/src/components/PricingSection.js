import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Check, IndianRupee, Star } from 'lucide-react';
import { pricingPlans } from '../mock';

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleViewDetails = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            Affordable Plans for Every Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transparent pricing with no hidden costs
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.popular
                  ? 'border-4 border-blue-600 dark:border-blue-400 shadow-2xl scale-105'
                  : 'border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl'
              } bg-white dark:bg-gray-800`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current" />
                  Most Popular
                </div>
              )}

              <CardHeader className="pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline">
                  <IndianRupee className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-1" />
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {plan.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/ {plan.duration}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white'
                  }`}
                  onClick={() => handleViewDetails(plan)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 animate-fade-in animation-delay-300">
          <p className="text-gray-600 dark:text-gray-400">
            All plans include free consultation • No setup fees • Money-back guarantee
          </p>
        </div>
      </div>

      {/* Plan Details Modal */}
      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent className="max-w-2xl">
          {selectedPlan && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                  {selectedPlan.name}
                  {selectedPlan.popular && (
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  )}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedPlan.description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                {/* Price */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                  <div className="flex items-baseline justify-center">
                    <IndianRupee className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-6xl font-bold text-blue-600 dark:text-blue-400">
                      {selectedPlan.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xl text-gray-600 dark:text-gray-400 ml-3">/ {selectedPlan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">What's Included</h3>
                  <div className="space-y-3">
                    {selectedPlan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Info */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Payment Details</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>• GST applicable as per government regulations</p>
                    <p>• Secure payment processing</p>
                    <p>• Multiple payment options available</p>
                    <p>• Invoice provided after payment</p>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className="w-full py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 hover:scale-105"
                  onClick={() => {
                    setSelectedPlan(null);
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started with {selectedPlan.name}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
