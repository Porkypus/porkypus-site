import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import NextLink from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

const SignLanguageRecognition = () => {
    const image = '/images/projects/dtw.png'

    return (
        <Layout title="Sign Language Recognition">
            <Container w="100%" maxW="container.lg">
                <Box>
                    <Box align="left">
                        <Button
                            as={NextLink}
                            href="/projects"
                            colorScheme="whiteAlpha"
                            scroll={false}
                        >
                            <ArrowBackIcon color="black" />
                        </Button>
                    </Box>
                </Box>
                <Box align="center" p={10}>
                    <Image
                        src={image}
                        alt={'SLR DTW'}
                        height="auto"
                        width={['100%', '100%', '70%']}
                        placeholder="blur"
                        borderRadius={20}
                        transition="transform 0.2s ease-in-out"
                        _hover={{
                            transform: 'scale(1.05)'
                        }}
                    />
                </Box>

                <Box align="center">
                    <Section
                        delay={0.2}
                        mb={4}
                        width={['100%', '100%', '70%']}
                        isWindow={false}
                    >
                        <Text mb={10}>
                            This was the project that I did for my undergraduate
                            dissertation at the University of Cambridge for Part
                            II of the Computer Science Tripos. I was already
                            doing a lot of dynamic programming as part of my
                            coursework and subjects. This inspired me to use
                            this method as a way of recognising sign language
                            gestures. Using tools such as mediapipe to provide
                            features that I could use to compare data, I managed
                            to obtain quite accurate scores when it came to
                            recognising testing data.
                        </Text>
                        <Text>
                            {' '}
                            I would still want to build up on any alternative
                            use cases for DTW. One that I would love to try is
                            in recognising graph patterns and if it possible to
                            use that to determine stock prices.
                        </Text>
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default SignLanguageRecognition
