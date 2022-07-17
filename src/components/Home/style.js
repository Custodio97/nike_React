import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
display: flex;
align-items: center;
justify-content:center;
flex-direction: row-reverse;
background-color: var(--primary-color);
>div{
    width: 40%;
    text-align: center;
    padding: 5px;
    h1{
        color: var(--secondary-color);
        font-size: 3rem;
    }
}
img{
    width: 50%;
    border-radius: 12px;
}
@media screen  and (max-width:900px) {
 flex-direction:column-reverse ;
  > div{
    width: 30%;
    text-align: center;
    padding: 5px;
    h1{
        font-size: 1.5rem;
    }
     p{
        font-size: 20px;
     }
  }
  img{
    width: 80%;
  }
}
`