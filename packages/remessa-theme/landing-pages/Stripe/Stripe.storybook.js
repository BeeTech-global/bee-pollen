import React from 'react'
import { storiesOf } from '@storybook/react'

import styleDecorator from '../../decorator-helper'

storiesOf('Remessa - Theme/Landing Pages/Stripe', module)
.addDecorator(styleDecorator)
.add('Overview', () => (
  <div className="bg-cherry-pie py-4 clearfix">
    <div className="container">
      <h2 className="h3 h2-md cl-white my-0">
        Lorem ipsum in proident sint proident enim fugiat culpa occaecat irure consectetur in.
      </h2>
    </div>
  </div>
))
