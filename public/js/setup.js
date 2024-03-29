const BigNumber = window.BigNumber
window.WALLET_TYPE = ''
// ALL THE ADDRESSES IN CONFIG MUST BE LOWERCASE
window.config = {
	weth_address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // LOWERCASE!
	platform_token_address: '0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17',
	locker_address: '0x0c5d9AA95329517918AA7b82BfDa25d60446E1ac',

	subscription_address: '0x943023d8e0f591C08a0E2B922452a7Dc37173C9b',
	ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
	MAX_LOCKS_TO_LOAD_PER_CALL: 10,

	api_baseurl: 'https://app-tools.dyp.finance',
	subgraph_url: 'https://graphiql.dyp.finance/subgraphs/name/davekaj/uniswap',
	//subgraph_uniswap: 'https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v2',
	indexing_status_endpoint: 'https://graph-node.dyp.finance/graphql',
	farm_api: 'https://farm-info.dyp.finance',

	metamask_message: "I want to login, let me in!",
	metamask_admin_account: "0x471AD9812B2537Ffc66EbA4d474cC55c32DEc4F8",

	submission_form_link: 'https://docs.google.com/forms/d/e/1FAIpQLSdstsJBKnWuxCt9uqd2saC7AaRVSpuPtPdoTRmqdzpSdk14HA/viewform?usp=pp_url',

	// lowercase base tokens on uniswap
	// order matters!
	base_tokens: [
		'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // usdc
		'0xdac17f958d2ee523a2206206994597c13d831ec7', // usdt
		'0x6b175474e89094c44da98b954eedeac495271d0f', // dai
		'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // weth
		'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599' // wbtc
	],

	// add supported subscription tokens here, lowercase
	// THESE TOKENS MUST HAVE BEEN ALREADY ADDED TO SMART CONTRACT!
	subscription_tokens: {
		'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
			symbol: 'WETH', decimals: 18
		},
		'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
			symbol: 'WBTC', decimals: 8
		},
		'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
			symbol: 'USDC', decimals: 6
		},
		'0xdac17f958d2ee523a2206206994597c13d831ec7': {
			symbol: 'USDT', decimals: 6
		},
		'0x6b175474e89094c44da98b954eedeac495271d0f': {
			symbol: 'DAI', decimals: 18
		}
	},

	automated_trust_scores: {
		perfect_scoring: { // minimum numbers for 100% scores
			tx_no: 2000,
			lp_holder_no: 250,
			daily_volume_usd: 10000,
			liquidity_usd: 50000
		},
		weights: { // sum of all weights must be 1, 1 = 100%
			tx_no: .1,
			lp_holder_no: .2,
			daily_volume_usd: .2,
			liquidity_usd: .2,
			information: .3
		},
		display_order: [
			"information",
			"liquidity_usd",
			"daily_volume_usd",
			"lp_holder_no",
			"tx_no",
		],
		display_names: {
			"information": "Information",
			"liquidity_usd": "Liquidity (Pool)",
			"daily_volume_usd": "Daily Volume USD",
			"lp_holder_no": "LP Holders",
			"tx_no": "Transactions",
		}
	}
}

// lowercase coingecko IDs by contract address for basetokens
window.tokenCG = {
	'0x1f9840a85d5af5bf1d1762f925bdaddc4201f984': 'uniswap',
	'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 'usd-coin'
}

