import { feeAbi } from './abis/feeLibrary';

export const WATERMARK_URL = 'https://app.uniswap.org/images/324x74_App_Watermark.png'
export const CHECK_URL = 'https://app.uniswap.org/images/54x54_Verified_Check.svg'


/* HAVEN CHAIN CONFIG
================================================== */
export const HAVEN_CONFIG = {
  // id: parseInt(process.env.REACT_APP_CHAIN_ID as string),
  id: 810,
  name: 'Haven1',
  network: 'haven1',
  nativeCurrency: {
    decimals: 18,
    name: 'Haven1',
    symbol: 'H1',
  },
  rpc: process.env.REACT_APP_NETWORK_URL as string,
  blockExplorer: process.env.REACT_APP_BLOCK_EXPLORER as string,
  factoryAddress: process.env.REACT_APP_FACTORY_ADDRESS as string,
  routerAddress: process.env.REACT_APP_ROUTER_ADDRESS as string,
  feeLibrary: process.env.REACT_APP_FEE_LIBRARY_ADDRESS as string,
  feeLibraryAbi: feeAbi,
  multicallAddress: process.env.REACT_APP_MULTICALL_ADDRESS as string,
  initCodeHash: process.env.REACT_APP_INIT_CODE_HASH as string,
  lpTokenName: 'HavenSwap',
  lpTokenSymbol: 'H1-LP',
  landingPage: process.env.REACT_APP_LANDING_PAGE as string,
  faucet: process.env.REACT_APP_FAUCET as string,
  feeLearnMore: process.env.REACT_APP_FEE_LEARN_MORE as string,
} as const;

export type HavenConfigKeys = keyof typeof HAVEN_CONFIG;

export const FEE_MSG = 'H1 is required to pay the native application fee. Please visit the faucet to collect your H1.';