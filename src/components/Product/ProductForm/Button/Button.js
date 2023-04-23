import styles from '../../Product.module.scss';

const Button = (props) => {
  return (
    <Button className={styles.button}>
      <span className="fa fa-shopping-cart" />
    </Button>
  );
};

export default Button;
