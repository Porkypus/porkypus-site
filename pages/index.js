import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Flex,
    Spacer
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Typewriter from 'typewriter-effect'
import JobHistory from '../components/job-history'

const Page = () => {
    const bgColor = useColorModeValue('#ececec6A', '#2d3132DA')
    return (
        <Layout>
            <Container w="100%" maxW="container.lg">
                <Box flexGrow={1}>
                    <Section delay={0.2} mb={4} isWindow={false}>
                        <Heading as="h2" size="2xl" mb={4}>
                            Ronan Ragavoodoo
                        </Heading>

                        <Heading as="h4" size="md" mb={4}>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Quant Analyst/Dev',
                                        'Software Engineer',
                                        'Computer Science @ UniOfCambridge'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 10,
                                    delay: 70
                                }}
                            />
                        </Heading>
                    </Section>
                </Box>

                <Flex
                    direction={{ base: 'column', sm: 'column', md: 'row' }}
                    mb={12}
                >
                    <Box flexShrink={0} align="center" justifyContent="center">
                        <Image
                            borderRadius={20}
                            borderStyle="solid"
                            height="auto"
                            width="30vh"
                            display="inline-block"
                            src="images/ronan.jpg"
                            alt="Profile Image"
                            mt={8}
                            mr={20}
                            mb={8}
                            transition="transform 0.2s ease-in-out"
                            _hover={{
                                transform: 'scale(1.05)'
                            }}
                        />
                    </Box>
                    <Spacer />
                    <Section delay={0.6} bgColor={bgColor} title="About">
                        <Paragraph>
                            Hi! I'm Ronan, an incoming quant developer, a
                            relatively recent graduate in Computer Science from
                            the University of Cambridge. I will be working at
                            Squarepoint Capital, a hedge fund which focuses on
                            quantitative methods for trading.
                        </Paragraph>

                        <Paragraph>
                            In my free time, I like playing video games, cooking
                            and tasting dishes, trying out different cuisines,
                            and I also do olympic fencing, which I do less
                            nowadays.
                        </Paragraph>
                    </Section>
                </Flex>

                <Box mb={12}>
                    <Section
                        delay={1}
                        bgColor={bgColor}
                        title="Work Experience"
                    >
                        <JobHistory />
                    </Section>
                </Box>

                <Box mb={12}>
                    <Section delay={1.4} bgColor={bgColor} title="Interests">
                        <Paragraph>
                            I like problems that are algorithmic in nature.
                            Recently, I took a liking to algorithmic trading,
                            due to the high use of statistics, probability, and
                            information theory in the field. This naturally
                            leads to some interest in machine learning as well,
                            which is used in some related industries.I also
                            worked a bit with blockchain technologies (Solidity)
                            and found that quite cool.
                        </Paragraph>
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default Page
