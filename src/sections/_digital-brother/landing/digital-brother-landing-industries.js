import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import TextMaxLine from 'src/components/text-max-line';

import Image from "../../../components/image";

// ----------------------------------------------------------------------

const SERVICES = [
  {
    name: 'Healthcare',
    icon: '/assets/images/expertise/healthcare.png',
    content:
      `We developed appointment systems for medical organizations, incorporating
      features like payments, analysis storage and export, as well as analytics and alarms.`,
  },
  {
    name: 'Marketing',
    icon: '/assets/images/expertise/marketing.png',
    content:
      `We seamlessly integrated with the marketing APIs from Google, Facebook,
      and Instagram, providing a robust account and ads management system.`,
  },
  {
    name: 'Telecommunications',
    icon: '/assets/images/expertise/telecommunications.png',
    content:
      `We developed billing software tailored for telecommunications companies
      with more than 1000 employees. Our system was designed to calculate metrics
      for multiple tenants simultaneously.`,
  },
];

// ----------------------------------------------------------------------

export default function DigitalBrotherLandingIndustries() {
  return (
    <Container
      id='industries'
      sx={{
        py: {xs: 7, md: 11},
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: {xs: 8, md: 5},
          mx: {xs: 'auto'},
          textAlign: {xs: 'center'},
        }}
      >
        <Typography variant="overline" sx={{color: 'text.disabled'}}>
          Our Expertise
        </Typography>

        <Typography variant="h2">Industries</Typography>

        <Typography sx={{color: 'text.secondary'}}>
          We are renowned for our extensive knowledge of Django libraries in the following industries:
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index}/>
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({service, index}) {
  const {name, icon, content, path} = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 3,
        textAlign: 'center',
        ...(index === 1 && {
          py: {xs: 3, md: 6},
        }),
        ...(index === 2 && {
          py: {xs: 3, md: 8},
          boxShadow: (theme) => ({md: theme.customShadows.z24}),
        }),
      }}
    >
      <Image
        visibleByDefault
        disabledEffect
        alt="marketing market"
        src={icon}
        ratio="1/1"
        sx={{
          borderRadius: 1.5,
          width: 120,
          height: 120,
        }}
      />

      <Stack spacing={1} sx={{my: 5}}>
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        <Typography variant="body2" sx={{color: 'text.secondary'}}>
          {content}
        </Typography>
      </Stack>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
