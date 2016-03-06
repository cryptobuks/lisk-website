var partnerships = [
	{
		name: "ShapeShift",
		img: "shapeshift",
		url: "https://shapeshift.io/"
	},
	{
		name: "Chain of Things",
		img: "chainofthings",
		url: "http://chainofthings.com/"
	}
];


module.exports = function (app) {
	app.get("/", function (req, res) {
		res.render('home', {pageId: "home", title: "Decentralized Application Platform", partnerships: partnerships, description: "Develop and publish decentralized applications with your own side chains on the open-source Lisk Platform.", words: "lisk, crypti, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain, sia", hasScript: true});
	});
}
