'use client';

import {
  _brands,
  _members,
  _marketingPosts,
  _pricingMarketing,
} from 'src/_mock';

import MarketingTeam from "../../_marketing/team/marketing-team";
import MarketingNewsletter from "../../_marketing/marketing-newsletter";
import DigitalBrotherTechnologies from "../digital-brother-technologies";
import PricingMarketing from "../../pricing/marketing/pricing-marketing";
import DigitalBrotherLandingHero from "../landing/digital-brother-landing-hero";
import BlogMarketingLatestPosts from "../../blog/marketing/marketing-latest-posts";
import DigitalBrotherTestimonial from "../testimonial/digital-brother-testimonial";
import MarketingLandingFaqs from "../../_marketing/landing/marketing-landing-faqs";
import DigitalBrotherLandingServices from "../landing/digital-brother-landing-services";
import DigitalBrotherServicesInclude from "../services/digital-brother-services-include";
import MarketingLandingFreeSEO from "../../_marketing/landing/marketing-landing-free-seo";
import DigitalBrotherLandingCaseStudies from "../landing/digital-brother-landing-case-studies";

// ----------------------------------------------------------------------

export default function DigitalBrotherLandingView() {
  return (
    <>
      <DigitalBrotherLandingHero/>

      <DigitalBrotherTechnologies technologies={_brands}/>

      <DigitalBrotherLandingServices/>

      <DigitalBrotherTestimonial />

      <DigitalBrotherServicesInclude/>

      <DigitalBrotherLandingCaseStudies/>

      <MarketingTeam members={_members}/>

      <PricingMarketing plans={_pricingMarketing}/>

      <MarketingLandingFaqs/>

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)}/>

      <MarketingLandingFreeSEO/>

      <MarketingNewsletter/>
    </>
  );
}
