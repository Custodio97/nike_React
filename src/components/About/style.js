import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
background-color: var(--primary-background);
.container{
    max-width: 1300px;
    display: flex;
    align-items:center;
    justify-content: center;
    
    .content__container{
        width: 50%;
        text-align: center;
        padding: 1rem;
       p{
        font-size: 1.2rem;
        line-height: 3rem;
       }
    }
    img{
        width: 50%;
    }
}
@media screen and (max-width:960px) {
    .container{
        flex-direction: column;
        img{
            width: 100%;
        }
    }
}
`