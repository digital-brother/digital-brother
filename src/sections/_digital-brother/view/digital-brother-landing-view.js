'use client';

import DigitalBrotherTechnologies from "../digital-brother-technologies";
import DigitalBrotherServices from "../services/digital-brother-services";
import DigitalBrotherAbout from "../landing/digital-brother-about";
import DigitalBrotherContactInfo from "../contact/digital-brother-contact-info";
import DigitalBrotherTestimonial from "../testimonial/digital-brother-testimonial";
import DigitalBrotherLandingIndustries from "../landing/digital-brother-landing-industries";
import DigitalBrotherLandingCaseStudies from "../landing/digital-brother-landing-case-studies";

// ----------------------------------------------------------------------

export default function DigitalBrotherLandingView() {
  return (
    <>
      <DigitalBrotherAbout/>

      <DigitalBrotherLandingIndustries/>

      <DigitalBrotherTestimonial/>

      <DigitalBrotherServices/>

      <DigitalBrotherLandingCaseStudies/>

      <DigitalBrotherTechnologies/>

      <DigitalBrotherContactInfo/>
    </>
  );
}
