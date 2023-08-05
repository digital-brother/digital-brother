'use client';

import MarketingNewsletter from "../../_marketing/marketing-newsletter";
import DigitalBrotherTechnologies from "../digital-brother-technologies";
import DigitalBrotherContactInfo from "../contact/digital-brother-contact-info";
import DigitalBrotherLandingHero from "../landing/digital-brother-landing-hero";
import DigitalBrotherTestimonial from "../testimonial/digital-brother-testimonial";
import DigitalBrotherLandingServices from "../landing/digital-brother-landing-services";
import DigitalBrotherServicesInclude from "../services/digital-brother-services-include";
import MarketingLandingFreeSEO from "../../_marketing/landing/marketing-landing-free-seo";
import DigitalBrotherLandingCaseStudies from "../landing/digital-brother-landing-case-studies";

// ----------------------------------------------------------------------

export default function DigitalBrotherLandingView() {
  return (
    <>
      <DigitalBrotherLandingHero/>

      <DigitalBrotherLandingServices/>

      <DigitalBrotherTestimonial/>

      <DigitalBrotherServicesInclude/>

      <DigitalBrotherLandingCaseStudies/>

      <DigitalBrotherTechnologies/>

      <DigitalBrotherContactInfo/>

      <MarketingLandingFreeSEO/>

      <MarketingNewsletter/>
    </>
  );
}
