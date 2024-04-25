import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./../../assets/styles/services-section.css";
import StarIcon from "@mui/icons-material/Star";
import dish1 from "../../assets/img/dish1.jpg";
import dish2 from "../../assets/img/dish2.jpg";
import dish3 from "../../assets/img/dish3.jpg";
import dish4 from "../../assets/img/dish4.jpg";
import dish5 from "../../assets/img/dish5.jpg";
import dish6 from "../../assets/img/dish6.jpg";

type ServiceSectionBoxProps = {
  title: string;
  description: string;
  image: any;
  rating: number;
  price: number;
};
const ServiceSectionBox = (props: ServiceSectionBoxProps) => {
  return (
    <div className="service-box">
      <div
        style={{
          width: "100%",
          height: "270px",
          borderRadius: "10px",
          background: `url(${props.image}) no-repeat center / cover`,
        }}
      ></div>
      <div className="service-title-box">
        <p className="service-title">{props.title}</p>
        <div className="service-rating">
          {props.rating}
          <StarIcon className="star-icon" />
        </div>
      </div>
      <div className="service-description-box">
        <p className="service-description">{props.description}</p>
        <p className="service-price">₹ {props.price}</p>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const dishes = [
    {
      title: "Arabian Grill",
      description: "North Indian, BBQ, Rolls, Kebab",
      image: dish1,
      rating: 3.7,
      price: 500,
    },
    {
      title: "Biryani Blues",
      description: "Biryani, Kebab, Desserts, Hyderabadi, Beverages",
      image: dish2,
      rating: 4.6,
      price: 890,
    },
    {
      title: "Beyond The Slice",
      description: "North Indian, BBQ, Rolls, Kebab",
      image: dish3,
      rating: 3.9,
      price: 500,
    },
    {
      title: "La Pino'z Pizza",
      description: "Pizza, Pasta, Italian, Fast Food",
      image: dish4,
      rating: 4.6,
      price: 890,
    },
    {
      title: "Biryani Blues",
      description: "Biryani, Kebab, Desserts, Hyderabadi, Beverages",
      image: dish2,
      rating: 4.6,
      price: 890,
    },
    {
      title: "La Pino'z Pizza",
      description: "Pizza, Pasta, Italian, Fast Food",
      image: dish6,
      rating: 4.6,
      price: 890,
    },
    {
      title: "Arabian Grill",
      description: "North Indian, BBQ, Rolls, Kebab",
      image: dish4,
      rating: 3.7,
      price: 500,
    },
    {
      title: "Beyond The Slice",
      description: "North Indian, BBQ, Rolls, Kebab",
      image: dish5,
      rating: 3.9,
      price: 500,
    },
  ];
  return (
    <>
      <div className="services-main-container">
        <div className="services-heading">
          <p>Best Food in Chennai</p>
        </div>
        <div className="services-carousal-container">
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
          >
            {dishes.map((dish) => (
              <ServiceSectionBox
                title={dish.title}
                description={dish.description}
                image={dish.image}
                rating={dish.rating}
                price={dish.price}
              />
            ))}
          </Carousel>
        </div>
        <div className="services-box-container">
          {dishes.map((dish) => (
            <ServiceSectionBox
              title={dish.title}
              description={dish.description}
              image={dish.image}
              rating={dish.rating}
              price={dish.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
