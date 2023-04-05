import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../../contexts/CartContextProvider";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../Cart/Cart.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <TableContainer
        className="table"
        component={Paper}
        sx={{
          height: "auto",
          width: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Table
          sx={{
            width: "100%",
            display: "table",
            tableLayout: "fixed",
            height: "100px",
          }}
          className="main-table"
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Image</TableCell>

              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Subprice</TableCell>
              <TableCell align="right">-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map((row) => (
              <TableRow
                key={row.item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.item.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <img
                    className="image-of-table"
                    src={row.item.image}
                    width="100"
                    height="100"
                    alt=""
                  />
                </TableCell>
                <TableCell align="right">{row.item.price}</TableCell>
                <input
                  className="input-of-table"
                  type="number"
                  min={1}
                  max={100}
                  onChange={(e) =>
                    //  console.log(e.target.value)
                    changeProductCount(e.target.value, row.item.id)
                  }
                  value={row.count}
                />
                <TableCell align="right">{row.subPrice}</TableCell>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
                <button onClick={() => deleteCartProduct(row.item.id)}>
                  Delete
                </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div>
          <Button
            sx={{
              backgroundColor: "rgb(109, 111, 249)",
              color: "white",
              padding: "10px",
              borderRadius: "10px",
            }}
            onClick={() => navigate("/form-order")}
          >
            {" "}
            BUY NOW FOR {cart?.totalPrice}
          </Button>
        </div>
      </TableContainer>
    </div>
  );
}
