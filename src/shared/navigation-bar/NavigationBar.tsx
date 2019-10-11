import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBar.css'

import { Dropdown } from '../Dropdown';
import { Currencies, CurrencyContext } from '../../contexts/currencies';

type NavigationBarProps = {
}

type NavigationBarState = {
}

const items = {
  'PL': "Poland",
  "LT": "Lithuania",
  "LV": "Latvia"
}

export const NavigationBar = () => {
  // a hook
  // const { setValue } = useContext(CurrencyContext)

  const countryChange = (country: string) => {
    console.log(country)
  }

  return (
    <header className="App-header">
      <nav>
        <Link className="menu-link" to="/">
          <span role="img" aria-label="home link">🏠 Home</span>
        </Link> |
        {` `}
        {/* 📃 License */}
        {` `}
        <Link className="menu-link" to="/finances">
          <span role="img" aria-label="finances link">💰 Finances</span>
        </Link> |
        {` `}
        <Link className="menu-link" to="/offices">
          <span role="img" aria-label="offices link">🏢 Offices</span>
        </Link> |
        {` `}
        <Link className="menu-link" to="/projects">
          <span role="img" aria-label="projects link">🔨 Projects</span>
        </Link> |
        {` `}
        <Link className="menu-link" to="/employees">
          <span role="img" aria-label="employees link">👩‍💼 Employees</span>
        </Link> |
        {` `}
        <Link className="menu-link" to="/benefits">
          <span role="img" aria-label="benefits link">🎳 Benefits</span>
        </Link> |
      </nav>

      <Dropdown items={items} onChanged={countryChange}></Dropdown>

      <CurrencyContext.Consumer>
        {({ setValue }) => <Dropdown
                items={Currencies}
                onChanged={setValue}
              ></Dropdown>}
      </CurrencyContext.Consumer>
    </header>
  );
}
