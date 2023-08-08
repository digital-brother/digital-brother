import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const SERVICES = [
  {
    title: 'Business analysis',
    description:
      'We analyze requirements, create flows for different user types, ' +
      'anticipate corner cases.',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Front-end',
    description:
      'We quickly create MVPs using prebuilt frameworks such as React, Material.',
    icon: '/assets/icons/ic_web_programming.svg',
  },
  {
    title: 'Back-end',
    description:
      'Django offers thousands of packages for the majority of tasks in web ' +
      'development.',
    icon: '/assets/icons/ic_chip.svg',
  },
  {
    title: 'Quality Assurance',
    description:
      'We create test plans and write unit tests to ensure system stability ' +
      'over time.',
    icon: '/assets/icons/ic_search.svg',
  },
  {
    title: 'DevOps',
    description:
      'We set up deployment using tools like Nginx, Gunicorn, AWS, ' +
      'and CI/CD.',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Performance optimization',
    description:
      'We enhance site speed through the optimization of database structure, ' +
      'ORM queries, and algorithms.',
    icon: '/assets/icons/ic_optimization.svg',
  },
];

// ----------------------------------------------------------------------

export default function DigitalBrotherServices() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 10, md: 15 },
      }}
      id='services'
    >
      <Typography variant="h2">Services</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        We cater to nearly every need our clients have during website development.
      </Typography>

      <Box
        sx={{
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {SERVICES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
