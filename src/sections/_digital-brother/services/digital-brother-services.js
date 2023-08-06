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
      'foresee corner cases. ',
    icon: '/assets/icons/ic_report.svg',
  },
  {
    title: 'Front-end',
    description:
      'We create MVPs fast using prebuilt UI frameworks, like Bootstrap, Material',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'Back-end',
    description:
      'Django has thousands of packages for majority of tasks in web development.',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'Quality Assurance',
    description:
      'We create test plans and write unit tests to guarantee system stability over the time. ',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'DevOps',
    description:
      'We setup deploy with nginx, gunicorn, AWS, Heroku, Digital Ocean, CI/CD. ',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Performance optimization',
    description:
      'We speed up sites by optimization of DB structure, ORM queries, algorithms. ',
    icon: '/assets/icons/ic_file.svg',
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
      <Typography variant="h2">Services Include</Typography>

      <Typography
        sx={{
          mt: 3,
          mx: 'auto',
          maxWidth: 480,
          color: 'text.secondary',
          mb: { xs: 8, md: 10 },
        }}
      >
        We cover almost every need our clients need during a website development.
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
