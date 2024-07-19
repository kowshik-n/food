import { render } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("it should be render in header component with good number of amount",()=>{
  render(
  <BrowserRouter>
<Provider store={appStore}>

  <Header/>
    </Provider>
  </BrowserRouter>
   
  );
  const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe(logo);
    
    const loginButton= screen.getByRole("button");
    
    expect(loginButton).toBeInTheDocument();
});