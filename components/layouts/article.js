import { motion } from 'framer-motion'
import Head from 'next/head'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => (
    <motion.article
        initial={variants.hidden}
        animate={variants.enter}
        exit={variants.exit}
        variants={variants}
        transition={{ duration: 0.4, type: 'easeInOut' }}
        style={{ position: 'relative' }}
    >
        <>
            {title && (
                <Head>
                    <title>Porkypus - {title}</title>
                </Head>
            )}
            {children}
        </>
    </motion.article>
)

export default Layout
