import { useState } from 'react'
import {
    Box,
    Text,
    VStack,
    Heading,
    HStack,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    TabIndicator,
    Fade
} from '@chakra-ui/react'

const jobData = [
    {
        company: 'GMSL',
        role: 'Software Developer',
        description: 'Upcoming software developer there.',
        range: 'September 2023 - Present'
    },
    {
        company: 'PwC',
        role: 'Technology Intern',
        description:
            'Worked on the Global Payroll Platform for clients, involving working with .NET (VB.NET and ASP.NET). I also helped develop an employee rewarding website, designed using Reactjs for frontend, C# for the API, and Microsoft SQL Server for the database.',
        range: 'August 2022 - September 2022'
    },
    {
        company: 'Huawei',
        role: 'Intern',
        description:
            'Contributed to a whitepaper which outlined a list of specifications and aims of a potential Central Bank Digital Currency for the Bank of Mauritius, including economic impacts and benefits for the population.',
        range: 'July 2021 - September 2021'
    }
]

const JobHistory = () => {
    const [selectedCompany, setSelectedCompany] = useState(jobData[0])

    const handleCompanyClick = company => {
        setSelectedCompany(company)
    }

    return (
        <HStack align="flex-start" justifyContent="flex-start" minH={250}>
            <Tabs orientation="vertical" defaultIndex={0}>
                <TabList>
                    {jobData.map(job => (
                        <Tab
                            onClick={() => {
                                handleCompanyClick(job)
                            }}
                            _selected={{
                                bg: 'whiteAlpha.100'
                            }}
                            _hover={{
                                bg: 'whiteAlpha.100'
                            }}
                        >
                            {job.company}
                        </Tab>
                    ))}
                </TabList>
            </Tabs>

            <Box ml={4} maxW={400}>
                <Heading size="md" mb={2}>
                    {selectedCompany.role} @ {selectedCompany.company}
                </Heading>
                <Text fontSize={14} color="glassTeal" mb={4}>
                    {selectedCompany.range}
                </Text>
                <Text>{selectedCompany.description}</Text>
            </Box>
        </HStack>
    )
}

export default JobHistory
