import NextLink from 'next/link'
import Image from 'next/image'
import {
    Box,
    Text,
    LinkBox,
    LinkOverlay,
    Flex,
    useColorModeValue
} from '@chakra-ui/react'

export const GridItem = ({ title, href, children, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="transition-transform duration-300 rounded-br-xl rounded-bl-xl"
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const ProjectGridItem = ({ title, id, children, thumbnail, href }) => {
    const titleBarBg = useColorModeValue('#d9d8da', '#38383a')

    return (
        <Box
            w="100%"
            textAlign="center"
            transition="transform 0.2s ease-in-out"
            _hover={{
                transform: 'scale(1.05)'
            }}
        >
            <LinkBox
                as={NextLink}
                href={href ?? `/projects/${id}`}
                scroll={false}
                cursor="pointer"
            >
                <Flex
                    p={2}
                    alignItems="center"
                    bg={titleBarBg}
                    className="transition-transform duration-300 rounded-t-xl"
                >
                    <Flex mr={4} flexShrink={0}>
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
                    <Box
                        fontWeight="bold"
                        fontSize="sm"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        width="100%"
                        textAlign="left"
                    >
                        {title}
                    </Box>
                </Flex>
                <Image
                    src={thumbnail}
                    alt={title}
                    className="transition-transform duration-300 rounded-br-xl rounded-bl-xl"
                    placeholder="blur"
                />
                <Text pt={4} fontSize={14}>
                    {children}
                </Text>
            </LinkBox>
        </Box>
    )
}
