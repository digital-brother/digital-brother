'use client';

import PropTypes from 'prop-types';

import DigitalBrotherLayout from "../../layouts/digital-brother";

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <DigitalBrotherLayout>{children}</DigitalBrotherLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
