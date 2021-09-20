import 'docs/src/modules/components/bootstrap';
import React, { Component } from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import WithRoot from 'docs/src/modules/components/WithRoot';
import Button from '@material-ui/core/Button';
import Head from 'next/head';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontFamily: 'Roboto, sans-serif',
  },
});

// function CaseStudies() {
  class CaseStudies extends Component {

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
render(){
    return (
        <div className="no-print">
          {/*  <Head>
             <title>Works</title>
             <link rel="stylesheet" href="/static/media/css/noprint.css" media="screen, print"type="text/css"></link>
             <link rel="stylesheet" href="/static/styles/reactkorea/rp1.css" media="screen" type="text/css"></link>
           </Head> */}

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

        {/* <div id="case-studies" class="case-studies">
            <div class="w-layout-grid case-studies-grid">
                <div id="w-node-68948ed42d73-40275c13" class="caption section">Case studies</div>
                <div id="w-node-e53e44cbe625-40275c13" class="case-studies-block">
                    <a href="/case-studies/experty-app" class="case-study-wrap w-inline-block">
                        <div class="case-study-thumbnail _3"></div>
                        <div class="heading h3">cancer bio portal</div>
                        <div class="spacer-20"></div>
                        <div class="copy small">MSKCC Bio Portal을 부분 벤치마킹하여 빌드한 진료연구 포탈.</div>
                        <div class="button-link-dark">full case study</div>
                    </a>
                    <a href="/case-studies/nursefly" class="case-study-wrap w-inline-block">
                        <div class="case-study-thumbnail _2"></div>
                    
                        <div class="spacer-20"></div>
                    
                    </a>
                    <a href="/case-studies/iron-app" class="case-study-wrap last w-inline-block">
                        <div class="case-study-thumbnail _1"></div>
                    
                        <div class="spacer-20"></div>
                    
                    </a>
                </div>
                
                <a target="_blank" id="w-node-9c1e105e3b31-40275c13" href="/static/cv.doc" download="오세영.doc" class="button-white w-button">
                    Other projects
                </a>
            </div>
        </div> */}


<div id="case-studies" class="case-studies" style={{paddingTop:'3vh'}} >
   <div class="caption section">Case studies</div>

<div class="text-block-grid gray" style={{marginTop:'40px'}}>
   <div id="w-node-dc2d40ea3a06-40275c13" class="photo _3"></div>
   <div id="w-node-dc2d40ea3a07-40275c13" class="photo _4"></div>
   <div id="w-node-dc2d40ea3a08-40275c13" class="text-block center">
      <div class="copy">
      {/* Cancer Center Medical Research Portal PCR Genome Testing Equipment Insurance Coverage Expansion and Adeno Carishinoma Molecular Full Sequence Sequencing Analysis
      As it became possible, a portal for sharing knowledge with the Memorial Cancer Center and Mutation of genetic mutation trends in patients.
      Graph expression and ct scan, surgery, biopsy, pathology examination, etc.
      By expressing the treatment as a timeline graph for each month by year, it is possible to analyze the ease of treatment and first visit, return visit, and survival follow-up by patient. */}
      Cancer Center Medical Research Portal PCR 유전체 검사 장비 보험 적용 범위 확장 및 Adeno Carishinoma Molecular Full Sequence Sequencing 분석이
      가능 해짐에 따라 메모리얼 암 센터와 지식을 공유하고 환자의 유전 적 변이 동향에 대한 변이를 추적 관찰 연구하기 위한 포털.
      그래프 표현 및 CT 스캔, 수술, 생검, 병리 검사 등
      치료를 월별 타임 라인 그래프로 표현하여 환자 별 치료의 용이성 및 첫 방문, 재 방문, 생존 추적 분석이 가능.
      </div>
   </div>
</div>


<div id="case-studies" class="case-studies">
            <div class="w-layout-grid case-studies-grid">
                {/* <div id="w-node-68948ed42d73-40275c13" class="caption section">Case studies</div> */}
                <div id="w-node-e53e44cbe625-40275c13" class="case-studies-block">
                    <a href="/case-studies/experty-app" class="case-study-wrap w-inline-block">
                        <div class="case-study-thumbnail _4"></div>
                        <div class="heading h3">문화정보다부처공유플랫폼</div>
                        <div class="spacer-20"></div>
                        <div class="copy small">Establish a meta-information platform for collecting cultural information at the national level and making it a database to serve the public. Take a step further from the existing standardized data, collect unstructured data, systematically classify it, and process it to aggregate and express the collection rate.</div>
                        {/* <div class="button-link-dark">full case study</div> */}
                    </a>
                    <a href="/case-studies/nursefly" class="case-study-wrap w-inline-block">
                        <div class="case-study-thumbnail _5"></div>
                        <div class="heading h3">Global MES-MOBILE</div>
                        <div class="spacer-20"></div>
                        {/* <div class="copy small">Global Production Management System A project that builds everything from production to resource management and quality management for production plants that are spread all over the world. Here, a production management mobile web is implemented so that local workers can conveniently perform work. In particular, mobile barcode scanning at the time of shipment was the highlight of the use of mobile devices. Proceed with Agile Development Methodology Among Agile development methodologies, the sprint method was used to meet the tight delivery schedule, and the atmosphere of the project constantly moving forward quickly without delay was maximized in the Agile methodology.</div> */}
                        <div class="copy small">글로벌 생산 관리 시스템 전 세계에 퍼져있는 생산 공장의 생산에서 자원 관리 및 품질 관리에 이르기까지 모든 것을 구축하는 프로젝트입니다. 여기서 생산 관리 모바일 웹을 구현하여 현지 근로자가 편리하게 업무를 수행 할 수 있도록합니다. 특히 출하 당시 모바일 바코드 스캔은 모바일 기기 사용의 하이라이트였습니다. 애자일 개발 방법론 진행 애자일 개발 방법론 중 빠듯한 딜리버리 일정을 맞추기 위해 스프린트 방식을 사용했으며, 애자일 방법론에서는 지체없이 빠르게 진행되는 프로젝트 분위기를 극대화했습니다.</div>

                    
                        <div class="spacer-20"></div>
                    
                    </a>
                    <a href="/case-studies/iron-app" class="case-study-wrap last w-inline-block">
                        <div class="case-study-thumbnail _6"></div>
                        <div class="heading h3">클라우드플랫폼</div>
                        <div class="spacer-20"></div>
                        <div class="copy small">AliCloud product relay shopping mall AliCloud product relay shopping mall called the second Amazon.AliCloud creates its own shopping mall in Korea and sells cloud products.Membership Management A total of hardware infrastructure from customer center to cloud configuration sales Membership management ,Login, customer center (notice, QNA, forum, training application, FAQ)</div>
                    
                        <div class="spacer-20"></div>
                    
                    </a>
                </div>
                
                {/* <a target="_blank" id="w-node-9c1e105e3b31-40275c13" href="/static/cv.doc" download="오세영.doc" class="button-white w-button">
                    Other projects
                </a> */}
            </div>
        </div>


  {/* <div id="case-studies" class="case-studies">
    <div class="w-layout-grid case-studies-grid" style={{gridRowGap:'13px', paddingTop:'4vh'}}>
      <a target="_blank" id="w-node-9c1e105e3b31-40275c13" href="/static/cv.doc" download="오세영.doc" class="button-white w-button" >
         Other projects
     </a>
    </div>
  </div> */}
  <div id="case-studies" class="case-studies">
    <div class="w-layout-grid case-studies-grid" style={{gridRowGap:'13px', paddingTop:'4vh'}}>
      <a id="w-node-9c1e105e3b31-40275c13" href="/logs/workTable"  class="button-white w-button" >
         Other projects
     </a>
    </div>
  </div>


  </div>
</div>

    );
}
  }

export default WithRoot(CaseStudies);
