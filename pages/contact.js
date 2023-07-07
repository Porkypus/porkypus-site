import { Container, Heading, Stack, Flex } from '@chakra-ui/react'
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
            <Heading as="h2" fontSize={30} mb={4} mt={8}>
                Contact Details
            </Heading>

            <Flex
                direction={{ sm: 'column', md: 'row' }}
                display="flex"
                align="center"
                justify="space-between"
                maxW="30%"
            >
                <SocialIcon url="https://github.com/Porkypus" />
                <SocialIcon url="https://www.linkedin.com/in/ronanrgvd/" />
                <SocialIcon url="https://discordapp.com/users/379704258771288064" />
                <SocialIcon url="https://open.spotify.com/user/31w3btukbzx6wy4knzwvmancrlem?si=960b080413d34adf" />
            </Flex>
        </Container>
    )
}

export default Contact
