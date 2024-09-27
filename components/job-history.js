import { useState } from 'react'
import {
    Box,
    Text,
    Heading,
    HStack,
    Tabs,
    TabList,
    Tab,
    useColorModeValue,
    Flex,
    useBreakpointValue
} from '@chakra-ui/react'
import { jobData } from '../data/job-data'

const JobHistory = () => {
    const [selectedCompany, setSelectedCompany] = useState(jobData[0])
    const [isVisible, setIsVisible] = useState(true)

    const handleCompanyClick = company => {
        setIsVisible(false)
        setTimeout(() => {
            setSelectedCompany(company)
            setIsVisible(true)
        }, 500)
    }

    const tabsOrientation = useBreakpointValue({
        base: 'horizontal',
        md: 'vertical'
    })

    return (
        <Flex
            align="flex-start"
            justifyContent="flex-start"
            direction={{ base: 'column', md: 'row' }}
            h={{
                base: '40vh', // Default height for mobile
                md: '30vh', // Height for medium screens and up
                lg: '25vh' // Height for large screens and up
            }}
        >
            <Tabs
                orientation={tabsOrientation}
                defaultIndex={0}
                borderColor={useColorModeValue('black', 'glassTeal')}
            >
                <TabList>
                    {jobData.map(job => (
                        <Tab
                            key={job.company}
                            onClick={() => {
                                handleCompanyClick(job)
                            }}
                            _selected={{
                                bg: useColorModeValue(
                                    'blackAlpha.100',
                                    'whiteAlpha.100'
                                )
                            }}
                            _hover={{
                                bg: useColorModeValue(
                                    'blackAlpha.100',
                                    'whiteAlpha.100'
                                )
                            }}
                        >
                            {job.company}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>

            <Box
                m={4}
                width="100%"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-in-out'
                }}
                overflow="auto"
            >
                <Heading size="md" mb={2}>
                    {selectedCompany.role} @ {selectedCompany.company}
                </Heading>
                <Text
                    fontSize={14}
                    color={useColorModeValue('black', 'glassTeal')}
                    mb={4}
                >
                    {selectedCompany.range}
                </Text>
                <Text>{selectedCompany.description}</Text>
            </Box>
        </Flex>
    )
}

export default JobHistory
