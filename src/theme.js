
import Color from 'color'
import { css } from '@emotion/core'

export const Black = { r: 0, g: 0, b: 0 }
export const White = { r: 255, g: 255, b: 255 }

export const LightColors = {
  Blue: { r: 0, g: 122, b: 255 },
  Green: { r: 52, g: 199, b: 89 },
  Indigo: { r: 88, g: 86, b: 214 },
  Orange: { r: 255, g: 149, b: 0 },
  Pink: { r: 255, g: 45, b: 85 },
  Purple: { r: 175, g: 82, b: 222 },
  Red: { r: 255, g: 59, b: 48 },
  Teal: { r: 90, g: 200, b: 250 },
  Yellow: { r: 255, g: 214, b: 10 },
  gray: { r: 142, g: 142, b: 147 },
  gray2: { r: 174, g: 174, b: 178 },
  gray3: { r: 199, g: 199, b: 204 },
  gray4: { r: 209, g: 209, b: 214 },
  gray5: { r: 229, g: 229, b: 234 },
  gray6: { r: 242, g: 242, b: 247 },
  background: { r: 247, g: 247, b: 247 },
  elevation1: { r: 240, g: 240, b: 240 },
  elevation2: { r: 231, g: 231, b: 231 }
}

export const DarkColors = {
  Blue: { r: 10, g: 132, b: 255 },
  Green: { r: 48, g: 209, b: 88 },
  Indigo: { r: 94, g: 92, b: 230 },
  Orange: { r: 255, g: 159, b: 10 },
  Pink: { r: 255, g: 55, b: 95 },
  Purple: { r: 191, g: 90, b: 242 },
  Red: { r: 255, g: 69, b: 58 },
  Teal: { r: 100, g: 210, b: 255 },
  Yellow: { r: 255, g: 214, b: 10 },
  gray: { r: 142, g: 142, b: 147 },
  gray2: { r: 99, g: 99, b: 102 },
  gray3: { r: 72, g: 72, b: 74 },
  gray4: { r: 58, g: 58, b: 60 },
  gray5: { r: 44, g: 44, b: 46 },
  gray6: { r: 28, g: 28, b: 30 },
  background: { r: 37, g: 37, b: 37 },
  elevation1: { r: 45, g: 45, b: 45 },
  elevation2: { r: 49, g: 49, b: 49 }
}

export const LightTheme = {
  primary: LightColors.Blue,
  positive: LightColors.Green,
  negative: LightColors.Red,
  warning: LightColors.Orange
}

export const DarkTheme = {
  primary: DarkColors.Blue,
  positive: DarkColors.Green,
  negative: DarkColors.Red,
  warning: DarkColors.Orange
}

const colors = Object.keys(LightTheme).reduce((acc, key) => {
  acc[key] = {
    light: LightTheme[key],
    dark: DarkColors[key]
  }
  return acc
}, {})

export const Theme = {
  colors,
  button: css`
    /* label */
    color: rgba(0,0,0,0.85);
    letter-spacing: -0.08px;
    text-align: center;
    /* button */
    background: #FFFFFF;
    border: 0.5px solid rgba(0,0,0,0.15);
    box-shadow: 0 0 1.5px 0 rgba(0,0,0,0.20);
    border-radius: 3px;
    &:active, &.primary {
      /* label */
      color: #FFFFFF;
      /* button */
      background-image: linear-gradient(180deg, #6CB3FA 0%, #067DFF 100%);
      box-shadow: 0 0.5px 0.5px 0 rgba(0,0,0,0.15);
      border: 0.5px solid rgba(210,93,65,1.0);
      border-radius: 3.5px;
    }
    &.primary:active {
      color: rgba(255,255,255,0.85);
      background-image: linear-gradient(180deg, #3A99F8 0%, #0064D1 100%);
    }

    &:disabled {
      /* label */
      color: rgba(37,37,37,0.25);
      /* button */
      background: rgba(255,255,255,0.5);;
      border: 0.5px solid rgba(0,0,0,0.15);
      box-shadow: 0 0 1px 0 rgba(0,0,0,0.20);
      border-radius: 3px;
    }

    @media (prefers-color-scheme: dark) {
      /* label */
      color: rgba(255,255,255,0.85);
      /* button */
      background: rgba(255,255,255,0.25);
      border: 0.5 solid rgba(0,0,0,0.35);
      box-shadow: 0 0 1px 0 rgba(0,0,0,0.20), inset 0 1px 0 0 rgba(255,255,255,0.04), inset 0 0 0 0 rgba(255,255,255,0.16);
      &:active, &.primary {
        /* label */
        color: #FFFFFF;
        /* button */
        background-image: linear-gradient(180deg, #1768E5 0%, #145CCC 100%);
        box-shadow: 0 0 1px 0 rgba(0,0,0,0.40), 0 0 1px 0 rgba(0,0,0,0.20), inset 0 0 0 0 rgba(255,255,255,0.25), inset 0 1px 0 0 rgba(255,255,255,0.06);
        border-radius: 3.5px;
      }
      &:disabled {
        color: rgba(255,255,255,0.85);
        background: rgba(255,255,255,0.25);
        border: 0.5 solid rgba(0,0,0,0.35);
        box-shadow: 0 0 1px 0 rgba(0,0,0,0.20), inset 0 1px 0 0 rgba(255,255,255,0.04), inset 0 0 0 0 rgba(255,255,255,0.16);
      }
    }
  `
}

export default Theme
