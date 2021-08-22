import styled from 'styled-components'
import { fonts } from '.'

export const ButtonPrimary = styled.button`
  background-color: ${p=>p.backgroundColor?p.backgroundColor:"var(--color-secondary)"};
  color: white;
  font-family: ${fonts.heading};
  font-weight:600;
  font-size: ${p=>p.fontSize?p.fontSize:"1.6rem"};
  margin: ${p=>p.margin?p.margin:"0"};
  padding: .9rem 2.2rem;
  transition: all .3s;
  border-radius: 3px;
  letter-spacing: .15rem;
  text-transform: uppercase;

  &:hover{
    background-color: ${p=>p.backgroundColorHover?p.backgroundColorHover:"var(--color-secondary-light)"};
  }
`

export const ButtonRound = styled.button`
  
`

export const ButtonPlane = styled.button`
border: none;
border-bottom: 2px solid white;
background-color: transparent;
margin: ${p=>p.margin?p.margin: "0"};
display: flex;
align-items: center;
font-size: 2.7rem;
color: ${p=>p.color?p.color:"white"};
cursor: pointer;

svg{
  margin-left: 1.4rem;
  color: ${p=>p.color?p.color:"white"};
  font-size; 2.7rem;
}

`