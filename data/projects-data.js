import dtwThumbnail from '/public/images/projects/dtw.png'
import capyThumbnail from '/public/images/projects/capy.png'
import porkypusSiteThumbnail from '/public/images/projects/porkypus-site.png'
import codiesThumbnail from '/public/images/projects/codies.png'
import hppThumbnail from '/public/images/projects/hpp.png'
import imcProsperity2 from '/public/images/projects/imc-prosperity-2.png'

export const projectsData = [
    {
        id: 'slr-dtw',
        title: 'Sign Language Recognition',
        thumbnail: dtwThumbnail,
        description: 'A project for sign language recognition using DTW.'
    },
    {
        id: 'capy',
        title: "Capy'd Away",
        thumbnail: capyThumbnail,
        description: 'A game submitted for the Cambridge Game Jam 2023.'
    },
    {
        id: 'imc-prosperity-2-2024',
        title: 'IMC Prosperity 2',
        thumbnail: imcProsperity2,
        description: 'My first experience with IMC Prosperity.'
    },
    {
        id: 'porkypus-site',
        title: 'porkypus-site',
        thumbnail: porkypusSiteThumbnail,
        href: 'https://github.com/Porkypus/porkypus-site',
        description: 'Source code for porkypus-site.'
    },
    {
        id: 'codies-bot',
        title: 'CodiesBot',
        thumbnail: codiesThumbnail,
        href: 'https://github.com/Porkypus/CodiesBot',
        description: 'A Discord bot written to play Codies.'
    },
    {
        id: 'hpp',
        title: 'Household Payment Pools',
        thumbnail: hppThumbnail,
        href: 'https://github.com/Porkypus/household_payment_pools',
        description:
            'An app used to add random elements to payments within a household.'
    }
]
