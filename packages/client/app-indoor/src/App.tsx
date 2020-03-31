import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { IRootState } from './store';
import { AbstractProject } from '@share/model';


interface IProps {
  user?: AbstractProject;
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
      </header>
    </div>
  }
}

const mapStateToProps = (state: IRootState) => {
  return { user: state.user };
};


export default connect(mapStateToProps, null)(App);
