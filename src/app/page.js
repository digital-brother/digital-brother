import DigitalBrotherLandingView from "src/sections/_digital-brother/view/digital-brother-landing-view";

import DigitalBrotherLayout from "../layouts/digital-brother";

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Digital Brother',
};

export default function DigitalBrotherLandingPage() {
  return (
    <DigitalBrotherLayout>
      <DigitalBrotherLandingView />
    </DigitalBrotherLayout>
  );
}
