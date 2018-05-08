import { configure, setAddon } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import infoAddon from '@storybook/addon-info'
import pkg from '../package.json'

import './open-sans.scss'

const requires = require.context('../packages/', true, /storybook\.js$/)
const choreRequires = require.context('../.storybook', true, /storybook\.js$/)

const loadStories = () => {
  choreRequires.keys().forEach(choreRequires)
  requires.keys().forEach(requires)
}

setAddon(infoAddon)

setOptions({ name: `Bee Pollen v${pkg.version}` })

configure(loadStories, module)
