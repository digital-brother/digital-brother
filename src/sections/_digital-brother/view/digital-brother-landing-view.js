'use client';

import {
  _brands,
  _members,
  _caseStudies,
  _marketingPosts,
  _pricingMarketing,
  _digitalBrotherTestimonials,
} from 'src/_mock';

import MarketingTeam from "../../_marketing/team/marketing-team";
import MarketingNewsletter from "../../_marketing/marketing-newsletter";
import MarketingOurClients from "../../_marketing/marketing-our-clients";
import PricingMarketing from "../../pricing/marketing/pricing-marketing";
import DigitalBrotherLandingHero from "../landing/digital-brother-landing-hero";
import DigitalBrotherTestimonial from "../testimonial/digital-brother-testimonial";
import BlogMarketingLatestPosts from "../../blog/marketing/marketing-latest-posts";
import MarketingLandingFaqs from "../../_marketing/landing/marketing-landing-faqs";
import DigitalBrotherLandingServices from "../landing/digital-brother-landing-services";
import DigitalBrotherServicesInclude from "../services/digital-brother-services-include";
import MarketingLandingFreeSEO from "../../_marketing/landing/marketing-landing-free-seo";
import MarketingLandingCaseStudies from "../../_marketing/landing/marketing-landing-case-studies";

// ----------------------------------------------------------------------

export default function DigitalBrotherLandingView() {
  return (
    <>
      <DigitalBrotherLandingHero/>

      <MarketingOurClients brands={_brands}/>

      <DigitalBrotherLandingServices/>

      <DigitalBrotherTestimonial testimonials={_digitalBrotherTestimonials}/>

      <DigitalBrotherServicesInclude/>

      <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)}/>

      <MarketingTeam members={_members}/>

      <PricingMarketing plans={_pricingMarketing}/>

      <MarketingLandingFaqs/>

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)}/>

      <MarketingLandingFreeSEO/>

      <MarketingNewsletter/>
    </>
  );
}
