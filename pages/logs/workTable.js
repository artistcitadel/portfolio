import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import WithRoot from 'docs/src/modules/components/WithRoot';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// import WorkView from 'pages/logs/WorkView';
import WorkView from 'docs/src/modules/components/logs/WorkView';
import Head from 'next/head';
import activeCore from 'docs/src/workCore';
// import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing * 3,
    marginBottom: theme.spacing * 8,
    overflowX: 'auto',
    fontFamily: 'Josefin Sans',
  },
  table: {
    minWidth: 700,
    
  },
  link: {
    // margin: theme.spacing.unit,
  },

  '& > *': {
    margin: theme.spacing(1),
  },
  button: {
    textTransform: "none"
  }

});

let id = 0;
function createData(name, period, mother, incompany, software) {
  id += 1;
  return { id, name, period, mother, incompany, software };
}

const rows = [
  // createData('다부처표준연계시스템','2018.09~2019.02', '문정원','와이즈서텍', 'Java,Tibero,전자정부,jQuery,리얼그리드,eChart'),
  // createData('전자구매시스템','2018.01~2018.03', 'LS엠트론','유비젠에스엔티', 'Java, MSSQL, 전자정부,AngularJs,jQuery,더존ERP'),
  // createData('클라우드쇼핑몰', '2016.10~2016.12', '뱅크웨어글로벌', '이엔솔', 'Java,MySql,Spring Boot,jQuery'),
  // createData('RB-MES', '2016.07~2016.09', '삼성전자', '더원컨설팅', 'Java,알티베이스,Spring,Xplatform'),
  // createData('분석보고서 시각화', '2015.11~2015.12', '삼성전자', '', 'JavaScript,Hive,Oracle,MySql,\nAngularJs,DevExpress'),
  // createData('기준정보관리', '2015.09~2015.10', '아이큐엠씨', '와이즈서텍', 'Java,MySql,EJB,Xplatform'),
  // createData('성과관리시스템', '2013.08~2013.12', '포스코', '고잉컴', 'Java,Oracle,ADF'),
  // createData('신보험온라인', '2013.02~2013.05', '농협생명', '경포씨앤씨', 'Java,Oracle,Spring,Xplatform,RD'),
  // createData('G-SCM', '2012.04~2012.11', '삼성전자', '유니트랙', 'Java,Oracle,Spring,Xplatform'),
  // createData('G-MES Mobile', '2011.09~2012.01', '삼성전자', '펜타크리드', 'JavaScript,Oracle,Spring,\njQueryMobile','SEMP'),
  // createData('R.C Mobile', '2010.11~2011.04', '삼성화재', '에이치아이엘', 'JavaScript,Oracle,Spring,jQuery'),
  // createData('WEB Innovation', '2010.02~2010.06', '삼성카드', '유큐브', 'Java,Oracle,Spring,jQuery'),
  // createData('국가대표포탈', '2009.09~2010.01', '행자부', '비엠지하이텍', 'Java,Oracle,Spring'),
  // createData('노인장기요양보험', '2007.11~2008.06', '건강보험관리공단', '인투데이타시스템', 'Java,Oracle,Spring,miPlatform,\nRexpert'),
  // createData('새올행정고도화', '2007.08~2007.11', '행자부', '성현테크', 'Java,Oracle,Ejb,TrustForm'),
  // createData('전자계약포탈', '2007.04~2007.06', '홈플러스', '전자계약인증서비스', 'Java,Oracle,Struts'),
  // createData('등기시스템운영', '2006.06~2007.03', '대법원', '디지털플러스시스템', 'Java,Oracle,Ejb,TrustForm'),
  // createData('보험사기인지고도화', '2006.01~2006.04', '금감원', '수펙스테크놀로지', 'Java,Oracle,OLAP'),
  // createData('체화공매전자입찰', '2005.07~2005.12', '관세청', '오픈에스티', 'Java,Oracle,wisegrid'),
  // createData('PDSS', '2004.10~2005.03', '삼성SDS', '엔위즈', 'Java,Oracle,Ejb,Struts'),
  // createData('함정포탈', '2004.01~2004.06', '해군본부', '브이트러스트', 'Java,Oracle,핸디그룹웨어'),
  // createData('서울시교육공무원포탈', '2003.05~2003.10', '서울시공무원교육원', '해인','Java,Oracle'),


  // createData('Dashboard','', '원스링크','', 'Java,Spring,TypeScript,ReactJs'),
  // createData('CDW','', '청구정보통신','', 'Java,Spring,Maria,Raphael,TypeScript,ReactJs'),
  // createData('다부처표준연계시스템','', '와이즈서텍','', 'Java,Tibero,전자정부,jQuery,리얼그리드,eChart'),
  // createData('전자구매시스템','', '유비젠에스앤티','', 'Java, MSSQL, 전자정부,AngularJs,jQuery,Bootstrap,더존ERP'),
  // createData('클라우드플랫폼', '', '뱅크웨어글로벌', '', 'Java,MySql,Spring Boot,jQuery'),
  // // createData('RB-MES', '', '삼성전자', '더원컨설팅', 'Java,알티베이스,Spring,Xplatform'),
  // // createData('분석보고서 시각화', '', '삼성전자', '', 'JavaScript,Hive,Oracle,MySql,\nAngularJs,DevExpress'),
  // createData('기준정보관리', '', '와이즈서텍', '', 'Java,MySql,EJB,Xplatform'),
  // createData('성과관리시스템', '', '고잉컴', '', 'Java,Oracle,Adf'),
  // createData('신보험 UI', '', '**생명', '', 'Java,Oracle,Spring,Xplatform,RD'),
  // createData('GSCM', '', '**전자', '', 'Java,Oracle,Spring,Xplatform'),
  // createData('GMES', '', '**전자', '', 'JavaScript,Oracle,Spring,\njQueryMobile','SEMP'),
  // createData('R.C Mobile', '', '**화재', '', 'JavaScript,Oracle,Spring,jQuery'),
  // createData('WEB Innovation', '', '**카드', '', 'Java,Oracle,Spring,jQuery'),
  // createData('국가대표포탈', '', '행자부', '', 'Java,Oracle,Spring'),
  // createData('노인장기요양보험', '', '건강보험관리공단', '', 'Java,Oracle,Spring,miPlatform,\nRexpert'),
  // createData('새올행정고도화', '', '행자부', '', 'Java,Oracle,Ejb,TrustForm'),
  // createData('전자계약포탈', '', '홈플러스', '', 'Java,Oracle,Struts'),
  // createData('등기시스템운영', '', '대법원', '', 'Java,Oracle,Ejb,TrustForm'),
  // createData('보험사기인지고도화', '', '금감원', '', 'Java,Oracle,OLAP'),
  // createData('체화공매전자입찰', '', '관세청', '', 'Java,Oracle,wisegrid'),
  // createData('PDSS', '', '삼성SDS', '', 'Java,Oracle,Ejb,Struts'),
  // createData('함정포탈', '', '해군본부', '', 'Java,Oracle,핸디그룹웨어'),
  // createData('서울시교육공무원포탈', '', '해인', '','Java,Oracle'),

  // createData('Dashboard','', 'Java,Spring,TypeScript,ReactJs,mobx'),
  // createData('CDW','', 'Java,Spring,Maria,Raphael,TypeScript,ReactJs,mobx'),
  // createData('Cultural Information Multi-Ministry Sharing Platform','', 'Java,Tibero,전자정부,jQuery,리얼그리드,eChart'),
  // createData('Electronic purchasing system','',  'Java, MSSQL, 전자정부,AngularJs,jQuery,Bootstrap,더존ERP'),
  // createData('Cloud platform ', '', 'Java,MySql,Spring Boot,jQuery'),
  // // createData('RB-MES', '', '삼성전자', '더원컨설팅', 'Java,알티베이스,Spring,Xplatform'),
  // // createData('분석보고서 시각화', '', '삼성전자', '', 'JavaScript,Hive,Oracle,MySql,\nAngularJs,DevExpress'),
  // createData('Standard information management', '',   'Java,MySql,EJB,Xplatform'),
  // createData('Performance management system', '', 'Java,Oracle,adf'),
  // // createData('신보험 UI', '',   'Java,Oracle,Spring,Xplatform,RD'),
  // createData('GSCM', '',   'Java,Oracle,Spring,Xplatform'),
  // createData('GMES', '',   'JavaScript,Oracle,Spring,\njQueryMobile','SEMP'),
  // createData('R.C Mobile', '', 'JavaScript,Oracle,Spring,jQuery'),
  // createData('WEB Innovation', '', 'Java,Oracle,Spring,jQuery'),
  // createData('National representative portal', '', 'Java,Oracle,Spring'),
  // createData('Long-term care insurance for the elderly', '', 'Java,Oracle,Spring,miPlatform,\nRexpert'),
  // createData('새올행정고도화',  '', 'Java,Oracle,Ejb,TrustForm'),
  // createData('Electronic contract portal', '', 'Java,Oracle,Struts'),
  // createData('Registration system operation', '', 'Java,Oracle,Ejb,TrustForm'),
  // createData('보험사기인지고도화',  '', 'Java,Oracle,OLAP'),
  // createData('Embodied auction electronic bidding', '', 'Java,Oracle,Ant'),
  // createData('PDSS', '', 'Java,Oracle,Ejb,Struts'),
  // createData('Trap Portal', '', 'Java,Oracle,핸디그룹웨어'),
  // createData('Seoul Education Officials Portal', '','Java,Jsp,Oracle'),

  createData('일하는방식변경을위한원격기술검증','', 'JavaScript,NodeJs,Ejs,WebRtc.Git'),
  createData('대쉬보드','', 'Java,Spring,TypeScript,ReactJs,mobx,Git,Jira'),
  createData('CDW','', 'Java,Spring,Maria,Raphael,TypeScript,ReactJs,mobx'),
  createData('문화정보공유다부처플랫폼','', 'Java,Tibero,전자정부,jQuery,리얼그리드,eChart'),
  createData('전자구매시스템','',  'Java, MSSQL, 전자정부,AngularJs,jQuery,Bootstrap,더존ERP'),
  createData('클라우드플랫폼 ', '', 'Java,MySql,Spring Boot,jQuery'),
  // createData('RB-MES', '', '삼성전자', '더원컨설팅', 'Java,알티베이스,Spring,Xplatform'),
  // createData('분석보고서 시각화', '', '삼성전자', '', 'JavaScript,Hive,Oracle,MySql,\nAngularJs,DevExpress'),
  createData('기준정보관리', '',   'Java,MySql,EJB,Xplatform'),
  createData('성과관리', '', 'Java,Oracle,adf'),
  // createData('신보험 UI', '',   'Java,Oracle,Spring,Xplatform,RD'),
  createData('GSCM', '',   'Java,Oracle,Spring,Xplatform'),
  createData('GMES', '',   'JavaScript,Oracle,Spring,\njQueryMobile','SEMP'),
  createData('R.C Mobile', '', 'JavaScript,Oracle,Spring,jQuery'),
  createData('WEB Innovation', '', 'Java,Oracle,Spring,jQuery'),
  createData('국가대표포탈', '', 'Java,Oracle,Spring'),
  createData('노인장기요양보험', '', 'Java,Oracle,Spring,miPlatform,\nRexpert'),
  createData('새올행정고도화',  '', 'Java,Oracle,Ejb,TrustForm'),
  createData('전자계약포탈', '', 'Java,Oracle,Struts'),
  createData('부동산등기운영', '', 'Java,Oracle,Ejb,TrustForm'),
  createData('보험사기인지고도화',  '', 'Java,Oracle,OLAP'),
  createData('체화옥션전자입찰', '', 'Java,Oracle,Ant'),
  createData('PDSS', '', 'Java,Oracle,Ejb,Struts'),
  createData('함정포탈', '', 'Java,Oracle,핸디그룹웨어'),
  createData('서울시교육공무원포탈', '','Java,Jsp,Oracle'),
];

