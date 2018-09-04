const App = {
  title: 'This is a title',
  subtitle: 'This is a sub title',
  options: []
};

const onMakeDecision = () => {
  const ranNum = Math.floor(Math.random() * App.options.length);
  const option = App.options[ranNum];
  alert(option);
};

const getValue = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    App.options.push(option);
    e.target.elements.option.value = '';
    reRenderTemplate();
  }
};

const removeAll = () => {
  App.options = [];
  reRenderTemplate();
};

const reRenderTemplate = () => {
  const template = (
    <div>
      <h1> User Title : {App.title}</h1>
      {App.subtitle}
      <p>{App.options.length > 0 ? 'here are your options' : 'No Options'}</p>
      <button
        disabled={App.options.length === 0 ? true : false}
        onClick={onMakeDecision}
      >
        What should i do ?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {App.options.map(option => (
          <li key={Math.random()}>{option}</li>
        ))}
      </ol>
      {/* <p>{App.options.length}</p> */}
      <form onSubmit={getValue}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, document.getElementById('root'));
};

reRenderTemplate();
