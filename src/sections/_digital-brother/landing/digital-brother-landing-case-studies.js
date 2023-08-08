import {m} from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {alpha, useTheme} from '@mui/material/styles';

import {paths} from 'src/routes/paths';
import Image from 'src/components/image';
import {RouterLink} from 'src/routes/components';
import {useResponsive} from 'src/hooks/use-responsive';
import {varHover, varTranHover} from 'src/components/animate';

// ----------------------------------------------------------------------

const TITLE = [
  'Bank of America',
  'Technology Nixon',
  'Turn Key Smart',
  'Digital Shose',
  'Action Car',
  'The Zone UI',
  'Minimal UI',
  'Network Firefox',
];

const CONTENT = `
<h4>Project Brief</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>

<br/>
<br/>

<h4>How We Work</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<br/>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>

<br/>
<br/>
<h4>Results</h4>
<br/>
<p>Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringilla mauris sit amet nibh. Phasellus viverra nulla ut metus varius laoreet.</p>
<ul>
    <li>Medical Assistant</li>
    <li>Web Designer</li>
    <li>Dog Trainer</li>
    <li>Nursing Assistant</li>
    <li>President of Sales</li>
</ul>
`;

const caseStudies = [
  {
    title: "Medical appointment scheduler",
    category: "Healthcare",
    description: `The project enabled global doctor appointment bookings. Users
    choose a medical center and doctor, pay, and upload a barcode ticket. They
    then attend appointments and view summaries later. A separate process lets
    medical centers join the network, involving quizzes created by ministry
    workers, completed by representatives, and reviewed by auditors.`,
    coverUrl: `/assets/images/digital-brother/healthcare.jpeg`,
  },
  {
    title: "Billing system",
    category: "Telecommunications",
    description: `An ETL process was conducted, connecting to databases, SFTP
    servers, and CRM storages to extract data into zipped files. Transformation
    included unpacking and calculating metrics like call details and PSTN usage.
    Loading uploaded the results to SFTP servers. Due to large data volume,
    multiple machines were used, synchronized with central storage to avoid
    duplicate calculations.`,
    coverUrl: `/assets/images/digital-brother/billing.jpeg`,
  },
  {
    title: "Perfumery online shop",
    category: "E-commerce",
    description: `Users could search for perfumes by scent type, manufacturer,
    and size, and add them to a cart. After providing delivery and payment details,
    they confirmed the order. Business owners had access to accounting reports
    and order statuses, while shop administrators could add or edit products
    and blog pages. This system provided a seamless shopping experience for
    customers and efficient management for owners.`,
    coverUrl: `/assets/images/digital-brother/e-commerce.jpeg`,
  },
]

export default function DigitalBrotherLandingCaseStudies() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }} id='caseStudies'>
      <Container
        sx={{
          overflow: 'hidden',
          pt: {xs: 5, md: 10},
          pb: {xs: 5},
        }}
      >
        <Stack
          spacing={3}
          sx={{
            textAlign: {xs: 'center'},
          }}
        >
          <Typography variant="overline" sx={{color: 'text.disabled'}}>
            Our Work
          </Typography>

          <Typography variant="h2">Case Studies</Typography>
        </Stack>

        <Grid
          spacing={{xs:3, md: 5, lg: 7}}
          container
          alignItems="center"
          sx={{
            py: {xs: 8, md: 10},
          }}
          justifyContent="center"
        >
          <Grid container xs={12} md={8} justifyContent="center">
            <Grid xs={12}>
              <LargeItem caseStudy={caseStudies[0]}/>
            </Grid>

            <Grid xs={12}>
              <LargeItem caseStudy={caseStudies[1]}/>
            </Grid>

            <Grid xs={12}>
              <LargeItem caseStudy={caseStudies[2]}/>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
//
// DigitalBrotherLandingCaseStudies.propTypes = {
//   caseStudies: PropTypes.array,
// };

// ----------------------------------------------------------------------

function LargeItem({caseStudy}) {
  return (
    <Paper
      sx={{
        display: 'grid',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      <Box sx={{p: 0.75, display: 'flex', alignItems: 'center'}}>
        <Image alt="cover" src={caseStudy.coverUrl} ratio='1/1' sx={{borderRadius: 2}}/>
      </Box>

      <Stack alignItems="flex-end" justifyContent="space-between" sx={{p: 3, pt: 5, height: 1}}>
        <div>
          <Typography variant="overline" sx={{color: 'primary.main'}}>
            {caseStudy.category}
          </Typography>

          <Typography variant="h4" sx={{mt: 1, mb: 2}}>
            {caseStudy.title}
          </Typography>

          <Typography variant="body2" sx={{color: 'text.secondary'}}>
            {caseStudy.description}
          </Typography>
        </div>

      </Stack>
    </Paper>
  );
}

LargeItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};

// ----------------------------------------------------------------------

function SmallItem({caseStudy, square}) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Link component={RouterLink} href={paths.marketing.caseStudy}>
      <Paper
        component={m.div}
        whileHover="hover"
        sx={{
          position: 'relative',
          cursor: 'pointer',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            textAlign: 'center',
          }}
        >
          <Typography variant="overline" sx={{opacity: 0.48}}>
            {caseStudy.category}
          </Typography>
          <Typography variant="h6">{caseStudy.title}</Typography>
        </Stack>

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src={caseStudy.coverUrl}
            ratio={(square && '1/1') || (mdUp && '3/4') || '1/1'}
            overlay={alpha(theme.palette.grey[900], 0.48)}
          />
        </m.div>
      </Paper>
    </Link>
  );
}

SmallItem.propTypes = {
  caseStudy: PropTypes.shape({
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    title: PropTypes.string,
  }),
  square: PropTypes.bool,
};
