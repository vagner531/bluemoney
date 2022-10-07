import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--rgb-green) ;
    webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border: 1px solid rgb(255 255 255 / 62%);

    padding: 1.5rem 2rem;
    border-radius: 0.55rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: normal;
      line-height: 3rem;
      color: #fff ;
    }

    &.highlight-background {
      background: rgb(6 151 44 / 37%);
      color: #fff;
    }
  }
`;