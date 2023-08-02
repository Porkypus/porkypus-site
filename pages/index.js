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
    return (
        <Layout>
            <Container w="100%" maxW="container.lg">
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.300')}
                    p={3}
                    mb={6}
                    mt={3}
                    align="center"
                >
                    Hello, I am a graduate computer science student from the
                    University of Cambridge!
                </Box>

                <Box flexGrow={1}>
                    <Section delay={0.2}>
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
                >
                    <Section delay={0.6} width={500} mb={0}>
                        <Heading as="h2" variant="section-title" mb={6}>
                            About
                        </Heading>
                        <Paragraph>
                            I am a computer science graduate, recently
                            completing the Computer Science Tripos at the
                            University of Cambridge. I am now preparing to work
                            at GMSL, a software company working with clients in
                            the gas and power industry.
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
                            borderColor="whiteAlpha.800"
                            borderWidth={1}
                            borderStyle="solid"
                            maxWidth="180px"
                            display="inline-block"
                            src="images/ronan.jpg"
                            alt="Profile Image"
                            mb={4}
                        />
                    </Box>
                </Flex>

                <Section delay={1}>
                    <Heading as="h2" variant="section-title" mb={6}>
                        Work Experience
                    </Heading>
                    <JobHistory />
                </Section>

                <Section delay={1.4}>
                    <Heading as="h2" variant="section-title">
                        Interests
                    </Heading>
                    <ul>
                        <li>Blockchain technologies</li>
                        <li>Machine learning</li>
                        <li>OOP design</li>
                    </ul>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
