import { Container, Heading, Stack, Flex, Text } from '@chakra-ui/react'
import Section from '../components/section'
import Head from 'next/head'
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
    return (
        <Container
            maxWidth="container.xl"
            maxH="container.xl"
            align="center"
            justify="center"
        >
            <Section delay={0.4}>
                <Heading as="h2" fontSize={30} mb={4} mt={8}>
                    Contact Details
                </Heading>
            </Section>

            <Section delay={0.8}>
                <Text maxW="600" mb={10}>
                    If you want to contact me for any queries, whether they
                    concern job opportunities, questions about my projects, or
                    simply for a quick chat, feel free to use any of the linked
                    platforms to drop me a message or invite!
                </Text>
            </Section>

            <Section delay={1.2}>
                <Flex
                    direction={{ md: 'row' }}
                    display="flex"
                    align="center"
                    justify="space-between"
                    maxW="300"
                >
                    <SocialIcon
                        url="https://github.com/Porkypus"
                        fgColor="white"
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/ronanrgvd/"
                        fgColor="white"
                    />
                    <SocialIcon
                        url="https://discordapp.com/users/379704258771288064"
                        fgColor="white"
                    />
                    <SocialIcon
                        url="https://open.spotify.com/user/31w3btukbzx6wy4knzwvmancrlem?si=960b080413d34adf"
                        fgColor="white"
                    />
                    <SocialIcon
                        url="mailto:ronan.rgvd@gmail.com"
                        fgColor="white"
                    />
                </Flex>
            </Section>
        </Container>
    )
}

export default Contact
