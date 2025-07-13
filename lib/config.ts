import { createConfig } from "@0xsequence/connect";

const projectAccessKey = process.env.NEXT_PUBLIC_PROJECT_ACCESS_KEY || ""; // Pass in your project access key
const waasConfigKey = process.env.NEXT_PUBLIC_WAAS_CONFIGURATION_KEY || ""; // Pass in your waasConfigKey
const enableConfirmationModal = true; // change to your preference
const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || ""; // Pass in your WalletConnect Project ID

export const sequenceConfig = createConfig("waas", {
  projectAccessKey,
  position: "center",
  defaultTheme: "dark",
  signIn: {
    projectName: "Jetpack Runner",
    logoUrl:
      "https://storage.googleapis.com/sequence-prod-cluster-builder/projects/42770/wallet/signInlogoUrl_141f339061e11f30dc9440fbaf722c16067b80a7756026cc89fabb008454d5b7.png",
  },
  defaultChainId: 128123,
  chainIds: [128123],
  appName: "Jetpack Runner",
  waasConfigKey,
  google: false,
  apple: false,
  walletConnect: {
    projectId: walletConnectProjectId,
  },
  coinbase: true,
  metaMask: true,
  wagmiConfig: {
    multiInjectedProviderDiscovery: true,
  },
  enableConfirmationModal,
});
