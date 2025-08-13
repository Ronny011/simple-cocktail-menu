import styled from 'styled-components';

export const Wrapper = styled.div<{ $alignToRight: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  align-items: ${({ $alignToRight }) => ($alignToRight ? 'start' : 'end')};
`;

export const Images = styled.div<{ $alignToRight: boolean }>`
  display: flex;
  flex-direction: ${({ $alignToRight }) => ($alignToRight ? 'row' : 'row-reverse')};
  gap: 15px;
`;

export const DrinkPhoto = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const BaseSpirit = styled.img`
  height: 100px;
`;

export const Title = styled.h2`
  margin: 0;
`;
