import styled from "styled-components";
import { Weather } from "@app/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    margin: 1rem;
    padding: 2rem 1rem;
    border: 1px solid #E4E4E7;
    border-radius: 10px;

    h2 {
        margin: 0;
        line-height: 1.2;
        color: #09090B;
    }

    p {
        margin: 0;
        line-height: 1.2;
        color: #71717A;
    }
`;

export default function WeatherCard(props: Weather) {
    return (
        <WeatherCardWrapper className="weather-card">
            <h2>{props.datetime}</h2>
            <p>{props.conditions}</p>
            <p>{props.description}</p>
            <p>{props.tempmin}°-{props.tempmax}°</p>
        </WeatherCardWrapper>
    )
}