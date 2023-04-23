import styles from '../../Product.module.scss';
import PropTypes from 'prop-types';

const OptionSize = (props) => {
  return (
    <ul className={styles.choices}>
      {props.sizes.map((item) => (
        <li key={item.name}>
          <button
            type="button"
            className={
              item.name === props.currentSize ? styles.active : undefined
            }
            onClick={(e) => props.setCurrentSize(item.name)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default OptionSize;

OptionSize.propTypes = {
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
};
