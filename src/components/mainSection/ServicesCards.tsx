import "../../assets/styles/cards.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ServicesCards() {
  return (
    <div className="images-main-container">
      <div className="cards-heading">
        <p>What's on FOODS!</p>
        <div className="view-all-div">
          <a href="view-all">VIEW ALL</a>
          <ArrowRightAltIcon className="view-all-icon" fontSize="small" />
        </div>
      </div>
      <div className="image-box-container">
        <div className="img-box">
          <div className="img-order-online"></div>
          <div className="img-text">Order Online</div>
        </div>
        <div className="img-box">
          <div className="img-dining-out"></div>
          <div className="img-text">Dinning Out</div>
        </div>
        <div className="img-box">
          <div className="img-power-buffet"></div>
          <div className="img-text">Power Buffet</div>
        </div>
        <div className="img-box">
          <div className="img-student-offer"></div>
          <div className="img-text">Students Offer</div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
