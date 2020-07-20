/* eslint-disable react/jsx-key */
import React from 'react'
import { Window } from '../'

export default {
  title: 'Window',
  component: Window
}

export const Default = () => (
  <Window>
    Default Windows background and margin
  </Window>
)

export const Popover = () => (
  <Window popover>
    Popover Windows background and margin
  </Window>
)

export const sheet = () => (
  <Window sheet>
    Popover Windows background and margin
  </Window>
)