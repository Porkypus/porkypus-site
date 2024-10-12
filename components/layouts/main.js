import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import CapybarasLoader from '../capybaras-loader'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const LazyCapybaras = dynamic(() => import('../capybaras'), {
    ssr: false,
    loading: () => <CapybarasLoader />
})

const Main = ({ children, router }) => {
    return (
        <>
            <Box as="main" pb="8">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <title>Porkypus - Homepage</title>
                </Head>

                <Navbar path={router.asPath} />

                <Container maxW="container.lg" pt={14} w="100%">
                    <LazyCapybaras />
                    {children}
                </Container>
                <Footer />
            </Box>
        </>
    )
}

export default Main
