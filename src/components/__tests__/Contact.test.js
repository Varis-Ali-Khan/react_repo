import { render,screen } from "@testing-library/react";
import Contact from "../Contact";

import "@testing-library/jest-dom"

test("Should load cintact use component",()=>
{
render(<Contact/>)

const heading = screen.getByRole("heading")
expect(heading).toBeInTheDocument();
})
test("Should load cintact use component",()=>
    {
    render(<Contact/>)
    
    const name = screen.getByPlaceholderText("name")
    expect(name).toBeInTheDocument();
    })