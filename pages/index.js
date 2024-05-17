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
    const lightBgImage =
        'linear-gradient(319deg, rgba(201,201,193,0.4) 6%, rgba(238,238,238,0.4) 100%)'

    const darkBgImage =
        'linear-gradient(345deg, rgba(0,0,0,0.4) 6%, rgba(75,75,75,0.4) 100%)'

    const bgImage = useColorModeValue(lightBgImage, darkBgImage)
    return (
        <Layout>
            <Container w="100%" maxW="container.lg">
                <Box flexGrow={1}>
                    <Section delay={0.2} mb={4}>
                        <Heading as="h2" size="2xl" mb={4}>
                            Ronan Ragavoodoo.
                        </Heading>

                        <Heading as="h4" size="md" mb={4}>
                            <Typewriter
                                options={{
                                    strings: [
                                        'Graduate Software Developer',
                                        'Computer Science @ UniOfCambridge',
                                        'Fencing and eSports Enjoyer'
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
                    align="space-between"
                    alignItems="flex-start"
                >
                    <Section delay={0.6} width={500} bgImage={bgImage}>
                        <Heading as="h2" variant="section-title" mb={6}>
                            About
                        </Heading>
                        <Paragraph>
                            I am a software developer, recently graduating with
                            a BA in Computer Science from the University of
                            Cambridge. I currently work at GMSL, a software
                            company with products involved in gas trading.
                        </Paragraph>
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
                    <Spacer />
                    <Box
                        flexShrink={0}
                        mt={{ base: 3, md: 5 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderRadius={20}
                            borderStyle="solid"
                            height="auto"
                            width="300px"
                            display="inline-block"
                            src="images/ronan.jpg"
                            alt="Profile Image"
                            mb={4}
                            transition="transform 0.2s ease-in-out"
                            _hover={{
                                transform: 'scale(1.05)'
                            }}
                        />
                    </Box>
                </Flex>

                <Box justifyContent="end">
                    <Section delay={1} bgImage={bgImage} width="85%">
                        <Heading as="h2" variant="section-title" mb={6}>
                            Work Experience
                        </Heading>
                        <JobHistory />
                    </Section>
                </Box>

                <Box>
                    <Section
                        delay={1.4}
                        bgImage={bgImage}
                        width="85%"
                        justifySelf="start"
                    >
                        <Heading as="h2" variant="section-title">
                            Interests
                        </Heading>
                        I like problems that are algorithmic in nature.
                        Recently, I took a liking to algorithmic trading, due to
                        the high use of statistics, probability, and information
                        theory in the field. This naturally leads to some
                        interest in machine learning as well, which is used in
                        some related industries.I also worked a bit with
                        blockchain technologies (Solidity) and found that quite
                        cool.
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default Page
