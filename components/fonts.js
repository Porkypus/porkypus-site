import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
        @import url('https://fonts.googleapis.com/css?family=Roboto Mono');
        @import url('https://fonts.googleapis.com/css?family=Ubuntu Mono');
        `}
    />
)

export default Fonts
