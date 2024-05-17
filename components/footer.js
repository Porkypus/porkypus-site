import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm" pb={5}>
            {new Date().getFullYear()} Ronan Ragavoodoo
        </Box>
    )
}

export default Footer
