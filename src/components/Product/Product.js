import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';
import { useMemo } from 'react';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = useMemo(() => {
    const additionalPrice = props.sizes.find((item) => {
      return item.name === currentSize;
    }).additionalPrice;

    return props.basePrice + additionalPrice;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSize]);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage
          currentColor={currentColor}
          name={props.name}
          title={props.title}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          getPrice={getPrice}
          prepareColorClassName={prepareColorClassName}
          name={props.name}
          sizes={props.sizes}
          colors={props.colors}
        />
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
