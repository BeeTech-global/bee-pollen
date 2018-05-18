import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Remessa - Theme/Landing Pages/TopHeaderNav', module)
.addDecorator(story => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      background: 'var(--color-cherry-pie)'
    }}
  >
    {story()}
  </div>
))
.add('Overview', () => (
  <div className="RM-TopHeaderNav">
    <nav className="container RM-TopHeaderNav__container">
      <div className="row">
        <div className="col-12">
          <a href="https://www.remessaonline.com.br" title="Voltar para a Remessa Online">
            <svg>
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#remessa-logo" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </div>
))
