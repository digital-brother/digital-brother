'use client';

import DigitalBrotherTechnologies from "../digital-brother-technologies";
import DigitalBrotherServices from "../services/digital-brother-services";
import DigitalBrotherLandingHero from "../landing/digital-brother-landing-hero";
import DigitalBrotherContactInfo from "../contact/digital-brother-contact-info";
import DigitalBrotherTestimonial from "../testimonial/digital-brother-testimonial";
import DigitalBrotherLandingIndustries from "../landing/digital-brother-landing-industries";
import DigitalBrotherLandingCaseStudies from "../landing/digital-brother-landing-case-studies";

// ----------------------------------------------------------------------

export default function DigitalBrotherLandingView() {
  return (
    <>
      <DigitalBrotherLandingHero/>

      <DigitalBrotherLandingIndustries/>

      <DigitalBrotherTestimonial/>

      <DigitalBrotherServices/>

      <DigitalBrotherLandingCaseStudies/>

      <DigitalBrotherTechnologies/>

      <DigitalBrotherContactInfo/>
    </>
  );
}
