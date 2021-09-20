//import findPages from /* preval */ 'docs/src/modules/utils/findPages';

const pages = [
  {
    pathname: '/',
    //displayNav: false,
    title: 'HOME',
  },
  {
    pathname: '/about',
    //displayNav: false,
    title: 'About',
  },
  // {
  //   pathname: '/logs/work-log',
  //   title: 'WORK'
  // },
  {
    pathname: '/services',
    title:'Services'
  },
  {
    pathname: '/process',
    title:'Process'
  },
  {
    pathname: '/logs/workTable',
    title:'My Work'
  },
  // ,{
  //   pathname: '/logs/workList',
  //   title:'WORK'
  // },
  {
    pathname: '/logs/get-in-touch',
    title: 'Contact'
  },
  {
    pathname: '/case-studies',
    title: 'case-studies'
  },
  // {
  //   pathname: '/logs/work-log',
  //   title: 'WORK'
  // },
  // {
  //   pathname: '/logs',
  //   title: 'RESUME',
  //   children: [
  //     {
  //       pathname: '/logs/story',
  //       title: 'ABOUT'
  //     },
  //     {
  //       pathname: '/logs/work-log',
  //       title: 'WORK'
  //     },
  //     {
  //       pathname: '/logs/get-in-touch',
  //       title: 'CONTACT'
  //     }
  //   ],
  // },
  //  {
  //    pathname: '/cv',
  //    title: 'CV',
  //  },
  // {
  //   pathname: '/research',
  //   title: 'COVERVID',
  //   children: [
  //    /* {
  //       pathname: '/research/research',
  //       title: 'REACT',
  //     },*/
  //     {
  //       pathname: '/research/covervid'
  //     }
  //   ],
  // },
  {
    pathname: '/blogs',
    title: 'Blog',
    children: [
      {
        pathname: '/blogs/blog',
        title:'Blog'
      }
      ,
      {
        pathname: '/blogs/covervid',
        title: 'Covervid'
      }
      // ,
      // {
      //   pathname: '/blogs/whyReact',
      //   title: 'Why React'
      // },
      // {
      //   pathname: '/blogs/whyReactNative',
      //   title: 'Why ReactNative'
      // },
      // {
      //   pathname: '/blogs/arrow',
      //   title: 'Arrow Function'
      // },
      // {
      //   pathname: '/blogs/this',
      //   title: 'This keyword'
      // },
      // {
      //   pathname: '/blogs/async',
      //   title: 'Async await'
      // },
      // {
      //   pathname: '/blogs/const',
      //   title: 'Const not immutable'
      // },
      
    ],
  },
  { pathname: '/', displayNav: false, disableDrawer: true },
  /*{
    pathname: '/',
    displayNav: false,
    title: false,
  },*/
];

export default pages;
