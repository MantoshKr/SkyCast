import "./current-weather.css"

const CurrentWeather = () => {
    return (

        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">Kolkata</p>
                    <p className="weather-description">sunny</p>
                </div>
                <img alt="weather" className="weather-icon" src="icons/01d.png" />
            </div>
            <div className="bottom">
                <p className="temperature">27°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">27°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">wind</span>
                        <span className="parameter-value">301m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">humidity</span>
                        <span className="parameter-value">84%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">pressure</span>
                        <span className="parameter-value">1005hPa</span>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default CurrentWeather;