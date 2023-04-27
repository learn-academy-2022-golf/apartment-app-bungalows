import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"

import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = (props) => {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
      .then(response => response.json())
      .then(payload => setApartments(payload))
      .catch((error) => console.log(error))
  }

  const createApartment = (apt) => {
    fetch("/apartments", {
      body: JSON.stringify(apt),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => readApartments())
      .catch(errors => console.log("Apartment create errors:", errors))
  }

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home {...props} />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apts={apartments} loggedIn={props.logged_in} />} />
        <Route path="/apartmentshow" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew currentUser={props.current_user} createApt={createApartment} />} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
