"use client";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 20px;
  max-width: 1000px;
  height: 100vh;
`;

export const NavigationBox = styled.ul`
  display: flex;
  gap: 50px;
  margin: 0 auto;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid white;
  justify-content: center;
  color: white;
`;
export const ButtonBox = styled.div`
  margin: 0 auto;
  justify-content: center;
`;
export const HomeSection = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;
export const HomeDescr = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HomeTitle = styled.p`
  text-align: center;
  color: white;
  font-size: 50px;
  margin-bottom: 20px;
`;
export const HomeButton = styled.button`
  color: #08244f;
  margin: 0 auto;
  font-size: 25px;
  padding: 25px;
  border-radius: 10px;
  background-color: white;
  border: 0px;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #134cb5;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  }
`;

export const WeatherSection = styled.section`
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;
export const WeatherByCityBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 30px;
`;
export const WeatherInput = styled.input`
  font-size: 18px;
  line-height: normal;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
`;
export const WeatherInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: white;
`;
export const WeatherItems = styled.div`
  display: flex;
  gap: 50px;
`;
export const WeatherItem = styled.p`
  display: flex;
  gap: 20px;
  align-items: center;

  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const WeatherToActivity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 30px;
`;
export const ActivitySection = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
`;
export const ActivityInformation = styled.div`
  color: white;
  font-size: 20px;
`;

export const ActivityTitle = styled.h1`
  font-size: 40px;
`;
export const ActivityItem = styled.p`
  display: flex;
  gap: 20px;
  align-items: center;

  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
