import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import HeaderCompnent  from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";


function App() {
  return (
    <div>
    <HeaderCompnent/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
      {
        // <HomePage />
      }
    </div>
  );
}

export default App;
