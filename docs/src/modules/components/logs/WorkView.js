import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Card from 'docs/src/modules/components/logs/RecipeReviewCard';

import Slide from '@material-ui/core/Slide';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing *2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing *2,
    width: 'fit-content',
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

export default class WorkView extends React.Component {
/*  constructor(props) {
    super(props);
  } */

  /* constructor(props) {
    super(props);
  } */

  state = {
    open: true,
  };

  componentWillMount() {
    this.setState({open:this.props.open});
  }

   handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

   handleClose = () => {
    this.setState({ open: false });
  };

  onBackdrop = () => {
    this.props.onHandleClose();
  };

  render() {
    return (
      // <ClickAwayListener onClickAway={this.props.onHandleClose}>
      <div>
         {/* <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
          Open dialog
        </Button> */}
        <Dialog
          // disableBackdropClick = {false}
          fullWidth={true}
          maxWidth = {"md"}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.state.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.props.open}
          onBackdropClick = {this.onBackdrop}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.props.onHandleClose}>
            {this.props.data.name}
          </DialogTitle>
          <DialogContent>
           <Card data={this.props.data} />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.props.onHandleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      // </ClickAwayListener>
    );
  }
}

WorkView.propTypes = {
  data: PropTypes.object.isRequired,
 // onHandleClose: PropTypes.func.isRequired
};

//export default WorkView;
WorkView.getInitialProps = async () => {
  return {
    data: await data,
   // onHandleClose: await onHandleClose,
  };
};
