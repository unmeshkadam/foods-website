import "../../assets/styles/footer.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GooglePlayLogo from "../../assets/img/google-play-logo.png";
import AppStoreLogo from "../../assets/img/app-store-logo.jpg";

function Footer() {
  const ourMenusList = [
    {
      id: 1,
      name: "Chicken Burger",
    },
    {
      id: 2,
      name: "Brief Pizza",
    },
    {
      id: 3,
      name: "Fresh Vegetable",
    },
    {
      id: 4,
      name: "Sea Foods",
    },
    {
      id: 5,
      name: "Desserts",
    },
    {
      id: 6,
      name: "Cold Drinks",
    },
  ];

  const usefulLinksList = [
    {
      id: 1,
      name: "About Us",
    },
    {
      id: 2,
      name: "Our Chefs",
    },
    {
      id: 3,
      name: "Testimonials",
    },
    {
      id: 4,
      name: "Blogs",
    },
    {
      id: 5,
      name: "FAQs",
    },
    {
      id: 6,
      name: "Privacy Policy",
    },
  ];
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="food-zone-card">
          <p className="food-zone-title">FOODS </p>
          <p className="food-zone-text">
            Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt
            magna aliqua.
          </p>
          <div className="social-media-icons">
            <div className="social-media-icon-img">
              {" "}
              <FacebookIcon sx={{ color: "#fa8f02", fontSize: "15px" }} />
            </div>
            <div className="social-media-icon-img">
              {" "}
              <TwitterIcon sx={{ color: "#fa8f02", fontSize: "15px" }} />
            </div>
            <div className="social-media-icon-img">
              {" "}
              <YouTubeIcon sx={{ color: "#fa8f02", fontSize: "15px" }} />
            </div>
            <div className="social-media-icon-img">
              {" "}
              <LinkedInIcon sx={{ color: "#fa8f02", fontSize: "15px" }} />
            </div>
          </div>
        </div>

        <div className="footer-list-card">
          <p className="footer-list-title">Our Menus</p>
          <div className="footer-list-container">
            {ourMenusList.map((item) => {
              return (
                <a id={item.id.toString()} className="item-links" href="#">
                  <ArrowRightAltIcon style={{ fontSize: "15px" }} />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-list-card">
          <p className="footer-list-title">Useful Links</p>
          <div className="footer-list-container">
            {usefulLinksList.map((item) => {
              return (
                <a id={item.id.toString()} className="item-links" href="#">
                  <ArrowRightAltIcon style={{ fontSize: "15px" }} />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="contact-us-card">
          <p className="footer-list-title">Contact Us</p>
          <div className="contact-img-list-container">
            <div className="contact-img-list">
              <div className="img-icon">
                <PhoneIcon sx={{ color: "#fff", fontSize: "15px" }} />
              </div>
              <div className="contact-info">
                <p>+91 9878776765</p>
                <p>+91 8787650324</p>
              </div>
            </div>
            <div className="contact-img-list">
              <div className="img-icon">
                <EmailIcon sx={{ color: "#fff", fontSize: "15px" }} />
              </div>
              <div className="contact-info">
                <p>www.yourdomain.com</p>
                <p>info@yourdomain.com</p>
              </div>
            </div>
            <div className="contact-img-list">
              <div className="img-icon">
                <LocationOnIcon sx={{ color: "#fff", fontSize: "15px" }} />
              </div>
              <div className="contact-info">
                <p>11, Beaufort court, Cana</p>
                <p>Wharf, UK E1FR45A1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="download-app-card">
          <p className="footer-list-title">Download App</p>
          <p className="download-app-text">Save $3 with app & new user only</p>
          <div className="download-app-img-container">
            <img src={GooglePlayLogo} className="download-app-img" width="100px" />
            <img src={AppStoreLogo} className="download-app-img" width="100px" />
          </div>
        </div>
      </div>
      <div className="copywrite-container">
        <div className="copywrite">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                padding: "5px",
                fontSize: "12px",
                color: "#d3d3d3",
                display: "inline",
              }}
            >
              ©2024. All rights reserved by{" "}
            </p>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
              FOODS
            </p>{" "}
          </div>
          <div>
            <p style={{ padding: "5px", fontSize: "15px" }}>Accept for</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
