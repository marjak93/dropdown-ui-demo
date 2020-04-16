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
      <h1>Dropdown Demo</h1>
      <section className={style.description}>
        <h2>Instructions</h2>
        <p>Use mouse or keyboard to select an option from the dropdown.</p>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Key</th>
              <th>When listbox is open</th>
              <th>When listbox is closed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Arrow down</td>
              <td>Moves focus down (or wraps around to top)</td>
            </tr>
            <tr>
              <td>Arrow up</td>
              <td>Moves focus up (or wraps around to bottom)</td>
            </tr>
            <tr>
              <td>Tab</td>
              <td>Same as arrow down</td>
            </tr>
            <tr>
              <td>Shift + Tab</td>
              <td>Same as arrow up</td>
            </tr>
            <tr>
              <td>Home</td>
              <td>Moves focus to top element</td>
            </tr>
            <tr>
              <td>End</td>
              <td>Moves focus to bottom element</td>
            </tr>
            <tr>
              <td>Space/Enter</td>
              <td>Selects option and closes listbox</td>
              <td>Opens listbox</td>
            </tr>
            <tr>
              <td>Escape</td>
              <td>Closes listbox</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={style.component}>
        <h2>Component</h2>
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
            Denne teksten er såpass lang at den blir brutt.
          </Dropdown.Option>
          <Dropdown.Option value="option4" color="red">
            Denne teksten er enda lengre, faktisk så lang at den blir bredere
            enn hele siden (med mindre du har en veldig veldig bred skjerm).
            Faktisk så blir denne teksten nesten 2400px lang på min skjerm.
            Dermed blir teksten brutt, og propen "textWrap" bestemmer om resten
            av teksten kommer på flere linjer, eller om det viser en ellipsis.
          </Dropdown.Option>
          <Dropdown.Option value="option5" color="green" textWrap>
            Her er en veldig lang tekst igjen, men denne gangen er textWrap satt
            til true, dermed så kommer den på flere linjer hvis det ikke er nok
            horisontal plass på viewporten.
          </Dropdown.Option>
        </Dropdown.Select>
      </section>

      <section className={style.data}>
        <h2>Data</h2>
        Current value: {value ? value : "none"}
      </section>
      <footer>
        <p>
          <a
            href="https://github.com/marjak93/dropdown-ui-demo"
            target="_blank"
            title="GitHub project"
          >
            GitHub project
          </a>
        </p>
      </footer>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
