import '../../css/NavBar.css';

const NavTab = (props) => {
    return (
        <div className="navtab">
            <span>
                {props.title}
            </span>
        </div>
    );
}

export default NavTab;