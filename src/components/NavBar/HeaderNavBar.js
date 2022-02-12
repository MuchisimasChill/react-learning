import '../../css/NavBar.css';
import NavTab from './NavTab';

const HeaderNavBar = (props) => {
    const navTabs = [
        {
          key: 'n1',
          title: 'Home'
        },
        {
          key: 'n2',
          title: 'Expenses'
        },
        {
          key: 'n3',
          title: 'Tasks'
        },
    ];

    let navTabItems = [];
    for (let i = 0; i < navTabs.length; i++) {
      const navTab = navTabs[i];
      navTabItems.push(
        <NavTab
          key={navTab.key}
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