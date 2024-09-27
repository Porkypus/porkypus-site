import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ProjectGridItem } from '../components/grid-item'
import { projectsData } from '../data/projects-data'

const Projects = () => {
    return (
        <Layout title="Projects">
            <Container maxWidth="container.xl" align="center">
                <Section isWindow={false}>
                    <Heading as="h2" fontSize={30} mb={4} mt={4}>
                        Projects
                    </Heading>
                </Section>

                <Section delay={0.4} isWindow={false}>
                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        {projectsData.map(project => (
                            <Section key={project.id} isWindow={false}>
                                <ProjectGridItem
                                    id={project.id}
                                    title={project.title}
                                    thumbnail={project.thumbnail}
                                    href={project.href}
                                >
                                    {project.description}
                                </ProjectGridItem>
                            </Section>
                        ))}
                    </SimpleGrid>
                </Section>
            </Container>
        </Layout>
    )
}

export default Projects
