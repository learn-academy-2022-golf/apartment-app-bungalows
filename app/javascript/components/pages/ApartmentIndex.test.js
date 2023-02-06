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
    // screen.debug()
  })
  test("renders apartment cards", () => {
    // iteration with forEach to find street
    mock.forEach(apartment => {
      const apartmentStreet = screen.getByText(/4 privet dr/i)
      expect(apartmentStreet).toBeInTheDocument()
    })

    // AllBy RTL method to obtain image
    const apartmentImage = screen.getAllByRole("img")
    // screen.debug(apartmentImage[0])
    expect(apartmentImage[0]).toBeVisible()
    expect(apartmentImage[0]).toHaveClass('card-img-top')
  })
})
