import SunArrowup from "../svg/Sun_Arrow_Up.svg";
import SunArrowdown from "../svg/Sun_Arrow_Down.svg";
import SadEmoji from "../icons/asd.png";
import Meter from "../icons/meter.png";
import Down from "../icons/tuhmbs-down.png";
export const iconMap = {
  meter: Meter,
  up: SunArrowup,
  down: SunArrowdown,
  Normal: SunArrowup,
  Average: SadEmoji,
  Unhealthy: Down,
};
export const griddata = [
  {
    title: "UV Index",
    image: "meter",
    value: 5,
    caption: { text: "", icon: "" },
  },
  {
    title: "Wind Status",
    image: "",
    value: "7.7 km/h",
    caption: { text: "WSW", icon: "" },
  },
  {
    title: "sunrise & Sunset",
    image: "",
    value: [
      { icon: "up", time: "6:35 AM" },
      { icon: "down", time: "5:42 PM" },
    ],
    caption: "",
  },
  {
    title: "Humidity",
    image: "",
    value: "12%",
    caption: { text: "Normal", icon: "thumbsup" },
  },
  {
    title: "Visibility",
    image: "",
    value: "5.4 km ",
    caption: { text: "Average", icon: "sad" },
  },
  {
    title: "Air Quality",
    image: "",
    value: "105",
    caption: { text: "Unhealthy", icon: "thumsdown" },
  },
];
