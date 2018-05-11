import React from 'react'
import { configure, setAddon } from '@storybook/react'
import infoAddon from '@storybook/addon-info'

import remessaThemeUrl from '../packages/remessa-theme/remessa-theme.scss'

const requires = require.context('../packages/', true, /storybook\.js$/)
const choreRequires = require.context('../.storybook', true, /storybook\.js$/)

const loadStories = () => {
  choreRequires.keys().forEach(choreRequires)
  requires.keys().forEach(requires)
}

setAddon(infoAddon)

// const strategies = {
//   'Remessa - Theme': (StoryFN) => [
//     <link key="remessa-theme" rel="stylesheet" href={remessaThemeUrl} />,
//     <StoryFN key="story" />
//   ]
// }

// addDecorator((story, { kind }) => {
//   const base = kind.split('/')[0]

//   if (strategies[base]) {
//     return strategies[base](story)
//   }

//   return story()
// })

configure(loadStories, module)
