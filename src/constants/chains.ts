import { IChainData } from "../helpers/types";

export const SUPPORTED_CHAINS: IChainData[] = [
  {
    name: "Open Test (Polygon Mumbai)",
    short_name: "mumbai",
    chain: "MATIC",
    network: "mumbai",
    chain_id: 80001,
    network_id: 80001,
    rpc_url: "https://matic-mumbai.chainstacklabs.com",
    native_currency: {
      symbol: "MATIC",
      name: "Matic",
      decimals: "18",
      contractAddress: "",
      balance: "",
    },
    faucet_url: "https://faucet.polygon.technology/",
  },
  {
    name: "Development (localhost)",
    short_name: "local",
    chain: "Localhost",
    network: "localhost",
    chain_id: 31337,
    network_id: 31337,
    rpc_url: "http://127.0.0.1:8545",
    native_currency: {
      symbol: "MATIC",
      name: "MATIC",
      decimals: "6",
      contractAddress: "",
      balance: "",
    },
  },
];
