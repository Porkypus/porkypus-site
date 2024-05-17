import { useState } from 'react'
import {
    Box,
    Text,
    Heading,
    HStack,
    Tabs,
    TabList,
    Tab,
    useColorModeValue
} from '@chakra-ui/react'

const jobData = [
    {
        company: 'GMSL',
        role: 'Software Developer',
        description:
            'I currently work as a full-stack software developer here. I use C# to write the code for the backend of the product, which is hosted on AWS for a portfolio of clients working in the gas trading industry. This requires our code to be efficient, making use of parallel calls to asynchronous API methods which are provided by our other internal teams, and we also follow extensive test-driven development, which catches most bugs even before our extensive testing pipeline.',
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
    const [isVisible, setIsVisible] = useState(true)

    const handleCompanyClick = company => {
        setIsVisible(false)
        setTimeout(() => {
            setSelectedCompany(company)
            setIsVisible(true)
        }, 500)
    }

    return (
        <HStack align="flex-start" justifyContent="flex-start" minH={300}>
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

            <Box
                ml={4}
                width="100%"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease-in-out'
                }}
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
        </HStack>
    )
}

export default JobHistory
