import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Product = (props) => {
  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  // eslint-disable-next-line no-unused-vars
  const getPrice = () => {
    const additionalPrice = props.sizes.map((item) =>
      props.sizes.find(additionalPrice)
    );
    console.log(additionalPrice);

    return props.basePrice + additionalPrice;
  };
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className={item === props.size && styles.active}
                    onClick={(e) => props.setCurrentSize(item)}
                  >
                    {props.sizes.name}
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
                      item === props.color && styles.active
                    )}
                    onClick={(e) => props.setCurrentColor(item)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              console.log(
                'Summary' +
                  '====' +
                  'Name: ' +
                  props.name +
                  'Price: ' +
                  props.price +
                  'Size: ' +
                  props.size +
                  'Color: ' +
                  props.color
              );
            }}
          >
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
