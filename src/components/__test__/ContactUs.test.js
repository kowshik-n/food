import { render ,screen } from "@testing-library/react"
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("contact us pages test cases",()=>{
    test("should laod contact us component",()=>{
        render(<ContactUs/>)
        const heading = screen.getByRole("heading");
        //assertion 
       expect(heading).toBeInTheDocument();
    });
    
    it("should laod button in our component",()=>{
        render(<ContactUs/>)
        const button = screen.getByRole("button");
        //assertion 
       expect(button).toBeInTheDocument();
    });
});

