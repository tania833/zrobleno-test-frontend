import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(14),
      right: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        bottom: theme.spacing(3),
        right: theme.spacing(4),
      },
    },
    button: {
      width: '80px',
      height: '80px',
      [theme.breakpoints.down('sm')]: {
        width: '50px',
        height: '50px',
      },
      background: '#f50057'

    },
    icon: {
      width: '3rem',
      height: '3rem',
      color: 'white',
    },
  })
);

export const ScrollTop = (props) => {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

export const BackToTop = (props) => {
  const classes = useStyles();
  return (
    <ScrollTop {...props}>
      <Fab
        size="large"
        aria-label="scroll back to top"
        className={classes.button}
      >
        <KeyboardArrowUpIcon className={classes.icon} />
      </Fab>
    </ScrollTop>
  );
};

ScrollTop.propTypes = {
  children: PropTypes.func,
  window: PropTypes.func,
};

export default BackToTop;
