/* IMPORT NODE MODULES
================================================== */
import { ethers, BigNumberish } from 'ethers';

/* IMPORT CONSTANTS
================================================== */
import { HAVEN_CONFIG } from 'constants';

/* CONTRACT AND PROVIDER
================================================== */
const { rpc, id, feeLibrary, feeLibraryAbi } = HAVEN_CONFIG;
const provider = new ethers.providers.JsonRpcProvider(rpc, id);
const contract = new ethers.Contract(feeLibrary, feeLibraryAbi, provider);

/* GET HAVEN FEE
================================================== */
export default async function getHavenFee(): Promise<string> {
  const res: BigNumberish = await contract.queryOracle();
  return res.toString();
}

export function truncateH1(amount: string): string {
  const parts = amount.split('.');
  // Case for empty string
  if (parts.length == 0) return '0.00';

  // case for whole number
  if (parts.length == 1) return parts[0];

  let tmp = '';

  tmp += parts[0] || '0';

  if (parts.length > 1) {
    tmp += '.';
    tmp += parts[1].substr(0, 3);
  }

  return tmp;
}