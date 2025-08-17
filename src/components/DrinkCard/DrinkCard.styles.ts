import styled from 'styled-components';

export const Wrapper = styled.div<{ $alignToRight: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  align-items: ${({ $alignToRight }) => ($alignToRight ? 'start' : 'end')};
`;

export const DrinkPhoto = styled.img`
  object-fit: cover;
  height: 250px;
  width: 250px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const BaseSpirit = styled.img`
  height: 150px;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Frame = styled.div`
  backdrop-filter: blur(10px);

  position: absolute;
  top: 18%;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 15px;
  height: 250px;
  width: 250px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
