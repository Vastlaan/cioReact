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
  margin: ${p=>p.margin?p.margin: "0"};
  background-color: ${p=>p.backgroundColor?p.backgroundColor:'white'};
  display: flex;
  align-items: center;
  color: ${p=>p.color?p.color:'var(--color-primary)'};
  padding: 1.9rem 2.7rem;
  border-radius: 5rem;
  border: 3px solid ${p=>p.backgroundColor?p.backgroundColor:'white'};

  font-size: ${p=>p.fontSize?p.fontSize:"1.9rem"};
  font-weight: 600;
  text-transform: uppercase;
  transition: all .3s;

  svg{
    background-color: ${p=>p.color?p.color:'var(--color-primary)'};
    color: ${p=>p.backgroundColor?p.backgroundColor:'white'};
    font-size: 3.7rem;
    padding: 0px 3px;
    border-radius: 50%;
    margin-left: .9rem;
  }

  &:hover{
    background-color: transparent;
    color: ${p=>p.backgroundColor?p.backgroundColor:'white'};

    svg{
      background-color: transparent;
    }
  }
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