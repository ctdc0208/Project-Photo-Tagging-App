import { Link } from "react-router-dom";

export const PrimaryButton = (props) => (
    <Link 
        to={props.link}
        onClick={props.onClick}
    >
        {props.children}
    </Link>
);