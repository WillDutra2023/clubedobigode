import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  h2 {
    margin: 1rem;
    font-size: 1.2rem;
  }

  p {
    margin: 0 1rem 1rem;
    color: #555;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    margin: 0 1rem 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }

  .delete {
    background: #c00;
    color: #fff;
  }

  .edit {
    background: #0070f3;
    color: #fff;
  }
`;
