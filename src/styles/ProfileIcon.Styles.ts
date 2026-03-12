import styled from 'styled-components';

export const IconWrapper = styled.div`
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s;
  }
`;

export const Label = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #333;
`;
