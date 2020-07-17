import styled from '@emotion/styled'
import { LightTheme, DarkTheme } from '../constants'
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

 */

const getGradient = ({ variant }) => {
  return 'linear-gradient(180deg, #1768E5 0%, #145CCC 100%)'
}

const Button = styled.button`
  background: rgba(255,255,255,0.25);
  background-image: ${getGradient};
  border: 0 solid rgba(0,0,0,0.35);
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.20), inset 0 1px 0 0 rgba(255,255,255,0.04), inset 0 0 0 0 rgba(255,255,255,0.16);
  border-radius: 3px;
`

export default Button
