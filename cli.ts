import { tasks } from "@trigger.dev/sdk/v3";

const gainForest = `
{
  "name": "GainForest",
  "bio": "GainForest is a global non-profit and one of six finalists of the XPRIZE rainforest competition, with the mission to halt and reverse global deforestation by 2030. Our platform brings transparency to over 25 conservation and restoration projects around the world. On the financial side, the flow of funds towards a conservation project are transparently displayed on our platform. On the conservation and restoration side, local communities use a variety of dMRV (Decentralized Monitoring, Reporting and Verification) and DePIN (Decentralized Physical Infrastructure Network) techniques to show \"Proof of Care\", or proof that the funds are used towards sustainable stewardship. This brings local employment to the communities, and allows us to gather vast amounts of machine learning-ready forest data.",
  "websiteUrl": "https://www.gainforest.earth",
  "payoutAddress": "0x40713Ca5223eFb79E861E282495092D2563c1eCE",
  "contributionDescription": "GainForest is a decentralised fund using artificial intelligence to measure and reward sustainable nature stewardship.\n\nWe generate global conservation income by producing dMRV (Decentralized Monitoring, Reporting and Verification) and DePIN (Decentralized Physical Infrastructure Network) technologies to proof that funds are used towards sustainable stewardship.\n\nOur \"Measure-to-Earn\" strategy shipped following technologies and contributions co-developed with our local communities:\n\n1. GainForest Green Globe, a breakthrough data visualization and transaction platform which provides transparency to our partner projects by linking environmental insights and FIAT/crypto donations: gainforest.app\n2. Taina, a data collection AI assistant supporting the curation of environmental and cultural insights in three different languages (English, Spanish and Portuguese). We pay insights gathered from this assistant in Celo. Bot found here: https://telegram.me/tainagainforestbot\n3. Community payments are transparently linked with the reason for its payment using Celo EAS.\n4. We issued the first Celo Impact Hypercert on the Oceanus Pilot: https://hypercerts.org/app/view?claimId=0x16ba53b74c234c870c61efc04cd418b8f2865959-3743106036130323098097120681749450326016\n5. Community summits on AI, environment and Celo: summit.biodivx.org\n6. Polly, a climate negotiations AI assistant, linked to the Green Globe data, that supported more than 70+ youth negotiators from the Global South at COP28 in Dubai: chat.gainforest.earth\n7. We are $10M Rainforest XPRIZE finalists, showcasing ReFi and Web3 to the world at the Finals in July 2024: biodivx.org",
  "impactDescription": "Read our Impact Report for 2022/23: https://docs.gainforest.earth/docs/impact-reports\n\n1. Over $20,000 in funds in USD distributed to community members - if possible directly using cUSD and Celo\n2. Over 30000+ trees measured and recorded from our tree app, done by the communities around the world\n3. Onboarded 25 project sites into the Celo network, using the Valora app\n4. Co-designed Taina with Indigeneous communities in Brazil, collecting data and creating new environmental jobs, linking contributions to payments in Valora\n5. Co-designed Polly, supporting climate negotiations at the international policy level\n6. Pushed for technology adoption at the latest COP decision\n7. Showcase the power of ReFi at the XPRIZE finals",
  "impactCategory": [
    "refi",
    "community"
  ],
  "contributionLinks": [
    {
      "description": "Github Repository",
      "type": "GITHUB_REPO",
      "url": "https://github.com/GainForest"
    },
    {
      "description": "Blogposts",
      "type": "OTHER",
      "url": "https://gainforest.substack.com/"
    },
    {
      "description": "Green Globe",
      "type": "OTHER",
      "url": "https://gainforest.app"
    },
    {
      "description": "Oceanus Hypercert",
      "type": "OTHER",
      "url": "https://hypercerts.org/app/view?claimId=0x16ba53b74c234c870c61efc04cd418b8f2865959-3743106036130323098097120681749450326016"
    },
    {
      "description": "EAS Attestations",
      "type": "CONTRACT_ADDRESS",
      "url": "https://celo.easscan.org/address/0x00da1b2D16c777D8Be7656C6780d23a98292c0ee"
    }
  ],
  "impactMetrics": [
    {
      "description": "Funds Dispersed to Communities (estimate, in USD)",
      "url": "https://gainforest.app",
      "number": 20000
    },
    {
      "description": "Projects Onboarded",
      "url": "https://gainforest.app",
      "number": 25
    },
    {
      "description": "Data points collected (estimate: photos captured, minutes of audio recording, trees measured)",
      "url": "https://gainforest.app",
      "number": 7500
    },
    {
      "description": "Countries active in",
      "url": "https://gainforest.app",
      "number": 14
    },
    {
      "description": "Hectares monitored",
      "url": "https://gainforest.app",
      "number": 2744540
    },
    {
      "description": "Unique species protected in our projects (estimate)",
      "url": "https://gainforest.app",
      "number": 14588
    }
  ],
  "fundingSources": [
    {
      "description": "Gitcoin Climate Rounds",
      "amount": 34947,
      "currency": "DAI",
      "type": "OTHER"
    },
    {
      "description": "Gitcoin Climate Rounds",
      "amount": 1.09,
      "currency": "ETH",
      "type": "OTHER"
    },
    {
      "description": "Climate Collective",
      "amount": 50000,
      "currency": "USDC",
      "type": "OTHER"
    },
    {
      "description": "Filecoin Green",
      "amount": 250000,
      "currency": "USDC",
      "type": "OTHER"
    }
  ]
}

    `;

