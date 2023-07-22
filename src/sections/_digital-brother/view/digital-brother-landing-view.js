'use client';

import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from 'src/_mock';

import MarketingTeam from "../../_marketing/team/marketing-team";
import MarketingNewsletter from "../../_marketing/marketing-newsletter";
import MarketingOurClients from "../../_marketing/marketing-our-clients";
import PricingMarketing from "../../pricing/marketing/pricing-marketing";
import MarketingLandingHero from "../../_marketing/landing/marketing-landing-hero";
import BlogMarketingLatestPosts from "../../blog/marketing/marketing-latest-posts";
import MarketingLandingFaqs from "../../_marketing/landing/marketing-landing-faqs";
import MarketingLandingAbout from "../../_marketing/landing/marketing-landing-about";
import MarketingTestimonial from "../../_marketing/testimonial/marketing-testimonial";
import MarketingLandingProcess from "../../_marketing/landing/marketing-landing-process";
import MarketingLandingFreeSEO from "../../_marketing/landing/marketing-landing-free-seo";
import MarketingLandingServices from "../../_marketing/landing/marketing-landing-services";
import MarketingLandingCaseStudies from "../../_marketing/landing/marketing-landing-case-studies";

// ----------------------------------------------------------------------

export default function DigitalBrotherLandingView() {
  return (
    <>
      <MarketingLandingHero/>

      <MarketingOurClients brands={_brands}/>

      <MarketingLandingAbout/>

      <MarketingLandingServices/>

      <MarketingLandingProcess/>

      <MarketingLandingCaseStudies caseStudies={_caseStudies.slice(-6)}/>

      <MarketingTeam members={_members}/>

      <PricingMarketing plans={_pricingMarketing}/>

      <MarketingLandingFaqs/>

      <MarketingTestimonial testimonials={_testimonials}/>

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)}/>

      <MarketingLandingFreeSEO/>

      <MarketingNewsletter/>
    </>
  );
}
