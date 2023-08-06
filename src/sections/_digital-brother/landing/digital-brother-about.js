import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {alpha, useTheme} from '@mui/material/styles';

import Image from 'src/components/image';
import {bgGradient} from 'src/theme/css';
import {useResponsive} from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function DigitalBrotherAbout() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      id='about'
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          py: 15,
          display: {md: 'flex'},
          alignItems: {md: 'center'},
          height: {md: `100vh`},
          justifyContent: "space-around",
        }}
      >
        <Grid container columnSpacing={{xs: 0, md: 10}}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: {xs: 'center', md: 'left'},
            }}
          >
            <Typography variant="overline" sx={{color: 'secondary.main'}}>
              Web development
            </Typography>

            <Typography variant="h1" sx={{my: 3}}>
              Python Django
            </Typography>

            <Typography sx={{color: 'text.secondary'}}>
              We help tech companies to develop sites with Python and Django.
              E-commerce, healthcare, telecom solutions.
            </Typography>

            <Typography variant="overline" component="div" sx={{mt: 3}}>Oleksandr Shuryhin</Typography>
            <Typography variant="overline" component="div">CEO at Digital Brother</Typography>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="/assets/images/portrait/oleksandr-shuryhin.jpg"
                ratio="1/1"
                sx={{
                  borderRadius: 1.5,
                }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
