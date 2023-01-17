import flightsData from "../data/flight_tehtoshz"
const flights = flightsData();
export default function handler(req, res) {
    res.status(200).json(flights)
  }