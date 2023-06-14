import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} mt={3} align="center">
                Hello, I am a graduate computer science student from the
                University of Cambridge!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Porkypus
                    </Heading>
                    <p>Graduate Computer Science Student</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
