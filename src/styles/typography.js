import styled from 'styled-components'
import {fonts} from './fonts'
import { respond } from '.'

// Headings

export const Heading1 = styled.h1`
  margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: 4.7rem;
  font-weight: 600;
  line-height: 1.3;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
  color: ${(p)=>p.color?p.color:"var(--color-grey-1)"};
  text-align: ${p=>p.align?p.align:'center'};
  

  ${()=>respond('m','font-size: 6.7rem;')}

  span{
    color: ${p=>p.color2?p.color2:"var(--color-primary)"}
  }
`

export const Heading2 = styled.h2`
  margin: ${p=>p.margin?p.margin:'0'};
  font-family: ${fonts.heading};
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 1.3;
  text-shadow: 0 .3rem .5rem rgba(0,0,0,.3);
  color: ${(p)=>p.color?p.color:"var(--color-grey-1)"};
  text-align: ${p=>p.align?p.align:'center'};
  

  ${()=>respond('m','font-size: 4.7rem;')}

  span{
    color: ${p=>p.color2?p.color2:"var(--color-primary)"}
  }
`

// Paragraphs

export const Text = styled.p`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(p)=>p.color?p.color:"var(--color-grey-4)"};
  max-width: ${(p)=>p.wide?p.wide:'45rem'};
  text-align: ${p=>p.align?p.align:'center'};
`


export const TextBold = styled.p`
  margin: ${p=>p.margin?p.margin:'0'};
  font-size: ${p=>p.size?p.size:"2.2rem"};
  font-family: ${fonts.heading};
  color: ${(p)=>p.color?p.color:"var(--color-grey-4)"};
  max-width: ${(p)=>p.maxWidth?p.maxWidth:'65rem'};
  text-align: ${p=>p.align?p.align:'center'};
  font-weight: 600;
`
