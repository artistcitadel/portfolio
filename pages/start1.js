import React from 'react';
//import PropTypes from 'prop-types';
// import withCovervid from './withCovervid';
import withCovervid from 'docs/src/modules/withCovervid';
import Head from 'next/head';
import Typed from "react-typed";
import {isIE} from 'react-device-detect';
//import '../styles/_index.scss';

function Getintrotxt(props){
  //return <div>The Leading React SOFTWARE Follower <br/>FULL STACK WEB DEVELOPER.</div>;
  // return <div>I am Leading React Software <br /> Consulting Developer</div>;
  return <div>Full stack developer</div>;
}
class Start extends React.Component {
    constructor(props) {
      super(props);
    }

render() {

  let introtxt1='Quality and experience for hire since 2013'
	return (
	<div>
    <Head>
          {/* <link rel="stylesheet" href="/static/media/css/fonts/foundation-icons/foundation-icons.css" />
		  <link rel="stylesheet" href="/static/media/css/base.css" />
		  <link rel="stylesheet" href="/static/media/css/petra.css" />
		  <link rel="stylesheet" href="/static/media/css/rk.css" /> */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CRoboto:300,regular,500,700&amp;subset=latin-ext,latin" media="all"></link>
          <link rel="stylesheet" href="/static/styles/reactkorea/rp1.css" media="screen" type="text/css"></link>
    </Head>
  {/*!loaded&&loading*/}

  {/* <section id="home" className="home"> */}
    
  <div class="hero-section">
   <div class="w-layout-grid hero-grid">
      {/* <a id="w-node-d54626925fd3-40275c13" href="#" class="logo w-inline-block"></a>
      <div id="w-node-e1c964b897cf-40275c13" class="links"><a href="#about" class="nav-link">About us</a><a href="#services" class="nav-link">Services</a><a href="#process" class="nav-link">Process</a><a href="#case-studies" class="nav-link">Our work</a><a href="/careers" class="nav-link">Careers</a><a href="#contact" class="nav-link">Contact</a></div> */}
      <h1 id="w-node-963af5b2b966-40275c13" class="heading h1 main-slogan">나는 웹 애플리케이션 소프트웨어 전문가 입니다</h1>
      <div id="w-node-6d78a85a7764-40275c13" class="slogan">Quality and experience for hire since 2013</div>
      {/* <a id="w-node-4b27b17bdf1b-40275c13" href="/letstalk" class="button-white hide w-button">Let's talk</a> */}
      
   </div>
</div>

      {/* </section> */}
    	</div>
	  );
   }
	}

export default withCovervid(Start);
