import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebar: false,
      icon: false
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
        <SideBar
          sidebar={this.state.sidebar}
          icon={this.state.icon}
          toggleSidebar={this.toggleSidebar} />

        <Main toggleSidebar={this.toggleSidebar} />
      </div>
    );
  }

}

export default App;
