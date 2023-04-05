import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../../contexts/ProductContextProvider";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import "./SideBar.css";

const SideBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { fetchByParams, getProducts } = useProduct();
  useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);

  return (
    <div className="grid">
      <Paper className="grid" elevation={1} sx={{ width: "200px" }}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <div className="category">
          <div className="category-list">
            <div className="category-item">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                  onChange={(e) => fetchByParams("gender", e.target.value)}
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="all"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="man"
                  />
                  <FormControlLabel
                    value="woman"
                    control={<Radio />}
                    label="woman"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="category-item">
              <Grid>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Price
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="all"
                    name="radio-buttons-group"
                    onChange={(e) => fetchByParams("price_lte", e.target.value)}
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="all"
                    />
                    <FormControlLabel
                      value="150"
                      control={<Radio />}
                      label="up to 150$"
                    />
                    <FormControlLabel
                      value="400"
                      control={<Radio />}
                      label="up to 400$"
                    />
                    <FormControlLabel
                      value="700"
                      control={<Radio />}
                      label="up to 700$"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </div>
          </div>
          <div className="category-list">
            <div className="category-item">
              <Grid>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Size
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="all"
                    name="radio-buttons-group"
                    onChange={(e) => fetchByParams("size", e.target.value)}
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="all"
                    />
                    <FormControlLabel
                      value="38"
                      control={<Radio />}
                      label="38"
                    />
                    <FormControlLabel
                      value="39"
                      control={<Radio />}
                      label="39"
                    />
                    <FormControlLabel
                      value="40"
                      control={<Radio />}
                      label="40"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </div>
            <div className="category-item">
              <Grid>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Color
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="all"
                    name="radio-buttons-group"
                    onChange={(e) => fetchByParams("color", e.target.value)}
                  >
                    <FormControlLabel
                      value="all"
                      control={<Radio />}
                      label="all"
                    />
                    <FormControlLabel
                      value="black"
                      control={<Radio />}
                      label="black"
                    />
                    <FormControlLabel
                      value="white"
                      control={<Radio />}
                      label="white"
                    />
                    <FormControlLabel
                      value="green"
                      control={<Radio />}
                      label="green"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default SideBar;
