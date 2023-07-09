import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Head from 'next/head'
import { ProjectGridItem } from '../components/grid-item'
import dtwThumbnail from '../public/images/projects/dtw.png'
import capyThumbnail from '../public/images/projects/capy.png'

const Projects = () => {
    return (
        <Container maxWidth="container.xl" align="center">
            <Section delay={0.4}>
                <Heading as="h2" fontSize={30} mb={4} mt={8}>
                    Projects
                </Heading>
            </Section>

            <Section delay={0.8}>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem
                            id="slr-dtw"
                            title="Sign Language Recognition"
                            thumbnail={dtwThumbnail}
                        >
                            A project for sign language recognition using DTW.
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem
                            id="capy"
                            title="Capy'd Away"
                            thumbnail={capyThumbnail}
                        >
                            A game submitted for the Cambridge Game Jam 2023.
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Section>
        </Container>
    )
}

export default Projects
