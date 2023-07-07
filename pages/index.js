import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Flex,
    Spacer
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Typewriter from 'typewriter-effect'

const Page = () => {
    return (
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
                align="space-between"
            >
                <Section delay={0.6} width={500}>
                    <Heading as="h2" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        I am a computer science graduate, recently completing
                        the Computer Science Tripos at the University of
                        Cambridge. I am now preparing to work at GMSL, a
                        software company working with clients in the gas and
                        power industry.
                    </Paragraph>
                </Section>
                <Spacer />
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={1}
                        borderStyle="solid"
                        maxWidth="200px"
                        display="inline-block"
                        src="images/ronan.jpg"
                        alt="Profile Image"
                    />
                </Box>
            </Flex>

            {/* <Box align="center" my={4}>
                <NextLink href="/projects">
                    <Button
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                        variant="ghost"
                    >
                        My Portfolio
                    </Button>
                </NextLink>
            </Box> */}

            <Section delay={1}>
                <Heading as="h2" variant="section-title">
                    Timeline
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born in London, UK
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Started studying the Computer Science Tripos at the
                    University of Cambridge
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Graduated from the University of Cambridge
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Software Developer at GMSL
                </BioSection>
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
    )
}

export default Page
