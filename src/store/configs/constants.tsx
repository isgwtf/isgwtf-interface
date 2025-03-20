import { TokenInfo } from '@raydium-io/raydium-sdk-v2'

export const ISG_POOL = 'HhduYrawtfpXVb6Dy27Yu5nh4hDwK3AtomjA68ic9xvi'

export const myTokens = [
  '11111111111111111111111111111111',
  'So11111111111111111111111111111111111111112',
  'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  'HZEV4b3n2sAgifpWDNg2po3QxM2AqE3dMVUDcUiXSAFE'
]

export const ISG: TokenInfo = {
  chainId: 101,
  address: 'HZEV4b3n2sAgifpWDNg2po3QxM2AqE3dMVUDcUiXSAFE',
  programId: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
  logoURI: 'https://img-v1.raydium.io/icon/HZEV4b3n2sAgifpWDNg2po3QxM2AqE3dMVUDcUiXSAFE.png',
  symbol: 'SAFE',
  name: 'Safe Coin Money',
  decimals: 6,
  tags: ['hasTransferFee'],
  extensions: {
    feeConfig: {
      transferFeeConfigAuthority: '11111111111111111111111111111111',
      withdrawWithheldAuthority: '2P9C8tiGPUos1zYbQMPqnVc74XW5ZYYUzHs36FGEPQzY',
      withheldAmount: '0',
      newerTransferFee: {
        epoch: '754',
        maximumFee: '100000000000000',
        transferFeeBasisPoints: 1000
      },
      olderTransferFee: {
        epoch: '754',
        maximumFee: '100000000000000',
        transferFeeBasisPoints: 1000
      }
    }
  },
  priority: 2
}

// '6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN',
// 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
// '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
// 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
// 'CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG',
// 'USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA',
// 'rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof',
