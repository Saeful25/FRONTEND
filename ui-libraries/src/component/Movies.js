import React from 'react'
import { Card,CardBody,Button,CardText,CardSubtitle, Row, Col,CardTitle } from 'reactstrap'

const Movies = () => {

    const Movies = [ 
        {
            title: "Movie 1",
            year:"2021",
        },
        {
            title: "Movie 2",
            year:"2022",
        },
        {
            title: "Movie 3",
            year:"2020",
        },
        {
            title: "Movie 4",
            year:"2024",
        },
        {
            title: "Movie 5",
            year:"2023",
        },
    ]
  return (
        <div>
            <Row>
            {Movies.map((movie) => {
                return
                (
         <Col>
            <Card
        body
        color="light"
        style={{
            width: '18rem'
        }}
        >
        <img
            alt="Sample"
            src="https://picsum.photos/300/200"
        />
        <CardBody>
            <CardTitle tag="h5">
            {movie.title}
            </CardTitle>
            <CardSubtitle
            className="mb-2"
            tag="h6"
            >
            {movie.year}
            </CardSubtitle>
            <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
            </CardText>
            <Button>
            Button
            </Button>
         </CardBody>
        </Card>
        
         </Col>           
                );
            })
             }
        </Row>
          </div>
  );
}

export default Movies
