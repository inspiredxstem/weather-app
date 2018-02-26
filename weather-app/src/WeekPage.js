import React from 'react'
import Header from './Header'
import getForecast from './weatherData.js'

class WeekPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: []
        }
    }
    componentDidMount() {
        var self = this;
        getForecast(function(data) {
            var datesSeen = {};
            var hours = [];
            
            data.list.forEach(hour => {
                var date = hour.dt_txt.split(' ')[0];
                if(!datesSeen[date]){
                    datesSeen[date] = true;
                    hours.push(hour);
                }
            })
            self.setState({ forecast: hours })
        })
    }
    render() {
        return (
            <div className='App'>
            <Header title="Weekly Forecast"/>
                {this.state.forecast.map((hour) =>
                <div>
                    <div>{hour.dt_txt}</div>
                    <img src={`https://openweathermap.org/img/w/${hour.weather[0].icon}.png`} alt="Weather Icon"/>
                        <div>
                            <span>{hour.main.temp_max}°</span>
                            <span> {hour.main.temp_min}°</span>
                        </div>
                </div>
                )}
            </div>
        )
    }
}

export default WeekPage