window.ERC20_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
window.UNISWAP_PAIR_ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
window.LOCKER_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"platformTokensLocked","type":"uint256"},{"indexed":false,"internalType":"bool","name":"claimed","type":"bool"}],"name":"Locked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockTimestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"platformTokensLocked","type":"uint256"},{"indexed":false,"internalType":"bool","name":"claimed","type":"bool"}],"name":"Unlocked","type":"event"},{"inputs":[],"name":"MAX_LOCK_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINIMUM_BASETOKEN_PERCENT_ETH_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONE_HUNDRED_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PLATFORM_TOKEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SLIPPAGE_TOLERANCE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"baseToken","type":"address"}],"name":"addBaseToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"claimExtraTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"lockId","type":"uint256"}],"name":"claimUnlocked","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"unlockTimestamp","type":"uint256"}],"name":"createLock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getActiveLockIds","outputs":[{"internalType":"uint256[]","name":"result","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getActiveLockIdsByRecipient","outputs":[{"internalType":"uint256[]","name":"result","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getActiveLockIdsByToken","outputs":[{"internalType":"uint256[]","name":"result","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActiveLockIdsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"getActiveLockIdsLengthByRecipient","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getActiveLockIdsLengthByToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getBaseTokens","outputs":[{"internalType":"address[]","name":"result","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBaseTokensLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getInactiveLockIds","outputs":[{"internalType":"uint256[]","name":"result","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getInactiveLockIdsByRecipient","outputs":[{"internalType":"uint256[]","name":"result","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getInactiveLockIdsByToken","outputs":[{"internalType":"uint256[]","name":"result","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInactiveLockIdsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"}],"name":"getInactiveLockIdsLengthByRecipient","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"getInactiveLockIdsLengthByToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getLockById","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"unlockTimestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"platformTokensLocked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getLockedTokens","outputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLockedTokensLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"getLocksByIds","outputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"unlockTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"address[]","name":"recipients","type":"address[]"},{"internalType":"bool[]","name":"claimeds","type":"bool[]"},{"internalType":"uint256[]","name":"platformTokensLockeds","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"baseToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getMinLockCreationFeeInWei","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"tokens","type":"address[]"}],"name":"getTokensBalances","outputs":[{"internalType":"uint256[]","name":"balances","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"locks","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"unlockTimestamp","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"bool","name":"claimed","type":"bool"},{"internalType":"uint256","name":"platformTokensLocked","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"locksLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"baseToken","type":"address"}],"name":"removeBaseToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapRouterV2","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]
window.SUBSCRIPTION_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"platformTokenAmount","type":"uint256"}],"name":"Subscribe","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amountDai","type":"uint256"}],"name":"SubscriptionFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"SupportedTokenAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAddress","type":"address"}],"name":"SupportedTokenRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"platformTokenAmount","type":"uint256"}],"name":"Unsubscribe","type":"event"},{"inputs":[],"name":"ONE_HUNDRED_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SLIPPAGE_TOLERANCE_X_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_DAI_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TRUSTED_PLATFORM_TOKEN_ADDRESS","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"addSupportedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"getEstimatedTokenSubscriptionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isTokenSupported","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"removeSupportedToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newSubscriptionFeeInDai","type":"uint256"}],"name":"setSubscriptionFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"subscribe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"subscriptionFeeInDai","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"subscriptionPlatformTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapRouterV2","outputs":[{"internalType":"contract IUniswapV2Router","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unsubscribe","outputs":[],"stateMutability":"nonpayable","type":"function"}]

window.isConnectedOneTime = false
window.oneTimeConnectionEvents = []
function addOneTimeWalletConnectionListener(fn) {
	oneTimeConnectionEvents.push(fn)
	console.log({oneTimeConnectionEvents})
}
function removeOneTimeWalletConnectionListener(fn) {
	oneTimeConnectionEvents = oneTimeConnectionEvents.filter(e => e != fn)
	console.log({oneTimeConnectionEvents})
}

// function to connect metamask
async function connectWallet() {
	function onConnect() {
		if (!isConnectedOneTime) {
			window.isConnectedOneTime = true
			window.oneTimeConnectionEvents.forEach(fn => fn())
		}
	}
	if (window.ethereum) {
		window.web3 = new Web3(window.ethereum)
		try {
			await window.ethereum.enable()
			console.log("Connected!")
			onConnect()
			if ( window.ethereum.isCoin98 )
				window.WALLET_TYPE = 'coin98'
			if ( window.ethereum.isMetaMask )
				window.WALLET_TYPE = 'metamask'
			let coinbase_address = await window.ethereum.request({method: 'eth_accounts'})
			window.coinbase_address = coinbase_address.pop()
			return true;
		} catch (e) {
			console.error(e)
			throw new Error("User denied wallet connection!")
		}
	} else if (window.web3) {
		window.web3 = new Web3(window.web3.currentProvider)
		console.log("connected to old web3")
		onConnect()
		return true
	} else {
		throw new Error("No web3 detected!")
	}
}

function param(name) {
	var f = new RegExp("\\b" + name + "=([^&]+)").exec(document.location.search);
	if (f) return decodeURIComponent(f[1].replace(/\+/g, " "));
}

window.cached_contracts = Object.create(null)
async function getContract({key, address=null, ABI=null}) {
	ABI = ABI || window[key+'_ABI']
	// alert(ABI)
	address = address || window.config[key.toLowerCase()+'_address']
	if (!window.cached_contracts[key + '-'+address.toLowerCase()]) {
		window.cached_contracts[key + '-'+address.toLowerCase()] = new window.web3.eth.Contract(ABI, address, {from: await getCoinbase()})
	}
	return window.cached_contracts[key + '-'+address.toLowerCase()]
}

function getCoinbase() {
	if ( window.WALLET_TYPE == 'coin98' ) {
		return window.coinbase_address.toLowerCase()
	}
	else{
		return window.web3.eth.getCoinbase()
	}
}

function wait(ms) {
	console.log("Waiting " + ms + 'ms')
	return new Promise(r => setTimeout(() => {
		r(true)
		console.log("Wait over!")
	}, ms))
}
window.aaa = wait

function getPrice(coingecko_id = 'ethereum', vs_currency = 'usd') {
	return new Promise((resolve, reject) => {
		window.$.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coingecko_id}&vs_currencies=${vs_currency}`)
			.then((result) => {
				resolve(result[coingecko_id][vs_currency])
			})
			.catch((error) => {
				reject(error)
			})
	})
}

async function getActiveLockIdsLengthByRecipient(recipient) {
	let lockerContract = await getContract({key: "LOCKER"})
	return await lockerContract.methods.getActiveLockIdsLengthByRecipient(recipient).call()
}
async function getActiveLockIdsLengthByToken(tokenAddress) {
	let lockerContract = await getContract({key: "LOCKER"})
	return await lockerContract.methods.getActiveLockIdsLengthByToken(tokenAddress).call()

}
async function getActiveLocksByToken(tokenAddress, startIndex, endIndex) {
	let lockerContract = await getContract({key: "LOCKER"})
	let lockIds = await lockerContract.methods.getActiveLockIdsByToken(tokenAddress, startIndex, endIndex).call()
	let locks = await lockerContract.methods.getLocksByIds(lockIds).call()
	return processedLocks(locks)
}
async function getActiveLocksByRecipient(recipient, startIndex, endIndex) {
	let lockerContract = await getContract({key: "LOCKER"})
	let lockIds = await lockerContract.methods.getActiveLockIdsByRecipient(recipient, startIndex, endIndex).call()
	let locks = await lockerContract.methods.getLocksByIds(lockIds).call()
	return processedLocks(locks)
}
async function getMinLockCreationFeeInWei(pair, baseToken, amount) {
	let lockerContract = await getContract({key: "LOCKER"})
	return await lockerContract.methods.getMinLockCreationFeeInWei(pair, baseToken, amount).call()
}
async function getPairTokensInfo(pair) {
	let pairContract = await getContract({key: "PAIR", address: pair, ABI: UNISWAP_PAIR_ABI})
	let [token0_address, token1_address] = await Promise.all([pairContract.methods.token0().call(), pairContract.methods.token1().call()])
	let token0 = await getContract({address: token0_address, ABI: ERC20_ABI})
	let token1 = await getContract({address: token1_address, ABI: ERC20_ABI})
	let [ name0, symbol0, decimals0,
		name1, symbol1, decimals1, ] = await Promise.all([token0.methods.name().call(), token0.methods.symbol().call(), token0.methods.decimals().call(),
		token1.methods.name().call(), token1.methods.symbol().call(), token1.methods.decimals().call()])
	return {
		token0: {
			address: token0_address.toLowerCase(),
			name: name0,
			symbol: symbol0,
			decimals: decimals0,
			contract: token0
		},
		token1: {
			address: token1_address.toLowerCase(),
			name: name1,
			symbol: symbol1,
			decimals: decimals1,
			contract: token1
		}
	}
}
async function getBaseTokens() {
	let lockerContract = await getContract({key: "LOCKER"})
	let baseTokensLength = await lockerContract.methods.getBaseTokensLength().call()
	let baseTokens = await lockerContract.methods.getBaseTokens(0, baseTokensLength).call()
	console.log({baseTokens})
	return baseTokens.map(t => t.toLowerCase())
}
async function claimUnlocked(lockId) {
	let lockerContract = await getContract({key: "LOCKER"})
	return await lockerContract.methods.claimUnlocked(lockId).send()
}
async function getLockedAmount(pair) {
	let lockerContract = await getContract({key: "LOCKER"})
	return await lockerContract.methods.tokenBalances(pair).call()
}
async function getTokenHolderBalance(token, holder) {
	let tokenContract = await getContract({address: token, ABI: ERC20_ABI})
	return await tokenContract.methods.balanceOf(holder).call()
}
async function getTokenTotalSupply(token) {
	let tokenContract = await getContract({address: token, ABI: ERC20_ABI})
	return await tokenContract.methods.totalSupply().call()
}
async function approveToken(token, spender, amount) {
	let tokenContract = await getContract({address: token, ABI: ERC20_ABI})
	return await tokenContract.methods.approve(spender, amount).send()
}
async function createLock(pair, baseToken, amount, unlockTimestamp) {
	let lockerContract = await getContract({key: "LOCKER"})

	let estimatedValue = await getMinLockCreationFeeInWei(pair, baseToken, amount)
	estimatedValue = new BigNumber(estimatedValue).times(1.1).toFixed(0)

	return await lockerContract.methods.createLock(pair, baseToken, amount, unlockTimestamp).send({value: estimatedValue, from: await getCoinbase()})
}

function processedLocks(locks) {
	return locks._ids.map((id, i) => ({
		id,
		token: locks.tokens[i],
		unlockTimestamp: locks.unlockTimestamps[i],
		amount: locks.amounts[i],
		recipient: locks.recipients[i],
		claimed: locks.claimeds[i],
		platformTokensLocked: locks.platformTokensLockeds[i]
	}))
}


// ======================== subscription contract functions ================================

async function subscriptionPlatformTokenAmount(account) {
	let subscriptionContract = await getContract({key: "SUBSCRIPTION"})
	return await subscriptionContract.methods.subscriptionPlatformTokenAmount(account).call()
}
async function subscribe(tokenAddress, amount) {
	let subscriptionContract = await getContract({key: "SUBSCRIPTION"})
	return await subscriptionContract.methods.subscribe(tokenAddress, amount).send({from: await getCoinbase()})
}
async function unsubscribe() {
	let subscriptionContract = await getContract({key: "SUBSCRIPTION"})
	return await subscriptionContract.methods.unsubscribe().send({from: await getCoinbase()})
}
async function getEstimatedTokenSubscriptionAmount(tokenAddress) {
	let subscriptionContract = await getContract({key: "SUBSCRIPTION"})
	return await subscriptionContract.methods.getEstimatedTokenSubscriptionAmount(tokenAddress).call()
}

// ===================== end subscription contract functions ================================


// ========= favorites functions ==========

async function getFavorites() {
	return JSON.parse(localStorage.getItem('favorites') || `[]`)
}
async function isFavorite(pairId) {
	let favorites = await getFavorites()
	return favorites.some((f) => {
		if (f.id == pairId) {
			return true
		}
		return false
	})
}
async function toggleFavorite(pair) {
	if (!pair) return false;
	let favorites = await getFavorites()
	let foundIndex;
	if (favorites.some((f, i) => {
		if (f.id == pair.id) {
			foundIndex = i
			return true
		}
		return false
	})) {
		favorites.splice(foundIndex, 1)
	} else {
		favorites.push(pair)
	}
	localStorage.setItem('favorites', JSON.stringify(favorites, null, 4))
}

// ======= end favorites functions ========

// -----------------
async function getMainToken(pair) {
	let mainToken = pair.token0 || {}
	for (let token of window.config.base_tokens) {
		if (mainToken.id == token) {
			mainToken = pair.token1
			mainToken.__number = 1
			mainToken.__base_number = 0
			break;
		} else if (pair.token1.id == token) {
			mainToken = pair.token0
			mainToken.__number = 0
			mainToken.__base_number = 1
			break;
		}
	}
	return mainToken
}
// ------------------



// helper functions for csv json and file reading
// ref: http://stackoverflow.com/a/1293163/2343
// This will parse a delimited string into an array of
// arrays. The default delimiter is the comma, but this
// can be overriden in the second argument.
function CSVToArray(strData, strDelimiter) {
	// Check to see if the delimiter is defined. If not,
	// then default to comma.
	strDelimiter = (strDelimiter || ",");

	// Create a regular expression to parse the CSV values.
	var objPattern = new RegExp(
		(
			// Delimiters.
			"(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

			// Quoted fields.
			"(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

			// Standard fields.
			"([^\"\\" + strDelimiter + "\\r\\n]*))"
		),
		"gi"
	);


	// Create an array to hold our data. Give the array
	// a default empty first row.
	var arrData = [[]];

	// Create an array to hold our individual pattern
	// matching groups.
	var arrMatches = null;


	// Keep looping over the regular expression matches
	// until we can no longer find a match.
	while (arrMatches = objPattern.exec(strData)) {

		// Get the delimiter that was found.
		var strMatchedDelimiter = arrMatches[1];

		// Check to see if the given delimiter has a length
		// (is not the start of string) and if it matches
		// field delimiter. If id does not, then we know
		// that this delimiter is a row delimiter.
		if (
			strMatchedDelimiter.length &&
			strMatchedDelimiter !== strDelimiter
		) {

			// Since we have reached a new row of data,
			// add an empty row to our data array.
			arrData.push([]);

		}

		var strMatchedValue;

		// Now that we have our delimiter out of the way,
		// let's check to see which kind of value we
		// captured (quoted or unquoted).
		if (arrMatches[2]) {

			// We found a quoted value. When we capture
			// this value, unescape any double quotes.
			strMatchedValue = arrMatches[2].replace(
				new RegExp("\"\"", "g"),
				"\""
			);

		} else {

			// We found a non-quoted value.
			strMatchedValue = arrMatches[3];

		}


		// Now that we have our value string, let's add
		// it to the data array.
		arrData[arrData.length - 1].push(strMatchedValue);
	}

	// Return the parsed data.
	return (arrData);
}

function csvToJSON (csv) {
	csv = csv.trim()
	let arr = CSVToArray(csv)
	return arr.slice(1).map(a => {
		let res = {}
		arr[0].forEach((field, i) => res[field] = a[i])
		return res;
	})
}

function readAsText(file) {
	return new Promise((resolve) => {
		let reader = new FileReader()
		reader.addEventListener("load", () => {
			resolve(reader.result)
		})
		reader.readAsText(file)
	})
}

window.sign = async function (msg, account) {
	let signature = await window.web3.eth.personal.sign(msg, account)
	return signature
}