const goodDollar = `{
  "name": "GoodDollar",
  "bio": "GoodDollar is the most widely used project on Celo - it is a 750,000+ person Universal Basic Income income, that operates fully as a non-profit to deliver free money daily  as a public good, and provides Celo with a fundamental payment, economic, an user infrastructure that other dapps, communities, and entrepreneurs can build on top of.\n\nOriginally launched in 2020, GoodDollar expanded its universal basic income protocol to Celo Q2 2023, added 312,00 new users to the Celo Network. GoodDollar creates a simple, easy approach to distributing digital UBI to any real person with a cell phone. It serves as a gateway to onboard the world to Web3, providing members with free tokens that enable them to \"learn by doing\" without any cost, exploring the boundless opportunities of Web3. Most importantly, real people around the world have used GoodDollar to create economic opportunities for themselves and improve their communities, embodying the potential impact of Web3 and decentralized economies.\n\nGoodDollar is a non-profit protocol - 100% of all tokens minted go to support the UBI ecosystem - there is no founder allocation, no private sale. All operations of Good Labs Foundation are funded by corporate donations. Funds raised via Celo RPG will be used to further the development of the protocol to help support creating more developer tooling to support easier integration of GoodDollar throughout the Celo ecosystem. Funds will also be used to support development of new passive income offers for members that are based on leveraging member data and identity properties in a privacy-protected manner.",
  "websiteUrl": "https://www.gooddollar.org",
  "payoutAddress": "0x4e31993d9f13f940828bf9ec2f643a7e55b21e8c",
  "contributionDescription": "With over 750,000 members, GoodDollar is one of the most widely and consistently used projects in Web3, the largest and most active project on Celo for daily active users and transactions, and one that shares Celo’s core mission to advance financial access and inclusion. GoodDollar’s ongoing delivery of crypto universal basic income, productized through simple applications, is proven method for onboarding real people from hard to reach markets with to Web3, and beginning to introduce them to new financial opportunities, often in the places where money and new financial tooling is needed most.\n\nSince expanding to Celo in Q2 2024, GoodDollar has onboarded 312,000 new users to Celo, driven over 642,600 peer-to- peer transactions, from individual, unique members coming from over 215 countries and territories. With an average 50k daily actives users and over 100k monthly active users, GoodWallet is one of the top most used blockchain dapps in the world by daily and weekly active user metrics, according to Dapp Radar and Dune Analytics. GoodDollar has been recognized by industry advocates as one of the leading project’s exemplifying blockchain’s use for financial inclusions by organizations such as the World Economic Forum, Crypto Council for Innovation, Blockchain Association and others. What started as a UBI experiment has evolved into a fully-fledged UBI ecosystem and a powerful use case for blockchain technology.\n\nMilestones: \n2024: GoodDollar is the most active protocol by users on Celo https://dappradar.com/rankings/protocol/celo\n    - 312,000 unique users on Celo\n    - 107,400 monthly active users / 69,500 weekly active users / 50,118 daily users  https://dune.com/tomfutago/gooddollar-celo\n    - GoodDollar Distribution contract is constantly on the top contracts by transactions on Celo https://dune.com/queries/2621888/4351504 (Contract: 0x43d72Ff17701B2DA814620735C39C620Ce0ea4A1: https://explorer.celo.org/mainnet/address/0x43d72Ff17701B2DA814620735C39C620Ce0ea4A1)\n    - 642,600 peer-to-peer transactions / 24,000 p2p in the last 30 days\n- 2024 Launched GoodCollective; a climate finance dapp built on Celo thanks to a grant from Climate Collective. [https://www.gooddollar.org/goodcollective,](https://www.gooddollar.org/goodcollective) https://www.gooddollar.org/announcing-goodcollective-a-platform-to-provide-direct-payments-for-climate-impact-initiatives, https://www.gooddollar.org/goodcollective----using-diverse-dmrv-solutions-for-conservation-basic-income\n2024: What’s Next!\n    - GoodID: A Protocol Identity Solution on top of the GoodDollar Protocol\n    - GoodDollar Protocol V4: Main changes includes the re-launch of an end-to-end Celo protocol in partnership with Mento Labs.\n2023: deployed GoodDollar on Celo, within 1 day became most used projects\n    - Onboarded +185,000 new users on Celo\n    - Featured in Messari Q3: “Average daily active addresses increased 75% QoQ to 70,200. Growth was largely driven by universal basic income protocol GoodDollar, which averaged 46,400 daily active Celo addresses” https://messari.io/project/celo/quarterly-reports/q3-2023\n    - Featured in Messari Q4: “Average daily active addresses grew 104% QoQ and 3,062% YoY to 143,000. Growth was driven by P2E game BLCR and universal basic income protocol GoodDollar” \n    https://messari.io/report/state-of-celo-q4-2023\n    - G$ is top most transacted token ERC-777; 1 of the top 20 most transacted ERC-20s:https://dune.com/ilemi/erc-and-eip-starter-kit\n- 2023: key partnerships with Celo projects:\n    - G$ deployed in Mini pay: Enabling Mini pay users to effortlessly claim G$ directly within the app\n    - G$ deployed in Valora: Enabling users to conveniently claim G$ within the Valora App ecosystem\n    - G$ partnership with Halofi: 3,209 members used Halofi across 4  G$ campaigns - providing users the opportunity to explore DeFi.\n    $15k USD total value of money deposit in G$ (rate as current price value at the moment)\n        - Challenges: https://app.halofi.me/#/challenges/159\n        https://app.halofi.me/#/challenges/323\n        https://app.halofi.me/#/challenges/587\n        https://app.halofi.me/#/challenges/588\n    - G$ partnership with Masa: 1,035 GoodDollar users successfully claimed and purchased a Celo domain using G$ tokens, through facilitating G$ via Masa’s Passport App.\n    - G$ integration in Fonbnk: Enabling users to swap G$ for mobile minutes seamlessly.\n    - G$ deployed in Uniswap: Enhancing G$ liquidity and accessibility in the Celo Ecosystem\n    - G$ deployed in Ubeswap: Enhancing G$ liquidity and accessibility in the Celo Ecosystem\n2022: Launched GoodDollar Protocol V3 with key features including the establishment of GoodDollar Community fund, and G$ savings.\n    - Reached 300,000 unique GoodDollar members from over 180 countries and territories\n    - First community members elected by the GoodDAO to take over the role of Community moderators\n2021: Launched GoodDollar Protocol V2; key features launch of the governance model and DAO and interface to allow users to easily interact with the Reserve.\n    - eToro staked $1,000,000 in the GoodDollar Trust\n    - Over 250,000 members from over 180 countries and territories\n    - First crowdsourcing official campaign with GoodDollar. $4,000 worth of G$ donations, earmarked for grassroots projects nominated by local communities as forces for good\n2020: Launched reserve-backed UBI currency, deployed the G$ token alongside its distribution, and launched the GoodWallet platform\n    - Distributed over US$100,000 of Covid-19 aid using the GoodDollar wallet demo, in partnership with eToro.\n    - Launched the GoodDollar Protocol Smart Contract (with 56k DAI locked in the the GoodStaking contracting), marking the first time smart contracts were used to autonomously create and distribute global digital basic income.\n    - Over 50,000 GoodDollar members from over 180 countries and territories\n2019: GoodDollar project\n    - Yoni Assia, Co-founder and CEO of eToro presents GoodDollar at OECD Forum https://www.youtube.com/watch?v=f-iKF2rwiII\n2018: Project founded by Yoni Assia\n    - Yoni Assia, Co-founder and CEO of eToro presents GoodDollar at Web Summit Lisbon: https://www.youtube.com/watch?v=m5LlMwTD2bA\n    - In late 2018, GoodDollar facilitated the establishment of an **[OpenUBI ecosystem](https://www.gooddollar.org/GoodDollar-Launches-OpenUBI)** with a number of other partners. **[The OpenUBI](https://t.me/OpenUBI)** was launched to foster collaboration and discussion around UBI and its technological implementation.\n\n***State the type of contribution your project is: gaming, NFT, wallet, tooling, DeFi, etc.***\n\nGoodDollar is a critical project to the Celo ecosystem, strategically positioned to catalyze growth and usage within the dynamic landscape of Celo’s decentralized infrastructure.  By intertwining various elements of decentralized finance (DeFi), a user-friendly wallet dapp and various developer tooling, GoodDollar offers critical digital public infrastructure (money, community, and code) that benefits Celo’s overall ecosystem goals.\n\nHere is a breakdown of GoodDollar’s key elements and products:\n    \n    **GoodDollar Protocol & G$ token**\n    A sustainable protocol to mint and issue G$ tokens based on a reserve-backed model.\n    \n    - G$ tokens are distributed daily every day to registered members (gas is subsidized).\n    - Celo-native yield sources can be sourced to fund the creation of G$ UBI on Celo, thereby driving a positive feedback loop.\n    - G$ token has been integrated into several key dapps operating on Celo, including Uniswap, Halofi, Masa, Fonbnk, and others.\n    - Protocol design & fundamentals can be found here: [https://www.notion.so/gooddollar/GoodDollar-Overview-440cb08978a34fd1aaac9d467738ed67?pvs=4](https://www.notion.so/GoodDollar-Overview-440cb08978a34fd1aaac9d467738ed67?pvs=21)\n    - https://docs.gooddollar.org/#gooddollar-protocol\n    - [https://whitepaper.gooddollar.org](https://whitepaper.gooddollar.org/)\n    \n    **GoodWallet**\n    - Top 10 most-used blockchain dapp by DAU (DappRadar): user-friendly mobile interface that enables GoodDollar onboarding and simplifies GoodDollar claiming\n    - It supports simple peer-to-peer payments and WalletConnect\n    - It offers registered members a unique friend-bring-a-friend G$ bonuses\n    [https://wallet.gooddollar.org](https://wallet.gooddollar.org/)\n    \n    **GoodDapp**   \n    - dApp interface that supports interacting with all features of the GoodDollar protocol, including staking and governance. Members can also onboard and claim G$ tokens through other Web3 wallets on GoodDapp.  \n    https://gooddapp.org/\n    \n    **Active Community of 750k+ Unique Verified Individuals & Addresses:**\n    - All GoodDollar wallet addresses pass a sybil-resistance method that verifies them as unique, live individuals. You can read more about it here: https://medium.com/gooddollar/gooddollar-identity-pillar-balancing-identity-and-privacy-part-i-face-matching-d6864bcebf54\n    - The design principle of GoodDollar’s Sybil-resistance solution is to enable non-financial and non-technical people to easily and quickly get onboard and start receiving UBI, while preventing fraud and abuse.\n    - This community of 343,400 unique, verified individuals on Celo are all holding and receiving G$ tokens, which they are eager to use in Celo-based dapps and throughout Celo Network.\n    \n    **SDKs & Developer Tooling of Key Features**\n    GoodDollar operates as an open-source protocol, enabling other wallets and platforms to integrate SDKs and facilitate key GoodDollar features directly through their interfaces. https://docs.gooddollar.org/products-and-sdks\n    \n    - Examples include both Valora and Opera Mini-Pay Wallet embedding “Claim G$”\n    \n    **GoodCollective**\n    - GoodCollective is a climate finance dApp built on top of GoodDollar Protocol that supports climate impact initiative through enabling direct digital payments to individuals who perform verified climate stewardship.\n    - The initial development was made possible by a grant from Climate Collective\n    - GoodCollective is supporting payments for two active Celo-based pilots: one with DeTrash in Brazil for recycling and another one with Silvi in Kenya for reforestation\n    - Learn more: https://www.gooddollar.org/goodcollective, https://www.gooddollar.org/announcing-goodcollective-a-platform-to-provide-direct-payments-for-climate-impact-initiatives, https://www.gooddollar.org/goodcollective----using-diverse-dmrv-solutions-for-conservation-basic-income\n    \n- ***What makes the project unique or necessary? How does it differentiate itself from its competitors? What has been your projects relation or contributions to the Celo ecosystem?***\n- GoodDollar has reached and onboarded real non-native Web3 people.\n    - GoodDollar protocol offers a daily gas subsidy to all members, to make claiming G$ tokens and using them across Celo free and accessible.\n        - G$ gas subsidy contract:  (https://celoscan.io/address/0x4F93Fa058b03953C851eFaA2e4FC5C34afDFAb84)\n    - 72% GoodDollar members coming from emerging market economies\n        - Top markets: 56,745 come from Nigeria, 40,539 come from Indonesia, 34,388 come from Bangladesh, 13,327 come from India, 10,936 come from Vietnam and 8,765 come from Brazil\n        - 100% of GoodDollar believe crypto is key to them achieving their financial goals (responses from 12,000 responses to global community survey)\n    \n- Real people in the real world use G$ to create economic opportunities & improve their communities:\n    - Faisal, a Ghanaian student who has opened a virtual airtime shop, that buys and sells airtime/mobile minutes for G$. (https://youtu.be/ykzv4JX5XTM?si=nXael5IlTE8vjIrK)\n    - Christiane, a Brazilian entrepreneur that has opened a second hand shop in her favela, Coradinho, that buys and sells pre-owned goods and handmade goods for G$. She hosts regular web3 educating workshops and has onboarded her community. (https://youtube.com/shorts/l7NjwHjY2SA?si=HBFYEs6inWEk5JGe)\n    - Frank, a Cameroonian technologist that has organized community savings “Tontines” and investing groups around GoodDollar, and is giving loans to members in need. (https://youtu.be/2sSathaeeWc?si=kdWkk05dBiuBvky8)\n    \n- GoodDollar has drove retention on the Celo Network, giving users a reason to come back thanks for daily claiming and the opportunities to use their G$.\n    - 343,400 G$ holders on Celo\n    - 312,000 new wallets created via GoodDollar on Celo\n    - 107,400 monthly active users / 69,500 weekly active users / 50,118 daily users https://dune.com/tomfutago/gooddollar-celo\n- GoodDollar’s key goal is to see the G$ token integrated with all key, active projects on Celo to drive usage across the network (eg. Rarible NFT marketplace) through improved documentation. All new identity products will be delivered as SDKs for other projects to leverage.\n- GoodDollar also aims to create educational programming and workshop content to better support the community and Regional DAO work.\n- GoodDollar plans to base its expanded Ambassador program based on Celo’s Regional DAO efforts.\n- GoodDollar will resume its efforts to have G$ token accepted as a gas token on Celo. https://forum.celo.org/t/adding-gooddollar-as-gas-token-on-celo/5383/22\n\n***Describe how the project has influenced its users or market sector. Has it introduced new innovations or brought notable changes in its field?***\n\n- GoodDollar stands as a leading innovator in the space over universal basic income and is the largest UBI experiment in the world with over 750,000 individuals having claimed G$.\n    - Andrew Yang and Yoni Asia Talking about UBI and GoodDollar: https://www.youtube.com/watch?v=uLFntC2krHg\n    - The Business of Blockchain interview with Scott Santens UBI Specialist, and Anna Stone of GoodDollar: https://www.youtube.com/watch?v=v16kBEx06dg\n- GoodDollar’s Reserve-backed model has proven to be a novel application of bonding curves and solution to sustainably fund and expand UBI\n- GoodDollar has been mentioned as an example of global UBI distribution experiment in various books:\n    - Remarking Money for a Sustainable Future: Money Commons. By Ester Baringa Martín\n    - The Metaverse Economy: How Finance Profesionals can make sense of web3. Arunkumar Krishnakumar, Theodora Lau\n    - Technological Sustainability and Business Competitive Advantage. By Muneer Al Mubarak, Allam Hamdan\n    - Advancements in the New World of Web3: A Look Toward the Decentralized Future. By Jane Thomason, Elizabeth Ivwurie\n- GoodDollar has been recognized as a top project for blockchain’s use for financial inclusion and an example of a crypto UBI:\n    - Recognized as an example of Crypto For Good at CES\n    - Nominated INATBA Awards Gala - Award for the \n    Most Exciting Project in Social Innovation 2023 https://inatba.org/awards/\n    - Recognized as an Innovation to watch by Milken Institute Fintech Practice (https://milkeninstitute.org/article/fintech-focus-crypto-review-january-24-2023)\n    - Recognized by The Value Prop ( powered by Polygon Labs) as a project that demonstrates unique value and utility as utility through its distinctive use case of Blockchain https://thevalueprop.io/projects/gooddollar\n    - Featured Messari Protocol Reporting in the State of Celo Q3 and Q4 as a key project driving the Growth of the Celo Network . https://messari.io/project/celo/quarterly-reports/q3-2023\n        \n        https://messari.io/report/state-of-celo-q4-2023\n        \n    - Recognized by the World Economic Forum in their report of Blockchain for Scaling Climate Action https://www3.weforum.org/docs/WEF_Blockchain_for_Scaling_Climate_Action_2023.pdf\n    - Recognized by the World Economic Forum in their report of DAOs for impact. https://www.weforum.org/publications/daos-for-impact/\n    - Recognized by the World Economic Forum in their report of Blockchain-based digital Currency and Tools for Cross-boarder Aid Disbursement https://www3.weforum.org/docs/WEF_Digital_Currency_for_Cross_Border_Aid_Disbursement_2021.pdf\n    - Recognized by Crypto Council for Innovation as a top project for blockchain’s use for financial inclusion https://cryptoforinnovation.org/community-development-gooddollar/",
  "impactDescription": "GoodDollar launched on Celo in mid-March 2023, since then GoodDollar has become the fastest-growing project on the Celo Blockchain and has been driving the activity on the chain.  \n\n**New users and active wallets**\n\n- Unique addresses on Celo onboarded by GoodDollar: 343,400 (https://dune.com/tomfutago/gooddollar-celo)\n- These wallets are verified to belong to unique members based on GoodDollar’s sybil resistance mechanism. (https://docs.gooddollar.org/sybil-resistance).\n- Number of countries represented: 215 countries and territories, with a significant presence in emerging markets.\n    - Top markets: 56,745 come from Nigeria, 40,539 come from Indonesia, 34,388 come from Bangladesh, 13,327 come from India, 10,936 come from Vietnam and 8,765 come from Brazil\n- dApp by active wallets: 107.4K monthly active Users and 69.5k weekly active users (https://dune.com/tomfutago/gooddollar-celo)\n    - https://dappradar.com/rankings/protocol/celo).\n    - According to the Messari Report on Celo Q3, average daily active addresses on Celo increased 75% QoQ to 70,200. Growth was largely driven by GoodDollar. In Q3, GoodDollar averaged 46,4k daily active addresses on Celo, accounting for 66,5% of Celo’s daily active addresses on average. (https://messari.io/project/celo/quarterly-reports/q3-2023)\n    \n    ![Captura de Pantalla 2024-04-24 a las 18.44.31.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a8694d8a-82e2-4ee6-a11a-5eefdefdfb72/2b58fc48-94e9-4a4c-be7f-4213bab3c573/Captura_de_Pantalla_2024-04-24_a_las_18.44.31.png)\n    \n    - In Q3, GoodDollar had 222,700 total active addresses. The relatively high daily active addresses to quarterly active addresses (DAA / QAA) ratio of 21% indicates that GoodDollar addresses are highly active. (https://messari.io/project/celo/quarterly-reports/q3-2023)\n        \n        ![Captura de Pantalla 2024-04-24 a las 18.48.06.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a8694d8a-82e2-4ee6-a11a-5eefdefdfb72/32a2f840-63e3-4796-824c-2879f2c46971/Captura_de_Pantalla_2024-04-24_a_las_18.48.06.png)\n        \n    - This activity was increased on Q4. GoodDollar averaged almost 54,000 daily active addresses on Celo, a 16% QoQ increase. (https://messari.io/report/state-of-celo-q4-2023).\n        \n        ![Captura de Pantalla 2024-04-24 a las 18.57.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a8694d8a-82e2-4ee6-a11a-5eefdefdfb72/e153b6ad-8f11-43da-a5e0-9f53c4ef2d99/Captura_de_Pantalla_2024-04-24_a_las_18.57.19.png)\n        \n        ![Captura de Pantalla 2024-04-24 a las 18.55.53.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a8694d8a-82e2-4ee6-a11a-5eefdefdfb72/77ad8d3b-5d7f-48f4-b6d0-16a25a555f6b/Captura_de_Pantalla_2024-04-24_a_las_18.55.53.png)\n        \n\n**Funds distributed and peer-to-peer transactions**\n\n- G$ 687,588,762.47 total delivered on Celo (Smart contract (https://explorer.celo.org/mainnet/address/0x43d72Ff17701B2DA814620735C39C620Ce0ea4A1 )\n- GoodDollar to date has facilitated 642,600 peer-to-peer transactions on the Celo Network, totaling G$1.75B. That’s an average of G$45.6M in monthly transactions. 105,500 unique members have each sent at least one transaction.\n    \n    https://dapplooker.com/chart/gooddollar-celo-p2p-transactions-4076\n    \n- G$ is top most transacted token ERC-777; 1 of the top 20 most transacted ERC-20s:https://dune.com/ilemi/erc-and-eip-starter-kit\n- GoodDollar Hypercert: https://hypercerts.org/app/view#claimId=0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-18658703025375818767087219849306146338766848",
  "impactCategory": [
    "dapps"
  ],
  "contributionLinks": [
    {
      "description": "GoodDollar is an open source project",
      "type": "GITHUB_REPO",
      "url": "https://github.com/GoodDollar"
    },
    {
      "description": "G$ UBI contract on Celo (where people claim UBI from) ",
      "type": "CONTRACT_ADDRESS",
      "url": "https://explorer.celo.org/mainnet/address/0x43d72Ff17701B2DA814620735C39C620Ce0ea4A1"
    },
    {
      "description": "Messari Q3 Report - GoodDollar drives Celo activity",
      "type": "OTHER",
      "url": "https://messari.io/project/celo/quarterly-reports/q3-2023"
    },
    {
      "description": "Messari Q4 Report - GoodDollar drives Celo activity ",
      "type": "OTHER",
      "url": "https://messari.io/report/state-of-celo-q4-2023"
    },
    {
      "description": "GoodDollar protocol design & fundamentals",
      "type": "OTHER",
      "url": "https://www.notion.so/gooddollar/GoodDollar-Overview-440cb08978a34fd1aaac9d467738ed67?pvs=4"
    },
    {
      "description": "GoodDollar Documentation",
      "type": "OTHER",
      "url": "https://docs.gooddollar.org/#gooddollar-protocol"
    },
    {
      "description": "GoodWallet - top 10 dapp by DAU ",
      "type": "OTHER",
      "url": "https://wallet.gooddollar.org"
    },
    {
      "description": "GoodDapp ",
      "type": "OTHER",
      "url": "https://gooddapp.org/"
    },
    {
      "description": "GoodCollective - Climate Finance Dapp",
      "type": "OTHER",
      "url": "https://www.gooddollar.org/goodcollective"
    },
    {
      "description": "Andrew Yang and Yoni Assia talking about UBI and GoodDollar",
      "type": "OTHER",
      "url": "https://www.youtube.com/watch?v=uLFntC2krHg"
    }
  ],
  "impactMetrics": [
    {
      "description": "GoodDollar on Celo - Dune Analytics",
      "url": "https://dune.com/tomfutago/gooddollar-celo",
      "number": 0
    },
    {
      "description": "G$ UBI Contract on Celo (tracks daily usage activity)",
      "url": "https://explorer.celo.org/mainnet/address/0x43d72Ff17701B2DA814620735C39C620Ce0ea4A1",
      "number": 0
    },
    {
      "description": "G$ is top most transacted token ERC-777; 1 of the top 20 most transacted ERC-20s",
      "url": "https://dune.com/ilemi/erc-and-eip-starter-kit",
      "number": 0
    },
    {
      "description": "GoodDollar drives usage on Celo - Messari Q3",
      "url": "https://messari.io/project/celo/quarterly-reports/q3-2023",
      "number": 0
    },
    {
      "description": "GoodDollar drives usage on Celo - Messari Q4 ",
      "url": "https://messari.io/report/state-of-celo-q4-2023",
      "number": 0
    },
    {
      "description": "DappRadar Usage Statistics ",
      "url": "https://dappradar.com/rankings/protocol/celo",
      "number": 0
    },
    {
      "description": "GoodDollar Gas Subsidy Contract (tracks activity)",
      "url": "https://celoscan.io/address/0x4F93Fa058b03953C851eFaA2e4FC5C34afDFAb84",
      "number": 0
    },
    {
      "description": "Airtime Use Case - Real People in the Real World Using G$ (Ghana)",
      "url": "https://youtu.be/ykzv4JX5XTM?si=nXael5IlTE8vjIrK",
      "number": 0
    },
    {
      "description": "Community Currencies - Real People in the Real World Using G$ (Brazil)",
      "url": "https://youtube.com/shorts/l7NjwHjY2SA?si=HBFYEs6inWEk5JGe",
      "number": 0
    },
    {
      "description": "Financial Education - Real People in the Real World Using G$ (Cameroon)",
      "url": "https://youtu.be/2sSathaeeWc?si=kdWkk05dBiuBvky8",
      "number": 0
    },
    {
      "description": "Recognized by the World Economic Forum in their report of Blockchain for Scaling Climate Action ",
      "url": "https://www3.weforum.org/docs/WEF_Blockchain_for_Scaling_Climate_Action_2023.pdfRecognized by the World Economic Forum in their report of Blockchain for Scaling Climate Action ",
      "number": 0
    },
    {
      "description": "Recognized by the World Economic Forum in their report of DAOs for impact",
      "url": "https://www.weforum.org/publications/daos-for-impact/ ",
      "number": 0
    },
    {
      "description": "Recognized by the World Economic Forum in their report of Blockchain-based digital Currency and Tools for Cross-boarder Aid Disbursement ",
      "url": "https://www3.weforum.org/docs/WEF_Digital_Currency_for_Cross_Border_Aid_Disbursement_2021.pdf",
      "number": 0
    },
    {
      "description": "Recognized by Crypto Council for Innovation as a top project for blockchain’s use for financial inclusion ",
      "url": "https://cryptoforinnovation.org/community-development-gooddollar/",
      "number": 0
    },
    {
      "description": "Number of wallets holding G$ on Celo (all time)",
      "url": "https://explorer.celo.org/mainnet/address/0x43d72Ff17701B2DA814620735C39C620Ce0ea4A1",
      "number": 343413
    },
    {
      "description": "Peer-to-peer transactions in G$ on Celo (all time)",
      "url": "https://dashboard.gooddollar.org/",
      "number": 642600
    },
    {
      "description": "Number of new wallets created on Celo (all time)",
      "url": "https://dashboard.gooddollar.org/",
      "number": 312000
    },
    {
      "description": "6% of Celo tx activity all-time are attributed to GoodDollar",
      "url": "https://dune.com/queries/2641807/4389541",
      "number": 6
    },
    {
      "description": "GoodDollar 1 year on Celo Hypercert ",
      "url": "https://hypercerts.org/app/view#claimId=0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-18658703025375818767087219849306146338766848",
      "number": 0
    },
    {
      "description": "20 million transactions on Celo",
      "url": "https://dune.com/queries/2641807/4389541",
      "number": 20000000
    }
  ],
  "fundingSources": [
    {
      "description": "Good Labs Foundation is the core developer and sponsor behind the GoodDollar protocol, and its operations are funded by annual corporate donations. All G$ tokenomics are built to fund 100% UBI, and are fully separate from the operation of the Foundation. The primary donor is capital markets platform eToro, which funds GoodDollar as part of its core corporate social responsibility efforts; GoodDollar has also received grants from the Celo Foundation and other private donors and partners. All software developed has and will continue to be fully open-sourced and built for the public good.",
      "amount": 500000,
      "currency": "USD",
      "type": "OTHER"
    }
  ]
}`;

