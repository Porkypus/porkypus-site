import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button,
    useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
    const textColor = useColorModeValue('black', 'white')
    return (
        <Container>
            <Heading as="h1">Not found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <Button
                    as={NextLink}
                    href="/"
                    colorScheme="whiteAlpha"
                    color={textColor}
                >
                    Return to home
                </Button>
            </Box>
        </Container>
    )
}

export default NotFound
