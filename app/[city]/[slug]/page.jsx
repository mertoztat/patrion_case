"use client";
import Icon from "@/components/Icon";
import { nowDate } from "@/utils/getDate";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setWeather } from "@/features/map/weatherSlice";

const City = () => {
  const dispatch = useDispatch();

  const weatherInfos = useSelector((state) => state.weather.weather);

  const minTemp = Math.floor(weatherInfos?.main.temp_min);
  const maxTemp = Math.round(weatherInfos?.main.temp_min);
  const getDate = nowDate();

  const handleClick = () => {
    dispatch(setWeather({}));
    console.log("handle click tıklandı");
  };

  return (
    <div className="mt-10 w-full p-8  flex justify-center items-center relative  ">
      <div className="m-10 items-center flex flex-col md:flex-row md:justify-center">
        <div className="w-52 sm:w-96  mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
          <div className="text-md font-bold flex flex-col text-gray-900">
            <span className="uppercase text-xl">{weatherInfos?.name}</span>
            <span className="mt-2 text-gray-500 text-sm">{getDate}</span>
          </div>
          <div className="w-32 h-32 flex items-center justify-center">
            <Icon id={weatherInfos.weather[0].id} />
          </div>
          <p className="text-gray-700 mb-2">
            {weatherInfos?.weather[0].description.slice(0, 1).toUpperCase() +
              weatherInfos?.weather[0].description.slice(1)}
          </p>
          <div className="text-3xl font-bold text-gray-900 mb-6">
            {maxTemp}
            <span className="font-normal text-gray-700 mx-1">/</span>
            {minTemp}
          </div>
        </div>
      </div>
      <Link href={"/"}>
        <span
          onClick={() => handleClick}
          className="text-white absolute top-5 left-5 text-2xl bg-sky-400  rounded-full flex items-center justify-center w-10 h-10"
        >
          {"<"}
        </span>
      </Link>
    </div>
  );
};

export default City;
