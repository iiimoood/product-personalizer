import styles from '../Product.module.scss';
import PropTypes from 'prop-types';

const ProductImage = (props) => {
  return (
    <img
      className={styles.image}
      alt={props.title}
      src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`}
    />
  );
};

export default ProductImage;

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};
