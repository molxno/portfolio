import React from 'react'
import Icon1 from '../../images/img4.png';
import Icon2 from '../../images/img5.png';
import Icon3 from '../../images/img6.png';
import Icon4 from '../../images/img7.png';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2 } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="servicios">
        <ServicesH1>Nos especializamos en</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Plan de negocio</ServicesH2>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Marketing digital</ServicesH2>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Diseño publicitario</ServicesH2>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4} />
                <ServicesH2>Artículos publicitarios</ServicesH2>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services