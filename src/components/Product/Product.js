import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  // eslint-disable-next-line no-unused-vars
  const getPrice = () => {
    const additionalPrice = props.sizes.find((item) => {
      return item.name === currentSize;
    }).additionalPrice;

    return props.basePrice + additionalPrice;
  };
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(
              'SUMMARY: ' +
                'Name: ' +
                props.name +
                ' ' +
                'Price: ' +
                getPrice() +
                ' ' +
                'Size: ' +
                currentSize +
                ' ' +
                'Color: ' +
                currentColor
            );
          }}
        >
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    className={
                      item.name === currentSize ? styles.active : undefined
                    }
                    onClick={(e) => setCurrentSize(item.name)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className={clsx(
                      prepareColorClassName(item),
                      item === currentColor && styles.active
                    )}
                    onClick={(e) => setCurrentColor(item)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;
