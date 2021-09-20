import React from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Router, { useRouter } from 'next/router';
// import { rewriteUrlForNextExport } from 'next/dist/next-server/lib/router/rewrite-url-for-export';
import { withStyles, useTheme } from '@material-ui/core/styles';
import NProgress from 'nprogress';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiLink from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
// import NoSsr from '@material-ui/core/NoSsr';
// import LanguageIcon from '@material-ui/icons/Translate';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Divider from '@material-ui/core/Divider';
// import ColorsIcon from '@material-ui/icons/InvertColors';
// import Brightness4Icon from '@material-ui/icons/Brightness4';
// import Brightness7Icon from '@material-ui/icons/Brightness7';
// import GitHubIcon from '@material-ui/icons/GitHub';
import NProgressBar from '@material-ui/docs/NProgressBar';
// import FormatTextdirectionLToR from '@material-ui/icons/FormatTextdirectionLToR';
// import FormatTextdirectionRToL from '@material-ui/icons/FormatTextdirectionRToL';
// import Link from 'docs/src/modules/components/Link';
// import AppDrawer from 'docs/src/modules/components/AppDrawer';
// import Notifications from 'docs/src/modules/components/Notifications';
import MarkdownLinks from 'docs/src/modules/components/MarkdownLinks';
// import { LANGUAGES_LABEL } from 'docs/src/modules/constants';
import { pathnameToLanguage } from 'docs/src/modules/utils/helpers';
import { useChangeTheme } from 'docs/src/modules/components/ThemeContext';
import PageContext from 'docs/src/modules/components/PageContext';
import Typography from '@material-ui/core/Typography';
// import {isMobile} from 'react-device-detect';
import Head from 'next/head';

const LOCALES = { zh: 'zh-CN', pt: 'pt-BR', es: 'es-ES' };
const CROWDIN_ROOT_URL = 'https://translate.material-ui.com/project/material-ui-docs/';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const styles = (theme) => ({
  '@global': {
    '#main-content': {
      outline: 0,
    },
  },
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.level1,
  },
  typography: {
    flexGrow: 2,
        align: "center"
      }
      ,
  grow: {
    flex: '1 1 auto',
  },
  skipNav: {
    position: 'fixed',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create('top', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen,
    }),
    left: theme.spacing(2),
    top: theme.spacing(-10),
    zIndex: theme.zIndex.tooltip + 1,
    '&:focus': {
      top: theme.spacing(2),
      transition: theme.transitions.create('top', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    '@media print': {
      display: 'none',
    },
  },
  appBar: {
    color: theme.palette.type === 'light' ? null : '#fff',
    backgroundColor: theme.palette.type === 'light' ? null : theme.palette.background.level2,
    transition: theme.transitions.create('width'),

      // position: 'fixed',
      // left: '0%',
      // top: '0%',
      // right: '0%',
      // bottom: 'auto',
      // zIndex: '10',
      // display: '-webkit-box',
      // display: '-webkit-flex',
      // display: '-ms-flexbox',
      // display: 'flex',
      // height: '88px',
      // marginRight: 'auto',
      // marginLeft: 'auto',
      // paddingRight: '16px',
      // paddingLeft: '16px',
      // webkitBoxPack: 'justify',
      // webkitJustifyContent: 'space-between',
      // msFlexPack: 'justify',
      // justifyContent: 'spaceBetween',
      // webkitBoxAlign: 'center',
      // webkitAlignItems: 'center',
      // msFlexAlign: 'center',
      // alignItems: 'center',
      // backgroundColor: '#fff',
      // boxShadow: '0 1px 5px 0 rgba(0, 32, 86, 0.1)'
  },
  
  language: {
    margin: theme.spacing(0, 0.5, 0, 1),
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  appBarHome: {
    boxShadow: 'none',
  },
  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 240px)',
    },
  },
  drawer: {
    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      width: 240,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },

  nonetexttransform: {
    button: {
      textTransform: 'none'
    }
  }

});

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    
    lineHeight: 1.5,
    
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    
    // '&:focus': {
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    // },
  },
})(Button);

