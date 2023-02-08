import React from "react";
import "../Components/Styles/Styles.css";
import cardimg1 from "../Components/Images/cardimg1.svg";
import cardimg2 from "../Components/Images/cardimg2.svg";
import cardimg3 from "../Components/Images/cardimg3.svg";
import loc from "../Components/Images/loc.gif";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function Homepage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <section className="banner">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h5>
                GodsOwnStay<span style={{ color: "#0194FE" }}>.com</span>
              </h5>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i class="fa-solid fa-phone"></i>
                    <span style={{ fontWeight: "bold" }}>
                      24x7 gosCare Support
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span style={{ fontWeight: "bold" }}>
                      List Your Property
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span style={{ fontWeight: "bold" }}>Invite & Earn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="loginbutton">
          <button
            type="button"
            class="btn"
            style={{
              borderColor: "white",
              backgroundColor: "#0194FE",
              color: "white",
            }}
          >
            Login/Sign up
          </button>
        </div>
        <div className="container d-flex cardss">
          <div
            className="card carditemm col-xs-2"
            style={{ width: "5rem", height: "5.4rem" }}
          >
            <img src={cardimg1} className="card-img-top" alt="..." />
            <div className="card-body cardcont">
              <p style={{ fontSize: "76%", color: "#0194fe" }}>Hotel</p>
            </div>
          </div>
          <div
            className="card carditemm col-xs-2"
            style={{ width: "5rem", height: "5.4rem" }}
          >
            <img src={cardimg2} className="card-img-top" alt="..." />
            <div className="card-body cardcont">
              <p style={{ fontSize: "76%", color: "#0194fe" }}>Package</p>
            </div>
          </div>
          <div
            className="card carditemm"
            style={{ width: "5rem", height: "5.4rem" }}
          >
            <img src={cardimg3} className="card-img-top" alt="..." />
            <div className="card-body cardcont">
              <p style={{ fontSize: "76%", color: "#0194fe" }}>Houseboat</p>
            </div>
          </div>
          <div
            className="card carditemm"
            style={{ width: "5rem", height: "5.4rem" }}
          >
            <img src={cardimg1} className="card-img-top" alt="..." />
            <div className="card-body cardcont">
              <p style={{ fontSize: "76%", color: "#0194fe" }}>Shikara</p>
            </div>
          </div>
        </div>
        <div>
          <div class="container-fluid">
            <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
              <div class="col-5 scrollcard">
                <div class="card card-block card-1">
                  <img src={loc} style={{borderRadius:"50px"}}></img>
                </div>
                <p className="textpos">Nearby</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-2"></div>
                <p className="textpos">Kochi</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-3"></div>
                <p className="textpos">Munnar</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-4"></div>
                <p className="textpos">Allepie</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-5"></div>
                <p className="textpos">Kochi</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-6"></div>
                <p className="textpos">Munnar</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-7"></div>
                <p className="textpos">Allepie</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-8"></div>
                <p className="textpos">Kochi</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-9"></div>
                <p className="textpos">Munnar</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-10"></div>
                <p className="textpos">Allepie</p>
              </div>
              <div class="col-5 scrollcard">
                <div class="card card-block card-10"></div>
                <p className="textpos">Kochi</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="grid-layouts container boxcont"
          style={{ padding: "25px" }}
        >
          <div className="row firstcon">
            <h5>Where would you like to go?</h5>
            <div className="col-md-8">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <i
                      class="fa-solid fa-location-dot"
                      style={{
                        height: "25px",
                        color: "#0194FE",
                        padding: "2px",
                      }}
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Destination, City, Hotel Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h5>Check-In</h5>
              <TextField
                id="date"
                label="Choose date"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-md-3">
              <h5>Check-Out</h5>
              <TextField
                id="date"
                label="Choose date"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-md-3">
              <h5>Guest</h5>
              <FormControl
                sx={{ m: 0, minWidth: 80 }}
                style={{ width: "190px", paddingTop: "0px" }}
              >
                <InputLabel id="demo-simple-select-autowidth-label">
                  <i class="fa-solid fa-user" style={{ color: "#0194FE" }}></i>{" "}
                  Guest Details
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChange}
                  autoWidth
                  label="Guest Details"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              className="col-md-2 btn btn-primary"
              style={{ height: "40px", marginTop: "40px" }}
            >
              Search
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,96L40,128C80,160,160,224,240,234.7C320,245,400,203,480,160C560,117,640,75,720,53.3C800,32,880,32,960,42.7C1040,53,1120,75,1200,101.3C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
}

export default Homepage;
