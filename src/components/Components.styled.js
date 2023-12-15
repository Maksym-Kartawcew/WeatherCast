"use client";
import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0px 16px;
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
  @media (max-width: 600px) {
    font-size: 16px;
    gap: 25px;
  }
`;
export const NavigationLink = styled.li`
  padding: 10px;
  border-radius: 10px;
  ${(props) =>
    props.$isActive &&
    css`
      background-color: #365a92;
    `}
`;
export const ButtonBox = styled.div`
  margin: 0 auto;
  justify-content: center;
`;
export const HomeSection = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const HomeDescription = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HomeTitle = styled.p`
  text-align: center;
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
export const HomeButton = styled.button`
  color: #08244f;
  margin: 0 auto;
  font-size: 20px;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  border: 0px;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    background-color: #134cb5;
    box-shadow:
      0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16),
      0px 2px 1px rgba(46, 47, 66, 0.08);
  }
  @media (max-width: 600px) {
    font-size: 15px;
    padding: 12px;
  }
`;
export const WeatherSection = styled.section`
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const WeatherByCityContainer = styled.div`
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
export const WeatherMessage = styled.div`
  color: white;
  text-align: center;
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
  @media (max-width: 600px) {
    display: block;
  }
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
  margin-top: 15px;
  margin-bottom: 25px;
  gap: 30px;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const ActivitySection = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    display: block;
  }
`;
export const ActivityInformation = styled.div`
  color: white;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const ActivityTitle = styled.h1`
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const ActivityItem = styled.p`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const NoWeather = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SectionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const WeatherButton = styled.button`
  max-width: fit-content;
  color: #08244f;
  font-size: 18px;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  border: 0px;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus {
    background-color: #134cb5;
    box-shadow:
      0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16),
      0px 2px 1px rgba(46, 47, 66, 0.08);
  }
  &:hover {
    background-color: #134cb5;
    box-shadow:
      0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16),
      0px 2px 1px rgba(46, 47, 66, 0.08);
  }
`;
