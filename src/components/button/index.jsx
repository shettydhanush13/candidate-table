import "./styles.css"
import "font-awesome/css/font-awesome.min.css";

const Button = ({text, onClick, icon}) => <button className="button" onClick={() => onClick()}><i className={`fa fa-${icon}`}/>{text}</button>

export default Button