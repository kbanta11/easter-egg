import { TransactionTargetResponse } from "frames.js";
import { getFrameMessage } from "frames.js/next/server";
import { NextRequest, NextResponse } from "next/server";
import {
  Abi,
  createPublicClient,
  encodeFunctionData,
  getContract,
  http,
} from "viem";
import { baseSepolia, optimism } from "viem/chains";
import { easterEggABI } from "./contracts/easter-egg";
require('dotenv').config();

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json();

  const frameMessage = await getFrameMessage(json);

  if (!frameMessage) {
    throw new Error("No frame message");
  }

  const calldata = encodeFunctionData({
    abi: easterEggABI,
    functionName: "mint",
    args: [], //TODO - update for contract mint function
  });

  const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http(),
  });

  return NextResponse.json({
    chainId: `eip155:${publicClient.chainId}`, // OP Mainnet 10
    method: "eth_sendTransaction",
    params: {
      abi: easterEggABI as Abi,
      to: `0x${process.env.NFT_CONTRACT_BASE_SEPOLIA_ADDRESS!}`,
      data: calldata,
      value: '0',
    },
  });
}
