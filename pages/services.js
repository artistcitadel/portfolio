import 'docs/src/modules/components/bootstrap';
import React from 'react';

// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import WithRoot from 'docs/src/modules/components/WithRoot';


function Services(props) {

    // const { classes } = props;

    return (
      <div className="no-print">
      <Head>
      <title>Services</title>
         <link rel="stylesheet" href="/static/media/css/noprint.css" media="screen, print"type="text/css"></link>
         {/* <link rel="stylesheet" href="/static/styles/reactpoland/rp.css" media="screen" type="text/css"></link> */}
         <link rel="stylesheet" href="/static/styles/reactkorea/rp1.css" media="screen" type="text/css"></link>
      </Head>
       
    <div class="services">
      <div id="services" class="w-layout-grid services-grid" style={{paddingTop:"3vh"}}>
        <div id="w-node-370b37f20840-40275c13" class="caption section">What can i do for you?</div>
        <div id="w-node-1548ac15ef62-40275c13" class="div-block-9">
         <div class="heading h2 blue">React Web Development</div>
         <div class="spacer-20"></div>
         <div class="copy">고객의 기대에 따라 최신 웹 응용 프로그램을 작성합니다,
         이 웹 응용 프로그램은 데스크탑에 국한되지 않으며 다운로드 할 필요가 없습니다. 
         잘 조정 된 웹 앱은 비즈니스를 다음 단계로 끌어 올릴 것이므로,
         콘텐츠와 품질을 신중하게 고려하여 만들어야합니다. 
         나는 백엔드 및 프론트 엔드 개발에 대해 경험과 열정을 가지고 있으며
         React JS에 전념하고 있습니다.</div>
      </div>
      <div id="w-node-344a232549e0-40275c13" class="div-block-9">
         <div class="heading h2 blue">React Mobile Development</div>
         <div class="spacer-20"></div>
         {/* <div class="copy">Mobile applications built and designed with care are rewarding even for the most demanding customers' expectations. Thanks to React Native, our professional team can assure a positive and high quality outcome based on your vision and expectations for your mobile app.</div> */}
         <div class="copy">곧 다가옵니다!</div>
      </div>
     </div>
  </div>

 </div>
);

}

export default WithRoot(Services);
// export default WithRoot(withStyles(styles)(About))
