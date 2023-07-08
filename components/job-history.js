import { useState } from 'react'
import {
    Box,
    Flex,
    Text,
    VStack,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Fade,
    useDisclosure
} from '@chakra-ui/react'

const jobData = [
    {
        company: 'Gas Management Services Ltd',
        description: 'Upcoming software developer there.'
    },
    {
        company: 'PriceWaterhouseCoopers',
        description:
            'Worked on the Global Payroll Platform for clients, involving working with .NET (VB.NET and ASP.NET). I also helped develop an employee rewarding website, designed using Reactjs for frontend, C# for the API, and Microsoft SQL Server for the database.'
    },
    {
        company: 'Huawei Technologies',
        description:
            'Contributed to a whitepaper which outlined a list of specifications and aims of a potential Central Bank Digital Currency for the Bank of Mauritius, including economic impacts and benefits for the population.'
    }
]

const JobHistory = () => {
    const [selectedCompany, setSelectedCompany] = useState(jobData[0])

    const handleCompanyClick = company => {
        setSelectedCompany(company)
    }

    const handleSliderChange = index => {
        setSelectedCompany(jobData[index])
    }

    return (
        <Flex flex="1">
            <VStack
                align="start"
                alignContent="start"
                spacing={2}
                minW={100}
                mr={6}
            >
                {jobData.map(job => (
                    <Text
                        key={job.company}
                        fontWeight={selectedCompany === job ? 'bold' : 'normal'}
                        cursor="pointer"
                        onClick={() => {
                            handleCompanyClick(job)
                        }}
                        bg={selectedCompany === job ? 'glassTeal' : undefined}
                        color={selectedCompany === job ? '#202023' : undefined}
                        p={2}
                    >
                        {job.company}
                    </Text>
                ))}
            </VStack>

            <Box ml={4} maxW={400}>
                <Text>{selectedCompany.description}</Text>
            </Box>
        </Flex>
    )
}

export default JobHistory
