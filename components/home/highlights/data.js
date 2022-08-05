import { MdDashboard } from 'react-icons/md'
import { FaDownload } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'

export const data = [
  {
    id: 1,
    title: 'Large variety of setups',
    description:
      'Explore a massive library of setups shared by users just like you and pick the best one for you.',
    image: <MdDashboard fontSize={`3rem`} />,
    color: `text-orange-600`,
    background: `bg-orange-600/25`,
  },
  {
    id: 2,
    title: 'Simple installation',
    description:
      'Download and install the setup of your choice without any hassle or additional procedures.',
    image: <FaDownload fontSize={`4rem`} />,
    color: `text-indigo-600`,
    background: `bg-indigo-600/25`,
  },
  {
    id: 3,
    title: 'Open submissions',
    description:
      "Want to share your personal setup? It's only a button press away!",
    image: <IoSend fontSize={`4rem`} />,
    color: `text-green-600`,
    background: `bg-green-600/25`,
  },
]