const dudUrl = 'javascript:;';

class WorkTable extends React.Component {

  constructor(props) {
    super(props);
    this.idx = 0;
  }


   state = {
    open: false,
    Show: true
  };

  handleClickOpen = (id) => {
     this.setState({
      open: true,
    });
     this.idx = id;
  };

   handleClose = () => {
    this.setState({open: false});
  };

  // handleDownload = () => {
  //   window.open
  // };


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

  render() {
    const { classes } = this.props;
    return (
      <div className="no-print">
        {/* <Head>
          <title>Works</title>
          <link rel="stylesheet" href="/static/media/css/noprint.css" media="screen, print"type="text/css"></link>
          <link rel="stylesheet" href="/static/styles/reactkorea/rp1.css" media="screen" type="text/css"></link>
        </Head> */}

{this.state.Show &&  
        <div class="next-overlay-wrapper opened">
          {/* <div class="next-overlay-backdrop"></div> */}
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

        {/* <a href="/static/cv.doc" download="오세영.doc">
        <Button variant="outlined" color="primary" style={{float:'right',marginBottom:'7px'}}
        >
          download
        </Button>
        </a> */}
        {/* <a href="/static/cv.doc" download="오세영.doc" className="nav-link dark" style={{float:'right',marginBottom:'0px'}}> */}

        
        <p />
        {/* <a href="/static/cv.doc" download="오세영.doc">
        <Button className="nav-link dark" style={{float:'right',marginBottom:'7px', textTransform: "none" }}
        >
          Download
        </Button>
        </a> */}

      <Paper className={classes.root}>
        <Typography variant="body2" gutterBottom>
          {/* 경력15년 */}
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Project</TableCell>
              {/* <TableCell align="left">DURATION</TableCell> */}
              {/* <TableCell align="left">Company</TableCell> */}
              {/* <TableCell align="left">EMPLOYER</TableCell> */}
              <TableCell align="left">Technology</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                 {/*
                 (row.id!=2 && row.id!=3&& row.id!=5&&row.id!=9) && 
                  <Link href={dudUrl} className={classes.link} onClick={() => this.handleClickOpen(row.id-1)} >
                  {row.name}
                  </Link>
                }
                
                { 
                  (row.id==2 ||row.id==3||row.id==5||row.id==9) &&  
                   row.name */}
                
                <Link href={dudUrl} className={classes.link} onClick={() => this.handleClickOpen(row.id-1)} >
                  {row.name}
                  </Link>

              </TableCell>
              
              {/* <TableCell component="th" scope="row">
                  {row.name}
              </TableCell> */}


              {/* <TableCell align="center">{row.period}</TableCell> */}
              <TableCell align="left">{row.mother}</TableCell>
              {/* <TableCell align="left">{row.incompany}</TableCell> */}
              <TableCell align="left">{row.software}</TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
         { this.state.open && <WorkView open={this.state.open} onHandleClose={this.handleClose} data={ activeCore[this.idx] } /> }
      </Paper>
        </div>
    );
  }
}

// export default withStyles(styles)(WorkTable);
export default WithRoot(withStyles(styles)(WorkTable))
