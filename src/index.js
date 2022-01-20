import { render } from "react-dom";
import App from "./AppWithRouter";
import Expenses from "./Expenses";
import Invoices from "./Invoices";
import SantaMonica from "./SantaMonica"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path="1" element={<SantaMonica />} />

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
