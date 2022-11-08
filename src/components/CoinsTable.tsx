import React from "react";
import { useState, useEffect } from "react";
import { fetchCoinTableAction } from "../store/actions/fetchCoinTableAction";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { fetchTrendingCoinAction } from "./../store/actions/fetchTrendingCoinAction";
import {
  TableCell,
  TableContainer,
  TableHead,
  TextField,
  Table,
  TableBody,
  TableRow,
} from "@material-ui/core";
import { Pagination } from '@material-ui/lab';
import { CryptoState } from "../context/CryptoContext";

export function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CoinsTable() {
  const { currency, symbol } = CryptoState();
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { coins } = useAppSelector((state) => state.coinApp);
  console.log(coins);

  let navigate = useNavigate();

  useEffect(() => {
   dispatch(fetchCoinTableAction(currency)) ;
  }, [currency]);

  const handelSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className="mx-3.5">
      <div className="mb-5">
        <span>Price by market cap</span>
      </div>
      <div className="mb-5">
        <TextField
          className="w-full "
          label="Search for crypto currency.."
          variant="outlined"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <TableContainer className="pb-[40px]">
        {
          <Table>
            <TableHead
              style={{
                background:
                  " linear-gradient(133deg, rgba(131,58,180,1) 0%, rgba(208,213,4,1) 0%, rgba(214,228,171,1) 45%, rgba(100,250,5,1) 69%)",
              }}
            >
              <TableRow>
                {["Coin", "Price", "24 Change", "Market Cap"].map((head) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    key={head}
                    // align={head === "Coin" ? "" : "right"}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {handelSearch()
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((row) => {
                  const profit = row.price_change_percentage_24h > 0;

                 

                  return (
                    <TableRow
                      onClick={() => {
                          navigate(`/coins/${row?.id}`)
                        }}
                        className="bg-gray-700 hover:bg-gray-800 
                        dark:hover:bg-gray-300 
                        dark:bg-white  cursor-pointer"
                        key={row?.name}
                        >
                      <TableCell
                        component="th"
                        scope="row"
                        className="flex gap-4"
              
                      >
                        <img
                          src={row?.image}
                          alt={row.name}
                       className="h-12 mb-2.5"
                        />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontSize: 22,
                            }}
                          >
                            {row.symbol}
                          </span>
                          <span
                            style={{
                              color: "darkgrey",
                              fontSize: 20,
                            }}
                          >
                            {row.name}
                          </span>
                        </div>
                      </TableCell>

                      <TableCell align="right">
                      {symbol}{" "}
                        {numberWithCommas(row.current_price.toFixed(2))}
                      </TableCell>

                      <TableCell
                        align="right"
                        style={{
                          // color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                          fontWeight: 500,
                        }}
                      >
                        {profit && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>

                      <TableCell align="right">
                      {symbol}{" "}
                        {numberWithCommas(
                          row.market_cap.toString().slice(0, -6)
                        )}
                        M
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        }
      </TableContainer>

      <Pagination
                    style={{
                        padding: 20,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center"
                    }}
                  
                    count={coins.length / 10}
                    onChange={(_, value: any) => {
                        setPage(value);
                        window.scroll(0, 450)
                    }}
                />
    </div>
  );
}

export default CoinsTable;
