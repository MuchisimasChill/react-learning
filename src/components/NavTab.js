import '../css/NavBar.css';

function NavTab(props) {
    return (
        <div className="navtab">
            <span>
                {props.title}
            </span>
        </div>
    );
}

export default NavTab;