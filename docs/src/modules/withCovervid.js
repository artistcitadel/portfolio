import React from 'react';
// import { findDOMNode } from 'react-dom'

function withCovervid(Component) {
  return class extends React.Component {
   constructor(props){
    super(props);
		this.state = (
		 {ovid:null}
		)
  this.initVid = this.initVid.bind(this);
	this.sizeVideo = this.sizeVideo.bind(this);
	this.changeOvid = this.changeOvid.bind(this);
	}

	componentDidMount() {
    window.addEventListener('resize', this.sizeVideo)

	}

	changeOvid(el){
		//console.log('changeOvid')
		this.setState({ovid:el}, this.initVid)

	}

  initVid() {
    //console.log('initVid')
    this.sizeVideo()
    const {ovid} = this.state;
    const elem = ovid
    // console.log('initVid',elem)

    elem.style.position = 'absolute';
    elem.style.top = '50%';
    elem.style.left = '50%';
    elem.style['-webkit-transform'] = 'translate(-50%, -50%)';
    elem.style['-ms-transform'] = 'translate(-50%, -50%)';
    elem.style.transform = 'translate(-50%, -50%)';

    // Set overflow hidden on parent element
    elem.parentNode.style.overflow = 'hidden';


    //console.log(typeof(elem.canPlayType));
    // Check for video support
    const supportsVideo = (typeof(elem.canPlayType) !== 'undefined');
    // Check if mobile
    //let isMobile = false;
    /*if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
          isMobile = true;*/
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
       //console.log('supportsVideo ', supportsVideo);
       //console.log('isMobile ', isMobile);
		// Remove video if not supported or mobile
		if (!supportsVideo || isMobile) {
      //console.log('supprotVideo', supportsVideo);
      if (!supportsVideo) {
        elem && elem.parentNode && elem.parentNode.removeChild(elem);
      }
		}
  }

	componentWillUnmount() {
			window.removeEventListener('resize', this.sizeVideo)
  }

	debounce() {
		// setTimeout(function() {this.sizeVideo}, 50);
    /* console.log('debounce');
	  var timer = null;
	  window.clearTimeout(timer);
	  timer = window.setTimeout(function () {
	  this.setVideo();
	  }, 50); */
  }

	// Define the attached selector
  sizeVideo() {
		// console.log('sizeVideo');
		setTimeout(() => {}, 50);
		const { ovid } = this.state;
		const elem = ovid;
	  //console.log('sizeVideo ',elem.parentNode);
		// let elem = this.state.ovid
    //console.log(elem.parentNode.offsetHeight, elem.offsetHeight);
    let offsetHeight = elem.parentNode.offsetHeight;
    if(offsetHeight < elem.offsetHeight) offsetHeight = elem.offsetHeight+100;

    const parentHeight = offsetHeight;
		const parentWidth = elem.parentNode.offsetWidth;

		// Get native video width and height
		const nativeWidth = 640;
		const nativeHeight = 480;

		// Get the scale factors
		const heightScaleFactor = parentHeight / nativeHeight;
		const widthScaleFactor = parentWidth / nativeWidth;
		// Based on highest scale factor set width and height
		if (widthScaleFactor > heightScaleFactor) {
			elem.style.height = 'auto';
			elem.style.width = `${parentWidth}px`;
		 } else {
			elem.style.height = `${parentHeight}px`;
			elem.style.width = 'auto';
		 }
    }

   render() {
      return <Component {...this.props} {...this.state} changeOvid = {this.changeOvid} />
	 }
 };
}

export default withCovervid;
