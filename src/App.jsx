import React from "react";
import ReactDOM from "react-dom";

import { Dropdown } from "@marjak93/dropdown-ui";

import "normalize.css";
import style from "./style.css";

const App = () => {
  const [value, setValue] = React.useState(null);

  const handleChange = (v) => {
    setValue(v);
  };

  return (
    <div className={style.container}>
      <section className={style.description}>
        <h1>Dropdown Demo</h1>
        Keyboard interactions (when open):
        <ul>
          <li>Arrow up</li>
          <li>Arrow down</li>
          <li>Home</li>
          <li>End</li>
          <li>Space/Enter</li>
          <li>Escape</li>
        </ul>
      </section>

      <section className={style.component}>
        <Dropdown.Select
          label="Task status"
          value={value}
          onChange={handleChange}
        >
          <Dropdown.Option value="option1" color="green">
            Option 1
          </Dropdown.Option>
          <Dropdown.Option value="option2" color="blue">
            Option 2
          </Dropdown.Option>
          <Dropdown.Option value="option3" color="orange">
            Option 3
          </Dropdown.Option>
          <Dropdown.Option value="option4" color="red">
            Denne teksten er såpass lang at den blir brutt.
          </Dropdown.Option>
        </Dropdown.Select>
      </section>

      <section className={style.data}>
        Current value: {value ? value : "none"}
      </section>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
