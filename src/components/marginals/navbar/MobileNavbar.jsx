import React from 'react';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Components
import { MobileNavbarSection, TabLink, NavText } from './styles';
import DropDown from './DropDown';
import DropdownNavbarItem from './DropdownNavbarItem';

// assets
import { nav, issues } from '../../../content/Navigation';

function MobileNavbar({ toggleMenuOpen, handler, open, setOpen, mobile }) {
  const { navItems } = nav;

  return (
    <MobileNavbarSection>
      <FontAwesomeIcon className='back-button' onClick={toggleMenuOpen} icon={faTimes} />

      <div className='mobile-nav-container'>
        <ul className='linkList'>
          {navItems.map(({ link, name }) => {
            if (name === 'Issues') {
              return (
                <DropdownNavbarItem
                  setOpen={setOpen}
                  open={open}
                  handler={handler}
                  key={link}
                  name={name}
                >
                  <DropDown
                    toggleMenuOpen={toggleMenuOpen}
                    setOpen={setOpen}
                    open={open}
                    handler={handler}
                    data={issues}
                    mobile={mobile}
                  />
                </DropdownNavbarItem>
              );
            }
            return (
              <TabLink onClick={toggleMenuOpen} key={link} to={link}>
                <NavText>{name}</NavText>
              </TabLink>
            );
          })}
        </ul>
      </div>
    </MobileNavbarSection>
  );
}

export default MobileNavbar;
