import React from 'react';
const Home = () => (
  <div className="h-screen overflow-hidden relative flex flex-col"
       style={{background: 'url(/background.png) no-repeat center center fixed', backgroundSize: 'cover'}}>
    <div className="pt-10 px-6 sm:px-24 flex justify-between">
  <div className="flex items-center text-white font-bold">
    <img src="/logo.png" alt="Puppy School Logo" className="w-12 h-12 mr-4 rounded" />
    Puppy School
  </div>
  <div className="text-white font-bold">
    <a href="mailto:puppyschoolapp@gmail.com" className="text-white">Contact Us</a>
  </div>
</div>


    <div className="flex flex-col sm:flex-row p-6 sm:p-20">
      <div className="sm:pl-48 pt-10 text-white text-4xl sm:text-6xl">
        Pawsibly <br />The Best<br />Training <br />For Your Pup
        <div className="mt-10">
          <button className="px-8 py-2 h-12 text-sm bg-purple-600 text-white font-bold rounded">
            Download Now
          </button>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <img src="/phoneMobile.png" alt="Phone Mobile" className="w-full sm:hidden h-auto" />
        <img src="/phone.png" alt="Phone" className="hidden sm:block w-full sm:w-[1048px] h-auto" />
      </div>
    </div>


    <footer className="absolute bottom-0 z-20 w-full h-20 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-center space-y-2">
        <p>© {new Date().getFullYear()} Puppy School. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/terms" className="text-blue-400 hover:text-blue-600">Terms of Use</a>
          <a href="/privacy" className="text-blue-400 hover:text-blue-600">Privacy Policy</a>
        </div>
      </div>
    </footer>
  </div>
);




export default Home;
