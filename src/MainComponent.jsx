import React, { useEffect, useState, useCallback } from 'react';
import * as _ from 'lodash';
import { animateScroll as scroll } from 'react-scroll';
import { fetchGoods } from './store/mainReducer.';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from './utils/ProductCard';
import styles from './styles/MainComponent.module.scss';
import Button from '@material-ui/core/Button';
import { SearchField } from './utils/SearchField';
import { Spinner } from './utils/Spinner';
import RangeInput from './utils/RangeInput';

const MainComponent = () => {
  const [size, setSize] = useState(3);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  const goods = useSelector((store) => store?.main?.goods);

  const goodsToRender = goods?.items
    ?.slice()
    .sort(function (a, b) {
      return a.price - b.price;
    })
    .sort(function (a, b) {
      return a.weight - b.weight;
    });

  let cardsToRender = goodsToRender?.slice(0, size).map((card) => {
    return <ProductCard cardInfo={card} key={Math.random()} />;
  });

  const changeSize = () => {
    setSize((size) => (size += 3));
    scroll.scrollToBottom();
  };

  const setWeightFilt = (value) => {
    setSize(3);
    handler(value);
  };
  const handler = useCallback(
    _.debounce(
      (value) =>  dispatch(fetchGoods(value)),
      500,
    ),
    [],
  );

  const showMore =
    cardsToRender?.length < goodsToRender?.length ? (
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
    cardsToRender?.length > 0 ? (
      <p className={styles.textCardsRendered}>
        Показано {cardsToRender?.length} з {goodsToRender?.length}{' '}
      </p>
    ) : (
      <Spinner />
    );

  return (
    <div className={styles.generalContainer}>
      <SearchField />
      <div className={styles.filters}>
        <div className={styles.weightFilters}>
          <h3 className={styles.filtersPara}>Вага</h3>
          <RangeInput setFilters={setWeightFilt} />
        </div>
      </div>
      <div className={styles.cardsContainer}>{cardsToRender}</div>
      {showMore}
      {showSpinnerOrCount}
    </div>
  );
};

export default MainComponent;
