import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { IRootState } from './store'
import { logIn } from '@share/action/UserAction'
import { ActionType } from 'typesafe-actions'
import { Dispatch } from 'redux'
import actions from '@share/action'
import { addProject } from '@share/action/ProjectAction'
import { User } from './model'
// import { View3D } from './component/view3d/View3D'
import { View2D } from './component/view2d/View2D'
import { View3D } from './component/view3d/View3D'

interface IProps {
  user?: User
  logIn: typeof logIn
  addProject: typeof addProject
}

interface IState {
  userName: string
  viewType: number
}

class App extends React.Component<IProps, IState> {
  public readonly state = {
    userName: '',
    viewType: 2
  }

  public render(): JSX.Element {
    console.log(this)

    return (
      <div className="App">
        {/* <header className="App-header">
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
          <input
            type="text"
            id="username"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <button onClick={this.handleLogIn}>Log In</button>
          <button onClick={this.handleAddProject}>Add Project</button>
        </header> */}
        {/* {this.state.viewType === 2 ? <View2D /> : <View3D />} */}
        <View2D isVisible={this.state.viewType === 2} />
        <View3D isVisible={this.state.viewType === 3} />,
        <div id="view-type">
          <button onClick={() => this.setState({ viewType: 2 })}>2D</button>
          &nbsp;
          <button onClick={() => this.setState({ viewType: 3 })}>3D</button>
        </div>
      </div>
    )
  }

  // private handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
  //   this.setState({ userName: event.currentTarget.value })
  // }

  // private handleLogIn = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ): void => {
  //   this.props.logIn(this.state.userName)
  // }

  // private handleAddProject = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
  //   this.props.addProject('0196ba67-0e2f-4353-bbb9-688e97b3d9bf', 'test')
  //   console.log(this.state)
  //   this.setState(() => {
  //     console.log(this.state)
  //   })
  // }
}

const mapStateToProps = (state: IRootState) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionType<typeof actions>>) => {
  return {
    logIn: (name: string) => dispatch(logIn(name)),
    addProject: (userId: string, name: string) =>
      dispatch(addProject(userId, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
