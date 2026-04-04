import React from "react";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("../components/Hero/Hero"));
const Services = lazy(() => import("../components/Services/Services"));
const Brands = lazy(() => import("../components/Brands/Brands"));
const Contact = lazy(() => import("../components/Contact/Contact"));
const ReservationForm = lazy(
  () => import("../components/Reservation/ReservationForm"),
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <Suspense
        fallback={<div className="h-screen bg-gray-100 animate-pulse"></div>}
      >
        <Hero />
      </Suspense>

      <Suspense
        fallback={<div className="h-96 bg-gray-100 animate-pulse"></div>}
      >
        <Services />
        <Brands />
        <ReservationForm />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
