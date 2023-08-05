import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import {useResponsive} from 'src/hooks/use-responsive';
import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

export default function DigitalBrotherContactInfo() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        py: 10,
        // display: {md: 'flex'},
        // alignItems: {md: 'center'},
        // height: {md: `100vh`},
        // justifyContent: "space-around",
        bgcolor: 'background.neutral',
        // overflow: 'hidden',
      }}

    >
      <Typography variant="h2" align="center">
        Contact us
      </Typography>

      <Box display="flex" justifyContent="center">
        <Stack direction="row" spacing={8} mt={5}>
          <Image
            alt="marketing contact"
            src="/assets/illustrations/illustration_marketing_contact.svg"
            sx={{maxWidth: 250}}
          />

          <Stack direction="column" spacing={2}>
            <Stack spacing={2} direction="row" alignItems="flex-start">
              <Iconify icon="carbon:location" width={28}/>

              <Stack spacing={0.5}>
                <Stack spacing={1} direction="row" alignItems="center">
                  <Typography variant="h6">Visit us</Typography>

                  <Link sx={{lineHeight: 0}}>
                    <Iconify icon="carbon:launch" width={18}/>
                  </Link>
                </Stack>

                <Typography variant="body2">508 Bridle Avenue Newnan, GA 30263e</Typography>
              </Stack>
            </Stack>

            <Stack spacing={2} alignItems="flex-start" direction="row">
              <Iconify width={28} icon="carbon:mobile"/>
              <Stack spacing={0.5}>
                <Typography variant="h6">Call us</Typography>
              </Stack>
            </Stack>

            <Stack spacing={2} alignItems="flex-start" direction="row">
              <Iconify width={28} icon="carbon:email"/>
              <Stack spacing={0.5}>
                <Typography variant="h6">Talk to us</Typography>
                <Link color="inherit" variant="body2" href="mailto:hello@example.com">
                  hello@example.com
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
  );
}
