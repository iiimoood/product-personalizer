import styles from '../../Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
  return (
    <ul className={styles.choices}>
      {props.colors.map((item) => (
        <li key={item}>
          <button
            type="button"
            className={clsx(
              props.prepareColorClassName(item),
              item === props.currentColor && styles.active
            )}
            onClick={(e) => props.setCurrentColor(item)}
          />
        </li>
      ))}
    </ul>
  );
};

export default OptionColor;

OptionColor.propTypes = {
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
};
