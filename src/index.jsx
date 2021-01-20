import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 

class MyComponent extends Component {
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
            <li>
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

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
