import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AppFrame from 'docs/src/modules/components/AppFrame';
import Link from 'docs/src/modules/components/Link';
import Head from 'docs/src/modules/components/Head';
import loadScript from 'docs/src/modules/utils/loadScript';
import compose from 'docs/src/modules/utils/compose';
import Start from './start';
let dependenciesLoaded = false;

function loadDependencies() {
  if (dependenciesLoaded) {
    return;
  }

  dependenciesLoaded = true;

  loadScript('https://buttons.github.io/buttons.js', document.querySelector('head'));
  loadScript('https://platform.twitter.com/widgets.js', document.querySelector('head'));
}

// const styles = theme => ({
const useStyles = makeStyles(
  (theme) => ({
  root: {
    flex: '1 0 100%',
  },
  drawer: {
    width: 0,
  },
  hero: {
    paddingTop: 64,
    color: theme.palette.primary.main,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(20),
      flexDirection: 'row',
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },
  title: {
    marginLeft: -12,
    whiteSpace: 'nowrap',
    letterSpacing: '.7rem',
    textIndent: '.7rem',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 28,
    },
  },
  logo: {
    flexShrink: 0,
    width: 120,
    height: 120,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(8),
      width: 220,
      height: 200,
    },
  },
  button: {
    marginTop: theme.spacing(4),
  },
  social: {
    padding: theme.spacing(2, 0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 21,
    boxSizing: 'content-box',
    '& span': {
      display: 'flex',
      marginRight: theme.spacing(1),
    },
    '& a': {
      color: theme.palette.background.paper,
    },
  },
}),
{ name: 'LandingPage' },
);

// const GettingStartedLink = React.forwardRef((props, ref) => {
//   return <Link href="/getting-started/installation" naked prefetch ref={ref} {...props} />;
// });

// class HomePage extends React.Component {
//   componentDidMount() {
//     if (window.location.hash !== '' && window.location.hash !== '#main=content') {
//       window.location.replace(`https://v0.material-ui.com/${window.location.hash}`);
//     }

//     loadDependencies();
//   }

//   render() {
    // const { classes, t } = this.props;

    export default function LandingPage(props) {
      // React.useEffect(() => {
      //   loadDependencies();
      // }, []);

    const t = useSelector((state) => state.options.t);
    const classes = useStyles();
    return (
      <AppFrame classes={{ drawer: classes.drawer }}>
        <div className={classes.root}>
          <Head />
          <main id="main-content" tabIndex="-1">
            <Start />
          </main>

        </div>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "React-Korea",
  "url": "https://lovingreact.netlify.app/",
  "logo": "",
  "sameAs": [
   
  ]
}
          `,
          }}
        />
      </AppFrame>
    );
  // }
}

// HomePage.propTypes = {
//   classes: PropTypes.object.isRequired,
//   t: PropTypes.func.isRequired,
// };

// export default compose(
//   connect(state => ({
//     t: state.options.t,
//   })),
//   withStyles(styles),
// )(HomePage);
