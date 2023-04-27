import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import { BrowserRouter } from "react-router-dom"
import mock from "../mockApartments"

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentIndex apts={mock} />
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {
    // will show RTL methods available on current DOM
    // console.log(
    //   render(
    //     <BrowserRouter>
    //       <ApartmentIndex apts={mock} />
    //     </BrowserRouter>
    //   )
    // )
    // screen.debug()
    // screen.logTestingPlaygroundURL()
    expect(screen.getByText("Where there is currency, there is vacancy.")).toBeInTheDocument()
  })
  it("renders a card title", () => {
    const aptTitle = screen.getAllByRole("heading", { name: /\$1000\/month/i })
    expect(aptTitle[0]).toBeVisible()
    expect(aptTitle[0]).toHaveClass('card-title')
  })
  
})