function AppFrame(props) {
  const { children, classes, disableDrawer = false } = props;
  const theme = useTheme();
  const t = useSelector((state) => state.options.t);
  const userLanguage = useSelector((state) => state.options.userLanguage);

  const crowdInLocale = LOCALES[userLanguage] || userLanguage;

  const [languageMenu, setLanguageMenu] = React.useState(null);
  const handleLanguageIconClick = (event) => {
    setLanguageMenu(event.currentTarget);
  };
  const handleLanguageMenuClose = (event) => {
    if (event.currentTarget.nodeName === 'A') {
      document.cookie = `userLanguage=noDefault;path=/;max-age=31536000`;
    }
    setLanguageMenu(null);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const changeTheme = useChangeTheme();
  const handleTogglePaletteType = () => {
    const paletteType = theme.palette.type === 'light' ? 'dark' : 'light';

    changeTheme({ paletteType });
  };
  const handleToggleDirection = () => {
    changeTheme({ direction: theme.direction === 'ltr' ? 'rtl' : 'ltr' });
  };

  const router = useRouter();
  // const { canonical } = pathnameToLanguage(rewriteUrlForNextExport(router.asPath));
  const { activePage } = React.useContext(PageContext);
//  console.log('activePage',activePage);
  let disablePermanent = false;
  let navIconClassName = '';
  let appBarClassName = classes.appBar;

  if (activePage?.disableDrawer === true || disableDrawer === true) {
    disablePermanent = true;
    appBarClassName += ` ${classes.appBarHome}`;
  } else {
    navIconClassName = classes.navIconHide;
    appBarClassName += ` ${classes.appBarShift}`;
  }


  const renderRightMenu = (url,text, classes) => (
    (activePage.pathname==='/'? <a href={url} class="nav-link">{text}</a> : <a href={url} class="nav-link dark">{text}</a>)
      
  
     
    // <a href={url} className="nav-link">{text}</a>
    //   <BootstrapButton
    //   component="a"
    //   color="inherit"
    //   href={url}
    // >
    //     <Typography className={classes.nonetexttransform} color="inherit">
    //       {text}
    //     </Typography>
    // </BootstrapButton>
 )

const appStyleBar={background: 'transparent', boxShadow: 'none'};
const appStyleBar1={boxShadow: '0 1px 5px 0 rgba(0, 32, 86, 0.1)',backgroundColor: '#fff'};
// const appStyleBar1={
//   // willChange: opacity, transform,
//   // opacity: 1, 
//   // transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d"
//   background: 'transparent',
//   willChange: "opacity, transform; opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
// };
const title = _.isUndefined(activePage.title)?'':activePage.title;
// const title = typeof activePage.title == 'undefined' ? "":activePage.title;
// const title = "";
// console.log('activePage',activePage);
  return (
    <div className={classes.root}>
      <Head>
       {/* <link rel="stylesheet" href="/static/styles/reactpoland/rp.css" media="screen" type="text/css"></link> */}
       <link rel="stylesheet" href="/static/styles/reactpoland/rp1.css" media="screen" type="text/css"></link>
    </Head>
      <NProgressBar />
      <CssBaseline />
      <MuiLink color="secondary" className={classes.skipNav} href="#main-content">
        {t('skipToContent')}
      </MuiLink>
      <MarkdownLinks />
      <AppBar className={appBarClassName} style={(title==='HOME') ? appStyleBar : appStyleBar1} >
        <Toolbar>
        {/* {isMobile &&
                  <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={navIconClassName}
                >
                    <MenuIcon />
                  </IconButton>
                } */}
          {title !== null && title==='HOME' && 
          <a id="w-node-d54626925fd3-40275c13" href="/" class="logo w-inline-block"></a>
              }
         {title !== null && title!=='HOME' && 
          <a href="/" class="logo nav w-inline-block w--current"></a>
              }
          {/* {title !== null && title!=='HOME' && (
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                      { title }
                    </Typography>
                  )}
                  {title !== null && title==='HOME' && (
                    <Typography className={classes.title1} variant="h6" color="inherit" noWrap>
                      {'React Korea'}
                    </Typography>
                  )} */}

          <div className={classes.grow} />
          
          {/* <Tooltip title={t('changeLanguage')} enterDelay={300}>
            <Button
              color="inherit"
              aria-owns={languageMenu ? 'language-menu' : undefined}
              aria-haspopup="true"
              aria-label={t('changeLanguage')}
              onClick={handleLanguageIconClick}
              data-ga-event-category="header"
              data-ga-event-action="language"
            >
              <LanguageIcon />
              <span className={classes.language}>
                {LANGUAGES_LABEL.filter((language) => language.code === userLanguage)[0].text}
              </span>
              <ExpandMoreIcon fontSize="small" />
            </Button>
          </Tooltip>
          <NoSsr defer>
            <Menu
              id="language-menu"
              anchorEl={languageMenu}
              open={Boolean(languageMenu)}
              onClose={handleLanguageMenuClose}
            >
              {LANGUAGES_LABEL.map((language) => (
                <MenuItem
                  component="a"
                  data-no-link="true"
                  href={language.code === 'en' ? canonical : `/${language.code}${canonical}`}
                  key={language.code}
                  selected={userLanguage === language.code}
                  onClick={handleLanguageMenuClose}
                  lang={language.code}
                  hrefLang={language.code}
                >
                  {language.text}
                </MenuItem>
              ))}
              <Box my={1}>
                <Divider />
              </Box>
              <MenuItem
                component="a"
                data-no-link="true"
                href={
                  userLanguage === 'en'
                    ? `${CROWDIN_ROOT_URL}`
                    : `${CROWDIN_ROOT_URL}${crowdInLocale}#/staging`
                }
                rel="noopener nofollow"
                target="_blank"
                key={userLanguage}
                lang={userLanguage}
                hrefLang="en"
                onClick={handleLanguageMenuClose}
              >
                {`${t('helpToTranslate')}`}
              </MenuItem>
            </Menu>
          </NoSsr>
          <Notifications />
          <Tooltip title={t('editWebsiteColors')} enterDelay={300}>
            <IconButton
              color="inherit"
              aria-label={t('editWebsiteColors')}
              component={Link}
              naked
              href="/customization/color/#playground"
              data-ga-event-category="header"
              data-ga-event-action="colors"
            >
              <ColorsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t('github')} enterDelay={300}>
            <IconButton
              component="a"
              color="inherit"
              href="https://github.com/mui-org/material-ui"
              aria-label={t('github')}
              data-ga-event-category="header"
              data-ga-event-action="github"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t('toggleTheme')} enterDelay={300}>
            <IconButton
              color="inherit"
              onClick={handleTogglePaletteType}
              aria-label={t('toggleTheme')}
              data-ga-event-category="header"
              data-ga-event-action="dark"
            >
              {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Tooltip>
          <Tooltip title={t('toggleRTL')} key={theme.direction} enterDelay={300}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleToggleDirection}
              aria-label={t('toggleRTL')}
              data-ga-event-category="header"
              data-ga-event-action="rtl"
            >
              {theme.direction === 'rtl' ? (
                <FormatTextdirectionLToR />
              ) : (
                <FormatTextdirectionRToL />
              )}
            </IconButton>
          </Tooltip> */}
          {/* {!isMobile && renderRightMenu('/', 'HOME',classes)}
          {!isMobile && renderRightMenu('/about', 'ABOUT',classes)}
          {!isMobile && renderRightMenu('/logs/workTable', 'WORK',classes)}
          {!isMobile && renderRightMenu('/logs/get-in-touch', 'CONTACT',classes)}
          {!isMobile && renderRightMenu('/blogs/blog', 'BLOG',classes)} */}
          <div className={classes.typography}>
          {/* {renderRightMenu('/', 'Home',classes)} */}
            {/* {renderRightMenu('/about', 'About me',classes)} */}
            {renderRightMenu('/about', 'To about',classes)}
          {/* {renderRightMenu('/services', 'Services',classes)} */}
          {/* {renderRightMenu('/process', 'Process',classes)} */}
          {/* {renderRightMenu('/logs/workTable', 'My work',classes)} */}
            {/* {renderRightMenu('/case-studies', 'My work',classes)} */}
            {renderRightMenu('/case-studies', '약력',classes)}
          {renderRightMenu('/blogs/blog', '블로그',classes)}
          {/* {renderRightMenu('/process', '공정',classes)} */}
            {/* {renderRightMenu('/logs/get-in-touch', 'Contact',classes)} */}
            {renderRightMenu('/logs/get-in-touch', 'Contact',classes)}
          </div>

          {title !== null && title==='HOME' && 
            <Tooltip title={t('github')} enterDelay={300}>
            <IconButton
              component="a"
              color="inherit"
              href="https://github.com/artistcitadel/cbioportal-egov"
              aria-label={t('github')}
              data-ga-event-category="header"
              data-ga-event-action="github"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          }
         {title !== null && title !== 'HOME' &&
          <Tooltip title={t('github')} enterDelay={300}>
            <IconButton
              component="a"
              color="#1976d2"
              href="https://github.com/artistcitadel/cbioportal-egov"
              aria-label={t('github')}
              data-ga-event-category="header"
              data-ga-event-action="github"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          } 
        </Toolbar>
      </AppBar>
      {/* <AppDrawer
        className={disablePermanent ? '' : classes.drawer}
        disablePermanent={disablePermanent}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        mobileOpen={mobileOpen}
      /> */}
      {children}
    </div>
  );
}

AppFrame.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  disableDrawer: PropTypes.node,
};

export default withStyles(styles)(AppFrame);
