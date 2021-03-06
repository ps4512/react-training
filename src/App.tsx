import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import './App.css';

import { Home } from './pages/home/Home';
import { OfficeContainer } from './pages/offices/OfficeContainer';
import { ProjectContainer } from './pages/projects/ProjectContainer';
import { BenefitContainer } from './pages/benefits/BenefitContainer';

import { NavigationBar } from './shared/navigation-bar/NavigationBar';
import { FadeBox } from './shared/fadebox/fadebox';

import { CurrencyContext, Currencies, currencyRates } from './contexts/currencies'
import { Loader } from './shared/Loader';

// old (1 great bundle)
// import { EmployeeContainer } from './pages/employees/EmployeeContainer';
// lazy loading employee module
const EmployeeContainer = React.lazy(() => import('./pages/employees/EmployeeContainer'))

// old
// import { FinancesContainer } from './pages/finances/FinancesContainer';
// lazy
const FinancesContainer = lazy(() => import('./pages/finances/FinancesContainer'))


type AppProps = {}
type AppState = {
  currencyCode: string
}

class App extends Component<AppProps, AppState> {
  state = {
    currencyCode: 'GBP'
  }

  // componentDidMount(){
  //   setInterval(() => {
  //     const old = this.state.currency
  //     this.setState({ currency: old === Currencies.GBP ? Currencies.EUR : Currencies.GBP })
  //   }, 3000)
  // }

  setCurrency = (currencyCode: string) => {
    this.setState({ currencyCode })
  }

  render() {
    // TODO: fixme // helpme
    // referential equality in provider value - creates a new literal on every render
    return (
      <CurrencyContext.Provider value={{
        code: this.state.currencyCode,
        symbol: Currencies[this.state.currencyCode],
        setValue: this.setCurrency,
        convert: (amount, srcCurrencyCode) => {
          const value = amount * currencyRates[srcCurrencyCode][this.state.currencyCode]
          return Math.round(value * 100) / 100
        }
      }}>
        <Router>
          <div>
            <strong>IT Corpo React App</strong>
          </div>
          <div className="App">
            <FadeBox>
              notification message goes here
            </FadeBox>

            <NavigationBar />

            <Suspense fallback={ <Loader /> }>
              <Route exact path="/" component={Home} />
              <Route exact path="/finances" render={
                () => <FinancesContainer label="IT Corpo Finances" />
              } />
              <Route exact path="/offices" render={
                () => <OfficeContainer label="IT Corpo Offices" />
              } />
              <Route exact path="/projects" render={
                () => <ProjectContainer label="IT Corpo Projects" />
              } />
              <Route exact path="/employees" render={
                () => <EmployeeContainer label="IT Corpo Employees" />
              } />
              <Route exact path="/benefits" render={
                () => <BenefitContainer label="IT Corpo Benefits" />
              } />
            </Suspense>
          </div>
        </Router>
      </CurrencyContext.Provider>
    );
  }
}

export default App;
