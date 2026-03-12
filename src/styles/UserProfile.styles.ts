import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fafafa;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

export const Name = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #222;
`;

export const Bio = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
`;

export const Button = styled.button`
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 6px;
  background: #0070f3;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #005bb5;
  }
`;
