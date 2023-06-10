import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();

    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));



    return (


        <div>

            <label className="title">Daily</label>
            <Accordion allowZeroExpanded className="accordion">
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading className="accordion-item-heading">
                            <AccordionItemButton className="accordion-item-button">
                                <div className="daily-item" style={{ backgroundImage: `url(${`background-image/${item.weather[0].icon}.png`})` }} >
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max-temp">{Math.round(item.main.temp_min)}°C /{Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid" style={{ backgroundImage: `url(${`background-image/${item.weather[0].icon}.png`})` }} >
                                <div className="daily-details-grid-item">
                                    <label className="pressure">Pressure </label>
                                    <label className="pressure">{item.main.pressure}hpa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="humidity">humidity </label>
                                    <label className="humidilty">{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="clouds">clouds </label>
                                    <label className="clouds">{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="wind speed">wind speed </label>
                                    <label className="wind speed">{item.wind.speed}m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="sea level">sea level </label>
                                    <label className="sea level">{item.main.sea_level}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label className="feels like">Feels like </label>
                                    <label className="feels like">{item.main.feels_like}°C</label>
                                </div>
                            </div>


                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Forecast;