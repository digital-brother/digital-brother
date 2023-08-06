import {useEffect} from 'react';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import {usePathname} from 'src/routes/hooks';
import Iconify from 'src/components/iconify';
import {useBoolean} from 'src/hooks/use-boolean';
import Scrollbar from 'src/components/scrollbar';

import {NAV} from '../../../config-layout';
import Image from "../../../../components/image";

import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavMobile({data}) {
  const pathname = usePathname();

  const mobileOpen = useBoolean();

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <IconButton onClick={mobileOpen.onTrue} sx={{ml: 1, color: 'inherit'}}>
        <Iconify icon="carbon:menu"/>
      </IconButton>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_VERTICAL,
          },
        }}
      >
        <Scrollbar>
          <Image
            src='/assets/logo/digital-brother.png'
            sx={{
              height: 40,
              width: 198,
              borderRadius: 1.5,
              mx: 2.5,
              my: 2,
            }}
          />

          <List component="nav" disablePadding>
            {data.map((link) => (
              <NavList key={link.title} item={link}/>
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}

NavMobile.propTypes = {
  data: PropTypes.array,
};
