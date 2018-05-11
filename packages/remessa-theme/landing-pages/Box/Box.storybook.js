import React from 'react'
import { storiesOf } from '@storybook/react'

import styleDecorator from '../../decorator-helper'

storiesOf('Remessa - Theme/Landing Pages/Box', module)
.addDecorator(styleDecorator)
.add('Overview', () => (
  <div className="bg-grad-green-blue-1 py-4 clearfix" style={{ minHeight: '100vh' }}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-4">
          <div className="RM-Box cl-white">
            <div className="RM-Box__content">
              <h2 className="h4 cl-medium-spring-green">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-4">
          <div className="RM-Box RM-Box--outline bdr-medium-spring-green cl-white">
            <div className="RM-Box__content">
              <h2 className="h4 cl-white">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-4">
          <div className="RM-Box RM-Box--var1">
            <div className="RM-Box__content">
              <h2 className="h4 cl-cornflower-blue">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 my-4">
          <div className="RM-Box cl-white">
            <div className="RM-Box__content">
              <h2 className="h4 cl-medium-spring-green">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
            <footer className="RM-Box__footer">
              <small><em>Qui labore eiusmod ullamco aliqua officia laborum in occaecat voluptate dolore et.</em></small>
            </footer>
          </div>
        </div>
        <div className="col-md-4 my-4">
          <div className="RM-Box RM-Box--outline bdr-medium-spring-green cl-white">
            <div className="RM-Box__content">
              <h2 className="h4 cl-white">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
            <footer className="RM-Box__footer cl-primary bg-medium-spring-green">
              <small><em>Qui labore eiusmod ullamco aliqua officia laborum in occaecat voluptate dolore et.</em></small>
            </footer>
          </div>
        </div>
        <div className="col-md-4 my-4">
          <div className="RM-Box RM-Box--var1">
            <div className="RM-Box__content">
              <h2 className="h4 cl-cornflower-blue">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
            <footer className="RM-Box__footer">
              <small className="cl-white"><em>Qui labore eiusmod ullamco aliqua officia laborum in occaecat voluptate dolore et.</em></small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
))
.add('With background image', () => (
  <div className="bg-grad-green-blue-1 py-4 clearfix" style={{ minHeight: '100vh' }}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-4">
          <div
            className="RM-Box RM-Box--bg-img"
            style={{ backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/beecambiomkt/images/lps/RB_FT_001-lp-pj/icon-other-service01.svg")' }}
          >
            <div className="RM-Box__content cl-white">
              <h2 className="h4 cl-medium-spring-green">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-4">
          <div
            className="RM-Box RM-Box--bg-img"
            style={{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/beecambiomkt/images/lps/RB_FT_001-lp-pj/icon-other-service02.svg)' }}
          >
            <div className="RM-Box__content cl-white">
              <h2 className="h4 cl-medium-spring-green">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-4">
          <div
            className="RM-Box RM-Box--bg-img"
            style={{ backgroundImage: 'url("https://s3-us-west-2.amazonaws.com/beecambiomkt/images/lps/RB_FT_001-lp-pj/icon-other-service03.svg")' }}
          >
            <div className="RM-Box__content cl-white">
              <h2 className="h4 cl-medium-spring-green">
                Tempor ut consectetur fugiat culpa elit quis
              </h2>
              <p>
                Labore dolor nostrud in aute ad quis velit irure qui proident consequat adipisicing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))
