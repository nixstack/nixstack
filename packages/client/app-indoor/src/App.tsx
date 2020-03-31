import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { IRootState } from './store';
import { AbstractUser } from '@share/model';
import { logIn } from '@share/action/UserAction';
import { ActionType } from 'typesafe-actions';
import { Dispatch } from 'redux';
import actions from '@share/action'


interface IProps {
  user?: AbstractUser;
  logIn: typeof logIn
}

class App extends React.Component<IProps, {}>  {
  public render(): JSX.Element {
    console.log(this)
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload2.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
        <br />
        <button onClick={this.handleLogIn} >Log In</button>
      </header>
    </div>
  }

  private handleLogIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    this.props.logIn('hello workd')
  }
}

const mapStateToProps = (state: IRootState) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType<typeof actions>>) => {
  return {
    logIn: (name: string) => dispatch(logIn(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
