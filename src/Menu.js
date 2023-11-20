import { Link } from 'react-router-dom';

function Menu(props) {
    const menuStyle = {
        marginRight: "10px",
    };
    return <Link to={props.link} style={menuStyle}>{props.name}</Link>
}

export default Menu;