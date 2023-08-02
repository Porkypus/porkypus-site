import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            {new Date().getFullYear()} Ronan Ragavoodoo
        </Box>

        // <Box
        //     pos="fixed"
        //     align="center"
        //     width="100%"
        //     zIndex={1}
        //     opacity={0.4}
        //     fontSize="sm"
        // >
        //     {new Date().getFullYear()} Ronan Ragavoodoo
        // </Box>
    )
}

export default Footer
