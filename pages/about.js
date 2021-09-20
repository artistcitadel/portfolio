import 'docs/src/modules/components/bootstrap';
import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import WithRoot from 'docs/src/modules/components/WithRoot';

//function About(props) {
  class About extends Component {

    // const { classes } = props;
constructor(props){
  super(props);
  
  // this.renderOverlay = this.renderOverlay.bind(this);
  this.state = {
    Show: true
  }
}

resolveAfterXSeconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, x * 1000);
  });
}

async componentDidMount() {
   await this.resolveAfterXSeconds(1);
   this.setState({Show:false});
}
renderOverlay(){
  return (
  <div class="next-overlay-wrapper opened">
      <div class="next-overlay-backdrop"></div>
      <div class="next-overlay-inner next-loading-tip" aria-hidden="false">
          <div class="next-loading-indicator">
            <div class="load-container load">
                <div class="loader"></div>
            </div>
          </div>
          <div class="next-loading-tip-content"></div>
          <div class="next-loading-tip-placeholder"></div>
      </div>
      </div>
  );
}
render() {
      return (
        <div className="no-print">

        {this.state.Show &&  
        <div class="next-overlay-wrapper opened">
          <div class="next-overlay-backdrop"></div>
          <div class="next-overlay-inner next-loading-tip" aria-hidden="false">
              <div class="next-loading-indicator">
                  <div class="load-container load">
                    <div class="loader"></div>
                  </div>
                </div>
                <div class="next-loading-tip-content"></div>
                <div class="next-loading-tip-placeholder"></div>
          </div>
        </div>
       }
      
      {/* <Head>
      <title>Who am i</title>
         <link rel="stylesheet" href="/static/media/css/noprint.css" media="screen, print"type="text/css"></link>
         <link rel="stylesheet" href="/static/styles/reactkorea/rp1.css" media="screen" type="text/css"></link>
         <link rel="stylesheet" href="/static/media/css/dialog.css" media="screen" type="text/css"></link>
      </Head> */}

      <div id="about" class="informations" style={{paddingTop:"3vh"}}>
        <div class="w-layout-grid about-us-grid">
          <div id="w-node-231cdfa27680-40275c13" class="caption section">To about</div>
          {/* <div id="w-node-a2b857f2e834-40275c13" class="heading h2 hero">
            당신의 아이디어를 기반으로 웹을 빌드합니다.
            스케일러블한 디지털 애플리케이션을 만듭니다.</div> */}
        </div>
      </div>
      <div class="text-block-grid gray">
        <div id="w-node-897e1d66670c-40275c13" class="photo _2"></div>
        <div id="w-node-5abe0ee3a1b7-40275c13" class="photo _1"></div>
        <div id="w-node-9e91b423690f-40275c13" class="text-block center">
          <div class="copy">
          My name is Say-young Oh
          Experienced software engineer and full stack developer,

          have a bachelor's degree in computer science and has years of experience in a wide range of projects, 
          from pure Java development to web applications only.
          A career focused solely on the pure web is a key component of success

          Completed military service, acquired an information processing engineer, and managed career with KOSA

          Built my homepage with React JS, the technology I am interested in, and i have experience and passion for backend and frontend development.
          <div style={{textAlign:"left"}}>
          우송대학교 컴퓨터 과학 전공 <br />
          육군병장<br />
          정보처리기사<br />
          Full stack developer <br />
          프리랜서<br />
          </div>
          </div>
        </div>
      </div>

 </div>
);

          }
}
  

export default WithRoot(About);
// export default WithRoot(withStyles(styles)(About))
