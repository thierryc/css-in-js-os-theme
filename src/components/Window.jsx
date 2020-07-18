import React from 'react'
import { css } from '@emotion/core'
import Theme from '../theme'

// eslint-disable-next-line react/prop-types
const Window = ({ popover = false, sheet = false, className = null, children }) => (
  <div
    className={`${className} ${popover ? 'popover' : null} ${sheet ? 'sheet' : null}`}
    css={css`${Theme.window}`}
  >
    {children}
  </div>
)

export default Window
