import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ProjectGridItem } from '../components/grid-item'
import dtwThumbnail from '../public/images/projects/dtw.png'
import capyThumbnail from '../public/images/projects/capy.png'
import porkypusSiteThumbnail from '../public/images/projects/porkypus-site.png'
import codiesThumbnail from '../public/images/projects/codies.png'
import hppThumbnail from '../public/images/projects/hpp.png'

const Projects = () => {
    return (
        <Layout title="Projects">
            <Container maxWidth="container.xl" align="center">
                <Section>
                    <Heading as="h2" fontSize={30} mb={4} mt={8}>
                        Projects
                    </Heading>
                </Section>

                <Section delay={0.4}>
                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section>
                            <ProjectGridItem
                                id="slr-dtw"
                                title="Sign Language Recognition"
                                thumbnail={dtwThumbnail}
                            >
                                A project for sign language recognition using
                                DTW.
                            </ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem
                                id="capy"
                                title="Capy'd Away"
                                thumbnail={capyThumbnail}
                            >
                                A game submitted for the Cambridge Game Jam
                                2023.
                            </ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem
                                id="porkypus-site"
                                title="porkypus-site"
                                thumbnail={porkypusSiteThumbnail}
                            >
                                Source code for porkypus-site.
                            </ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem
                                id="codies-bot"
                                title="CodiesBot"
                                thumbnail={codiesThumbnail}
                            >
                                A Discord bot written to play Codies.
                            </ProjectGridItem>
                        </Section>
                        <Section>
                            <ProjectGridItem
                                id="hpp"
                                title="Household Payment Pools"
                                thumbnail={hppThumbnail}
                            >
                                An app used to add a random elements to payments
                                within a household.
                            </ProjectGridItem>
                        </Section>
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Projects
