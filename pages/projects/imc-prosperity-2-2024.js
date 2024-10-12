import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import NextLink from 'next/link'
import { ArrowBackIcon } from '@chakra-ui/icons'

const SignLanguageRecognition = () => {
    const image = '/images/projects/imc-prosperity-2.png'

    return (
        <Layout title="IMC Prosperity 2">
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
                        alt={'IMC'}
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
                            I participated as a solo player in the IMC
                            Prosperity 2 algorithmic trading competition, where
                            I developed and implemented trading strategies for
                            various simulated market scenarios. I mostly did
                            this for fun, as I wanted to learn more about the
                            algorithmic trading industry in general. The
                            competition involved analyzing market data,
                            identifying patterns, and making manual trading
                            decisions to maximize profits. The API provided was
                            provided in Python, which I used to develop my
                            algorithms. Although I didn't win the competition,
                            the experience was invaluable. It provided hands-on
                            experience with algorithmic trading concepts,
                            improved my skills in data analysis and strategy
                            development, and gave me insights into the
                            complexities of financial markets.
                        </Text>
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default SignLanguageRecognition
