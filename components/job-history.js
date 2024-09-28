import { useState } from 'react'
import {
    Box,
    Text,
    Heading,
    Tabs,
    TabList,
    Tab,
    useColorModeValue,
    Flex,
    UnorderedList,
    ListItem,
    useBreakpointValue
} from '@chakra-ui/react'
import { jobData } from '../data/job-data'
import { motion, AnimatePresence } from 'framer-motion'

const JobHistory = () => {
    const [selectedCompany, setSelectedCompany] = useState(jobData[0])

    const handleCompanyClick = company => {
        setSelectedCompany(company)
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
        >
            <Tabs
                orientation={tabsOrientation}
                defaultIndex={0}
                borderColor={useColorModeValue('black', 'glassTeal')}
                mb={6}
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

            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCompany.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <Box width="100%" h="100%" overflow="auto" p={2} ml={2}>
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
                        <UnorderedList>
                            {selectedCompany.description.map(description => (
                                <ListItem>{description}</ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                </motion.div>
            </AnimatePresence>
        </Flex>
    )
}

export default JobHistory
