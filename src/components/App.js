import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebar: false
    }
  }

  toggleSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar
    })
  }

  render() {
    return (
      <div className="App">
        <SideBar sidebar={this.state.sidebar} toggleSidebar={this.toggleSidebar}/>
        <Main toggleSidebar={this.toggleSidebar}/>
      </div>
    );
  }

}

export default App;
