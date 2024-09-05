import { useState } from "react";
import Form from "../Form/Form";
import Card from "../Card/Card";

const WeatherPanel = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");

  const onSearch = async (ciudad) => {
    let apyKey = "7cd29748f8ae1a091d1933aa2bdc6b53";
    setLoading(true);
    setShow(true);
    setLocation(ciudad);

    try {
       return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apyKey}&lang=es&units=metric`
    )
      .then((res) => {
        if(!res.ok) throw {res}
        return res.json()
      })
      .then((ciudadData) => {
        // if (ciudadData.name.toLowerCase().includes(ciudad)) {
        //   setShow(false);
        //   setLoading(false);
        //   return null;
          
        // }
        console.log("data ciudad", ciudadData);
        setWeather([...weather, ciudadData]);
        setLoading(false);
        return ciudadData;
      })
     
    } catch (error) {
      console.warn(error);
      alert("Ciudad no encontrada");
      setShow(false);
      setLoading(false);
      throw error;
    }

   
  };

  function onClose(id) {
    setWeather((oldWeather) => oldWeather.filter((w) => w.id !== id));
  }

  return (
    <>
      <Form loading={loading} onSearch={onSearch} />

      <div className="container-cards">
        {" "}
        {weather.length
          ? weather.map((weather) => (
              <Card
                key={weather.coord.id}
                showData={show}
                loadingData={loading}
                weather={weather}
                onClose={() => onClose(weather.id)}
              />
            ))
          : null}{" "}
      </div>
    </>
  );
};

export default WeatherPanel;
