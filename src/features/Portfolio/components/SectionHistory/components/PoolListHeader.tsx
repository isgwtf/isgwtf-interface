import SortUpDownArrow from '@/components/SortUpDownArrow'
import { colors } from '@/theme/cssVariables'
import { Box, Flex, useColorMode } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { TimeBase, POOL_SORT_KEY } from '@/features/Pools/util'
import { Desktop, Mobile } from '@/components/MobileDesktop'
import { poolListGrid } from './cssBlocks'

export function PoolListHeader({
  sortKey,
  order,
  timeBase,
  handleClickSort
}: {
  sortKey: string
  order: number
  handleClickSort: (key: string) => void
  timeBase: TimeBase
}) {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  return (
    <Flex
      w="100%"
      alignItems="center"
      backgroundColor={isLight ? colors.backgroundDark50 : colors.backgroundLight30}
      borderRadius="12px 12px 0 0"
      color={isLight ? colors.textPrimary : colors.textSecondary}
      fontWeight={500}
      px={[4, 6]}
      py={4}
      whiteSpace={'nowrap'}
      sx={poolListGrid}
      fontSize={['sm', 'md']}
    >
      <Flex justifyContent={'center'} alignItems="center" gap="1" justify="flex-start">
        Time
      </Flex>
      <Flex justifyContent={'center'} alignItems="center" gap="1" justify="flex-start">
        Amount
      </Flex>
      <Flex justifyContent={'center'} alignItems="center" gap="1">
        <Desktop>Transaction</Desktop>
        <Mobile>Tx</Mobile>
      </Flex>
    </Flex>
  )
}
