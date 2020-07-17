import styled from '@emotion/styled'


const dv = {
  variant: {
    default: {
      padding: 'padding: 20.5px;'
    },
    popover: {
      padding: 'padding: 10px 8.5px 10px 8.5px;'
    },
    sheet: {
      padding: 'padding: 10px 8.5px 10px 8.5px;'
    }
  }
}

const getPadding = ({ variant = 'default' }) => (
  dv.variant[variant].padding || null
)

const Window = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: -apple-system, BlinkMacSystemFont, "SF UI Display", Helvetica, Arial, sans-serif;
  font-size: 13px;
  ${getPadding}
  color: #000000;
  background: #ffffff;
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
    background: #000000;
  }
`

export default Window
