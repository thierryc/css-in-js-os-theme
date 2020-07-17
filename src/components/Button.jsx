import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Theme from '../theme'

/**
 *
 *
 * Buttons
 *

 Buttons come in many flavors and should be used for main call to actions, to submit forms, or trigger behaviors.

```
<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="positive">Positive</Button>
<Button variant="negative">Negative</Button>
<Button variant="warning">Warning</Button>
<Button variant="cancel">Warning</Button>

```

background: rgba(255,255,255,0.25);
border: 0 solid rgba(0,0,0,0.35);
box-shadow: 0 0 1px 0 rgba(0,0,0,0.20), inset 0 1px 0 0 rgba(255,255,255,0.04), inset 0 0 0 0 rgba(255,255,255,0.16);
border-radius: 3px;

background-image: linear-gradient(180deg, #1768E5 0%, #145CCC 100%);
box-shadow: 0 0 1px 0 rgba(0,0,0,0.40), 0 0 1px 0 rgba(0,0,0,0.20), inset 0 0 0 0 rgba(255,255,255,0.25), inset 0 1px 0 0 rgba(255,255,255,0.06);
border-radius: 3.5px;

background-image: linear-gradient(180deg, #6CB3FA 0%, #067DFF 100%);
box-shadow: 0 0 0 0 rgba(0,0,0,0.15);
border-radius: 3.5px;

-webkit-border-image:

*/

const getBackgroundImage = (theme, { variant = 'default' }) => {
  console.log(Theme[theme])
  if (!Theme[theme] || !Theme[theme].buttons[variant]) return null
  const colorStart = Theme[theme].buttons[variant][0]
  const colorEnd = Theme[theme].buttons[variant][1]
  console.log(`background-image: linear-gradient(180deg, ${colorStart} 0%, ${colorEnd} 100%)`);
  return css`background-image: linear-gradient(180deg, ${colorStart} 0%, ${colorEnd} 100%)`
}

const Button = styled.button`
  padding: 3px 20px 4px 20px;
  color: #000000;
  ${props => getBackgroundImage('Light', props)};
  border: 0 solid rgba(0,0,0,0.10);
  box-shadow: 0 0 0 0 rgba(0,0,0,0.15);
  border-radius: 4px;
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
    background: rgba(255,255,255,0.22);
    ${props => getBackgroundImage('Dark', props)};
    border: 0 solid rgba(0,0,0,0.35);
    box-shadow: inset 0 0 0 0 rgba(255,255,255,0.12), inset 0 1px 0 0 rgba(255,255,255,0.03);
    border-radius: 4px;
  }
`

export default Button
