import React from "react";
import { RootObjectCoin } from "../Types";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./../store/hooks";
import { fetchCoinTableAction } from "./../store/actions/fetchCoinTableAction";
import { fetchHistoricalDataAction } from "./../store/actions/fetchHistoricalDataAction";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { Line } from "react-chartjs-2";
import { chartDays } from "./../config/data";
import { CryptoState } from "../context/CryptoContext";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// import SelectButton from './SelectButton';

interface CoinInfoProps {
  coinsPage: RootObjectCoin;
}


interface IDays {
  days: number;
}

function CoinInfo(props: CoinInfoProps) {
  const [days, setDays] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { currency } = CryptoState();

  const { historicalChart } = useAppSelector((state) => state.coinApp);

  const id: string = props.coinsPage.id;

  useEffect(() => {
    dispatch(fetchHistoricalDataAction({ id, currency, days }));
  }, [currency, days]);


  return (
    <div className="w-full flex flex-col items-center justify-center mt-25 p-40">
      <div style={{ height: "100%", width: "100%" }}>
        <Line
          data={{
            labels: historicalChart.prices.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),

            datasets: [
              {
                data: historicalChart.prices.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in ${currency}`,
                borderColor: "#EEBC1D",
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default CoinInfo;
