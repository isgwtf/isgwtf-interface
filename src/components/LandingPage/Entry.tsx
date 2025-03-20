import { Box, Center, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'

import Button from '../Button'

import BuildOnSolana from './images/BuildOnSolana'
import Doc from './images/Doc'
import EntryPic from './images/entry.png'

export default function Entry() {
  const newLine = useBreakpointValue({ base: '', sm: <br /> })

  return (
    <Box>
      <Center>
        <Flex direction={['column', 'row']} justify="center" position="relative" my="150px">
          <img src="/images/landing.png" />
          <Flex direction="column" px={[8, 0]} zIndex="10" alignItems="center">
            <Flex direction="column" justifyContent="center" minHeight={280}>
              <Flex justifyContent="center">
                <Heading fontWeight={500} fontSize={['1.5rem', '2rem', '4rem']} lineHeight={'3.75rem'} color="white">
                  Infinite Solana Glitch {newLine}
                </Heading>
              </Flex>
              {/* <Text
                fontSize="4rem"
                bgGradient="linear(270.87deg, #2affa4 0.41%,rgb(178, 255, 171) 97.12%)"
                bgClip="text"
                textAlign="center"
              >
                {`[ isg ]`}
              </Text> */}
              <Flex justifyContent="center" mt={8}>
                <img src="/logo.png" alt="" width="100" />
              </Flex>
            </Flex>
            <Flex w="100" justifyContent="center">
              <Flex flexWrap="wrap" justifyContent="center" gap={[23, 46]}>
                <Link href="/liquidity/increase/?mode=add&pool_id=HhduYrawtfpXVb6Dy27Yu5nh4hDwK3AtomjA68ic9xvi">
                  <Button minW={['100%', 230]} minH={14} variant="outline">
                    Get SOL
                  </Button>
                </Link>
                <Link href="/swap">
                  <Button minW={['100%', 230]} minH={14}>
                    Buy ISG
                  </Button>
                </Link>
              </Flex>
              {/* <Flex height={8} justify="center" mt={6}>
                <BuildOnSolana />
              </Flex> */}
            </Flex>
          </Flex>
          <Box
            zIndex="1"
            w="100%"
            h="100%"
            filter="blur(150px)"
            opacity="0.5"
            position="absolute"
            top="0"
            left="0"
            style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}
          >
            <Box position="absolute" top="-67px" marginRight="381px" w="538px" h="541px" borderRadius="50%" bg="#39D0D8" opacity="0.6" />
            <Box position="absolute" top="28px" marginLeft="480px" w="520px" h="523px" borderRadius="50%" bg="#2affa4" opacity="0.55" />
          </Box>
        </Flex>
      </Center>
    </Box>
  )
}
