import { useState } from "react";
import Loader from "../Loader/Loader";
import "./Form.css";

// esto es para que no me tire error el pretier 
/* eslint-disable react/prop-types */
const Form = ({onSearch, loading}) => {
  const [city, setCity] = useState("");


  const onsubmit = async (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
  };

  return (
    <>
      <div className="container-form">
        <h1>ClimApp</h1>
        <form onSubmit={onsubmit} onChange={() => null}>
          <div>
            <input
              type="text"
              className="input-box"
              placeholder="Busca tu cuidad"
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn">Buscar</button>
          </div>
        </form>
      </div>
      <div className="loader-div">
      {loading ? <Loader /> : null}
      </div>
    </>
  );
};

export default Form;
