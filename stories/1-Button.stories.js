import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Window } from '../'

export default {
  title: 'Button',
  component: Button
}

export const Default = () => (
  <Window>
    <Button onClick={action('clicked')}>Default Button</Button>
  </Window>
)

export const Primary = () => (
  <Window>
    <Button variant="primary" onClick={action('clicked')}>Primary Button</Button>
  </Window>
)

export const Positive = () => (
  <Window>
    <Button variant="positive" onClick={action('clicked')}>
      <span role="img" aria-label="so cool"> 👍 </span>Positive Button</Button>
  </Window>
)

export const Emoji = () => (
  <Window>
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
      😀 😎 👍 💯
      </span>
    </Button>
  </Window>
)
