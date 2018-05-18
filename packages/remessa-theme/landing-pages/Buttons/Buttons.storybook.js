import React from 'react'
import { storiesOf } from '@storybook/react'

import styleDecorator from '../../decorator-helper'

storiesOf('Remessa - Theme/Landing Pages/Buttons', module)
.addDecorator(styleDecorator)
.add('Overview', () => (
  <div className="bg-cherry-pie">
    <div className="container">
      <div className="row flex-column align-items-center" style={{ minHeight: '100vh' }}>
        <div className="col-auto my-4 mt-auto text-center">
          <a
            href="#"
            role="button"
            className="btn btn-gradient btn-gradient-blue-green"
          >
            Cadastrar
          </a>
        </div>
        <div className="col-auto my-4 text-center">
          <a
            href="#"
            role="button"
            className="btn btn-gradient btn-gradient-blue"
          >
            Cadastrar
          </a>
        </div>
        <div className="col-auto my-4 mb-auto text-center">
          <a
            href="#"
            role="button"
            className="btn btn-outline-white"
          >
            Cadastrar
          </a>
        </div>
      </div>
    </div>
  </div>
))
