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
    <Grid
      item
      md={4}
      paddingRight={10}
      ma
      paddingBottom={10}
      sx={{ width: "200px" }}
    >
      <Paper elevation={1} sx={{ width: "200px" }}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <Grid sx={{ marginTop: "30px" }}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("gender", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel value="male" control={<Radio />} label="man" />
              <FormControlLabel
                value="woman"
                control={<Radio />}
                label="woman"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="150"
                control={<Radio />}
                label="less than 150$"
              />
              <FormControlLabel
                value="400"
                control={<Radio />}
                label="less than 400$"
              />
              <FormControlLabel
                value="700"
                control={<Radio />}
                label="less than 700$"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Size</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("size", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel value="38" control={<Radio />} label="38" />
              <FormControlLabel value="39" control={<Radio />} label="39" />
              <FormControlLabel value="40" control={<Radio />} label="40" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Color</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("color", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
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
      </Paper>
    </Grid>
  );
};

export default SideBar;
