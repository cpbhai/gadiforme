import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   FilledInput,
//   OutlinedInput,
// } from "@material-ui/core";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";
import { fetchCars } from "./slice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropoff, setDropoff] = useState("Noida");
  const [pickup, setPickup] = useState("Mathura");
  const [journey, setJourney] = useState("");
  const [date, setDate] = useState(null);

  const [distance, setDistance] = useState("60");
  const handleChange = (event) => {
    setJourney(event.target.value);
  };
  const handleSubmit = () => {
    var strDateTime =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate();

    const searchData = {
      dropoff,
      pickup,
      journey,
      date: strDateTime,
      distance,
    };
    console.log(searchData);
    let str = [];
    console.log(strDateTime);
    for (var p in searchData)
      if (searchData.hasOwnProperty(p)) {
        str.push(
          encodeURIComponent(p) + "=" + encodeURIComponent(searchData[p])
        );
      }
    const query = str.join("&");
    dispatch(fetchCars({ query }));
    console.log(str.join("&"));
    navigate("/cabs");
  };

  return (
    <div className="kl ">
      <div className="home">
        <div className="csw_inner">
          <div className="csw_inputBox searchCity">
            <label htmlFor="dropoff">
              <span className="lbl_input latoBold  appendBottom5">From</span>
              <input
                id="fromCity"
                type="text"
                className="csw_inputField font30 lineHeight36 latoBlack"
                data-cy="fromCity"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </label>
          </div>
          <div className="csw_inputBox searchCity">
            <label htmlFor="pickup">
              <span className="lbl_input latoBold  appendBottom5">To</span>
              <input
                id="fromCity"
                type="text"
                className="csw_inputField font30 lineHeight36 latoBlack"
                data-cy="fromCity"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
              />
            </label>
          </div>

          {/* <div className="csw_inputBox searchCity">
            <label htmlFor="dropoff">
              <span className="lbl_input latoBold  appendBottom5">Journey</span>
              <select
                type="text"
                name="from"
                placeholder="Select a journey type"
                onChange={(e) => {
                  setJourney(e.target.value);
                }}
              >
                <option>Single Way</option>
                <option>Round</option>
              </select>
              <h1>{journey}</h1>
            </label>
          </div> */}
          <div className="searchCity">
            {/* <span className="lbl_input latoBold  appendBottom5">Date</span> */}
            <div style={{ width: "100%" }}>
              <FormControl sx={{ width: "100%" }}>
                <LocalizationProvider
                  sx={{ width: "100%" }}
                  dateAdapter={AdapterDateFns}
                >
                  <DatePicker
                    disablePast
                    label="Date"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </FormControl>
            </div>
          </div>
          <div className="journey">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Journey</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // input={<OutlinedInput name="journey" id="outlined-age-simple" />}
                value={journey}
                label="journey"
                onChange={handleChange}
              >
                <MenuItem value={"perKmCostOneWay"}>Single</MenuItem>
                <MenuItem value={"perKmCostRound"}>Round</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <div type="submit" onClick={handleSubmit}>
          Search
        </div>
      </div>
    </div>
  );
};

export default Home;
