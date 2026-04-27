import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import TabSection from './components/TabSection';
import FooterNav from './components/FooterNav';
import CaseStudy from './pages/CaseStudy';
import './App.css';

function Home() {
  return (
    <>
      <main className="main-layout">
        <HeroSection />
        <StatsSection />
        <TabSection />
      </main>
      <FooterNav />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/:id" element={<CaseStudy />} />
    </Routes>
  );
}

export default App;
