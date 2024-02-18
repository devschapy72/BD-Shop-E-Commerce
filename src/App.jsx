import { BrowserRouter } from "react-router-dom";
import RouterDom from "./router-dom";
import DashBord from "./layouts/DashBord";

function App() {
  return (
    <BrowserRouter>
      <DashBord>
        <RouterDom />
      </DashBord>
    </BrowserRouter>
  );
}

export default App;
