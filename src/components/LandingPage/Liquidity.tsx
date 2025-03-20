/* eslint-disable react/no-unescaped-entities */
import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import { colors } from '@/theme/cssVariables'

import amm from './images/liquidity-amm.png'
import chart from './images/liquidity-card-chart.png'
import launch from './images/liquidity-launch.png'
import swap from './images/liquidity-swap.png'

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <Box color="white" fontWeight={500} fontSize={'1.25rem'} lineHeight={'1.56rem'} textAlign="center">
      {children}
    </Box>
  )
}

function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <Box color={colors.textQuaternary} fontWeight={300} fontSize="1rem" lineHeight={'1.375rem'} textAlign="center" mt="13px">
      {children}
    </Box>
  )
}

export default function Liquidity() {
  return (
    <Box pt={234}>
      <Center px={[8, 0]}>
        <Flex direction="column" align="center">
          <Heading fontWeight={500} fontSize="3rem" lineHeight={'3.8rem'} color={colors.primary}>
            ISG distributes SOL
          </Heading>
          <Heading fontWeight={500} fontSize="3rem" lineHeight={'3.8rem'} color={colors.primary}>
            to SOL-ISG LP Holders
          </Heading>
          <Heading fontWeight={500} fontSize="3rem" lineHeight={'3.8rem'} color={colors.primary}>
            every 30 minutes
          </Heading>
          <Flex gap="45px" mt="99px" flexWrap="wrap">
            <Flex direction="column" justify="space-between" align="center" className="landing-liquidity-card">
              <Box w="100%" h="100%" position="relative">
                <img src={chart.src} style={{ position: 'relative', top: '32px', left: '70px' }} />
                <img src={amm.src} style={{ position: 'absolute', top: '32px', right: '81px' }} />
              </Box>
              <Box h={'fit-content'}>
                <CardTitle>SOL Reward</CardTitle>
                <CardBody>
                  10% tax is collected from every buy and sell transaction and automatically converted to SOL. ISG distributes SOL to
                  SOL-ISG LP holders every 30 minutes. Rewards are proportional to your LP token holdings
                </CardBody>
              </Box>
            </Flex>
            <Flex direction="column" justify="space-between" align="center" className="landing-liquidity-card">
              <Box w="100%" h="100%" position="relative">
                <img src={swap.src} style={{ position: 'absolute', top: '38px', left: '116px' }} />
                <img src={chart.src} style={{ position: 'relative', top: '63px', left: '54px' }} />
              </Box>
              <Box h={'fit-content'}>
                <CardTitle>Liquidity Pools for Sustainable Growth</CardTitle>
                <CardBody>
                  Our strategic shift to focus on liquidity pools will drive sustainable growth as a Decentralized Exchange (DEX). By
                  concentrating on our liquidity pools, we aim to collect trading fees and distribute them based on provider positions.
                </CardBody>
              </Box>
            </Flex>
            <Flex direction="column" justify="space-between" align="center" className="landing-liquidity-card">
              <Box w="100%" h="100%" position="relative">
                <img src={chart.src} style={{ position: 'relative', top: '52px', left: '85px' }} />
                <img src={launch.src} style={{ position: 'absolute', top: '4px', right: '116px' }} />
              </Box>
              <Box h={'fit-content'}>
                <CardTitle>High Yields for LP Providers</CardTitle>
                <CardBody>
                  Infinite Solana Glitch is offering SOL rewards to participants. This includes liquidity pools (SOL-ISG). Investors can
                  view real-time APR stats and their positions on the dashboard.
                </CardBody>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </Box>
  )
}
