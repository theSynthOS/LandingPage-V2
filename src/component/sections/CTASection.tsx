import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied clients who have already taken their business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 