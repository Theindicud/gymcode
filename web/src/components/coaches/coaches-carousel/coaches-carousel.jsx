import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { getAllCoaches } from "../../../services/api.service";
import "./coaches-carousel.css";
import { Link } from "react-router-dom";

function CoachesCarousel(name, lastName, photo, limit, page) {
  const [coaches, setCoaches] = useState([]);

  useEffect(
    () =>
      async function fetchCoaches() {
        try {
          const query = {};
          if (name) query.name = name;
          if (lastName) query.lastName = lastName;
          if (photo) query.photo = photo;
          if (limit) query.limit = limit;
          if (page) query.page = page;

          const response = await getAllCoaches(query);
          setCoaches(response.data);
        } catch (error) {
          console.error(error);
        }

        fetchCoaches();
      },
    [name, lastName, photo, limit, page]
  );

  return (
    <div className="coaches-home-container">
      <div className="title-container-carousel">
        <h1 className="title-carousel">DESCUBRE A NUESTROS</h1>
        <h1 className="subtitle-carousel"> EXPERTOS EN FITNESS</h1>
      </div>

      <div className="carousel-container mb-2">
        <Carousel
          showArrows={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
          
          className="custom-carousel mb-3"
        >
          {coaches.map((coach) => (
            <div key={coach.id}>
              <img src={coach.photo} className="carousel-image"></img>
              <a href={`/coaches/${coach.id}`}>
                <p className="legend">{`${coach.name} ${coach.lastName}`}</p>
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CoachesCarousel;
