import { motion, stagger } from 'framer-motion'
import { Container, Heading, Stack, Flex, Text } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { SocialIcon } from 'react-social-icons'

const urlList = [
    {
        url: 'https://github.com/Porkypus',
        color: 'white'
    },
    {
        url: 'https://www.linkedin.com/in/ronanrgvd/',
        color: 'white'
    },
    {
        url: 'https://discordapp.com/users/379704258771288064',
        color: 'white'
    },
    {
        url: 'https://open.spotify.com/user/31w3btukbzx6wy4knzwvmancrlem?si=960b080413d34adf',
        color: 'black'
    },
    {
        url: 'mailto:ronan.rgvd@gmail.com',
        color: 'black'
    }
]
const Contact = () => {
    return (
        <Layout title="Contact">
            <Container align="center" justify="center">
                <Section isWindow={false}>
                    <Heading as="h2" fontSize={30} mb={4} mt={8}>
                        Contact Details
                    </Heading>
                </Section>

                <Section delay={0.4} isWindow={false}>
                    <Text mb={10}>
                        If you want to contact me for any queries, whether they
                        concern job opportunities, questions about my projects,
                        or simply for a quick chat, feel free to use any of the
                        linked platforms to drop me a message or invite!
                    </Text>
                </Section>

                <Section delay={0.8} isWindow={false}>
                    <Flex
                        direction={{ md: 'row' }}
                        display="flex"
                        align="center"
                        justify="center"
                        gap={6}
                    >
                        {urlList.map(({ url, color }, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.2
                                }}
                                transition={{ ease: 'easeOut', duration: 0.25 }}
                            >
                                <SocialIcon url={url} fgColor={color} />
                            </motion.div>
                        ))}
                    </Flex>
                </Section>
            </Container>
        </Layout>
    )
}

export default Contact
