"use client";

import styled from "styled-components";

import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 98vh;
    font-family: 'Inter', sans-serif;
`;

const StyledTitle = styled.h1`
  margin: 0 0 1rem 0;
  color: #09090B;
`;

const StyledSubtitle = styled.p`
  margin: 0 0 1rem 0;
  color: #71717A;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1rem 0 0 0;
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <StyledDiv>
      <StyledTitle>Find the weather in any city!</StyledTitle>
      <StyledSubtitle>Enter a city name below to get the current weather</StyledSubtitle>
      <input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)} />
      <StyledLink href={`/${city}`}>Get Weather</StyledLink>
    </StyledDiv>
  );
}