import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'; 

 class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/goods")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.price}>
            <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="imgItem"
                max-height="150px"
                max-width="150px"
                image={item.img}
                title="imgItem"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {item.price} грн
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default MainComponent