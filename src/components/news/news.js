import React, { useState, useEffect } from "react";
import SingleNews from "./singleNews";
import MainNews from "./mainNews";
import PressRealease from "./PressRelease";
import OtherNews from "./OtherNews";
import OwlCarousel from "react-owl-carousel";

const News = () => {
  const newsArray = [
    {
      date: "22",
      month: "Jun",
      title: "📣 DYPians, get ready for the next step!",
      link: "https://twitter.com/dypfinance/status/1539620413461958656",
      imageSrc:
        "https://pbs.twimg.com/media/FV3UaozWYAE8y_F?format=jpg&name=small",
      year: "2022",
    },
    {
      date: "14",
      month: "Jun",
      title: "Metaverse, the next step for DYP!",
      link: "https://dypfinance.medium.com/metaverse-the-next-step-for-dyp-4c6586a1e3f0",
      imageSrc:
        "https://miro.medium.com/max/1400/1*VKmKepkkPCmkMcF_0kU5Dg.jpeg",
      year: "2022",
    },
    {
      date: "31",
      month: "May",
      title: "Game season it’s officially open! 👉🏽 #CAWS Adventures is here!",
      link: "https://twitter.com/dypfinance/status/1531613663450251264",
      imageSrc:
        "https://pbs.twimg.com/media/FUFifRpX0AEoGYt?format=jpg&name=small",
      year: "2022",
    },
    {
      date: "27",
      month: "May",
      title: "Check out our new website!",
      link: "https://twitter.com/dypfinance/status/1530181037766189059",
      imageSrc:
        "https://pbs.twimg.com/media/FTxLMb9WIAE0fA7?format=jpg&name=medium",
      year: "2022",
    },
    {
      date: "10",
      month: "May",
      title: "New smart contract for DYP staking!",
      link: "https://twitter.com/dypfinance/status/1524075021379022848",
      imageSrc:
        "https://pbs.twimg.com/media/FSKsEt2XMAA-ZUX?format=jpg&name=medium",
      year: "2022",
    },
    // {
    //   date: "7",
    //   month: "May",
    //   title: "CAWS staking pool is open for business!",
    //   link: "https://twitter.com/dypfinance/status/1522968871812141057",
    //   imageSrc:
    //     "https://pbs.twimg.com/media/FSaZJ_mXIAAlf_J?format=jpg&name=medium",

    //   year: "2022",
    // },
    {
      date: "14",
      month: "Apr",
      title: "Gate.io support for DYP on BNB Chain and C-CHAIN!",
      link: "https://twitter.com/dypfinance/status/1514627082025852936",
      imageSrc:
        "https://pbs.twimg.com/media/FQUJHzJXEA0kQ7h?format=jpg&name=medium",

      year: "2022",
    },
    {
      date: "4",
      month: "Mar",
      title: "March - DYP Vault is ready for action!",
      link: "https://twitter.com/dypfinance/status/1499761913001136136",
      imageSrc:
        "https://pbs.twimg.com/media/FNA4t82WUAUfX9z?format=jpg&name=medium",

      year: "2022",
    },
    {
      date: "22",
      month: "Feb",
      title: "V.R. is the next step for #DYP.",
      link: "https://twitter.com/dypfinance/status/1496072467814756353",
      imageSrc:
        "https://pbs.twimg.com/media/FMMd6vBXoAMb_je?format=jpg&name=4096x4096",

      year: "2022",
    },
    {
      date: "11",
      month: "Jan",
      title: "Cats and Watches Society Whitelist!",
      link: "https://twitter.com/dypfinance/status/1480623073208549380",
      imageSrc: "https://dyp.finance/img/nft/roadmap_caws.jpg",

      year: "2022",
    },
    {
      date: "11",
      month: "Jan",
      title: "It's raining $KNC on KyberSwap for $DYP!",
      link: "https://twitter.com/KyberNetwork/status/1480850588980051969",
      imageSrc: "https://dyp.finance/img/news/kyber_phase2.jpg",
      year: "2022",
    },
    {
      date: "15",
      month: "Dec",
      title: "Staking, Farming, and Buyback V2 ETH",
      link: "https://twitter.com/dypfinance/status/1471162808041713665",
      imageSrc:
        "https://miro.medium.com/max/1400/1*uQCbsnPYwQdlQ8Wdtrgojg.jpeg",
      year: "2021",
    },
    {
      date: "08",
      month: "Dec",
      title: "Staking, Farming, and Buyback V2 AVAX",
      link: "https://twitter.com/dypfinance/status/1468652091799482378",
      imageSrc:
        "https://miro.medium.com/max/1400/1*edJgopIexXunb7eiy4KTvA.jpeg",
      year: "2021",
    },
    {
      date: "20",
      month: "Nov",
      title: "Staking, Farming, and Buyback V2 BSC",
      link: "https://twitter.com/dypfinance/status/1462032099708391428",
      imageSrc:
        "https://miro.medium.com/max/1400/1*5hnErea6YNBD8id8I5cm2A.jpeg",
      year: "2021",
    },
    {
      date: "18",
      month: "Oct",
      title: "#iDYP Community Allocation is Live",
      link: "https://twitter.com/dypfinance/status/1450102523361206276",
      imageSrc:
        "https://miro.medium.com/max/1400/1*OHIOvUx1ybWesknybKuAiA.jpeg",
      year: "2021",
    },
    {
      date: "14",
      month: "Oct",
      title: "The New Contracts and #iDYP token",
      link: "https://twitter.com/dypfinance/status/1448664965598957577",
      imageSrc:
        "https://miro.medium.com/max/1400/1*kbELYDIMwLtlU0JomEji0A.jpeg",
      year: "2021",
    },
    {
      date: "5",
      month: "Oct",
      title: "It's raining $DYP + $KNC!",
      link: "https://twitter.com/KyberNetwork/status/1445210348944912388",
      imageSrc: "https://miro.medium.com/max/1400/1*iM7ctAGi7pD0k_MmMuUWjg.png",
      year: "2021",
    },
    {
      date: "21",
      month: "Sep",
      title: "DeFi Yield Protocol $DYP is coming to @0xPolygon!",
      link: "https://twitter.com/dypfinance/status/1440337326077472771",
      imageSrc: "https://miro.medium.com/max/1400/1*nYEM2TrjWAzBTxc-sNATUg.png",
      year: "2021",
    },
    {
      date: "10",
      month: "Sep",
      title: "DeFi Yield Protocol (DYP) is on DeFi Pulse!",
      link: "https://twitter.com/defipulse/status/1436388557896159235",
      imageSrc: "https://dyp.finance/img/defipulse.png",
      year: "2021",
    },
    {
      date: "1",
      month: "Sep",
      title: "#DYPTools is Live on #Avalanche!",
      link: "https://twitter.com/dypfinance/status/1433086017045680128",
      imageSrc:
        "https://miro.medium.com/max/1400/1*XgOsgpsvvrahEiDZSE65Yw.jpeg",
      year: "2021",
    },
    {
      date: "11",
      month: "Aug",
      title: "DeFi Yield Protocol will be integrated with Coin98 Wallet!",
      link: "https://twitter.com/dypfinance/status/1425400583012425730?s=20",
      imageSrc:
        "https://miro.medium.com/max/1400/1*gimouGn5M4Mp6t8opTsNLw.jpeg",
      year: "2021",
    },
    {
      date: "04",
      month: "Aug",
      title: "The Buyback Program with #DYP Staking integrated is LIVE!",
      link: "https://twitter.com/dypfinance/status/1422907203338518533?s=20",
      imageSrc:
        "https://pbs.twimg.com/media/E78uR22WQAE-VVh?format=jpg&name=large",
      year: "2021",
    },
    {
      date: "22",
      month: "Jul",
      title: "DeFi Yield Protocol strategic integration with Aircoins.io",
      link: "https://dypfinance.medium.com/defi-yield-protocol-strategic-integration-with-aircoins-io-augmented-reality-app-666209ce08e",
      imageSrc:
        "https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg",
      year: "2021",
    },
    {
      date: "14",
      month: "Jul",
      title: "Pangolin partners with DeFi Yield Protocol (DYP)",
      link: "https://dypfinance.medium.com/pangolin-partners-with-defi-yield-protocol-dyp-a-unique-cross-chain-platform-b52b7e93e0a9",
      imageSrc:
        "https://miro.medium.com/max/1400/1*e2gdKr1KM3QlpGPewZu-gw.jpeg",
      year: "2021",
    },
    {
      date: "08",
      month: "Jul",
      title: "Yield Farming Tutorial on Avalanche",
      link: "https://dypfinance.medium.com/defi-yield-protocol-community-update-yield-farming-tutorial-on-avalanche-9c0053593cd8",
      imageSrc:
        "https://miro.medium.com/max/1400/1*JKSLJ9I73fKciwH5yTnU3A.jpeg",
      year: "2021",
    },
    {
      date: "08",
      month: "Jul",
      title: " DeFi Yield Protocol Avalanche Bridge Tutorial",
      link: "https://dypfinance.medium.com/defi-yield-protocol-avalanche-bridge-tutorial-9404d827a4a",
      imageSrc: "https://dyp.finance/img/avalanche.jpg",
      year: "2021",
    },
    {
      date: "05",
      month: "Jul",
      title: "Getting Started with the DeFi Yield Protocol NFT Marketplace",
      link: "https://dypfinance.medium.com/getting-started-with-the-defi-yield-protocol-nft-marketplace-a518356f47f",
      imageSrc:
        "https://miro.medium.com/max/1400/1*qnQkO4ajXw33Ox7PLSV77w.jpeg",
      year: "2021",
    },
    {
      date: "22",
      month: "Jun",
      title: "DeFi Yield Protocol launches NFT dApp V1",
      link: "https://dypfinance.medium.com/defi-yield-protocol-launches-nft-dapp-v1-a796b19aaabb",
      imageSrc:
        "https://miro.medium.com/max/1400/1*lkIkivLimWQL_eT2pfd64A.jpeg",
      year: "2021",
    },
    {
      date: "22",
      month: "Jun",
      title: "DeFi Yield Protocol Integrates Chainlink",
      link: "https://dypfinance.medium.com/defi-yield-protocol-integrates-chainlink-price-feeds-to-secure-yield-farming-data-on-ethereum-and-3fe85062a0e5",
      imageSrc:
        "https://miro.medium.com/max/1400/1*lut5I2B3ZEnaIULOfGnDVw.jpeg",
      year: "2021",
    },
    {
      date: "23",
      month: "Jun",
      title: " DeFi Yield Protocol (DYP) is Expanding to Avalanche",
      link: "https://dypfinance.medium.com/getting-started-with-the-defi-yield-protocol-nft-marketplace-a518356f47f",
      imageSrc: "https://miro.medium.com/max/1400/0*hzcSXUnu9vnzDOxW",
      year: "2021",
    },
  ];

  const press_highlight = [
    {
      title: "Yield farming platform announces it’s expanding to Avalanche",
      link: "https://cointelegraph.com/news/yield-farming-platform-announces-it-s-expanding-to-avalanche",
      date: "JUL 08, 2021",
      imageSrc:
        "https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDcvMDczNDU5ZWMtYjUwYi00MmRjLWJjNWMtZmJkZDc3NDdlZjg0LmpwZWc=.jpg",
    },
    {
      title: "DeFi Yield Protocol (DYP) Continues to Expand Its Ecosystem",
      link: "https://news.bitcoin.com/defi-yield-protocol-dyp-continues-to-expand-its-ecosystem/",
      date: "Jun 28, 2021",
      imageSrc:
        "https://static.news.bitcoin.com/wp-content/uploads/2021/06/dyp.jpg",
    },
    {
      title:
        "DYP Protocol Staking dApp Launches on Binance Smart Chain (BSC), LPs to earn Passive Income in ETH, DYP, or BNB",
      link: "https://crypto.news/dyp-protocol-staking-dapp-binance-smart-chain-bsc-lp-passive-income-eth-dyp-bnb/",
      date: "April 7, 2021",
      imageSrc:
        "https://crypto.news/app/uploads/2021/04/DeFi-Yield-Protocol-Community-Update%E2%80%8A%E2%80%94%E2%80%8AStaking-Pools-Tutorial-on-Binance-Smart-Chain.jpg",
    },
    {
      title: "DeFi Yield Protocol Takes Yield Farming to the Next Level",
      link: "https://www.newsbtc.com/press-releases/defi-yield-protocol-takes-yield-farming-to-the-next-level/",
      date: "July 12, 2020",
      imageSrc:
        "https://www.newsbtc.com/wp-content/uploads/2020/10/dyp-img.png",
    },
    {
      title:
        "DeFi Yield Protocol Could Be a Massive Boost for Yield Farmers and the DeFi Space",
      link: "https://www.cryptocompare.com/coins/guides/defi-yield-protocol-could-be-a-massive-boost-for-yield-farmers-and-the-defi-space/",
      date: "13 Nov, 2020",
      imageSrc: "https://www.cryptocompare.com/media/37459245/graph.jpg",
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Eliminates the Risks of Whale Interference",
      link: "https://coindoo.com/defi-yield-protocol-dyp-eliminates-the-risks-of-whale-interference/",
      date: "Aug 6, 2021",
      imageSrc:
        "https://coindoo.com/wp-content/uploads/2020/11/DeFi-Yield-Protocol-DYP.jpg",
    },
    {
      title:
        "DeFi Yield Protocol: The First Manipulation Free DeFi platform in BSC and ETH",
      link: "https://techbullion.com/defi-yield-protocol-the-first-manipulation-free-defi-platform-in-bsc-and-eth/",
      date: " Apr 10, 2021",
      imageSrc:
        "https://techbullion.com/wp-content/uploads/2021/04/DYP-cast-your-vote-1.jpg",
    },
    {
      title: "DYP.Finance: A Unique Yield Farming Platform",
      link: "https://www.newsbtc.com/news/company/dyp-finance-a-unique-yield-farming-platform/",
      date: " Apr 10, 2020",
      imageSrc: "https://www.newsbtc.com/wp-content/uploads/2020/11/5.jpg",
    },
    {
      title: "DYP.Finance: A Unique Yield Farming Platform",
      link: "https://www.cryptocompare.com/coins/guides/dypfinance-a-unique-yield-farming-platform/",
      date: "Nov 16, 2020",
      imageSrc: "https://www.cryptocompare.com/media/37459277/img_0834.jpg",
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Launches Staking Pools on Binance Smart Chain",
      link: "https://u.today/defi-yield-protocol-dyp-launches-staking-pools-on-binance-smart-chain?amp",
      date: "Apr 12, 2021",
      imageSrc:
        "https://u.today/sites/default/files/styles/736x/public/2021-04/7180.jpg",
    },
    {
      title: "DYP Launches Staking DApp on Binance Smart Chain (BSC)n",
      link: "https://blockonomi.com/dyp-staking-app-binance-smart-chain/",
      date: "Apr 15, 2021",
      imageSrc:
        "https://blockonomi-9fcd.kxcdn.com/wp-content/uploads/2021/02/defi-yield-770x515.jpg",
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Witnesses Massive Growth Following Binance Smart Chain Integration",
      link: "https://news.bitcoin.com/defi-yield-protocol-dyp-witnesses-massive-growth-following-binance-smart-chain-integration/",
      date: "Apr 9, 2021",
      imageSrc:
        "https://static.news.bitcoin.com/wp-content/uploads/2021/04/RuCUQmM6-dyp-7-prill-1-1280x720.jpg",
    },
    {
      title: "DeFi Yield Protocol (DYP): All in One Platform Yielding Benefits",
      link: "https://cryptopotato.com/defi-yield-protocol-dyp-all-in-one-platform-yielding-benefits/",
      date: "Nov 30, 2020",
      imageSrc:
        "https://cryptopotato.com/wp-content/uploads/2020/11/defiyieldprotocol_cover.jpg",
    },
    {
      title: "DYP Launches Staking DApp on Binance Smart Chain (BSC)",
      link: "https://techbullion.com/dyp-launches-staking-dapp-on-binance-smart-chain-bsc/",
      date: "Apr 19, 2021",
      imageSrc:
        "https://techbullion.com/wp-content/uploads/2021/04/DYP-Launches-Staking-DApp-DYPFinance.jpg",
    },
    {
      title:
        "Earn compound yields on Binance Smart Chain using DeFi Yield Protocol (DYP)",
      link: "https://coincodex.com/article/11092/earn-compound-yields-on-binance-smart-chain-using-defi-yield-protocol-dyp/",
      date: "Apr 21, 2021",
      imageSrc:
        "https://coincodex.com/en/resources/images//admin/news/earn-compound-yields/image1.jpg:resizeboxcropjpg?1050x590",
    },
    {
      title: "DYP.Finance – Stake DeFi Tokens and Get Paid in ETH",
      link: "https://techbullion.com/dyp-finance-stake-defi-tokens-and-get-paid-in-eth/",
      date: "Dec 19, 2020",
      imageSrc:
        "https://techbullion.com/wp-content/uploads/2020/12/Defi-Yield-Protocol.jpg",
    },
    {
      title: "DeFi Yield Protocol (DYP) Staking and Governance is Now Live",
      link: "https://medium.com/the-capital/defi-yield-protocol-dyp-staking-and-governance-is-now-live-e18c0f14a442",
      date: "Dec 19, 2020",
      imageSrc: "https://miro.medium.com/max/1400/1*5KQd_ryoVCcom5cXTnEfmg.png",
    },
    {
      title: "DeFi Yield Protocol Launches Staking and Governance dApp",
      link: "https://u.today/defi-yield-protocol-launches-staking-and-governance-dapp",
      date: "Dec 21, 2020",
      imageSrc:
        "https://u.today/sites/default/files/styles/736x/public/2020-12/5825.jpg",
    },
    {
      title: "DYP Launches Staking and Governance DAPP",
      link: "https://news.bitcoin.com/dyp-launches-staking-and-governance-dapp/",
      date: "Dec 22, 2020",
      imageSrc:
        "https://static.news.bitcoin.com/wp-content/uploads/2020/12/pArZKqh3-photo5406875453978952719.jpg",
    },
    {
      title: "DeFi Yield Protocol Debuts New Staking And Governance DApp",
      link: "https://bitcoinist.com/defi-yield-protocol-debuts-new-staking-and-governance-dapp/",
      date: "Dec 23, 2020",
      imageSrc:
        "https://bitcoinist.com/wp-content/uploads/2020/11/Yield-Farming.jpg",
    },
    {
      title: "DeFi Projects That Offer Top Staking Rewards in 2021",
      link: "https://hackernoon.com/defi-projects-that-offer-top-staking-rewards-in-2021-7fs34qs",
      date: "Dec 24, 2020",
      imageSrc:
        "https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F7LrDe0NwaTW40HBSsVuBSPeo2yd2-1p2p31oo.jpeg&w=3840&q=75",
    },
    {
      title:
        "DeFi Yield Protocol Launches Staking and Governance Dapp, DYP Holders Earn Ethereum",
      link: "https://www.newsbtc.com/news/company/defi-yield-protocol-launches-staking-and-governance-dapp-dyp-holders-earn-ethereum/",
      date: "Dec 24, 2020",
      imageSrc:
        "https://www.newsbtc.com/wp-content/uploads/2020/12/Epey0x_XcAUpVUq.jpg",
    },
    {
      title:
        "The DeFi Yield Protocol (DYP) Looks Poised to take DeFi to Next Level",
      link: "https://crypto.news/defi-yield-protocol-dyp/",
      date: "Dec 24, 2020",
      imageSrc: "https://crypto.news/app/uploads/2020/12/DYP-staking.jpg",
    },
    {
      title:
        "DeFi Yield Protocol (DYP) Provides a New Level of Transparency to the Market",
      link: "https://www.bitcoininsider.org/article/100387/defi-yield-protocol-dyp-provides-new-level-transparency-market",
      date: "Dec 24, 2020",
      imageSrc:
        "https://www.bitcoininsider.org/sites/default/files/styles/scale_900px/public/field/image/defi_yield_protocol.webp?itok=2ehPm3JM",
    },
    {
      title:
        "DeFi Yield Protocol Liquidity Providers Earn $25,000 in ETH per Day Staking DYP",
      link: "https://www.cryptocompare.com/coins/guides/defi-yield-protocol-liquidity-providers-earn-25-000-in-eth-per-day-staking-dyp/",
      date: "Dec 28, 2020",
      imageSrc:
        "https://www.cryptocompare.com/media/37621945/photo_2020-12-23-172208.jpeg",
    },
    {
      title:
        "Tackling Volatility Issues for Liquidity Providers with DeFi Yield Protocol (DYP)",
      link: "https://cryptopotato.com/tackling-volatility-issues-for-liquidity-providers-with-defi-yield-protocol-dyp/",
      date: "Jan 5, 2021",
      imageSrc:
        "https://www.bitcoininsider.org/sites/default/files/styles/scale_900px/public/field/image/defi_yield_protocol.webp?itok=2ehPm3JM",
    },
    {
      title: "5 DeFi Projects You Should Know About in 2021",
      link: "https://hackernoon.com/5-defi-projects-you-should-know-about-in-2021-irq347a",
      date: "Jan 16, 2021",
      imageSrc:
        "https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2F7LrDe0NwaTW40HBSsVuBSPeo2yd2-tsg3140.jpeg&w=1200&q=75",
    },
    {
      title:
        "DeFi Yield Protocol: The First Manipulation Free DeFi platform in BSC and ETH",
      link: "https://www.bitcoininsider.org/article/110411/defi-yield-protocol-first-manipulation-free-defi-platform-bsc-and-eth",
      date: "Jan 16, 2021",
      imageSrc:
        "https://www.bitcoininsider.org/sites/default/files/styles/scale_900px/public/field/image/defi-yield-protocol.webp?itok=9O5edgCR",
    },
    {
      title: "DYP Maximizing the Benefits of Yield Farming Protocols",
      link: "https://coindoo.com/dyp-maximizing-the-benefits-of-yield-farming-protocols/",
      date: "Aug 6, 2021",
      imageSrc:
        "https://coindoo.com/wp-content/uploads/2020/12/Stake-and-Learn.jpg",
    },
    {
      title: "PR: How to Use DYP to Earn Big DeFi ROIs",
      link: "https://coingape.com/how-to-use-dyp-to-earn-big-defi-rois/",
      date: "Dec 23, 2020",
      imageSrc:
        "https://cdn.coingape.com/wp-content/uploads/2020/12/23193423/IMG_4770-min.jpg",
    },
  ];

  const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: true,
    autoplay: false,
    rewind: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      960: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1920: {
        items: 1,
      },
    },
  };

  const otherNews = [
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #3",
      imageSrc:
        "https://pbs.twimg.com/media/FTG42MYWQAImetj?format=jpg&name=large",
      date: "May 19, 2022",
      link: "https://twitter.com/gate_io/status/1527204993052426241",
    },
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #2",
      imageSrc:
        "https://pbs.twimg.com/media/FRVwHCUXwAMuR2r?format=jpg&name=large",
      date: "Apr 27, 2022",
      link: "https://twitter.com/gate_io/status/1519243718141874177",
    },
    {
      title: "10 #ETH Giveaway",
      imageSrc:
        "https://pbs.twimg.com/media/FQpLyBBXMAE8AsS?format=jpg&name=large",
      date: "Apr 18, 2022",
      link: "https://twitter.com/dypfinance/status/1516108338685165569",
    },
    {
      title: "Gate.io $DYP Lock-up ＆ Earn #1",
      imageSrc:
        "https://pbs.twimg.com/media/FQXlDOEWQAErq1G?format=jpg&name=large",
      date: "Apr 15, 2022",
      link: "https://twitter.com/gate_io/status/1514868696069595139",
    },
    {
      title: "KyberDMM Joint Liquidity Mining on Avalanche.",
      imageSrc: "https://miro.medium.com/max/1400/1*GRqMiBZbPRrxqWcshIwU8A.png",
      date: "Sep 19, 2021",
      link: "https://twitter.com/dypfinance/status/1439562983663968262?s=20",
    },
    {
      title: "@dypfinance is extending its liquidity mining campaign.",
      imageSrc:
        "https://pbs.twimg.com/media/E_bHfp3UYAEHsbt?format=jpg&name=4096x4096",
      date: "Sep 16, 2021",
      link: "https://twitter.com/hummingbot_io/status/1438559792927178755?s=20",
    },
    {
      title: "6 new strategies are available for auto-compounding on Snowball.",
      imageSrc:
        "https://pbs.twimg.com/media/E9QqIhXUYAE-TXu?format=jpg&name=medium",
      date: "Aug 20, 2021",
      link: "https://twitter.com/snowballdefi/status/1428813432183087111?s=20",
    },
    {
      title: "New $PNG reward pools are ready for pre-deposits!",
      imageSrc:
        "https://pbs.twimg.com/media/E9NFwuPVoAQMtdw?format=png&name=900x900",
      date: "Aug 20, 2021",
      link: "https://twitter.com/pangolindex/status/1428563006481260547?s=20",
    },
    {
      title: "Listing Celebration to @coin98_wallet: Win $2500 in $DYP",
      imageSrc:
        "https://pbs.twimg.com/media/E9D1hZDXsAAqXGu?format=jpg&name=medium",
      date: "Aug 18, 2021",
      link: "https://twitter.com/dypfinance/status/1427912209762603008?s=20",
    },
    {
      title: "Aircoins is excited to announce newest partner with DYP",
      imageSrc:
        "https://pbs.twimg.com/media/E8DDO9nWEAcEyxA?format=jpg&name=medium",
      date: "Aug 05, 2021",
      link: "https://twitter.com/AIRCOINS_App/status/1423352145697546241",
    },
    {
      title: "Pangolin hosting a giveaway with Defi Yield Protocol",
      imageSrc:
        "https://pbs.twimg.com/media/E74VgYqUcAEnsON?format=jpg&name=large",
      date: "Jul 12, 2021",
      link: "https://twitter.com/pangolindex/status/1422604691251163142",
    },
    {
      title: "DeFi Yield Protocol NFT Creative Competition is LIVE!",
      imageSrc:
        "https://miro.medium.com/max/1400/1*h95JYnco1tuL3IGB0TAjsg.jpeg",
      date: "Jul 12, 2021",
      link: "https://dypfinance.medium.com/defi-yield-protocol-nft-creative-competition-is-live-9d28528fef08",
    },
  ];

  const owlCarouselOptionsPress = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: true,
    autoplay: false,
    rewind: true,
    autoplayTimeout: 5000,
    responsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      960: {
        items: 2,
        slideBy: 2,
      },
      1200: {
        items: 2,
        slideBy: 2,
      },
      1920: {
        items: 2,
        slideBy: 2,
      },
    },
  };

  const carousel = React.createRef();
  const carousel2 = React.createRef();

  const [activeClass, setActiveClass] = useState("latestnews");
  const newsPerRow = 4;
  const [next, setNext] = useState(newsPerRow);

  const loadMore = () => {
    setNext(next + newsPerRow);
  };

  const handleNewsClick = (id) => {
    carousel.current.to(id, 1000);
  };
  return (
    <>
      <div className="news-wrapper">
        <h1 className="news-title">Popular News</h1>
        <div className="row m-0">
          <div
            className="brand-wrapper banner-wrapper"
            style={{ maxWidth: "60%", display: "flex" }}
          >
            <OwlCarousel
              ref={carousel}
              className="owl-carousel owl-theme brand-slider"
              {...owlCarouselOptions}
            >
              {newsArray.length > 0 &&
                newsArray.map((item, key) => {
                  return (
                    <div className="banner-item" key={key}>
                      <MainNews
                        image={item.imageSrc}
                        title={item.title}
                        link={item.link}
                        year={item.year}
                        month={item.month}
                        day={item.date}
                      />
                    </div>
                  );
                })}
            </OwlCarousel>
          </div>

          <div className="singlenews-side">
            <div className="button-wrapper">
              <h6
                className={
                  activeClass === "latestnews"
                    ? "activebutton"
                    : "passivebutton"
                }
                onClick={() => {
                  setActiveClass("latestnews");
                }}
              >
                Latest news
              </h6>
              <h6
                className={
                  activeClass !== "latestnews"
                    ? "activebutton"
                    : "passivebutton"
                }
                onClick={() => {
                  setActiveClass("toprated");
                }}
              >
                Top voted
              </h6>
            </div>
            {newsArray.length > 0 &&
              newsArray.slice(0, 4).map((item, key) => {
                return (
                  <div className="banner-item" key={key}>
                    <SingleNews
                      image={item.imageSrc}
                      title={item.title}
                      link={item.link}
                      year={item.year}
                      month={item.month}
                      day={item.date}
                      onNewsClick={(e) => {
                        handleNewsClick(key);
                        e.stopPropagation();
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="press-release-wrapper">
        <h1 className="news-title" style={{ paddingLeft: 20 }}>
          Press Realese
        </h1>
        <div
          className="brand-wrapper banner-wrapper"
          style={{ display: "flex" }}
        >
          <OwlCarousel
            ref={carousel2}
            className="owl-carousel owl-theme brand-slider"
            {...owlCarouselOptionsPress}
          >
            {press_highlight.length > 0 &&
              press_highlight.map((item, key) => {
                return (
                  <div
                    className="banner-item"
                    key={key}
                    style={{ background: "none" }}
                  >
                    <PressRealease
                      image={item.imageSrc}
                      title={item.title}
                      link={item.link}
                      date={item.date}
                    />
                  </div>
                );
              })}
          </OwlCarousel>
        </div>
      </div>
      <div className="press-release-wrapper" style={{ paddingTop: 0 }}>
        <h1
          className="news-title"
          style={{ paddingLeft: 20, paddingBottom: 20 }}
        >
          Other News
        </h1>
        <div
          className="row m-0"
          style={{ rowGap: 10, justifyContent: "space-evenly" }}
        >
          {otherNews.length > 0 &&
            otherNews?.slice(0, next)?.map((item, key) => {
              return (
                <div
                  className="banner-item"
                  key={key}
                  style={{ background: "none" }}
                >
                  <OtherNews
                    image={item.imageSrc}
                    title={item.title}
                    link={item.link}
                    date={item.date}
                  />
                </div>
              );
            })}
         
        </div>
        <div className="d-flex justify-content-center">
        {next < otherNews?.length && (<button onClick={()=>loadMore()} className='load-more-btn'>Load more</button>)}
        </div>
      </div>
    </>
  );
};

export default News;
