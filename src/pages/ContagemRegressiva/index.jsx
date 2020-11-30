import React, { useState, useEffect } from 'react'
import moment from 'moment'

import Animated from '../../components/Animated'

import './styles.css'
import Rescisao from '../../components/Rescisao'

const ContagemRegressiva = () => {

  const [data, setData] = useState('')
  const [boasVindas, setBoasVindas] = useState('')

  function regressiva() {
    moment.locale('pt-br')

    const data = moment("2020/12/09 00:00:00")
    const dataAtual = moment()
    const diferencaDias = moment.duration(data.diff(dataAtual))
    return diferencaDias._data
  }

  function comprimentar() {
    const d = new Date()

    if (d.getHours() < 12) {
      setBoasVindas('BOM DIA!')
    } else if (d.getHours() < 18) {
      setBoasVindas('BOA TARDE!')
    } else {
      setBoasVindas('BOA NOITE!')
    }
  }

  useEffect(()=> {
    setInterval(() => {
      setData(regressiva())
      comprimentar()
    }, 1000)
  },[])

  return (
    <div className='container'>
      {data.days <= 0 && data.hours <= 0 && data.minutes <= 0 && data.seconds <= 0 ?
        <div className="chegouDia">
          <Rescisao />
          <h1>JÁ ASSINOU SEU AVISO PRÉVIO HOJE?</h1>
        </div>
        :
        <>
          <div className="boasVindas">
            <h1>OLÁ, {boasVindas} </h1>
          </div>
          <div className="contagem">
            <h1>FALTA(M) {data.days} DIA(S) - {data.hours} HR : {data.minutes} MIN : {data.seconds} SEG</h1>
          </div>
          <div>
            <Animated />
          </div>
        </>
      }
    </div>
  )
}

export default ContagemRegressiva;