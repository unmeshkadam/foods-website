import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./../../assets/styles/testimonials.css";
import testimonialsUser1 from "../../assets/img/testimonial_user_1.png";
import testimonialsUser2 from "../../assets/img/testimonial_user_2.png";
import testimonialsUser3 from "../../assets/img/testimonial_user_3.png";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

type TestimonialBoxProps = {
  name: string;
  profession: string;
  photo: any;
  ratings: number;
  comment: string;
};
const TestimonialBox = (props: TestimonialBoxProps) => {
  return (
    <div className="testimonials-box">
      <div className="testimonials-img">
        <img src={props.photo} width="150px" />
      </div>
      <div className="star-rating-box">
        {[...Array(props.ratings)].map((star) => (
          <StarIcon className="testimonial-star-icon" />
        ))}
        {[...Array(5 - props.ratings)].map((star) => (
          <StarOutlineIcon className="testimonial-star-icon" />
        ))}
      </div>
      <blockquote>{props.comment}</blockquote>
      <div className="testimonials-userinfo-box">
        <p className="username">{props.name}</p>
      </div>
      <div className="testimonials-userinfo-box">
        <p className="profession">{props.profession}</p>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const users = [
    {
      name: "John Doe",
      profession: "Visitor",
      photo: testimonialsUser1,
      ratings: 4,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: " Milani Oscar",
      profession: "Visitor",
      photo: testimonialsUser2,
      ratings: 3,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Audley Jessa",
      profession: "Visitor",
      photo: testimonialsUser3,
      ratings: 5,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <div className="testimonials-main-container">
        <div className="testimonials-heading">
          <p>LATEST RESTAURANT REVIEWS</p>
        </div>
        <div className="testimonials-carousal-container">
          <Carousel
            showArrows={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
          >
            {users.map((user) => (
              <TestimonialBox
                name={user.name}
                profession={user.profession}
                photo={user.photo}
                ratings={user.ratings}
                comment={user.comment}
              />
            ))}
          </Carousel>
        </div>
        <div className="testimonials-box-container">
          {users.map((user) => (
            <TestimonialBox
              name={user.name}
              profession={user.profession}
              photo={user.photo}
              ratings={user.ratings}
              comment={user.comment}
            />
          ))}
        </div>
      </div>
    </>
  );
}
