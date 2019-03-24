// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false


// VISIBILITY APP

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

// class VisibilityToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//     this.title = 'Visibility Toggle';
//     this.details = 'Hey. These are some details you can now see!';
//     this.state = {
//       visibility: false,
//     };
//   }
//   handleToggleVisibility() {
//     this.setState((prevState) => {
//       return {
//         visibility: !prevState.visibility
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.title}</h1>
//         <button onClick={this.handleToggleVisibility}>
//           {this.state.visibility ? 'Hide details' : 'Show details' }
//         </button>
//         {this.state.visibility && <p>{this.details}</p>}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// COUNTER APP

// parseInt(num, 10) - returns a number, not a string
// isNaN(num) - returns true or false, use to check type (make sure it's a number)

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     this.handleSubtractOne = this.handleSubtractOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       count: 0
//     };
//   }
//   componentDidMount() {
//     const count = parseInt(localStorage.getItem('count'));
//     if(!isNaN(count)) {
//       this.setState(() => ({ count }));
//     }
//   }
//   componentDidUpdate(prevState) {
//     if(prevState.count !== this.state.count) {
//       localStorage.setItem('count', this.state.count);
//     }
//   }
//   handleAddOne() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       };
//     });
//   }
//   handleSubtractOne() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count -1
//       };
//     });
//   }
//   handleReset() {
//     this.setState(() => {
//       return {
//         count: 0
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleSubtractOne}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'));


// INDECISION APP

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }   
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }
  handleDeleteOptions() {
    this.setState(() => ({options: []  }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) =>  optionToRemove !== option )
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}
      >
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>No options to display</p>}
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    
    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));