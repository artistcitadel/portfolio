import 'docs/src/modules/components/bootstrap';
// import React from 'react';
import React, { Component } from 'react';

// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import WithRoot from 'docs/src/modules/components/WithRoot';


// function Process(props) {

    // const { classes } = props;
class Process extends Component {
  constructor(props){

    super(props);  
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

    render(){
    return (
      <div className="no-print">
      <Head>
      <title>Process</title>
         {/* <link rel="stylesheet" href="/static/media/css/noprint.css" media="screen, print"type="text/css"></link> */}
               {/* <link rel="stylesheet" href="/static/styles/reactpoland/rp.css" media="screen" type="text/css"></link> */}
         {/* <link rel="stylesheet" href="/static/styles/reactkorea/rp1.css" media="screen" type="text/css"></link> */}
      </Head>

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

  <div id="process" class="process" style={{backgroundColor:'black',paddingTop:'3vh'}} >
   <div class="caption section">How i work</div>
   <div class="process-steps">
      <div class="process-step _1">
         <div class="div-block-10">
            <div class="process-step-number">1</div>
            <div class="heading h2 blue">Analysis</div>
         </div>
         <div class="step-text">고객의 기대에 기반한 연구, 토론 및 적절히 선택된 기술은 가장 바람직한 제품을 도출하기 위해 결합하는 모든 요소입니다.</div>
      </div>
      <div class="process-step _2" style={{backgroundColor:'black'}}>
         <div class="div-block-10">
            <div class="process-step-number">2</div>
            <div class="heading h2 blue">Definition</div>
         </div>
         <div class="step-text">정의는 작업의 정확한 결과를 결정하여 고객과 프로젝트에 관련된 팀 모두가 명확하고 이해할 수있는 프로세스를 결정하는 프로세스입니다.</div>
      </div>
      <div class="process-step _3" style={{backgroundColor:'black'}}>
         <div class="div-block-10">
            <div class="process-step-number">3</div>
            <div class="heading h2 blue">Design</div>
         </div>
         <div class="step-text">제품의 브랜치, 유형 또는 꿈 모양을 실제 측면과 일치시키고 가장 적합하고 뛰어난 디자인과 사용자 흐름을 만듭니다</div>
      </div>
      <div class="process-step _4" style={{backgroundColor:'black'}}>
         <div class="div-block-10">
            <div class="process-step-number">4</div>
            <div class="heading h2 blue">Development</div>
         </div>
         <div class="step-text">개발 프로세스는 생산에서 가장 중요하고 중요한 부분 중 하나입니다. 고객의 설계 및 기술 요구를 명확하게 이해하여 제품을 만듭니다</div>
      </div>
   </div>
  </div>

 </div>
 );
 }
}

export default WithRoot(Process);
// export default WithRoot(withStyles(styles)(About))
