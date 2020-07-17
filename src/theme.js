
import Color from 'color'

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
  elevation2: { r: 49, g: 49, b: 49 },
  buttons: {

  }
}

export const LightTheme = {
  primary: LightColors.Blue,
  positive: LightColors.Green,
  negative: LightColors.Red,
  warning: LightColors.Orange,
  color: Black,
  background: DarkColors.gray5,
  buttons: {
    default: [Color(White).darken(0.1).hsl().string(), Color(White).darken(0.2).hsl().string()],
    primary: [Color(LightColors.Blue).lighten(0.2).hsl().string(), Color(LightColors.Blue).hsl().string()],
    positive: [Color(LightColors.Green).lighten(0.2).hsl().string(), Color(LightColors.Green).string()],
    negative: [Color(LightColors.Red).lighten(0.2).hsl().string(), Color(LightColors.Red).string()],
    warning: [Color(LightColors.Orange).lighten(0.2).hsl().string(), Color(LightColors.Orange).string()]
  }
}

export const DarkTheme = {
  primary: DarkColors.Blue,
  positive: DarkColors.Green,
  negative: DarkColors.Red,
  warning: DarkColors.Orange,
  color: White,
  background: DarkColors.gray5,
  buttons: {
    default: [Color(White).darken(0.1).alpha(0.1).hsl().string(), Color(White).darken(0.2).alpha(0.1).hsl().string()],
    primary: [Color(DarkColors.Blue).darken(0.1).hsl().string(), Color(DarkColors.Blue).darken(0.2).hsl().string()],
    positive: [Color(DarkColors.Green).darken(0.1).hsl().string(), Color(DarkColors.Green).darken(0.2).hsl().string()],
    negative: [Color(DarkColors.Red).darken(0.1).hsl().string(), Color(DarkColors.Red).darken(0.2).hsl().string()],
    warning: [Color(DarkColors.Orange).darken(0.1).hsl().string(), Color(DarkColors.Orange).darken(0.2).hsl().string()]
  }
}

export const Theme = {
  Light: LightTheme,
  Dark: DarkTheme
}

export default Theme
