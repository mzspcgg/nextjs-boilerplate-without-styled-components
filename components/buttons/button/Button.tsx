import styles from './Button.module.scss';

export interface IButton {
  children: string;
}

const Button: React.FC<IButton> = ({ children }) => {
  // return <button className={`${styles['primary-rect']} ${styles['primary-secondary']}`}>{children}</button>;
  return <button className={[styles.primaryRect, styles.primarySecondary].join(" ")}>{children}</button>;
};

export default Button;

// TYPES
// Primary kwadratowy
// Secondary kwadratowy
// Primary okrągły
// Secondary okrągły
// Primary okrągły z ikonką
// Secondary okrągły z ikonką
