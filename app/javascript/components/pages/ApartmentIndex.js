import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
const ApartmentIndex = ({apts, loggedIn}) => {
  // console.log(apts)
  return (
    <div>
      {loggedIn ? 
        <>
          {apts?.map((apt, index) => {
            return(
              <Card key={index}>
                <CardImg
                  alt={`image of apartment on ${apt.street}`}
                  src={apt.image}
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {`${apt.bedrooms} bedrooms/${apt.bathrooms} bathrooms for $${apt.price}/month`}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    <pre>
                      {apt.street}
                      {`${apt.city}, ${apt.state}`}
                    </pre>
                  </CardSubtitle>
                  <Button>
                    More details
                  </Button>
                </CardBody>
              </Card>
            )
          })} 
        </> :
        <>
          {apts?.map((apt, index) => {
            return(
              <Card key={index}>
                <CardImg
                  alt="image of apartment"
                  src={apt.image}
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {`$${apt.price}/month`}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Log in or Sign up for more details
                  </CardSubtitle>
                  <Button>
                    More details
                  </Button>
                </CardBody>
              </Card>
            )
          })}
        </>
      }
    </div>
  )
}

export default ApartmentIndex
