/** Styles **/
import styles from './Card.module.scss';

const Card = props => <div className={ `${ styles.card } ${ props.className }` }>{ props.children }</div>;

export default Card;
