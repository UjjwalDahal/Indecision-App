class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickRandom = this.handlePickRandom.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePickRandom() {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid option';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'The option already exists';
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    const title = 'InDecision App';
    const subtitle = 'Put your life in the hands of a Computer';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Actions
          hasOptions={this.state.options.length > 0}
          handlePickRandom={this.handlePickRandom}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />

        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Actions extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePickRandom}
        >
          What Should I Do ?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Here are your Options</p>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        <Option option={this.props.options} />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.option.map(opt => {
            return <li key={opt}>{opt}</li>;
          })}
        </ol>
      </div>
    );
  }
}

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
    e.target.elements.option.value = '';

    this.setState(() => {
      return {
        error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add a Task</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));
