import styles from '../../Product.module.scss';

const Button = (props) => {
  return (
    <button className={styles.button}>
      <span className="fa fa-shopping-cart" />
    </button>
  );
};

export default Button;
