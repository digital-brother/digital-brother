import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import {useResponsive} from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function DigitalBrotherContactInfo() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box sx={{bgcolor: 'background.neutral', overflow: 'hidden'}} id='contacts'>
      <Container
        sx={{
          py: {xs: 6, md: 11},
          // display: {md: 'flex'},
          // alignItems: {md: 'center'},
          // height: {md: `100vh`},
          // justifyContent: "space-around",
          // overflow: 'hidden',
        }}

      >
        <Typography variant="h2" align="center">
          Contacts
        </Typography>

        <Box display="flex" justifyContent="center">
          <Stack direction="row" spacing={8} mt={5}>
            {mdUp && (
              <Image
                alt="marketing contact"
                src="/assets/illustrations/illustration_marketing_contact.svg"
                sx={{maxWidth: 250}}
              />
            )}

            <Stack direction="column" spacing={2}>
              <Stack spacing={2} direction="row" alignItems="flex-start">
                <Iconify icon="carbon:location" width={28}/>

                <Stack spacing={0.5}>
                  <Stack spacing={1} direction="row" alignItems="center">
                    <Typography variant="h6">Visit us</Typography>

                    <Link sx={{lineHeight: 0}} href='https://goo.gl/maps/2rr6ektLKjbXPUNW9' target='blank'>
                      <Iconify icon="carbon:launch" width={18}/>
                    </Link>
                  </Stack>

                  <Typography variant="body2">Volodymyrska 47, Kyiv, Ukraine, 01001</Typography>
                </Stack>
              </Stack>

              <Stack spacing={2} alignItems="flex-start" direction="row">
                <Iconify width={28} icon="carbon:mobile"/>
                <Stack spacing={0.5}>
                  <Typography variant="h6">Call us</Typography>
                  <Typography variant="body2">+38 (095) 507 82 62</Typography>
                </Stack>
              </Stack>

              <Stack spacing={2} alignItems="flex-start" direction="row">
                <Iconify width={28} icon="carbon:email"/>
                <Stack spacing={0.5}>
                  <Typography variant="h6">Talk to us</Typography>
                  <Link color="inherit" variant="body2" href="mailto:oleksandr.shuryhin@digital-brother.io">
                    oleksandr.shuryhin@digital-brother.io
                  </Link>
                </Stack>
              </Stack>

              <Stack spacing={2} alignItems="flex-start" direction="row">
                <Iconify width={28} icon="carbon:time"/>
                <Stack spacing={0.5}>
                  <Typography variant="h6">Working Hours</Typography>
                  <Typography variant="body2">Mon-Fri: 9 am — 6 pm</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
