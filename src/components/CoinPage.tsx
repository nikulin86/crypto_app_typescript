import React from "react";
import { useAppDispatch, useAppSelector } from "./../store/hooks";
import { useEffect } from "react";
import { fetchTrendingCoinAction } from "./../store/actions/fetchTrendingCoinAction";
import { getCoinsPageAction } from "./../store/actions/getCoinsPageAction";
import { useParams } from "react-router-dom";
import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import CoinInfo from "./CoinInfo";
import { CryptoState } from "../context/CryptoContext";

export function numberWithCommas(x: string  ) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CoinPage() {
  const { currency, symbol } = CryptoState();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { coinsPage } = useAppSelector((state) => state.coinApp);
  console.log(coinsPage);

  
  useEffect(() => {
    dispatch(getCoinsPageAction(id));
  }, []);

  if (!coinsPage) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="flex flex-col items-center dark:text-black px-[20px] mt-[100px]">
      <div
        className="w-full flex flex-col items-center mt-6 
      "
      >
        <img
          src={coinsPage?.image.large}
          alt={coinsPage?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3">{coinsPage.name}</Typography>

        <Typography>{coinsPage?.description.en.split(". ")[0]}.</Typography>

        <div className="self-start p-25 w-full">
          <span style={{ display: "flex" }}>
            <Typography variant="h5" className="">
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {coinsPage?.market_cap_rank}
            </Typography>
          </span>

          <span className="flex">
            <Typography variant="h5">Current Price:</Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
                {symbol}{" "}
              {coinsPage?.market_data.market_cap.rub.toString()
                .slice(0, -6)} M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coinsPage={coinsPage} />
    </div>
  );
}

export default CoinPage;
