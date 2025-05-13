import { Outlet } from "react-router-dom";
import { RadixWrapper } from "./RadixWrapper";

function App() {
  return (
    <RadixWrapper>
      <Outlet />
    </RadixWrapper>
  );
}

export default App;
