import { Box, Center, Flex, Heading, Wrap, WrapItem } from '@chakra-ui/react'

import { colors } from '@/theme/cssVariables'

import serum from './images/serum.png'
import solana from './images/solana.png'
import sushi from './images/sushi.png'
import Link from 'next/link'

export default function Partner() {
  return (
    <Box pt={234}>
      <Center px={[8, 0]}>
        <Flex direction="column" align="center">
          <Heading fontWeight={500} fontSize="3rem" lineHeight={'3.83rem'} color={colors.primary}>
            Join Community
          </Heading>
          <Wrap spacing={'2.625rem'} mt="44px" maxW="1230px">
            <WrapItem>
              <Link href="https://x.com/" target="_blank">
                <img src="/images/x.png" width="60px" />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="https://t.me/" target="_blank">
                <img src="/images/telegram.png" width="60px" />
              </Link>
            </WrapItem>
            <WrapItem>
              <Link href="https://dexscreener.com/solana/" target="_blank">
                <img src="/images/dexscreener.png" width="60px" />
              </Link>
            </WrapItem>
          </Wrap>
        </Flex>
      </Center>
    </Box>
  )
}
