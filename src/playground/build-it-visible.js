class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Visibility Toggle';
    this.details = 'Hey. These are some details you can now see!';
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visible: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visible ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visible && <p>{this.details}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//   title: "Visibility Toggle",
//   details: "Hey. These are some details you can now see!"
// };

// let visible = false;

// const toggleVisibility = () => {
//   visible = !visible;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={toggleVisibility}>
//         {visible ? "Hide Details" : "Show Details"}
//       </button>
//       {visible && <p>{app.details}</p>}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById("app"));
// };

// render();