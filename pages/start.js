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
  return <div>Leading in React Software Development<br /> Full stack developer</div>;
}
const style= {
			overflow: 'hidden',
      backgroundSize: 'cover',
			backgroundPosition: 'center center',
   }
const bgvid ={
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    width: 'auto',
    height: '843px',
}
const background = {
	background: '#141414',
}
const vsrc='/static/media/videos/intro.mp4';

class Start extends React.Component {
    constructor(props) {
      super(props);
      this.state = ({loaded:false})
		  //this.vid = this.vid.bind(this)
    }

    vid1 = () =>{
      console.log('vid1');
      //this.vid();
    }

    vid = (vidEl)  => {
      //console.log(event.target)
      //this.props.changeOvid(event.target)
      //console.log('vid', this.state.loaded)
      const eventTarget = vidEl;
      //console.log(eventTarget);
      this.props.changeOvid(eventTarget)
      //console.log(this.state.loaded);

      setTimeout(() => {
        this.setState({loaded: true});
      }, 350);
      // setTimeout(
      //   function() {
      //       this.setState({loaded: true});
      //   }
      //   .bind(this),
      //   350
      // );
      //this.setState({loaded: true});
     }

 componentDidMount(){
  let vidEl = document.getElementById('movie');
  //console.log(vidEl);
  this.vid(vidEl);
  //vidEl.onloadeddata= this.vid1;
 }
/* componentWillMount() {
   //console.log('componentWillMount ',this.videoRef);
   this.setState({loaded: true})
   this.vid(this.videoRef);
 }*/

  // componentWillUnmount(){
  //   document.getElementById('movie').src="";
  // }

render() {
  //console.log('is mobile ' ,/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  //const { initVid } = this.props
  let {loaded} = this.state
  //console.log(loaded);
  //  let introtxt1='I am architecting scalable internet applications.'
  let introtxt1='Quality and experience for hire since 2013'
	//let loading=<div id="loader"></div>
	return (
	<div>
    <Head>
      <link rel="stylesheet" href="/static/media/css/fonts/foundation-icons/foundation-icons.css" />
		  {/*<link rel="stylesheet" href="/static/media/css/fonts/smi/simple-line-icons.css" />*/}
		  {/*<link rel="stylesheet" href="/static/media/css/loader.css" />*/}
		  <link rel="stylesheet" href="/static/media/css/base.css" />
		  {/*<link rel="stylesheet" href="/static/media/css/skeleton.css" />*/}
		  <link rel="stylesheet" href="/static/media/css/petra.css" />
		  <link rel="stylesheet" href="/static/media/css/rk.css" />
    </Head>
  {/*!loaded&&loading*/}

  <section id="home" className="home">
    <div className="image" style={style}>
      <video id="movie" className="masthead-video" style={bgvid} autoPlay loop muted >
        <source src={vsrc} type="video/mp4"  />
        <source src={vsrc} type="video/webm" />
      </video>

        <div className="overlay">
          <div className="text">
            <div className="inner">
               <h1 id="taglineDesktop" style={{textAlign: 'center'}}>
               {loaded && <Getintrotxt />}
               <br/>
              </h1>

              <div>
                { !isIE && loaded && <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  // strings={['Developer', 'Tech Lover', 'Team Player','Spring', 'Raphael', 'ReactJs', 'Java']}
                  strings={['Developer', 'Tech Lover', '광탈 쇼핑몰 구축', '소호서버임대', '완벽하게','스피드하게','멋지게']}
                  backDelay={1}
                  loopCount={0}
                  showCursor
                  //className="self-typed"
                  cursorChar="|"
                />}
              </div>
              <div className="firstClassText" style={{float: 'none'}}>
                <p style={{textAlign: 'center'}}>
                {loaded&&introtxt1}
                </p>
              </div>
            </div>
          </div>
        </div>
       </div>
      </section>
    	</div>
	  );
   }
	}

export default withCovervid(Start);
