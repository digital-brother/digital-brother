import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {useTheme} from '@mui/material/styles';
import Container from '@mui/material/Container';

import {bgBlur} from 'src/theme/css';
import Image from 'src/components/image';
import {useResponsive} from 'src/hooks/use-responsive';
import {useOffSetTop} from 'src/hooks/use-off-set-top';

import {HEADER} from '../config-layout';
import {RouterLink} from "../../routes/components";
import HeaderShadow from '../common/header-shadow';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import {navConfig} from './config-navigation';


// ----------------------------------------------------------------------

export default function Header({headerOnDark}) {
  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({color: theme.palette.background.default}),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
        >
          <Box sx={{lineHeight: 0, position: 'relative', mr: 5}}>
            <Link component={RouterLink} href='#about'>
              <Image
                src='/assets/logo/digital-brother.png'

                sx={{
                  height: 40,
                  width: 198,
                  borderRadius: 1.5,
                }}
              />
            </Link>
          </Box>

          {mdUp && <NavDesktop data={navConfig}/>}

          {!mdUp && <NavMobile data={navConfig}/>}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow/>}
    </AppBar>
  );
}

Header.propTypes = {
  headerOnDark: PropTypes.bool,
};
