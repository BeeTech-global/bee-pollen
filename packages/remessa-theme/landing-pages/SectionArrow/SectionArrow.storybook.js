import React from 'react'
import { storiesOf } from '@storybook/react'

import styleDecorator from '../../decorator-helper'

storiesOf('Remessa - Theme/Landing Pages/Section Arrow', module)
.addDecorator(styleDecorator)
.add('Overview', () => (
  <div
    style={{ minHeight: '100vh' }}
    className="bg-grad-green-blue-1 pt-0 pb-4 clearfix"
  >
    <div className="RM-SectionArrow mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 500 500"
      >
        <path
          fillRule="evenodd"
          d="M500.382,249.877L0.4,499.9V-0.145Z"
          transform="rotate(90 249.39099121093753,249.8774871826172)"
        />
      </svg>
    </div>
    <div className="container cl-white">
      <h1 className="h2 cl-white mb-5 cl-light-sea-green">
        Nulla do exercitation nulla deserunt ex irure culpa aliquip tempor tempor anim cupidatat sint in.
      </h1>
      <p>Irure elit mollit elit tempor ut esse nisi exercitation elit est do do aliquip veniam ea.</p>
      <p>Commodo consequat ullamco sint ad ut minim proident duis commodo veniam sunt et ad nulla exercitation ex pariatur officia aliquip aute.</p>
    </div>
  </div>
))
