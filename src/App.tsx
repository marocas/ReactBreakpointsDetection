import { useGetBreakpoint } from "./hooks";
import "./styles.scss";

export default function App() {
  const arg = "min";
  const breakpoint = useGetBreakpoint(arg);
  return (
    <div className="App">
      <p>
        Current breakpoint{" "}
        <span className="breakpoint">
          {arg}-width: {breakpoint}
        </span>
        .
      </p>
    </div>
  );
}
