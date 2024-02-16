import { useReducer } from "react"
import Forecast from "./components/Forecast"
import Search from "./components/Search"
import { reducer } from "./reducer";
import { useEffect } from "react";
import { getCities } from "./services/api";

const initialState = {
  cities: []
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getCitiesForecast() {
      try {
        const country = await getCities();

        console.log("CITIES data ::", country);

        dispatch({ type: "SET_CITIES", payload: country.data })
      } catch (error) {
        console.log(error)
      }
    }

    getCitiesForecast()
  }, []);

  return (
    <>
      <h1>Meteorologia em Portugal</h1>

      <Search />
      <Forecast />
    </>
  )
}

export default App
