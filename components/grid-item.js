import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, transition } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ title, href, children, thumbnail }) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
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

export const ProjectGridItem = ({ title, id, children, thumbnail, href }) => (
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
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
            />
            <LinkOverlay as="div" fontSize={22} href={`/projects/${id}`}>
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
          transition: transform 0.3s;
        }
        // .grid-item-thumbnail:hover {
        //     transform: rotate3d(0, 0, 1, 5deg);
        // }
      `}
    />
)
