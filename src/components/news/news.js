import React, { useState } from "react";
import SingleNews from "./singleNews";
import MainNews from "./mainNews";
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
        "https://pbs.twimg.com/media/FSaZJ_mXIAAlf_J?format=jpg&name=medium",
      year: "2022",
    },
    {
      date: "7",
      month: "May",
      title: "CAWS staking pool is open for business!",
      link: "https://twitter.com/dypfinance/status/1522968871812141057",
      imageSrc:
        "https://pbs.twimg.com/media/FSaZJ_mXIAAlf_J?format=jpg&name=medium",

      year: "2022",
    },
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
        "https://pbs.twimg.com/media/FNA4t82WUAUfX9z?format=jpg&name=medium",

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

  const owlCarouselOptions = {
    loop: true,
    margin: 0,
    center: false,
    nav: false,
    dots: true,
    autoplay: true,
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

  const carousel = React.createRef();
  const [activeClass, setActiveClass] = useState("latestnews");

  return (
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
                activeClass === "latestnews" ? "activebutton" : "passivebutton"
              }
              onClick={() => {
                setActiveClass("latestnews");
              }}
            >
              Latest news
            </h6>
            <h6
              className={
                activeClass !== "latestnews" ? "activebutton" : "passivebutton"
              }
              onClick={() => {
                setActiveClass("toprated");
              }}
            >
              Top voted
            </h6>
          </div>
          {newsArray.length > 0 &&
            newsArray.map((item, key) => {
              return (
                <div className="banner-item" key={key}>
                  <SingleNews
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
        </div>
      </div>
      <div>
        <h1 className="news-title">Press Realese</h1>
        <div></div>
      </div>
    </div>
  );
};

export default News;
