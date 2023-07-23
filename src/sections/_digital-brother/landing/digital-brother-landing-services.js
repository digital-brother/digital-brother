import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {paths} from 'src/routes/paths';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';
import Image from "../../../components/image";

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const SERVICES = [
  {
    name: 'Healthcare',
    icon: '/assets/images/expertise/healthcare.png',
    content:
      'We create appointment system for medical organizations. ' +
      'Payments, analysis storage and export, analytics and alarms are included.',
    path: paths.marketing.services,
  },
  {
    name: 'Marketing',
    icon: '/assets/images/expertise/marketing.png',
    content:
      'We integrate with Google, Facebook, Instagram marketing API, ' +
      'implement account and ads management system.',
    path: paths.marketing.services,
  },
  {
    name: 'Telecommunications',
    icon: '/assets/images/expertise/telecommunications.png',
    content:
      'We created software for billing for 1000+ headcount telecommunications companies. ' +
      'We calculate metrics for multiple tenants in parallel.',
    path: paths.marketing.services,
  },
  // {
  //   name: 'Social Marketing',
  //   icon: '/assets/icons/service/ic_service_bullhorn.svg',
  //   content: 'Nunc nonummy metus. Donec elit libero',
  //   path: paths.marketing.services,
  // },
];

// ----------------------------------------------------------------------

export default function DigitalBrotherLandingServices() {
  return (
    <Container
      sx={{
        py: {xs: 5, md: 10},
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: {xs: 8, md: 5},
          mx: {xs: 'auto', md: 'unset'},
          textAlign: {xs: 'center', md: 'unset'},
        }}
      >
        <Typography variant="overline" sx={{color: 'text.disabled'}}>
          Our Expertise
        </Typography>

        <Typography variant="h2">Industries</Typography>

        <Typography sx={{color: 'text.secondary'}}>
          We are well-known and have a good understanding of Django libraries in following industries:
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
          width: 88,
          height: 88,
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
