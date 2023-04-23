//import Button from '../../Button/Button';
import styles from '../Product.module.scss';
import PropTypes from 'prop-types';
import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';
import Button from './Button/Button';

const ProductForm = (props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(
          'SUMMARY: ' +
            'Name: ' +
            props.name +
            ' ' +
            'Price: ' +
            props.getPrice() +
            ' ' +
            'Size: ' +
            props.currentSize +
            ' ' +
            'Color: ' +
            props.currentColor
        );
      }}
    >
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize
          sizes={props.sizes}
          currentSize={props.currentSize}
          setCurrentSize={props.setCurrentSize}
        />
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor
          colors={props.colors}
          prepareColorClassName={props.prepareColorClassName}
          currentColor={props.currentColor}
          setCurrentColor={props.setCurrentColor}
        />
      </div>
      <Button />
    </form>
  );
};

export default ProductForm;

ProductForm.propTypes = {
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};
