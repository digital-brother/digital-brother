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

import {_mock, _tags} from "src/_mock";
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

const _caseStudies = TITLE.map((_, index) => {
  const galleryImgs = [
    _mock.image.marketing(0),
    _mock.image.marketing(1),
    _mock.image.marketing(2),
    _mock.image.marketing(3),
    _mock.image.marketing(4),
    _mock.image.marketing(5),
  ];

  return {
    id: _mock.id(index),
    content: CONTENT,
    title: TITLE[index],
    category: _tags[index],
    createdAt: _mock.time(index),
    website: 'https://example.com/',
    description: _mock.description(index),
    heroUrl: '/assets/images/marketing/marketing_post_hero.jpg',
    coverUrl: `/assets/images/marketing/marketing_${index + 1}.jpg`,
    how_we_work:
      'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
    results:
      'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
    galleryImgs,
  };
});

const galleryImgs = [...Array(6)].map(
  (_, index) => _mock.image.marketing(index)
);

// const caseStudies = _caseStudies.slice(-6)
const caseStudies = [
  {
    title: TITLE[1],
    category: "Healthcare",
    description: `Created a portal for governmental medical organizations.
                  Leaded a team of 3 persons.
                  Designed microservice architecture on Flask, PostgreSQL,
                  SQLAlchemy, flask-restful, marshmallow.
                  Implemented OpenID Connect client protocol for custom client IdP.
                  Setup deploy process using GitLab CI, Docker, nginx, SSL.
                  Covered 86% of application with pytest, added Swagger
                  documentation, logging, PEP8 formatting with black, flake8.`,
    coverUrl: `/assets/images/digital-brother/healthcare.jpeg`,
  },
  {
    title: TITLE[2],
    category: "Telecommunications",
    description: `Created a billing software for telecommunications company.
                  Worked in a team of 11 persons. Created and optimized queries
                  to ElasticSearch, primary data analysis with Kibana
                  Searched and retrieved data from AWS S3. Wrote and refactored
                  OOP code for all steps of ETL-process.
                  Setup and adjusted virtual environment services with Docker,
                  Vagrant.
                  Worked with threading/multiprocessing issues, improved system
                  scalability.
                  Boosted up business metrics calculation process within pandas.
                  Created detailed billing reports on customer demand.`,
    coverUrl: `/assets/images/digital-brother/billing.jpeg`,
  },
  {
    title: TITLE[3],
    category: "E-commerce",
    description: `Worked on projects to develop European internet-shops.
                  The systems processed over 350 orders daily.
                  Created database schema design, developed buy/sell
                  functionality, integrated the system with Facebook API,
                  and performed server configuration.
                  Team size was five people.
                  Tools and technologies included Python, Django,
                  PostgreSQL, Celery, Redis, JavaScript, AJAX, HTML,
                  CSS, Git, Trello, nginx, Gunicorn, and supervisor.
                  Implemented site gamification, using asyncronous
                  data processing.
                  Implemented a functionality of a cart: add, remove,
                  make an order, cancel it.`,
    coverUrl: `/assets/images/digital-brother/e-commerce.jpeg`,
  },
]

export default function DigitalBrotherLandingCaseStudies() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
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
          <Grid container xs={8} justifyContent="center">
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
