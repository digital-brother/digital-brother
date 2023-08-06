import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import TestimonialItem from './digital-brother-testimonial-item';

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    id: 1,
    name: 'David Grover',
    role: 'CEO at Teachers Foundation',
    avatarUrl: '/assets/images/avatar/brendon-roskam.jpeg',
    ratingNumber: 5,
    review: `Digital Brother has shown again and again a high level of professionalism
            and expertise in the subject of Python/Django development. It was my
            third project with them and I am very satisfied and pleased with the work
            they have provided. Communication wise, they were very responsive and ready
            to help whenever asked. I can't stress enough my positive experience with
            them but for any other projects I may have in the future, guys will be the
            first one to consult.`,
  },
    {
    id: 2,
    name: 'Brandon Roskam',
    role: 'CEO at Opencourse',
    avatarUrl: '/assets/images/avatar/david-grover.jpeg',
    ratingNumber: 5,
    review: `This was a short, live consultation. We spent one hour screen sharing and
    exploring the problem, and Oleksandr spent one more hour looking into a remaining
    problem on his own. What I was most impressed with was his ability to to research
    and problem solve in only a few hours (between this an our previous job) what was
    taking other developers many hours to figure out! I actually hired several other to
    solve this problem before Oleksandr came along, and I regret not hiring him first!
    I will definitely be hiring him again to help with me again in the future!`,
  },
]

export default function DigitalBrotherTestimonial() {
  const carousel = useCarousel({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...CarouselDots({
      sx: {
        mt: { xs: 4, md: 5 },
      },
    }),
  });

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }} id='testimonials'>
      <Container
        sx={{
          position: 'relative',
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Testimonials
          </Typography>

          <Typography variant="h2">Who Love Our Work</Typography>
        </Stack>

        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              opacity: { xs: 0, md: 1 },
            },
          }}
          rightButtonProps={{
            sx: {
              opacity: { xs: 0, md: 1 },
            },
          }}
        >
          <Grid container spacing={10} justifyContent="center">
            <Grid xs={12} md={8}>
              <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                {TESTIMONIALS.map((testimonial) => (
                  <TestimonialItem key={testimonial.id} testimonial={testimonial} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </CarouselArrows>
      </Container>
    </Box>
  );
}

DigitalBrotherTestimonial.propTypes = {
  testimonials: PropTypes.array,
};
