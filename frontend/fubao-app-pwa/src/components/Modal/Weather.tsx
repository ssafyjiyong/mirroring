import React from "react";
import ReactDOM from "react";

interface WeatherModalProps {
  open: boolean;
  onClose: () => void;
  // selectedDate: Date | null;
  // setSelectedDate: (date: Date | null) => void;
  // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// export const Weather = () => {
//   return <div>Weather</div>;
// };
const Weather: React.FC<WeatherModalProps> = ({ open, onClose }) => {
  return <div> i am modal </div>;
};

export default Weather;
