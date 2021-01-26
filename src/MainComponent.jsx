import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { fetchGoods } from './store/mainReducer.';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from './utils/ProductCard';
import styles from './styles/MainComponent.module.scss';
import Button from '@material-ui/core/Button';
import { SearchField } from './utils/SearchField';
import { Spinner } from './utils/Spinner';

const MainComponent = () => {
  const [size, setSize] = useState(3);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  const goods = useSelector((store) => store.main.goods);

  const sortedGoods = goods.items?.slice().sort(function(a, b) {
    return a.price - b.price;
  });

  const cardsToRender = sortedGoods?.map((card) => {
    return <ProductCard cardInfo={card} key={Math.random()} />;
  });

  const cards = cardsToRender?.slice(0, size);
  const changeSize = () => {
    setSize((size) => (size += 3));
    scroll.scrollToBottom();
  };

  const showMore =
    cards?.length < cardsToRender?.length ? (
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={changeSize}
      >
        Показати ще
      </Button>
    ) : (
      ''
    );

  const showSpinnerOrCount =
    cards?.length > 0 ? (
      <p className={styles.textCardsRendered}>
        Показано {cards?.length} з {cardsToRender?.length}{' '}
      </p>
    ) : (
      <Spinner />
    );

  return (
    <div className={styles.generalContainer}>
      <SearchField />
      <div className={styles.cardsContainer}>{cards}</div>
      {showMore}
      {showSpinnerOrCount}
    </div>
  );
};

export default MainComponent;
