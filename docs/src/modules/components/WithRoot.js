import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppContent from 'docs/src/modules/components/AppContent';
import AppFrame from 'docs/src/modules/components/AppFrame';

const styles = theme => ({
  root: {
    marginBottom: 100,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

function withRoot(Component) {

  class WithRoot extends React.Component {

    render() {
      const { ...other } = this.props;
      return (
        <AppFrame>
          <AppContent>
            <Component initialProps={other} />
          </AppContent>
        </AppFrame>
      );
    }
  }

  return WithRoot;
}

export default withRoot;

