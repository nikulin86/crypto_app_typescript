import React from "react";
import { CryptoState } from "../context/CryptoContext";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { BsFillLightbulbFill } from "react-icons/bs";

function Header() {
  let navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const { currency, setCurrency } = CryptoState();
  console.log(currency);

  return (
    <div className="fixed top-0 w-full h-[100px] bg-[#29384d] dark:bg-white shadow-lg z-10">
      <div className="flex justify-between py-5 px-5">
        <div
          className="cursor-pointer dark:text-black"
          onClick={() => {
            navigate(`/`);
          }}
        >
          Crypto App
        </div>

        <div>
          {theme === "light" ? (
            <BsFillLightbulbFill
              className="cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer dark:text-black"
              onClick={() => setTheme("light")}
            />
          )}
        </div>

        <div>
          <Select
            variant="outlined"
            style={{
              // with: 100,
              height: 40,
              marginLeft: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"RUB"}>RUB</MenuItem>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default Header;
