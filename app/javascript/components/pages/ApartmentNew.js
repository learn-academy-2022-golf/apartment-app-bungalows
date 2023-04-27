import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const ApartmentNew = ({ currentUser, createApt }) => {
  const navigate = useNavigate()
  const [newApt, setNewApt] = useState({
    street: "",
    city: "",
    state: "",
    manager: "",
    email: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: currentUser.id
  })
  const handleChange = (e) => {
    setNewApt({ ...newApt, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    createApt(newApt)
    navigate("/apartmentindex")
  }

  return (
    <>
      <h3>ApartmentNew</h3>
      <Form>
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            type="text"
            name="street"
            placeholder="Enter Street"
            onChange={handleChange}
            value={newApt.street} />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            type="text"
            name="city"
            placeholder="Enter City"
            onChange={handleChange}
            value={newApt.city} />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            type="text"
            name="state"
            placeholder="Enter State"
            onChange={handleChange}
            value={newApt.state} />
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input
            type="text"
            name="manager"
            placeholder="Enter Manager"
            onChange={handleChange}
            value={newApt.manager} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="email"
            placeholder="Enter Manager's Email"
            onChange={handleChange}
            value={newApt.email} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            placeholder="Enter Monthly Cost"
            onChange={handleChange}
            value={newApt.price} />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            type="number"
            name="bedrooms"
            placeholder="Enter Amount of Bedrooms"
            onChange={handleChange}
            value={newApt.bedrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            type="number"
            name="bathrooms"
            placeholder="Enter Amount of Bathrooms"
            onChange={handleChange}
            value={newApt.bathrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            type="text"
            name="pets"
            placeholder="Pets Allowed? Yes or No"
            onChange={handleChange}
            value={newApt.pets} />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            name="image"
            placeholder="Enter URL for photo"
            onChange={handleChange}
            value={newApt.image} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Apartment
        </Button>
      </Form>
    </>
  )
}

export default ApartmentNew