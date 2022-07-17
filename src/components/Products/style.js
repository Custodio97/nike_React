import styled from "styled-components";

export const Section = styled.section`
min-height: 100vh;
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
background-color: var(--primary-color);
h1{
    font-size: 2.4rem;
    color: var(--secondary-color);
}
h2{
    font-size: 1.2rem;
    color: #fff;
}
.gruop_card{
    display: grid;
    max-width: 1500px;
    grid-template-columns: repeat(4,1fr);
    .card{
        width: 270px;
        height: 270px;
        margin: 14px;
        text-align: center;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
            border-radius: 12px;
        }
        &:hover{
            transform: translateY(-5px);
            opacity: 0.9;
            transition-duration: 0.4s;
        }
    }
}

@media screen and (max-width:1000px) {
    .gruop_card{
        grid-template-columns: 1fr;
    }
    h1{
        font-size: 1.2rem;
    }
    h2{
        font-size: 0.92rem;
    }
}
`