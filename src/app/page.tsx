import AboutPage from '@/components/About';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import React from 'react';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <AboutPage />
    </>
  );
}
