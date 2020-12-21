import './App.scss';
import { Chart } from 'primereact/chart';
import humidity from './images/humidity.png';
import operation_room from './images/operation_room.jpg';
import pressure from './images/pressure.png';
import temperature from './images/temperature.png';
import { useState } from 'react';
import { interval } from 'rxjs';
import initialData from './initialData';

function App() {
  const [operationRoomWther, setOperationRoomWther] = useState(initialData);
  const [monitoring, setMonitoring] = useState(false);
  const [NADisplay, setNADisplay] = useState(true);

  const temperatureData = operationRoomWther.map(result => result.temperature);
  const pressureData = operationRoomWther.map(result => result.pressure);
  const humidityData = operationRoomWther.map(result => result.humidity);
  const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  for (var i = 1; i < 99999; i++) {
    window.clearInterval(i);
  }

  const newData = interval(100);

  if (monitoring) {
    newData.subscribe(
      () => {
        const copyOperationRoomWther = [...operationRoomWther];
        copyOperationRoomWther.shift();
        copyOperationRoomWther.push({
          temperature: randomInteger(15, 30),
          pressure: randomInteger(700, 800),
          humidity: randomInteger(50, 60)
        });

        setOperationRoomWther(copyOperationRoomWther);
      }
    )
  } else {
    setTimeout(() => {
      setNADisplay(true);
    }, 1000);
  }

  const temperatureShedule = {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'temperature, C',
        data: temperatureData,
        fill: false,
        borderColor: 'red'
      }
    ]
  };

  const pressureShedule = {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'temperature, C',
        data: pressureData,
        fill: false,
        borderColor: 'gray'
      }
    ]
  };

  const humidityShedule = {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'temperature, C',
        data: humidityData,
        fill: false,
        borderColor: 'blue'
      }
    ]
  };

  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    animation: {
      duration: 0
    }
  };

  const monitoringButtonClick = () => {
    setNADisplay(false);
    setMonitoring(!monitoring);
  }

  return (
    <section className="mainWrapper">
      <h1 className="head">medical operating room live analytics dashboard</h1>
      <div className="pannel">
        <div className="imageAndButtonWrapper">
          <img src={operation_room} alt="medical operating room view" className="operationRoom" />
          <button
            type="button"
            className="monitoringButton"
            onClick={monitoringButtonClick}
          >
            {monitoring ? "stop monitoring" : "start monitoring"}
          </button>
        </div>
        <div>
          <div className="dataWrapper dataWrapperTemperature">
            <img src={temperature} alt="temperature" className="panelContentImage" />
            <p className="temperature">Temperature, <sup>o</sup>C</p>
            {
              NADisplay
                ? <p className="temperature">N/A</p>
                : <Chart
                  type="line"
                  data={temperatureShedule}
                  options={chartOptions}
                  width="600"
                  height="200"
                />
            }
          </div>

          <div className="dataWrapper dataWrapperPressure">
            <img src={pressure} alt="pressure" className="panelContentImage" />
            <p className="pressure">Pressure, mm</p>
            {
              NADisplay
                ? <p className="pressure">N/A</p>
                : <Chart
                  type="line"
                  data={pressureShedule}
                  options={chartOptions}
                  width="600"
                  height="200"
                />
            }
          </div>

          <div className="dataWrapper dataWrapperHumidity">
            <img src={humidity} alt="humidity" className="panelContentImage" />
            <p className="humidity">Hymidity, %</p>
            {
              NADisplay
                ? <p className="humidity">N/A</p>
                : <Chart
                  type="line"
                  data={humidityShedule}
                  options={chartOptions}
                  width="600"
                  height="200"
                />
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
