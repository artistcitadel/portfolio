// import 'docs/src/modules/components/bootstrap';
// // --- Post bootstrap -----
// import React from 'react';
// import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

// const req = require.context('docs/src/pages/logs/get-in-touch', false, /\.md|\.js$/);
// const reqSource = require.context('!raw-loader!../../docs/src/pages/logs/get-in-touch', false, /\.js$/);
// const reqPrefix = 'pages/logs/get-in-touch';

// function Page() {
//   return <MarkdownDocs req={req} reqSource={reqSource} reqPrefix={reqPrefix} />;
// }

// export default Page;


import 'docs/src/modules/components/bootstrap';
import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WithRoot from 'docs/src/modules/components/WithRoot';
import Head from 'next/head';
//import '../static/styles/_about.scss';

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

// function Contact(props) {

class Contact extends Component {

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

    // const { classes } = props;
    render(){
    return (
     <div className="no-print">
        {/* <Head>
        <title>Contact</title>
          <link rel="stylesheet" href="/static/media/css/noprint.css" media="screen, print"type="text/css"></link> */}
          {/* <link rel="stylesheet" href="/static/styles/reactpoland/rp.css" media="screen" type="text/css"></link> */}
          {/* <link rel="stylesheet" href="/static/styles/reactkorea/rp1.css" media="screen" type="text/css"></link> */}
          {/* <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link> */}
        {/* </Head> */}

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

        <div class="footer" style={{paddingTop:"0vh"}}>
          <div class="w-layout-grid data-grid">        
            <div id="w-node-8fc8d22e110d-fab90039" class="div-block-11">
              <a href="#" class="logo-dark w-inline-block"></a>
            <div class="spacer">
            </div>
            <div class="copy small"> 
              오세영 <br />
              HP: 010-3487-2484 <br />
              <a href="mailto:gaius.july@gmail.com" style={{color: "#8b99af", textDecoration:'none'}}>gaius.july@gmail.com</a>
            </div>
          </div>
          <div id="w-node-79c7f90c4f85-fab90039" class="copy small center">All rights reserved 2020 © Oh's Home Page</div>
       </div>    
    </div>

      {/* <div className={classes.root}>
      <Grid container spacing={24}> */}
      {/* <div className="background-image">
                <img src="/static/images/background-index.png" />
      </div> */}
        {/* <Grid item xs>
          <Paper className={classes.paper} >
          <div className="left-side">
             <h1>React Korea</h1>
             <img src="/static/images/reactkorea1.png" />
             <h3>오세영</h3>
             <h4>+82 010 3487 2484</h4>
             <h4><a href="mailto:gaius.july@gmail.com">gaius.july@gmail.com</a></h4>
             <h4>gaius.july@gmail.com</h4> */}
             {/* <h3>Get Your Projects Done </h3>
             <p>Profesional and top quality service in web develolpment.</p>
             <p>don't hesitate to contact me.</p>
             </div>
          </Paper>
        </Grid>

      </Grid>

    </div> */}
    </div>
    );

}
  }
export default WithRoot(Contact);
// export default WithRoot(withStyles(styles)(Contact))
