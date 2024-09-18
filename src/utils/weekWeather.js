import Sunny from "../svg/Sun.svg";
import CloudRain2 from "../svg/Cloud_Rain_2.svg";
import Rainy from "../svg/Rain.svg";
import Clouds from "../svg/Clouds.svg";
import SunRain2 from "../svg/Sun_Rain_2.svg";
import Snow from "../svg/Snow.svg";
export const iconMap = {
  "sunny.svg": Sunny,
  "cloudy.svg": CloudRain2,
  "rainy.svg": Rainy,
  "clouds.svg": Clouds,
  "partly-cloudy.svg": SunRain2,
  "snowy.svg": Snow,
};
export const weatherData = [
  {
    day: "Sun",
    svg: "sunny.svg",
    degree: Math.floor(Math.random() * 30) + 15, // Temperature between 15-45°C
  },
  {
    day: "Mon",
    svg: "cloudy.svg",
    degree: Math.floor(Math.random() * 30) + 15,
  },
  {
    day: "Tue",
    svg: "rainy.svg",
    degree: Math.floor(Math.random() * 30) + 15,
  },
  {
    day: "Wed",
    svg: "clouds.svg",
    degree: Math.floor(Math.random() * 30) + 15,
  },
  {
    day: "Thu",
    svg: "sunny.svg",
    degree: Math.floor(Math.random() * 30) + 15,
  },
  {
    day: "Fri",
    svg: "partly-cloudy.svg",
    degree: Math.floor(Math.random() * 30) + 15,
  },
  {
    day: "Sat",
    svg: "snowy.svg",
    degree: Math.floor(Math.random() * 30) + 15,
  },
];
