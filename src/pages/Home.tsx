import React from 'react';
const Home = () => (
  <div className="h-screen overflow-hidden relative flex flex-col" 
       style={{background: 'url(/background.png) no-repeat center center fixed', backgroundSize: 'cover'}}>
      <div className="flex justify-between">
        <div className="text-white font-bold">Puppy School</div>
        <div>Contact Us</div>
      </div>


<div className="flex">
  <div className="pl-48 text-white text-6xl">
    Pawsibly <br />The Best<br />Training <br />For Your Pup
    <div className="mt-10">
    <button className="px-8 py-2 w-32 h-8 bg-purple-600 text-white font-bold rounded">Download</button>
    </div>
  </div>
  <div className="">
    <img src="/phone.png" alt="Phone" className="w-[1048px] h-auto" />
  </div>
</div>




     
    <footer className="absolute bottom-0 z-20 w-full h-20 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-center space-y-2">
        <p>© {new Date().getFullYear()} QuickLifts. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/terms" className="text-blue-400 hover:text-blue-600">Terms of Use</a>
          <a href="/privacy" className="text-blue-400 hover:text-blue-600">Privacy Policy</a>
        </div>
      </div>
    </footer>
  </div>
);


export default Home;
