/* eslint-disable react/prop-types */
import Loader from "../Loader/Loader.jsx";
import "./Card.css";
import Papelera from "../img_bucket_icon/bucket.svg";

const Card = ({ showData, loading, weather, onClose }) => {
  if (loading) {
    return <Loader />;
  }
  var url = "";
  var iconUrl = "";

  if (showData) {
    url = "https://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
  }
  console.log("weatherCard", weather);

  return (
    <div>
      {showData === true ? (
        <div>
          <article className="card-container">
            <div className="title-city">
              <div>{weather.name}</div>
            </div>
            <div className="temp-img">
              <div className="temp-ltr"> {Math.round(weather.main.temp)}°C</div>
              <p>
                <img className="img-card" src={iconUrl} alt="iconImg" />
              </p>
            </div>

            <div className="temp-ltr2">Max: {Math.round(weather.main.temp_max)}°C</div>
            <div className="temp-ltr2">Min: {Math.round(weather.main.temp_min)}°C</div>
          </article>
          <div className="button-container">
            <button onClick={onClose}  className="delete-button">
              <img className="img-delete" src={Papelera} alt="" />
            </button>
          </div>
        </div>
      ) : (
        <h2>Sin datos</h2>
      )}
    </div>
  );
};

export default Card;