const easyRF = `{
  "name": "EasyRetroPGF",
  "bio": "Easyrpgf.xyz is a revolutionary tool designed to streamline the process of conducting Retro rounds. \nWith our SAAS version, setting up a RetroRound takes less than 2 minutes from start to finish. From configuring the design of the round, phases, participants, voters, to selecting the network and payout tokens, Easyrpgf.xyz simplifies every step of the process making it accessible to all.\n",
  "websiteUrl": "https://easyretropgf.xyz/celorpgf0/",
  "payoutAddress": "0xb08d1Ee9A3280828D17777C5507904EcD7d3268a",
  "contributionDescription": "EasyRetroPGF has generated value for the CELO Community in at least two fronts:\n\n1. Through the development of EasyRetroPGF as a SaaS tool, we are supporting the execution of this funding round to expand the funding mechanisms being leveraged by the CELO ecosystem. This development has included the addition of new features that are CELORetroPGF0 specific.\n2. The EasyRetroPGF team has been collaborating and providing support to the CELO Public Good Stewards operating the round in the following areas: Round Design, Technical support for the tool, Execution and Support for the Operation of the round. \n\nWe are excited that our contributions are enabling the CELO Ecosystem to innovate on how Public Goods are rewarded. ",
  "impactDescription": "1. Through EasyRetroPGF over 40+ projects are being funded, with the participation of over 9 Stewards signaling their preferences for the growth of the CELO ecosystem.\n2. Allocation of 250k CELO among impactful community projects, through this process more impact will be incentivized in the CELO Ecosystem. ",
  "impactCategory": [
    "dapps"
  ],
  "contributionLinks": [
    {
      "description": "CELORetroPGF0 Round on EasyRetroPGF",
      "type": "OTHER",
      "url": "https://easyretropgf.xyz/celorpgf0/"
    }
  ],
  "impactMetrics": [
    {
      "description": "Amount of CELO distributed through the tool",
      "url": "https://mirror.xyz/celopg.eth/OtB1dFEBy8EF3JOddMLP1Vw-lLmtNjjo6nlJ9GRu5IA",
      "number": 250000
    },
    {
      "description": "Months for the round to be live through our tool",
      "url": "https://mirror.xyz/celopg.eth/OtB1dFEBy8EF3JOddMLP1Vw-lLmtNjjo6nlJ9GRu5IA",
      "number": 1
    },
    {
      "description": "Minimum number of projects participating in the round",
      "url": "https://easyretropgf.xyz/celorpgf0/",
      "number": 40
    }
  ],
  "fundingSources": [
    {
      "description": "One-year-locked OP Grant for the complete cohort (denominated in OP, unlocks in 2025)",
      "amount": 135350,
      "currency": "USD",
      "type": "OTHER"
    }
  ]
}`;

