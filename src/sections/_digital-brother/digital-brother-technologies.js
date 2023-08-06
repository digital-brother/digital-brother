import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

const TECHNOLOGIES_NAMES = [
  'python',
  'django',
  'flask',
  'js',
  'react',
  'next',
  'drf',
  'mongodb',
  'postgres',
  'celery',
  'redis',
  'elasticsearch',
  'docker',
  'aws',
  'nginx',
]

const TECHNOLOGIES = TECHNOLOGIES_NAMES.map((technology, index) => ({
  id: 1,
  name: technology,
  image: `/assets/logo/${technology}.png`,
}));

// ----------------------------------------------------------------------

export default function DigitalBrotherTechnologies() {
  return (
    <Container
      sx={{
        py: { xs: 7, md: 11 },
      }}
      id='technologies'
    >
      <Stack alignItems="center" spacing={5}>
        <Typography variant="h2">Our tech stack</Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ maxWidth: 800, overflow: 'hidden' }}
        >
          {TECHNOLOGIES.map((technology) => (
            <Box key={technology.id}>
              <Image
                alt={technology.name}
                src={technology.image}
                sx={{
                  height: 45,
                  mx: { xs: 2, md: 4 },
                  my: { xs: 2.5, md: 4 },
                }}
              />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
