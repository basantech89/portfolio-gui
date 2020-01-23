import styled from 'styled-components';

export const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  position: fixed;
  z-index: 2;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  @media (min-width: 880px) {
    top: 20px;
    left: 300px;
    width: 7rem;
    height: 2.5rem;
  }
  @media (max-width: 879px) and (min-width: 374px) {
    top: 30px;
    left: 245px;
    width: 5rem;
    height: 2rem;
  }
  @media (max-width: 373px) {
    top: 30px;
    left: 160px;
    width: 5rem;
    height: 2rem;
  }
  & > * {
    height: 2rem;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-5px)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(-5px)'};
    }
  }
`;
