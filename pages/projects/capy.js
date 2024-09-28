import { Box, Container, Image, Link, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Capy = () => {
    const image = '/images/projects/capy.png'
    return (
        <Layout title="Capy">
            <Container w="100%" maxW="container.lg">
                <Box align="center" p={10}>
                    <Image
                        src={image}
                        alt={"Capy'd Away"}
                        height="auto"
                        width="40rem"
                        placeholder="blur"
                        borderRadius={20}
                        transition="transform 0.2s ease-in-out"
                        _hover={{
                            transform: 'scale(1.05)'
                        }}
                    />
                </Box>

                <Box align="center">
                    <Section delay={0.2} mb={4} isWindow={false}>
                        <Text maxW="600" mb={10}>
                            This game was submitted for the{' '}
                            <Link href="https://itch.io/jam/camgamejam">
                                Cambridge Game Jam 2023
                            </Link>
                            . It was my first time using a game engine to design
                            one. The project was made using Unity and lasted for
                            48 hours. All the assets, including images and music
                            were made by the team. Unfortunately, we did not
                            manage to win any categories, but the feedback for
                            the visuals was great and I think this was a great
                            way to learn game design!
                        </Text>
                    </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default Capy
