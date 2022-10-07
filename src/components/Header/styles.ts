import styled from "styled-components";

export const Container = styled.header `
 background: var(--blue);
 border-radius: 0 0 1rem 10rem;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--rgb-green);
    border: 0;
    padding: 0 2rem;
    border: 1px solid var(--rgb-green);
    border-radius: 0.50rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;