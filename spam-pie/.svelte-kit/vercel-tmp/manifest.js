export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DzJjvxZQ.js","app":"_app/immutable/entry/app.DnovU-Xo.js","imports":["_app/immutable/entry/start.DzJjvxZQ.js","_app/immutable/chunks/entry.Zo_h_yfy.js","_app/immutable/chunks/vendor.e_0P48yf.js","_app/immutable/entry/app.DnovU-Xo.js","_app/immutable/chunks/vendor.e_0P48yf.js","_app/immutable/chunks/disclose-version.Bg9kRutz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/23.js')),
			__memo(() => import('../output/server/nodes/24.js')),
			__memo(() => import('../output/server/nodes/25.js')),
			__memo(() => import('../output/server/nodes/26.js')),
			__memo(() => import('../output/server/nodes/27.js')),
			__memo(() => import('../output/server/nodes/28.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js')),
			__memo(() => import('../output/server/nodes/32.js')),
			__memo(() => import('../output/server/nodes/33.js')),
			__memo(() => import('../output/server/nodes/34.js')),
			__memo(() => import('../output/server/nodes/35.js')),
			__memo(() => import('../output/server/nodes/36.js')),
			__memo(() => import('../output/server/nodes/37.js')),
			__memo(() => import('../output/server/nodes/38.js')),
			__memo(() => import('../output/server/nodes/39.js')),
			__memo(() => import('../output/server/nodes/40.js')),
			__memo(() => import('../output/server/nodes/41.js')),
			__memo(() => import('../output/server/nodes/42.js')),
			__memo(() => import('../output/server/nodes/43.js')),
			__memo(() => import('../output/server/nodes/44.js')),
			__memo(() => import('../output/server/nodes/45.js')),
			__memo(() => import('../output/server/nodes/46.js')),
			__memo(() => import('../output/server/nodes/47.js')),
			__memo(() => import('../output/server/nodes/48.js')),
			__memo(() => import('../output/server/nodes/49.js')),
			__memo(() => import('../output/server/nodes/50.js')),
			__memo(() => import('../output/server/nodes/51.js')),
			__memo(() => import('../output/server/nodes/52.js')),
			__memo(() => import('../output/server/nodes/53.js')),
			__memo(() => import('../output/server/nodes/54.js')),
			__memo(() => import('../output/server/nodes/55.js')),
			__memo(() => import('../output/server/nodes/56.js')),
			__memo(() => import('../output/server/nodes/57.js')),
			__memo(() => import('../output/server/nodes/58.js')),
			__memo(() => import('../output/server/nodes/59.js')),
			__memo(() => import('../output/server/nodes/60.js')),
			__memo(() => import('../output/server/nodes/61.js')),
			__memo(() => import('../output/server/nodes/62.js')),
			__memo(() => import('../output/server/nodes/63.js')),
			__memo(() => import('../output/server/nodes/64.js')),
			__memo(() => import('../output/server/nodes/65.js')),
			__memo(() => import('../output/server/nodes/66.js')),
			__memo(() => import('../output/server/nodes/67.js')),
			__memo(() => import('../output/server/nodes/68.js')),
			__memo(() => import('../output/server/nodes/69.js')),
			__memo(() => import('../output/server/nodes/70.js')),
			__memo(() => import('../output/server/nodes/71.js')),
			__memo(() => import('../output/server/nodes/72.js')),
			__memo(() => import('../output/server/nodes/73.js')),
			__memo(() => import('../output/server/nodes/74.js')),
			__memo(() => import('../output/server/nodes/75.js')),
			__memo(() => import('../output/server/nodes/76.js')),
			__memo(() => import('../output/server/nodes/77.js')),
			__memo(() => import('../output/server/nodes/78.js')),
			__memo(() => import('../output/server/nodes/79.js')),
			__memo(() => import('../output/server/nodes/80.js')),
			__memo(() => import('../output/server/nodes/81.js')),
			__memo(() => import('../output/server/nodes/82.js')),
			__memo(() => import('../output/server/nodes/83.js')),
			__memo(() => import('../output/server/nodes/84.js')),
			__memo(() => import('../output/server/nodes/85.js')),
			__memo(() => import('../output/server/nodes/86.js')),
			__memo(() => import('../output/server/nodes/87.js')),
			__memo(() => import('../output/server/nodes/88.js')),
			__memo(() => import('../output/server/nodes/89.js')),
			__memo(() => import('../output/server/nodes/90.js')),
			__memo(() => import('../output/server/nodes/91.js')),
			__memo(() => import('../output/server/nodes/92.js')),
			__memo(() => import('../output/server/nodes/93.js')),
			__memo(() => import('../output/server/nodes/94.js')),
			__memo(() => import('../output/server/nodes/95.js')),
			__memo(() => import('../output/server/nodes/96.js')),
			__memo(() => import('../output/server/nodes/97.js')),
			__memo(() => import('../output/server/nodes/98.js')),
			__memo(() => import('../output/server/nodes/99.js')),
			__memo(() => import('../output/server/nodes/100.js')),
			__memo(() => import('../output/server/nodes/101.js')),
			__memo(() => import('../output/server/nodes/102.js')),
			__memo(() => import('../output/server/nodes/103.js')),
			__memo(() => import('../output/server/nodes/104.js')),
			__memo(() => import('../output/server/nodes/105.js')),
			__memo(() => import('../output/server/nodes/106.js')),
			__memo(() => import('../output/server/nodes/107.js')),
			__memo(() => import('../output/server/nodes/108.js')),
			__memo(() => import('../output/server/nodes/109.js')),
			__memo(() => import('../output/server/nodes/110.js')),
			__memo(() => import('../output/server/nodes/111.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(pie-story)/apple-pie/[appleId]",
				pattern: /^\/apple-pie\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(pie-story)/blueberry-pie/[blueberryId]",
				pattern: /^\/blueberry-pie\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/dul/apple-bread/[appleId]",
				pattern: /^\/bread\/dul\/apple-bread\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/dul/blueberry-bread/[blueberryId]",
				pattern: /^\/bread\/dul\/blueberry-bread\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/dul/herring-bread/[herringId]",
				pattern: /^\/bread\/dul\/herring-bread\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/dul/meat-bread/[meatId]",
				pattern: /^\/bread\/dul\/meat-bread\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/dul/mincho-bread/[minchoId]",
				pattern: /^\/bread\/dul\/mincho-bread\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/dul/pumpkin-bread/[pumpkinId]",
				pattern: /^\/bread\/dul\/pumpkin-bread\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/dul/spam-bread/[spamId]",
				pattern: /^\/bread\/dul\/spam-bread\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/normal/apple-bread/[appleId]",
				pattern: /^\/bread\/normal\/apple-bread\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/normal/blueberry-bread/[blueberryId]",
				pattern: /^\/bread\/normal\/blueberry-bread\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/normal/herring-bread/[herringId]",
				pattern: /^\/bread\/normal\/herring-bread\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/normal/meat-bread/[meatId]",
				pattern: /^\/bread\/normal\/meat-bread\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/normal/mincho-bread/[minchoId]",
				pattern: /^\/bread\/normal\/mincho-bread\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/normal/pumpkin-bread/[pumpkinId]",
				pattern: /^\/bread\/normal\/pumpkin-bread\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/normal/spam-bread/[spamId]",
				pattern: /^\/bread\/normal\/spam-bread\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/strange/apple-bread/[appleId]",
				pattern: /^\/bread\/strange\/apple-bread\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/strange/blueberry-bread/[blueberryId]",
				pattern: /^\/bread\/strange\/blueberry-bread\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/strange/herring-bread/[herringId]",
				pattern: /^\/bread\/strange\/herring-bread\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/strange/meat-bread/[meatId]",
				pattern: /^\/bread\/strange\/meat-bread\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/strange/mincho-bread/[minchoId]",
				pattern: /^\/bread\/strange\/mincho-bread\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/strange/pumpkin-bread/[pumpkinId]",
				pattern: /^\/bread\/strange\/pumpkin-bread\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/strange/spam-bread/[spamId]",
				pattern: /^\/bread\/strange\/spam-bread\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/tan/apple-bread/[appleId]",
				pattern: /^\/bread\/tan\/apple-bread\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/tan/blueberry-bread/[blueberryId]",
				pattern: /^\/bread\/tan\/blueberry-bread\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/tan/herring-bread/[herringId]",
				pattern: /^\/bread\/tan\/herring-bread\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/tan/meat-bread/[meatId]",
				pattern: /^\/bread\/tan\/meat-bread\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/tan/mincho-bread/[minchoId]",
				pattern: /^\/bread\/tan\/mincho-bread\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/tan/pumpkin-bread/[pumpkinId]",
				pattern: /^\/bread\/tan\/pumpkin-bread\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/(pie-story)/bread/tan/spam-bread/[spamId]",
				pattern: /^\/bread\/tan\/spam-bread\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/(ending-story)/burnt-end",
				pattern: /^\/burnt-end\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(pie-story)/burnt",
				pattern: /^\/burnt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/dul/apple-cookie/[appleId]",
				pattern: /^\/cookie\/dul\/apple-cookie\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/dul/blueberry-cookie/[blueberryId]",
				pattern: /^\/cookie\/dul\/blueberry-cookie\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/dul/herring-cookie/[herringId]",
				pattern: /^\/cookie\/dul\/herring-cookie\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/dul/meat-cookie/[meatId]",
				pattern: /^\/cookie\/dul\/meat-cookie\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/dul/mincho-cookie/[minchoId]",
				pattern: /^\/cookie\/dul\/mincho-cookie\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/dul/pumpkin-cookie/[pumpkinId]",
				pattern: /^\/cookie\/dul\/pumpkin-cookie\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/dul/spam-cookie/[spamId]",
				pattern: /^\/cookie\/dul\/spam-cookie\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/normal/apple-cookie/[appleId]",
				pattern: /^\/cookie\/normal\/apple-cookie\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 57 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/normal/blueberry-cookie/[blueberryId]",
				pattern: /^\/cookie\/normal\/blueberry-cookie\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 58 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/normal/herring-cookie/[herringId]",
				pattern: /^\/cookie\/normal\/herring-cookie\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 59 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/normal/meat-cookie/[meatId]",
				pattern: /^\/cookie\/normal\/meat-cookie\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 60 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/normal/mincho-cookie/[minchoId]",
				pattern: /^\/cookie\/normal\/mincho-cookie\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 61 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/normal/pumpkin-cookie/[pumpkinId]",
				pattern: /^\/cookie\/normal\/pumpkin-cookie\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 62 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/normal/spam-cookie/[spamId]",
				pattern: /^\/cookie\/normal\/spam-cookie\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 63 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/strange/apple-cookie/[appleId]",
				pattern: /^\/cookie\/strange\/apple-cookie\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 64 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/strange/blueberry-cookie/[blueberryId]",
				pattern: /^\/cookie\/strange\/blueberry-cookie\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 65 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/strange/herring-cookie/[herringId]",
				pattern: /^\/cookie\/strange\/herring-cookie\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 66 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/strange/meat-cookie/[meatId]",
				pattern: /^\/cookie\/strange\/meat-cookie\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 67 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/strange/mincho-cookie/[minchoId]",
				pattern: /^\/cookie\/strange\/mincho-cookie\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 68 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/strange/pumpkin-cookie/[pumpkinId]",
				pattern: /^\/cookie\/strange\/pumpkin-cookie\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 69 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/strange/spam-cookie/[spamId]",
				pattern: /^\/cookie\/strange\/spam-cookie\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 70 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/tan/apple-cookie/[appleId]",
				pattern: /^\/cookie\/tan\/apple-cookie\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 71 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/tan/blueberry-cookie/[blueberryId]",
				pattern: /^\/cookie\/tan\/blueberry-cookie\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 72 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/tan/herring-cookie/[herringId]",
				pattern: /^\/cookie\/tan\/herring-cookie\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 73 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/tan/meat-cookie/[meatId]",
				pattern: /^\/cookie\/tan\/meat-cookie\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 74 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/tan/mincho-cookie/[minchoId]",
				pattern: /^\/cookie\/tan\/mincho-cookie\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 75 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/tan/pumpkin-cookie/[pumpkinId]",
				pattern: /^\/cookie\/tan\/pumpkin-cookie\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 76 },
				endpoint: null
			},
			{
				id: "/(pie-story)/cookie/tan/spam-cookie/[spamId]",
				pattern: /^\/cookie\/tan\/spam-cookie\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 77 },
				endpoint: null
			},
			{
				id: "/(pie-story)/herring-pie/[herringId]",
				pattern: /^\/herring-pie\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 78 },
				endpoint: null
			},
			{
				id: "/howtoplay",
				pattern: /^\/howtoplay\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 105 },
				endpoint: null
			},
			{
				id: "/main_menu",
				pattern: /^\/main_menu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 106 },
				endpoint: null
			},
			{
				id: "/make_sheet1/(app)/seatpowder",
				pattern: /^\/make_sheet1\/seatpowder\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 107 },
				endpoint: null
			},
			{
				id: "/make_sheet2/(my-app)",
				pattern: /^\/make_sheet2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 108 },
				endpoint: null
			},
			{
				id: "/make_sheet2/ingredient/main_ingre",
				pattern: /^\/make_sheet2\/ingredient\/main_ingre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 109 },
				endpoint: null
			},
			{
				id: "/(pie-story)/meat-pie/[meatId]",
				pattern: /^\/meat-pie\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,], errors: [1,,], leaf: 79 },
				endpoint: null
			},
			{
				id: "/(pie-story)/mincho-pie/[minchoId]",
				pattern: /^\/mincho-pie\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,], errors: [1,,], leaf: 80 },
				endpoint: null
			},
			{
				id: "/oven/(time)",
				pattern: /^\/oven\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 110 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/dul/apple-pie/[appleId]",
				pattern: /^\/pie\/dul\/apple-pie\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 81 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/dul/blueberry-pie/[blueberryId]",
				pattern: /^\/pie\/dul\/blueberry-pie\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 82 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/dul/herring-pie/[herringId]",
				pattern: /^\/pie\/dul\/herring-pie\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 83 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/dul/meat-pie/[meatId]",
				pattern: /^\/pie\/dul\/meat-pie\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 84 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/dul/mincho-pie/[minchoId]",
				pattern: /^\/pie\/dul\/mincho-pie\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 85 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/dul/pumpkin-pie/[pumpkinId]",
				pattern: /^\/pie\/dul\/pumpkin-pie\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 86 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/dul/spam-pie/[spamId]",
				pattern: /^\/pie\/dul\/spam-pie\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 87 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/strange/apple-pie/[appleId]",
				pattern: /^\/pie\/strange\/apple-pie\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 88 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/strange/blueberry-pie/[blueberryId]",
				pattern: /^\/pie\/strange\/blueberry-pie\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 89 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/strange/herring-pie/[herringId]",
				pattern: /^\/pie\/strange\/herring-pie\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 90 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/strange/meat-pie/[meatId]",
				pattern: /^\/pie\/strange\/meat-pie\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 91 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/strange/mincho-pie/[minchoId]",
				pattern: /^\/pie\/strange\/mincho-pie\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 92 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/strange/pumpkin-pie/[pumpkinId]",
				pattern: /^\/pie\/strange\/pumpkin-pie\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 93 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/strange/spam-pie/[spamId]",
				pattern: /^\/pie\/strange\/spam-pie\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 94 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/tan/apple-pie/[appleId]",
				pattern: /^\/pie\/tan\/apple-pie\/([^/]+?)\/?$/,
				params: [{"name":"appleId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 95 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/tan/blueberry-pie/[blueberryId]",
				pattern: /^\/pie\/tan\/blueberry-pie\/([^/]+?)\/?$/,
				params: [{"name":"blueberryId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 96 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/tan/herring-pie/[herringId]",
				pattern: /^\/pie\/tan\/herring-pie\/([^/]+?)\/?$/,
				params: [{"name":"herringId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 97 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/tan/meat-pie/[meatId]",
				pattern: /^\/pie\/tan\/meat-pie\/([^/]+?)\/?$/,
				params: [{"name":"meatId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 98 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/tan/mincho-pie/[minchoId]",
				pattern: /^\/pie\/tan\/mincho-pie\/([^/]+?)\/?$/,
				params: [{"name":"minchoId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 99 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/tan/pumpkin-pie/[pumpkinId]",
				pattern: /^\/pie\/tan\/pumpkin-pie\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 100 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pie/tan/spam-pie/[spamId]",
				pattern: /^\/pie\/tan\/spam-pie\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 101 },
				endpoint: null
			},
			{
				id: "/(pie-story)/pumpkin-pie/[pumpkinId]",
				pattern: /^\/pumpkin-pie\/([^/]+?)\/?$/,
				params: [{"name":"pumpkinId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,7,], errors: [1,,], leaf: 102 },
				endpoint: null
			},
			{
				id: "/result/(pie-result)",
				pattern: /^\/result\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 111 },
				endpoint: null
			},
			{
				id: "/(pie-story)/spam-pie/[spamId]",
				pattern: /^\/spam-pie\/([^/]+?)\/?$/,
				params: [{"name":"spamId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,8,], errors: [1,,], leaf: 103 },
				endpoint: null
			},
			{
				id: "/(ending-story)/storyss",
				pattern: /^\/storyss\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(ending-story)/storyss/bad/bad1",
				pattern: /^\/storyss\/bad\/bad1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(ending-story)/storyss/bad/bad2",
				pattern: /^\/storyss\/bad\/bad2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(ending-story)/storyss/bad/bad3",
				pattern: /^\/storyss\/bad\/bad3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(ending-story)/storyss/best/best1",
				pattern: /^\/storyss\/best\/best1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(ending-story)/storyss/best/best2",
				pattern: /^\/storyss\/best\/best2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(ending-story)/storyss/best/best3",
				pattern: /^\/storyss\/best\/best3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(start-story)/storys/[storyId]",
				pattern: /^\/storys\/([^/]+?)\/?$/,
				params: [{"name":"storyId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,9,], errors: [1,,], leaf: 104 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
