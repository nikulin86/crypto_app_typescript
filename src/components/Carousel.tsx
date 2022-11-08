import React, { useState } from "react";
import { CryptoState } from "../context/CryptoContext";
import { useAppDispatch, useAppSelector } from "./../store/hooks";
import { useEffect } from "react";
import { fetchTrendingCoinAction } from "./../store/actions/fetchTrendingCoinAction";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y , Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function Carousel() {
  const { coinsCarusel } = useAppSelector((state) => state.coinApp);
  console.log(coinsCarusel);
  const dispatch = useAppDispatch();

  // const [tranding, setTranding] = useState
  // ([]);

  const { currency, symbol } = CryptoState();
  console.log(currency, symbol);

  useEffect(() => {
    dispatch(fetchTrendingCoinAction(currency));
  }, [dispatch]);


  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={190}
      slidesPerView={4}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className="mt-[40px] px-[20px]"
    >
      {coinsCarusel &&
        coinsCarusel.map((coin) => (
          <SwiperSlide>
            <>
              <Link
                className="  flex flex-col items-center  cursor-pointer uppercase text-white"
                to={`/coins/${coin.id}`}
              >
                <img
                  src={coin?.image}
                  alt={coin.name}
                  height="80"
                  style={{ marginBottom: 10 }}
                />
                <span>
                  {coin?.symbol}
                  &nbsp;
                  <span
                    style={{
                      color:
                        coin.market_cap_change_percentage_24h > 0
                          ? "rgb(14, 203, 129"
                          : "red",
                      fontWeight: 500,
                    }}
                  >
                    {coin.market_cap_change_percentage_24h && "+"}{" "}
                    {coin?.price_change_percentage_24h?.toFixed(2)} %
                  </span>
                </span>
                <span style={{ fontSize: 22, fontWeight: 500 }}>
                  {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
                </span>
              </Link>
            </>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Carousel;
