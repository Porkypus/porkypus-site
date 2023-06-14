import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const footPrintImg = '/../public/images/minimalistic_porkypus.png'

    return (
        <Link href="/">
            <LogoBox>
                <Image src={footPrintImg} alt="logo" width={40} height={40} />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily="Source Sans Pro"
                    fontWeight="bold"
                    fontSize={25}
                    ml={3}
                >
                    Porkypus
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo
