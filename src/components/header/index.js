import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { Heading1, respond, TextBold }  from '../../styles'
import {BsArrowRight} from 'react-icons/bs'

export default function HeaderComponent({title, description, btnLink, btnText, image}) {

  return (
    <Header image={image}>

      <Heading1 color='white'>{title}</Heading1>

      <TextBold margin='2.7rem 0' color='white' align='left'>
        {description}
      </TextBold>

      {btnLink &&
        <Link to={btnLink}>
          <ButtonRound fontSize='2.2rem'>
            {btnText}
            <BsArrowRight/>
          </ButtonRound>
        </Link>
      }

    </Header>
  )
}

const Header = styled.header`
  position: relative;
  width:100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding: 4.7rem 1.4rem;
  background-image: linear-gradient(to right, rgba(252,50,60,1), rgba(252, 50, 60, .7) ), url(${p=>p.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${()=>respond('m', 'padding: 6.7rem;')}
  
`

const ButtonRound = styled.button`
  
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