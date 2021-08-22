import styled from 'styled-components'

export const Icon = styled.div`

  display: flex;
  align-items: center;
  margin: ${p=>p.margin?p.margin: "0"};

  svg{
    font-size: ${p=>p.fontSize?p.fontSize:"3.2rem"};
    color: ${p=>p.color?p.color: 'var(--color-primary)'};
  }
`