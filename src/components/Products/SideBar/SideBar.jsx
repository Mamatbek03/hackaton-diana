// import { useProduct } from "../../../contexts/ProductContextProvider";
// import React, { useEffect, useState } from "react";
// import {
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Grid,
//   Paper,
//   Radio,
//   RadioGroup,
//   TextField,
// } from "@mui/material";
// import { useSearchParams } from "react-router-dom";

// const SideBar = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [search, setSearch] = useState(searchParams.get("q") || "");
//   const { fetchByParams, getProducts } = useProduct();
//   useEffect(() => {
//     setSearchParams({ q: search });
//     getProducts();
//   }, [search]);
//   return (
//     <div>
//       <Grid item md={4}>
//         <Paper elevation={1} sx={{ width: "200px", boxShadow: "none" }}>
//           <TextField
//             id="standard-basic"
//             label="Search"
//             variant="standard"
//             fullWidth
//             onChange={(e) => setSearch(e.target.value)}
//             value={search}
//           />

//           <Grid>
//             <FormControl>
//               <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
//               <RadioGroup
//                 aria-labelledby="demo-radio-buttons-group-label"
//                 defaultValue="all"
//                 name="radio-buttons-group"
//                 onChange={(e) => fetchByParams("gender", e.target.value)}
//               >
//                 <FormControlLabel value="men" control={<Radio />} label="men" />
//                 <FormControlLabel
//                   value="woman"
//                   control={<Radio />}
//                   label="woman"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </Grid>
//         </Paper>
//       </Grid>
//     </div>
//   );
// };

// export default SideBar;
