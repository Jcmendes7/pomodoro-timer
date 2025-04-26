import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { Countdown } from "./components/Countdown";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
      <Container>
        <form className="form" action="#">
          <div className="formRow">
            <label htmlFor="task">Task</label>
            <input type="text" name="task" id="task" />
          </div>
          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="formRow">
            <p>Ciclos</p>
            <p>0000000000</p>
          </div>
          <button>Enviar</button>
        </form>
      </Container>
    </>
  );
}
