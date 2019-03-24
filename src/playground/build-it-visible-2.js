const app = {
  title: "Visibility Challenge",
  details: "Hey. These are some details!"
};

let visible = false;

const showDetails = () => {
  visible = !visible;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={showDetails}>
        {visible ? "Hide Details" : "Show Details"}
      </button>
      {visible && <p>{app.details}</p>}
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};

render();