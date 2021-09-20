import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
import Head from 'next/head';
import WithRoot from 'docs/src/modules/components/WithRoot';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

// function Blog(props) {

  class Blog extends Component {

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

  const { classes } = this.props;
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
    <Head>
    <title>Blog</title>
       {/* <link rel="stylesheet" href="/static/media/css/noprint.css" media="screen, print"type="text/css"></link> */}
          {/* <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link> */}
    </Head>
    <div className={classes.root}>
      <List component="nav" style={{background:'white'}}>
        <ListItem button component="a" href="/blogs/covervid">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="CoverVid" />
        </ListItem>
      </List>
      {/* <Divider /> */}
      {/*<List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemLink href="/blogs/whyReact">
            <ListItemText primary="Why React" />
          </ListItemLink>
        </ListItem>
      </List>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemLink href="/blogs/whyReactNative">
            <ListItemText primary="Why React Native" />
          </ListItemLink>
        </ListItem>
      </List>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemLink href="/blogs/arrow">
            <ListItemText primary="Arrow Function" />
          </ListItemLink>
        </ListItem>
      </List>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemLink href="/blogs/this">
            <ListItemText primary="This keyword" />
          </ListItemLink>
        </ListItem>
      </List>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemLink href="/blogs/async">
            <ListItemText primary="Async await" />
          </ListItemLink>
        </ListItem>
      </List>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemLink href="/blogs/const">
            <ListItemText primary="Const not immutable" />
          </ListItemLink>
        </ListItem>
      </List>*/}
      <Divider />

    </div>
    </div>
  );
}
  }
Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default WithRoot(withStyles(styles)(Blog))
