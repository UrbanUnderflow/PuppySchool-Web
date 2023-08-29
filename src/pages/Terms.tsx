import React, { FC } from 'react';

const Terms: FC = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{color: '#E0FE10', backgroundColor: '#192126'}}>
    <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
    <p className="mb-4">By using our app you agree to all of <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noreferrer" target="_blank" style={{color: 'blue', textDecoration: 'underline'}}>Apple's Standard Terms(EULA)</a></p>
    
    <h2 className="text-2xl font-bold mb-4">Apple's Terms</h2>
    <ol className="mb-4">
      {/* ...existing list items... */}
    </ol>
    
    <p className="mb-4">
      By using Puppy School, you are agreeing to the following terms and conditions.
    </p>
    <h2 className="text-2xl font-bold mb-4">Usage Responsibilities:</h2>
    <p className="mb-4">
      You are responsible for your own account and all activity occurring under it. You must use Puppy School in compliance with all laws, regulations, and rules.
    </p>
    <h2 className="text-2xl font-bold mb-4">Fitness Disclaimer:</h2>
    <p className="mb-4">
      The training schedule provided by Puppy School is for informational purposes only and we are not veterinarians. Consult with a healthcare professional or a qualified veterinarian before starting any new training routine for your puppy.
    </p>
    <h2 className="text-2xl font-bold mb-4">Content Rights:</h2>
    <p className="mb-4">
      Puppy School retains rights to all content uploaded to the app and can use it for improving the service, research, and promotional purposes.
    </p>
    <h2 className="text-2xl font-bold mb-4">Intellectual Property:</h2>
    <p className="mb-4">
      Puppy School owns all intellectual property rights in and to the service, including but not limited to text, graphics, logos, and software. Users are prohibited from copying, distributing, or creating derivative works without the express permission of Puppy School.
    </p>

  </div>
);

export default Terms;

