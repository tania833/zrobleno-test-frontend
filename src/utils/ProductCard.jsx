import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: 300,
    height:  340,
    margin: '10px',
  },
  image: {
    objectFit: 'contain',
  },
  title: {
    height: 70,
    fontFamily: 'Montserrat',
    fontWeight: 300,
    fontSize: '1.1rem'
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '1.5rem',
    color: 'black',
    textAlign: 'left',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
});

export const ProductCard = (props) => {
  const classes = useStyles();

  const { cardInfo } = props;
  return (
    <Card className={classes.root}>
            <a
          href={cardInfo.fromSite}
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="card"
          height="140"
          image={cardInfo.image}
          title={cardInfo.name}
          className={classes.image}
        />
        <CardContent className={classes.infoContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {cardInfo.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.price}
          >
            {cardInfo.price} грн
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>
      <CardActions>
        <a
          href={cardInfo.fromSite}
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          <Button size="small" color="secondary">
            До магазину
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  cardInfo: PropTypes.object,
};
