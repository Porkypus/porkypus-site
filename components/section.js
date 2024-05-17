import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({
    children,
    delay = 0,
    bgImage = '',
    width = '100%',
    mb = 12
}) => (
    <StyledDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay }}
        mb={mb}
        width={width}
        p={5}
        backgroundImage={bgImage}
        borderRadius={12}
    >
        {children}
    </StyledDiv>
)

export default Section
