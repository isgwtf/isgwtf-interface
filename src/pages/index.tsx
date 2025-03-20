import { useEffect } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Entry from '@/components/LandingPage/Entry'
import Facilitate from '@/components/LandingPage/Facilitate'
import Feature from '@/components/LandingPage/Feature'
import Footer from '@/components/LandingPage/Footer'
import Header from '@/components/LandingPage/Header'
import Liquidity from '@/components/LandingPage/Liquidity'
import Partner from '@/components/LandingPage/Partner'
import ProtocolStat from '@/components/LandingPage/ProtocolStat'

const Home: NextPage = () => {
  const router = useRouter()
  // useEffect(() => {
  // no ssr
  // router.replace('/swap')
  // }, [])
  return (
    <Box overflowY="scroll" maxHeight="100%">
      <Header />
      <Entry />
      {/* <ProtocolStat /> */}
      <Liquidity />
      {/* <Feature /> */}
      {/* <Facilitate /> */}
      <Partner />
      <Footer />
    </Box>
  )
}

export default Home
