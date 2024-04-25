import { useState } from "react";
import "../../assets/styles/contact-list.css";
import { TextField, Button, Box, InputAdornment } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import useMediaQuery from "@mui/material/useMediaQuery";

function ContactList() {
  const mobile = useMediaQuery("(max-width:540px)");
  const [nameHelperText, setNameHelperText] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");
  const [messageHelperText, setMessageHelperText] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onEmailChange = (event: any) => {
    setEmail(event.target.value);
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (event.target.value === "" || event.target.value.match(mailformat)) {
      setEmailHelperText("");
    } else {
      setEmailHelperText("Please enter valid E-mail");
    }
  };
  const onNameChange = (event: any) => {
    setName(event.target.value);
    const nameformat = /^[A-Za-z]+$/;
    if (event.target.value === "" || event.target.value.match(nameformat)) {
      setNameHelperText("");
    } else {
      setNameHelperText("Please enter valid name");
    }
  };
  const onMessageChange = (event: any) => {
    setMessage(event.target.value);
    if (event.target.value !== "") {
      setMessageHelperText("");
    }
  };
  const onBtnSubmit = (event: any) => {
    if (email === "") {
      setEmailHelperText("Please enter valid E-mail");
    }
    if (name === "") {
      setNameHelperText("Please enter valid name");
    }
    if (message === "") {
      setMessageHelperText("Please enter a message");
    }
    if (
      name !== "" &&
      email !== "" &&
      message !== "" &&
      nameHelperText === "" &&
      emailHelperText === "" &&
      messageHelperText === ""
    ) {
      alert("Submitted successfully!");
    }
  };

  return (
    <div className="contactlist-main-container">
      <div className="contactlist-main">
        <div className="contactlist-img"></div>
        <div className="contactlist-form">
          <div className="form-title">Talk to Us</div>
          <Box component="form">
            <TextField
              id="outlined-basic"
              variant="outlined"
              required
              value={name}
              size={mobile ? "small" : "medium"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon fontSize="small" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "30px",
                  backgroundColor: "#F2F6F8",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  fontSize: "17px",
                },
              }}
              InputLabelProps={{ shrink: false }}
              placeholder="Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#d3d3d3",
                  },
                  "&:hover fieldset": {
                    borderColor: "#d3d3d3",
                  },
                },
                m: 1.5,
                width: "90%",
              }}
              onChange={onNameChange}
              helperText={nameHelperText}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size={mobile ? "small" : "medium"}
              value={email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon fontSize="small" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "30px",
                  backgroundColor: "#F2F6F8",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  fontSize: "17px",
                },
              }}
              InputLabelProps={{ shrink: false }}
              placeholder="E-mail"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#d3d3d3",
                  },
                  "&:hover fieldset": {
                    borderColor: "#d3d3d3",
                  },
                },
                m: 1.5,
                width: "90%",
              }}
              onChange={onEmailChange}
              helperText={emailHelperText}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              multiline
              minRows={5}
              value={message}
              InputProps={{
                sx: {
                  borderRadius: "30px",
                  backgroundColor: "#F2F6F8",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  fontSize: "17px",
                },
              }}
              InputLabelProps={{ shrink: false }}
              placeholder="Message"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#d3d3d3",
                  },
                  "&:hover fieldset": {
                    borderColor: "#d3d3d3",
                  },
                },
                m: 1.5,
                width: "90%",
              }}
              onChange={onMessageChange}
              helperText={messageHelperText}
            />
            <div className="btn-wrapper">
              <Button
                variant="contained"
                onClick={onBtnSubmit}
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  background:
                    "linear-gradient(to right bottom, #f7a707, #faefd9)",
                  color: "#000",
                  width: 250,
                  mt: 2,
                }}
              >
                Send Message
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ContactList;
