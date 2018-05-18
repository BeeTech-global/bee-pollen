import React from 'react'
import { storiesOf } from '@storybook/react'

import styleDecorator from '../../decorator-helper'

storiesOf('Remessa - Theme/Landing Pages/Hero', module)
.addDecorator(styleDecorator)
.add('Overview', () => (
  <header className="RM-Hero">
    <div className="RM-Hero-container container">
      <div className="row flex-column">
        <div className="col-11 col-md-7 col-lg-5">
          <h1 className="RM-Hero-title">
            Pague seus estudos no exterior
          </h1>
        </div>
        <div className="col-11 col-md-7 col-lg-5">
          <p className="RM-Hero-lead">
            Faça seu cadastro para realizar pagamentos
            e tenha o controle total da sua vida financeira global.
            Envie dinheiro para o exterior e
            receba no Brasil sem complicação e as altas taxas dos bancos.
          </p>
        </div>
      </div>
    </div>
  </header>
))
// .add('Woot', () => (
//   <div className="EE container">
//     <div className="row">
//       <div className="col-2">
//         <span />
//       </div>
//       <div className="col-2">
//         <span />
//       </div>
//       <div className="col-2">
//         <span />
//       </div>
//       <div className="col-2">
//         <span />
//       </div>
//       <div className="col-2">
//         <span />
//       </div>
//       <div className="col-2">
//         <span />
//       </div>
//     </div>
//   </div>
// ))
