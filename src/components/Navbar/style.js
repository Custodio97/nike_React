import styled from "styled-components";


export const Header = styled.header`
background-color: var(--primary-background);
height: 90px;
box-shadow: 0  0 9px 3px #000000;
.logo{
    cursor: pointer;
}
> nav{
    max-width:1240px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    > .nav-menu{
        list-style:none;
        display: flex;
        li{
            padding: 0 2rem;
            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }
}
.toggle{
    display:none;
    cursor: pointer;
}

@media screen and (max-width:900px) {
    .toggle{
        display: flex;
       position: absolute;
       top: 2rem;
       right: 2rem;
    }
    .nav-menu{
        flex-direction: column;
        align-items: center;
        justify-content:center;
        width: 100vw;
        height: 100vh;
        background-color: var(--primary-background);
        position: fixed;
        left: -300%;
         a{
            font-size: 2.3rem;
            line-height: 4rem;
         }
     }
     
     .nav-menu.active{
        left: 0;
     }
}
`