import React, { useState, createContext } from 'react';
import KeyboardShortcut from './components/KeboardShortcut';
import PopulateDetails from './components/PopulateDetails';
import styled from 'styled-components'
import './App.css';

const StyledWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
`;

const StyledPopulateDetails = styled(PopulateDetails)`
  padding: 15px;
`;

const StyledKeyboardShortcut = styled(KeyboardShortcut)`
  color: #fff;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledKeyboardShortcutA = styled(StyledKeyboardShortcut)`
  ${({ isAToggled }) => `
  background-color: ${isAToggled ? 'green' : '#4169e1'};
  `}
`;

const StyledKeyboardShortcutB = styled(StyledKeyboardShortcut)`
  ${({ isBToggled }) => `
  background-color: ${isBToggled ? 'yellow' : '#4169e1'};
  `}
`;

const StyledKeyboardShortcutC = styled(StyledKeyboardShortcut)`
  ${({ isCToggled }) => `
  background-color: ${isCToggled ? 'magenta' : '#4169e1'};
  `}
`;

export const DetailsContext = createContext();

function App() {
  const [isAToggled, setisAToggled] = useState(false);
  const [isBToggled, setisBToggled] = useState(false);
  const [isCToggled, setisCToggled] = useState(false);
  const [shortCutsInfo, setShortCutsInfo] = useState([]);

  const turnGreen = () => {
    setisAToggled(!isAToggled);
  }

  const turnYellow = () => {
    setisBToggled(!isBToggled);
  }

  const turnMagenta = () => {
    setisCToggled(!isCToggled);
  }

  const trackShortCutsInfo = (info) => {
    let data = [];
    data.push(info);
    setShortCutsInfo((state) => [...state, info]);
  }

  return (
    <DetailsContext.Provider value={shortCutsInfo}>
      <StyledWrapper>
        <StyledKeyboardShortcutA 
          isAToggled={isAToggled} 
          combo='shift g' 
          description='Turns the components background color to green' 
          callback={turnGreen}
          trackShortCutsInfo={trackShortCutsInfo}>
          A
        </StyledKeyboardShortcutA>
        <StyledKeyboardShortcutB 
          isBToggled={isBToggled} 
          combo='shift y' 
          description='Turns the components background color to yellow' 
          callback={turnYellow}
          trackShortCutsInfo={trackShortCutsInfo}>
          B
        </StyledKeyboardShortcutB>
        <StyledKeyboardShortcutC 
          isCToggled={isCToggled} 
          combo='shift m' 
          description='Turns the components background color to magenta' 
          callback={turnMagenta}
          trackShortCutsInfo={trackShortCutsInfo}>
          C
        </StyledKeyboardShortcutC>
        <StyledPopulateDetails />
      </StyledWrapper>
    </DetailsContext.Provider>
  );
}

export default App;
