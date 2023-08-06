import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Logo from 'src/components/logo';
import {usePathname} from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === '/';

  const simpleFooter = (
    <Container sx={{py: 8, textAlign: 'center'}}>
      <Logo single/>

      <Typography variant="caption" component="div" sx={{color: 'text.secondary'}}>
        © 2023. All rights reserved
      </Typography>
    </Container>
  );

  const mainFooter = (
    <>
      <Divider/>

      <Container>
        <Stack
          spacing={2.5}
          direction={{xs: 'column', md: 'row'}}
          justifyContent="space-between"
          sx={{py: 3, textAlign: 'center'}}
        >
          <Typography variant="caption" sx={{color: 'text.secondary'}}>
            © 2023. All rights reserved
          </Typography>
        </Stack>
      </Container>
    </>
  );

  return <footer>{isHome ? simpleFooter : mainFooter}</footer>;
}

// ----------------------------------------------------------------------
