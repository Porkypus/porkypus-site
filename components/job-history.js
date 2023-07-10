import { useState } from 'react'
import { Box, Text, VStack, Heading, HStack, SlideFade } from '@chakra-ui/react'

const jobData = [
    {
        company: 'GMSL',
        role: 'Software Developer',
        description: 'Upcoming software developer there.'
    },
    {
        company: 'PwC',
        role: 'Technology Intern',
        description:
            'Worked on the Global Payroll Platform for clients, involving working with .NET (VB.NET and ASP.NET). I also helped develop an employee rewarding website, designed using Reactjs for frontend, C# for the API, and Microsoft SQL Server for the database.'
    },
    {
        company: 'Huawei',
        role: 'Intern',
        description:
            'Contributed to a whitepaper which outlined a list of specifications and aims of a potential Central Bank Digital Currency for the Bank of Mauritius, including economic impacts and benefits for the population.'
    }
]

const JobHistory = () => {
    const [selectedCompany, setSelectedCompany] = useState(jobData[0])

    const handleCompanyClick = company => {
        setSelectedCompany(company)
    }

    return (
        <HStack align="flex-start" justifyContent="flex-start" height={250}>
            <VStack align="center" justify="inherit" spacing={2} mr={2}>
                {jobData.map(job => (
                    <Box
                        key={job.company}
                        bg={
                            selectedCompany === job
                                ? 'glassTeal'
                                : 'whiteAlpha.300'
                        }
                        width={'0.5'}
                    >
                        <Text
                            p={2}
                            height={38.5}
                            cursor="pointer"
                            onClick={() => {
                                handleCompanyClick(job)
                            }}
                        />
                    </Box>
                ))}
            </VStack>

            <VStack
                align="center"
                justify="inherit"
                spacing={2}
                minW={100}
                mr={4}
            >
                {jobData.map(job => (
                    <Box
                        key={job.company}
                        bg={selectedCompany === job ? 'glassTeal' : undefined}
                        width="100%"
                        _hover={{
                            bg: 'glassTeal',
                            color: '#202023'
                        }}
                    >
                        <Text
                            p={2}
                            fontWeight={
                                selectedCompany === job ? 'bold' : 'normal'
                            }
                            fontSize={15}
                            cursor="pointer"
                            onClick={() => {
                                handleCompanyClick(job)
                            }}
                            color={
                                selectedCompany === job
                                    ? '#202023'
                                    : 'undefined'
                            }
                        >
                            {job.company}
                        </Text>
                    </Box>
                ))}
            </VStack>

            <Box ml={4} maxW={400}>
                <Heading size="md" mb={4}>
                    {selectedCompany.role} @ {selectedCompany.company}
                </Heading>
                <Text>{selectedCompany.description}</Text>
            </Box>
        </HStack>
    )
}

export default JobHistory
