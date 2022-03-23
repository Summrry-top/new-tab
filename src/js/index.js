const wallpaper =
	'https://best-extension.extfans.com/theme/wallpapers/ikcedakoabkgogpdcinnjbbkahomfm/';
const wallpapers = [
	'a3032480e2654cbeca0f366b232758.webp',
	'79d01bdd9b8b92853296480d9f09aa.webp',
	'4fe32f702dae5845d8eac5617f8c78.webp',
	'f9e40f9ee4a0abadcdf281e6614c27.webp',
	'fb791350095bf90881e858bd9a9daf.webp',
	'7739d6d4c974f742604b37d7e129ec.webp',
	'e213b89ac6daa9e9cdcc92762450cc.webp',
	'73ba00879384fb1e6d42c4c9e5592f.webp',
	'39ef571ded3215d2d4e331ab2c95e7.webp',
	'67e1e2d693b356214ec9c237d108bd.webp',
	'9214aaf0522f46142ec308ea272bdb.webp',
	'2e7c0dc0c329b1cc36609a6e40f3a2.webp',
	'a1913a6e6dcd022d670deb57fc8649.webp',
	'f566bb439e64b0dc24673e05c30c94.webp',
	'd4e43a6b4e86157ba8ae6f5e16a7a7.webp',
	'6e5f67dc77603a4b00198537b9bde3.webp',
	'195ec48e1806c62bd001bc10c63ab2.webp',
	'941a92a55425276735adb1d0701400.webp',
	'8f1ba7e4167bdef98564997d851d70.webp',
	'70fc671c4d7b418e4cba5f7bf93580.webp',
	'ba70ea2ba48fa5026cc3205fb9b01f.webp',
	'34d5a9ba7449faf6b409ab8edbd627.webp',
	'5d5d2f4f44d81ddd9a0908e1b9bcf4.webp',
	'8ca34cc5a3aa5efff1bf24924bfdf4.webp',
	'3cf7722ea11fc1f1afea25aedf5ec7.webp',
	'9d526e2c030d27e13f9e5ff145b046.webp',
	'4e56969772f29991bed953f01f4e30.webp',
	'34da13dc412d16a74c07bd7b668b65.webp',
	'808a0323cef20e52b2edf9e5d82e0d.webp',
	'abc3b3ac77e0ca4cc00baffcc166e8.webp',
	'671bb118b702530eac78fe0ea1b153.webp',
	'd5ea9748efc13eec42f24fb6d74a55.webp',
	'5ffd4257ec0c4dab98fc59d8d7eb8b.webp',
	'ddaafa9401d7c443dc8294ea6e6ece.webp',
];
const list = [
	{
		name: '百度',
		url: 'https://www.baidu.com',
		api: '/s?wd=',
	},
	{
		name: '搜狗',
		url: 'https://www.sogou.com',
		api: '/web?query=',
	},
	{
		name: '谷歌',
		url: 'https://www.google.com',
		api: '/search?q=',
	},
	{
		name: '必应',
		url: 'https://www.bing.com',
		api: '/search?q=',
	},
	// {
	//     name:'github',
	//     url:'https://github.com/search?q=',
	// },
	// {
	//     name:'pub.dev',
	//     url:'https://pub.dev/packages?q='
	// }
];

onload = function () {
	let i = Math.floor(Math.random() * wallpapers.length);
	document.querySelector('#bg').src = `${wallpaper}${wallpapers[i]}`;
	const engineWarp = document.querySelector('.engine-warp');
	const engineCurr = document.querySelector('.engine-current');
	const engineList = document.querySelector('.engine-list');
	engineCurr.dataset['engine'] = 0;
	engineCurr.innerHTML = `<img src="${list[0].url}/favicon.ico" alt><span>${list[0].name}</span>`;
	let listStr = '';
	for (const i in list) {
		listStr += `<div class="item" data-engine="${i}"><img class="ico" src="${list[i].url}/favicon.ico" alt><span>${list[i].name}</span></div>`;
	}
	engineList.innerHTML = listStr;
	engineWarp.addEventListener('click', e => {
		let i =
			e.target.parentNode.dataset.engine ||
			e.target.dataset.engine ||
			e.target.previousElementSibling.dataset.engine;
		if (i != engineCurr.dataset.engine) {
			engineCurr.dataset.engine = i;
			engineCurr.innerHTML = `<img src="${list[i].url}/favicon.ico" alt><span>${list[i].name}</span>`;
		}
		engineList.classList.toggle('show');
	});
	engineWarp.addEventListener('mouseleave', () =>
		engineList.classList.remove('show')
	);
	search.addEventListener(
		'keydown',
		e => (e = e || Event ? (e.keyCode == 13 ? goSearch() : null) : null)
	);
	searchSubmit.addEventListener('click', goSearch);

	function goSearch() {
		let i = engineCurr.dataset.engine;
		open(`${list[i].url}${list[i].api}${search.value}`, '_blank');
	}
};
