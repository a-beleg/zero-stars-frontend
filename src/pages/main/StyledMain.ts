import styled from 'styled-components';
import backgroundImage from '../../assets/bg.svg';
import {Textfit} from 'react-textfit';
import {isMobile} from "react-device-detect";


export const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 15%;
  padding: 0 0.5em;
`;

export const Column = styled(Textfit)`
  display: flex;
  align-items: center;
  text-align: justify;
  width: 33%;
`;

export const MiddleColumnWrapper = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`;

export const MiddleColumn = styled.div<{
    maxHeight: number;
    fontSize: number;
}>`
  display: flex;
  height: ${({maxHeight}) => maxHeight}px;
  font-size: ${({fontSize}) => fontSize}px;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.div`
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

export const Input = styled.input.attrs({
    className: 'input',
    type: 'number',
    min: 0,
    max: 10,
})<{
    fontSize: number,
    wider: boolean,
}>`
  width: ${({wider, fontSize}) => wider ? isMobile ? '55%' : `${2 * fontSize}px` : isMobile ? '40%' : `${fontSize}px`};
  display: flex;
  font-size: ${({fontSize}) => fontSize}px;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  appearance: textfield;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