const pretium = `{
  "name": "Pretium Finance",
  "bio": "We’re a cryptocurrency-driven payment platform that empowers businesses and individuals to accept cross-border payments across Africa. Additionally, enables crypto holders to pay for utility services and settle their related bills using cryptocurrencies.",
  "websiteUrl": "https://pretium.africa",
  "payoutAddress": "0xE9c7cf1b0f7F68d1236284ebE6b5bc8CA33b11A8",
  "contributionDescription": "Our platform promotes financial inclusion by providing financial service to small entities and individuals excluded from traditional banking systems. Leveraging the Celo blockchain we have been able to empower small and medium businesses and individuals to accept payments across Africa by overcoming challenges associated with traditional banking industries.\nFurthermore, we bridge the gap between crypto holders and utility service providers. Through our solution crypto holders can pay for utility services and settle their bills using Celo, cUSD or USDC. This not only enhances convenience for users but also promotes the adoption of digital assets in everyday transactions.",
  "impactDescription": "Our platform cuts transaction costs to at least 1% of transaction value unlike existing global average costs of 6.2% of transaction value on cross-border transfers. By cutting costs we are able to save for small businesses and individuals thus boosting economic activity in Africa.\nOur userbase earn a commission of 2% from an average of 4.5% we get from service providers from paying for utility services and settling bills using our platform. These cashback create a new avenue for our userbase to earn from using their assets in daily transactions.",
  "impactCategory": [
    "dapps"
  ],
  "contributionLinks": [
    {
      "description": "Web application",
      "type": "OTHER",
      "url": "https://pretium.africa"
    },
    {
      "description": "Github repository",
      "type": "GITHUB_REPO",
      "url": "https://github.com/derrickbundi/"
    }
  ],
  "impactMetrics": [
    {
      "description": "Commission from utility services utilization",
      "url": "https://pretium.africa",
      "number": 2000
    }
  ],
  "fundingSources": [
    {
      "description": "Stellar Community Activation Grant",
      "amount": 10000,
      "currency": "USD",
      "type": "PARTNER_FUND"
    },
    {
      "description": "SAFE",
      "amount": 5000,
      "currency": "USD",
      "type": "OTHER"
    }
  ]
}`;
const prompt = `
    Research this project. Follow links to learn more about it. 
     
    \`\`\`json
    ${gainForest}
    \`\`\`
        `;
tasks.trigger("openai-task", {
  prompt: prompt,
  application: gainForest,
});
