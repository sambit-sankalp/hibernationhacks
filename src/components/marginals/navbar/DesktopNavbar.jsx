import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Components
import {
  NavContainer,
  LogoContainer,
  TabContainer,
  TabLink,
  Navbar,
  NavText,
  Container,
} from './styles';
import DropDown from './DropDown';
import DropdownNavbarItem from './DropdownNavbarItem';

// assets
import { nav, issues } from '../../../content/Navigation';

function DesktopNavbar({ toggleMenuOpen, open, handler, setOpen, mobile }) {
  const [shadow, setShadow] = useState(false);
  const { logo, navItems } = nav;

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      setShadow();
    };
  }, []);

  return (
    <NavContainer shadow={shadow}>
      <Container style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <Navbar>
          <LogoContainer>
            <Link to="/">
              <img src={logo.src} className="logo" alt={logo.alt} />
            </Link>
          </LogoContainer>

          <FontAwesomeIcon
            className="bars"
            onClick={toggleMenuOpen}
            icon={faBars}
          />

          <TabContainer>
            {navItems.map(({ link, name }) => {
              if (name === 'Issues') {
                return (
                  <DropdownNavbarItem
                    key={link}
                    setOpen={setOpen}
                    name={name}
                    open={open}
                    handler={handler}
                  >
                    <DropDown
                      open={open}
                      setOpen={setOpen}
                      handler={handler}
                      data={issues}
                      mobile={mobile}
                    />
                  </DropdownNavbarItem>
                );
              }
              return (
                <TabLink key={link} to={link}>
                  <NavText>{name}</NavText>
                </TabLink>
              );
            })}
          </TabContainer>
        </Navbar>
      </Container>
    </NavContainer>
  );
}

export default DesktopNavbar;
