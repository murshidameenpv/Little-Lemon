import { Route, Routes, useNavigate } from "react-router-dom";
import { useReducer } from "react";
import Header from "./Header";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
  const navigate = useNavigate();

  const generateRandomTimes = () => {
    const times = [];
    for (let i = 17; i <= 23; i++) {
      if (Math.random() < 0.5) times.push(`${i}:00`);
      if (Math.random() > 0.5) times.push(`${i}:30`);
    }
    return times;
  };

  const initialState = { availableTimes: generateRandomTimes() };
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { availableTimes: generateRandomTimes() };
      default:
        return state;
    }
  }, initialState);

  const submitForm = (formData) => {
    // Simulate API call
    if (true) navigate("/confirmed");
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
