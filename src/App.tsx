import './App.css';
import About from './components/About';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';

function App() {

  return (
    <div className='bg-black w-full min-h-screen'>
      <header className='shadow-lg w-full bg-black'>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <hr className='w-11/12 h-px bg-gray-900 mx-auto my-10 rounded-lg border-none' />
        <About />
        <hr className='w-11/12 h-px bg-gray-900 mx-auto my-10 rounded-lg border-none' />
        <ProjectsSection />
      </main>
      <footer className='px-14 py-6 text-center bg-gray-900 text-sm text-gray-300'>
        &copy; Copyright 2022-{(new Date()).getFullYear()} Vignesh
      </footer>
    </div>
  );
}

export default App;
