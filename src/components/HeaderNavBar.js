import '../css/NavBar.css';
import NavTab from './NavTab';

function HeaderNavBar(props) {
    const navTabs = [
        {
          id: 'n1',
          title: 'Home'
        },
        {
          id: 'n2',
          title: 'Expenses'
        },
        {
          id: 'n3',
          title: 'Tasks'
        },
    ];

    let navTabItems = [];
    for (let i = 0; i < navTabs.length; i++) {
      const navTab = navTabs[i];
      navTabItems.push(
        <NavTab
          title={navTab.title}
        ></NavTab>
      );
    }

    return (
      <div className="row navbar-header">
          {navTabItems}
      </div>  
    );
}

export default HeaderNavBar;