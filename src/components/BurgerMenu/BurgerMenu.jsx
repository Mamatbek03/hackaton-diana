import * as React from "react";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { styled } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import MenuList from "@mui/joy/MenuList";
import MenuItem from "@mui/joy/MenuItem";
import "./BurgerMenu.css";
import { useNavigate } from "react-router-dom";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../contexts/AuthContextProvider";
const Popup = styled(PopperUnstyled)({
  zIndex: 1000,
});

export default function MenuListComposition() {
  const navigate = useNavigate();
  const {
    user: { email },
  } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const changePageCatalog = (e) => {
    navigate("/products");
    setAnchorEl(null);
  };
  const changePageReviews = (e) => {
    navigate("/reviews");
    setAnchorEl(null);
  };
  const changePageAboutUs = (e) => {
    navigate("/AboutUs");
    setAnchorEl(null);
  };
  const changePageContacts = (e) => {
    navigate("/contacts");
    setAnchorEl(null);
  };
  const changePageAdminPage = (e) => {
    navigate("/admin-page");
    setAnchorEl(null);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      setAnchorEl(null);
    } else if (event.key === "Escape") {
      anchorEl?.focus();
      setAnchorEl(null);
    }
  };

  return (
    <div>
      <button
        id="burger-menu_btn"
        aria-controls={open ? "composition-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        sx={{ borderRadius: 0, padding: "0" }}
      >
        <p id="burger-menu_icon">≡</p>
      </button>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={anchorEl}
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: "md", bgcolor: "background.body" }}
          >
            <MenuItem onClick={changePageCatalog}>Catalog</MenuItem>
            <MenuItem onClick={changePageReviews}>Reviews</MenuItem>
            <MenuItem onClick={changePageAboutUs}>AboutUs</MenuItem>
            <MenuItem onClick={changePageContacts}>Contacts</MenuItem>
            {email === ADMIN ? (
              <MenuItem onClick={changePageAdminPage}>Admin Page</MenuItem>
            ) : null}
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}
