import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 25px;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  font-size: 35px;
  box-shadow: rgba(0, 0, 0, 0.43) 0px 4px 12px;

  background-color: var(--light);
  color: var(--dark-text);
`;
