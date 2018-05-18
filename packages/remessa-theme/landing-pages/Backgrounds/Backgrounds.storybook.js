import React from 'react'
import { storiesOf } from '@storybook/react'

import styleDecorator from '../../decorator-helper'

const Content = () => (
  <div className="container cl-white">
    <h1 className="h2 h1-md cl-white mb-5">Voluptate fugiat consectetur irure tempor fugiat esse dolor labore.</h1>
    <p>
      Eiusmod duis occaecat deserunt consequat incididunt qui ea id nostrud consectetur velit sunt minim labore dolor magna amet veniam ullamco est in labore deserunt sint laboris sed sit adipisicing.
    </p>
    <p>
      In do magna officia aliquip reprehenderit duis culpa laboris velit sit sed elit laborum culpa in labore id non.
    </p>
    <p>Esse dolore in aliquip labore aute labore et consequat amet non do pariatur occaecat dolore voluptate nulla enim amet nisi consectetur.</p>
    <p>Occaecat reprehenderit sed quis consequat reprehenderit excepteur reprehenderit anim anim dolor tempor qui est laborum irure culpa in sunt irure amet labore officia minim exercitation sed velit qui quis veniam duis non enim.</p>
    <p>Eu pariatur in qui officia ea ad duis tempor commodo ut in aute sunt nisi esse ut fugiat voluptate in veniam proident veniam amet cillum non sed in minim sint non esse culpa dolore elit magna consectetur.</p>
    <p>Cupidatat ex sed occaecat quis amet in mollit in est cupidatat in in sunt veniam esse consequat sit eiusmod cillum deserunt elit amet amet cupidatat incididunt laboris cillum proident.</p>
    <p>Lorem ipsum eu excepteur eu culpa tempor do cupidatat in id officia duis ex sunt consequat eu ea aute incididunt quis.</p>
    <p>Consectetur aute deserunt voluptate ut aute minim est amet id sunt dolor et officia esse incididunt laborum officia velit labore exercitation excepteur laborum dolor in eiusmod velit amet ea cupidatat culpa incididunt occaecat est ut ad elit eiusmod sed.</p>
    <p>Lorem ipsum nulla quis est ex esse ut ut occaecat duis consectetur in fugiat ullamco eu tempor culpa tempor exercitation mollit esse.</p>
    <p>Ullamco occaecat voluptate mollit aliquip enim et consequat consequat non irure cillum commodo anim amet exercitation est dolore magna est.</p>
  </div>
)

storiesOf('Remessa - Theme/Landing Pages/Backgrounds', module)
.addDecorator(styleDecorator)
.add('Green Blue 1', () => (
  <div className="bg-grad-green-blue-1 py-4 clearfix" style={{ minHeight: '100vh' }}>
    <Content />
  </div>
))
.add('Blue Green 1', () => (
  <div className="bg-grad-blue-green-1 py-4 clearfix" style={{ minHeight: '100vh' }}>
    <Content />
  </div>
))
