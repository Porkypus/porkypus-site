import { motion } from 'framer-motion'
import {
    chakra,
    shouldForwardProp,
    Flex,
    Box,
    useColorModeValue
} from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({
    children,
    width = '100%',
    title = '',
    mb = 12,
    delay = 0,
    bgColor = '',
    isWindow = true
}) => {
    const titleBarBg = useColorModeValue('#d9d8da', '#38383a')

    return (
        <StyledDiv
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay }}
            mb={mb}
            width={width}
            overflow="hidden"
            borderRadius={12}
            boxShadow={isWindow ? 'lg' : 'none'}
            height="auto"
        >
            {isWindow && (
                <Flex bg={titleBarBg} p={2} alignItems="center">
                    <Flex mr={4}>
                        {['#FF5F56', '#FFBD2E', '#27C93F'].map(
                            (color, index) => (
                                <Box
                                    key={index}
                                    bg={color}
                                    w={3}
                                    h={3}
                                    borderRadius="full"
                                    mr="5px"
                                />
                            )
                        )}
                    </Flex>
                    <Box fontWeight="bold" fontSize="sm">
                        {title}
                    </Box>
                </Flex>
            )}
            <Box p={5} bgColor={bgColor} h="100%">
                {children}
            </Box>
        </StyledDiv>
    )
}

export default Section
