import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

const Header = () => {
  return (
    <Menu style={{ marginTop: '20px' }}>
      <Link route='/'>
        <a className='item'>
          Crowd-Funder
        </a>
      </Link>

      <Menu.Menu position='right'>
        <Link route='/'>
          <a className='item'>
            Startups list
          </a>
        </Link>

        <Link route='/campaigns/new'>
          <a className='item'>
            +
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};

export default Header;