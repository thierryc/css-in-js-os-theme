/* eslint-disable react/jsx-key */
import React from 'react'
import { Window, Theme } from '../'

export default {
  title: 'Colors',
  component: Window
}

export const Colors = () => {
  console.log(Theme.colors)
  return (
    <Window>
      {Object.keys(Theme.colors).map((key) => (
        <div>
          <div style={{
            width: 25,
            height: 25,
            backgroundColor: `rbg(${Theme.colors[key].light.r}, ${Theme.colors[key].light.g}, ${Theme.colors[key].light.b})`,
            '@media (prefers-color-scheme: dark)': {
              backgroundColor: `rbg(${Theme.colors[key].dark.r}, ${Theme.colors[key].dark.g}, ${Theme.colors[key].dark.b})`
            }
          }}>
          </div>
          <div>
            {key}
          </div>

        </div>

      ))}
    </Window>
  )
}
