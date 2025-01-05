<script>
	// @ts-nocheck
	//커밋
	const background = '/src/public/element/otherthing/otherelement/background.png';

	import dulapplecookie from '/src/public/element/cookie/dul-cookie/apple-cookie2.png'
	import dulblueberrycookie from '/src/public/element/cookie/dul-cookie/blueberry-cookie2.png'
	import dulspamcookie from '/src/public/element/cookie/dul-cookie/spam-cookie2.png'
	import dulmeatcookie from '/src/public/element/cookie/dul-cookie/meat-cookie2.png'
	import dulinseoncookie from '/src/public/element/cookie/dul-cookie/herring-cookie2.png'
	import dulmintchococookie from '/src/public/element/cookie/dul-cookie/mincho-cookie2.png'
	import dulpumpkincookie from '/src/public/element/cookie/dul-cookie/pumpkin-cookie2.png' 

	import goodapplecookie from '/src/public/element/cookie/normal-cookie/apple-cookie2.png'
	import goodblueberrycookie from '/src/public/element/cookie/normal-cookie/blueberry-cookie2.png'
	import goodspamcookie from '/src/public/element/cookie/normal-cookie/spam-cookie2.png'
	import goodmeatcookie from '/src/public/element/cookie/normal-cookie/meat-cookie2.png'
	import goodmintchococookie from '/src/public/element/cookie/normal-cookie/mincho-cookie2.png'
	import goodinseoncookie from '/src/public/element/cookie/normal-cookie/herring-cookie2.png'
	import goodpumpkincookie from '/src/public/element/cookie/normal-cookie/pumpkin-cookie2.png'

	import tanapplecookie from '/src/public/element/cookie/tan-cookie/apple-cookie2.png'
	import tanblueberrycookie from '/src/public/element/cookie/tan-cookie/blueberry-cookie2.png'
	import tanmeatcookie from '/src/public/element/cookie/tan-cookie/meat-cookie2.png'
	import tanspamcookie from '/src/public/element/cookie/tan-cookie/spam-cookie2.png'
	import tanmintchococookie from '/src/public/element/cookie/tan-cookie/mincho-cookie2.png'
	import tanpumpkincookie from '/src/public/element/cookie/tan-cookie/pumpkin-cookie2.png'
	import taninseoncookie from '/src/public/element/cookie/tan-cookie/herring-cookie2.png'


	import dulapplepie from '/src/public/element/pie/dul-pie/apple-pie.png'
	import dulblueberrypie from '/src/public/element/pie/dul-pie/blueberry-pie.png'
	import dulspampie from '/src/public/element/pie/dul-pie/spam-pie.png'
	import dulmeatpie from '/src/public/element/pie/dul-pie/meat-pie.png'
	import dulinseonpie from '/src/public/element/pie/dul-pie/herring-pie.png'
	import dulmintchocopie from '/src/public/element/pie/dul-pie/mincho-pie.png'
	import dulpumpkinpie from '/src/public/element/pie/dul-pie/pumpkin-pie.png'

	import goodapplepie from '/src/public/element/pie/goodpie/apple-pie.png'
	import goodblueberrypie from '/src/public/element/pie/goodpie/blueberry-pie.png'
	import goodspampie from '/src/public/element/pie/goodpie/spam-pie.png'
	import goodmeatpie from '/src/public/element/pie/goodpie/meat-pie.png'
	import goodmintchocopie from '/src/public/element/pie/goodpie/mincho-pie.png'
	import goodinseonpie from '/src/public/element/pie/goodpie/herring-pie.png'
	import goodpumpkinpie from '/src/public/element/pie/goodpie/pumpkin-pie.png'

	import tanapplepie from '/src/public/element/pie/little-pie/apple-pie.png'
	import tanblueberrypie from '/src/public/element/pie/little-pie/blueberry-pie.png'
	import tanmeatpie from '/src/public/element/pie/little-pie/meat-pie.png'
	import tanspampie from '/src/public/element/pie/little-pie/spam-pie.png'
	import tanmintchocopie from '/src/public/element/pie/little-pie/mincho-pie.png'
	import tanpumpkinpie from '/src/public/element/pie/little-pie/pumpkin-pie.png'
	import taninseonpie from '/src/public/element/pie/little-pie/herring-pie.png'

	
	import dulapplebread from '/src/public/element/bread/dul-bread/apple-bread.png'
	import goodapplebread from '/src/public/element/bread/normal-bread/apple-bread.png'
	import tanapplebread from '/src/public/element/bread/tan-bread/apple-bread.png'
	import dulblueberrybread from '/src/public/element/bread/dul-bread/blueberry-bread.png'
	import goodblueberrybread from '/src/public/element/bread/normal-bread/blueberry-bread.png'
	import tanblueberrybread from '/src/public/element/bread/tan-bread/blueberry-bread.png'
	import dulinseonbread from '/src/public/element/bread/dul-bread/herring-bread.png'
	import goodinseonbread from '/src/public/element/bread/normal-bread/herring-bread.png'
	import taninseonbread from '/src/public/element/bread/tan-bread/herring-bread.png'
	import dulmeatbread from '/src/public/element/bread/dul-bread/meat-bread.png'
	import goodmeatbread from '/src/public/element/bread/normal-bread/meat-bread.png'
	import tanmeatbread from '/src/public/element/bread/tan-bread/meat-bread.png'
	import dulmintchocobread from '/src/public/element/bread/dul-bread/mincho-bread.png'
	import goodmintchocobread from '/src/public/element/bread/normal-bread/mincho-bread.png'
	import tanmintchocobread from '/src/public/element/bread/tan-bread/mincho-bread.png'
	import dulpumpkinbread from '/src/public/element/bread/dul-bread/pumpkin-bread.png'
	import goodpumpkinbread from '/src/public/element/bread/normal-bread/pumpkin-bread.png'
	import tanpumpkinbread from '/src/public/element/bread/tan-bread/pumpkin-bread.png'
	import dulspambread from '/src/public/element/bread/dul-bread/spam-bread.png'
	import goodspambread from '/src/public/element/bread/normal-bread/spam-bread.png'
	import tanspambread from '/src/public/element/bread/tan-bread/spam-bread.png'

	import burnt from '/src/public/element/pie/suktan.png'


	


	const element = [
		{
			dulapplecookie: dulapplecookie,
			dulblueberrycookie: dulblueberrycookie,
			dulspamcookie: dulspamcookie,
			dulmeatcookie: dulmeatcookie,
			dulinseoncookie: dulinseoncookie,
			dulmintchococookie: dulmintchococookie,
			dulpumpkincookie: dulpumpkincookie,

			goodapplecookie: goodapplecookie,
			goodblueberrycookie: goodblueberrycookie,
			goodspamcookie: goodspamcookie,
			goodmeatcookie: goodmeatcookie,
			goodmintchococookie: goodmintchococookie,
			goodinseoncookie: goodinseoncookie,
			goodpumpkincookie: goodpumpkincookie,

			tanapplecookie: tanapplecookie,
			tanblueberrycookie: tanblueberrycookie,
			tanmeatcookie: tanmeatcookie,
			tanspamcookie: tanspamcookie,
			tanmintchococookie: tanmintchococookie,
			tanpumpkincookie: tanpumpkincookie,
			taninseoncookie: taninseoncookie,

			burnt: burnt
		}
	];

	const element2 = [
		{
			dulapplebread: dulapplebread,
			text: '으악~! 덜익은 사과 빵이 완성됐잖아..'
		},
		{
			goodapplebread: goodapplebread,
			text: '우와~! 맛있는 사과 빵이 완성됐다!!'
		},
		{
			tanapplebread: tanapplebread,
			text: '헉!! 완전히 탄 사과 빵이 돼버렸잖아..!'
		},

		{
			dulblueberrybread: dulblueberrybread,
			text: '으악~! 덜익은 블루베리 빵이 완성됐잖아..'
		},
		{
			goodblueberrybread: goodblueberrybread,
			text: '우와~! 맛있는 블루베리 빵이 완성됐다!!'
		},
		{
			tanblueberrybread: tanblueberrybread,
			text: '헉!! 완전히 탄 블루베리 빵이 돼버렸잖아..!'
		},

		{
			dulinseonbread: dulinseonbread,
			text: '으악~! 덜익은 정어리 빵이 완성됐잖아..'
		},
		{
			goodinseonbread: goodinseonbread,
			text: '우와~! 맛있는 정어리 빵이 완성됐다!!'
		},
		{
			taninseonbread: taninseonbread,
			text: '헉!! 완전히 탄 정어리 빵이 돼버렸잖아..!'
		},

		{
			dulmeatbread: dulmeatbread,
			text: '으악~! 덜익은 고기 빵이 완성됐잖아..'
		},
		{
			goodmeatbread: goodmeatbread,
			text: '우와~! 맛있는 고기 빵이 완성됐다!!'
		},
		{
			tanmeatbread: tanmeatbread,
			text: '헉!! 완전히 탄 고기 빵이 돼버렸잖아..!'
		},

		{
			dulmintchocobread: dulmintchocobread,
			text: '으악~! 덜익은 민트초코 빵이 완성됐잖아..'
		},
		{
			goodmintchocobread: goodmintchocobread,
			text: '우와~! 맛있는 민트초코 빵이 완성됐다!!'
		},
		{
			tanmintchocobread: tanmintchocobread,
			text: '헉!! 완전히 탄 민트초코 빵이 돼버렸잖아..!'
		},

		{
			dulpumpkinbread: dulpumpkinbread,
			text: '으악~! 덜익은 호박 빵이 완성됐잖아..'
		},
		{
			goodpumpkinbread: goodpumpkinbread,
			text: '우와~! 맛있는 호박 빵이 완성됐다!!'
		},
		{
			tanpumpkinbread: tanpumpkinbread,
			text: '헉!! 완전히 탄 호박 빵이 돼버렸잖아..!'
		},

		{
			dulspambread: dulspambread,
			text: '으악~! 덜익은 스팸 빵이 완성됐잖아..'
		},
		{
			goodspambread: goodspambread,
			text: '우와~! 맛있는 스팸 빵이 완성됐다!!'
		},
		{
			tanspambread: tanspambread,
			text: '헉!! 완전히 탄 스팸 빵이 돼버렸잖아..!'
		},

		{
			burnt: burnt,
			text: '헉!! 다 타버려서 석탄이 돼버렸잖아..!'
		}
	];

	const element1 = [
		{
			dulapplepie: dulapplepie,
			dulblueberrypie: dulblueberrypie,
			dulspampie: dulspampie,
			dulmeatpie: dulmeatpie,
			dulinseonpie: dulinseonpie,
			dulmintchocopie: dulmintchocopie,
			dulpumpkinpie: dulpumpkinpie,

			goodapplepie: goodapplepie,
			goodblueberrypie: goodblueberrypie,
			goodspampie: goodspampie,
			goodmeatpie: goodmeatpie,
			goodmintchocopie: goodmintchocopie,
			goodinseonpie: goodinseonpie,
			goodpumpkinpie: goodpumpkinpie,

			tanapplepie: tanapplepie,
			tanblueberrypie: tanblueberrypie,
			tanmeatpie: tanmeatpie,
			tanspampie: tanspampie,
			tanmintchocopie: tanmintchocopie,
			tanpumpkinpie: tanpumpkinpie,
			taninseonpie: taninseonpie,

			burnt1: burnt
		}
	];

	const next_button = '/src/public/element/otherthing/otherelement/nextbotten.png';
	const bowl = '/src/public/element/otherthing/otherelement/what.png';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { text } from '@sveltejs/kit';

	let id = null; // 빵인지 쿠킨지 파인지
	let id_liquid = null; // 그 뭐냐 물인지 파워에이드인지 주슨지...등
	let main_ingredient = null; // 주재료
	let middle_result = null; //이건 빵인지 쿠키인지 파이인지 볼려고 만든거(강력분,중력분,박력분)
	let selectedtime = null; //구운시간

	let imagePath = bowl;
	let textpie = '';
	let condition = '';
	let josou = '';

	/**
	 * @type {string | null} //저도 이게 뭔지 모르겠어요 없으면 코드가 실행이 안됨;
	 */
	let result = null; // 최종결과

	// 파이
	onMount(() => {
		const queryParams = new URLSearchParams($page.url.search);
		id = queryParams.get('id');
		main_ingredient = queryParams.get('main_ingredient');
		selectedtime = queryParams.get('selectedtime');
		id_liquid = queryParams.get('id_liquid');

		if (selectedtime != '8:00') {
			if (id === 'parkbutter' || id === 'parkmargarine') {
				if (main_ingredient === 'apple') {
					josou = 'apple-pie';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulapplepie;
						textpie = '으악~! 덜익은 사과 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodapplepie;
						textpie = '우와~! 맛있는 사과 파이가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanapplepie;
						textpie = '헉!! 완전히 탄 사과 파이가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'blueberry') {
					josou = 'blueberry-pie';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulblueberrypie;
						textpie = '으악~! 덜익은 블루베리 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodblueberrypie;
						textpie = '우와~! 맛있는 블루베리 파이가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanblueberrypie;
						textpie = '헉!! 완전히 탄 블루베리 파이가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'inseon') {
					josou = 'herring-pie';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulinseonpie;
						textpie = '으악~! 덜익은 정어리 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodinseonpie;
						textpie = '우와~! 맛있는 정어리 파이가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].taninseonpie;
						textpie = '헉!! 완전히 탄 정어리 파이가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'meat') {
					josou = 'meat-pie';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulmeatpie;
						textpie = '으악~! 덜익은 고기 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodmeatpie;
						textpie = '우와~! 맛있는 고기 파이가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanmeatpie;
						textpie = '헉!! 완전히 탄 고기 파이가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'mintchoco') {
					josou = 'mincho-pie';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulmintchocopie;
						textpie = '으악~! 덜익은 민트초코 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodmintchocopie;
						textpie = '우와~! 맛있는 민트초코 파이가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanmintchocopie;
						textpie = '헉!! 완전히 탄 민트초코 파이가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'pump') {
					josou = 'pumpkin-pie';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulpumpkinpie;
						textpie = '으악~! 덜익은 호박 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodpumpkinpie;
						textpie = '우와~! 맛있는 호박 파이가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanpumpkinpie;
						textpie = '헉!! 완전히 탄 호박 파이가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'spam') {
					josou = 'spam-pie';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element1[0].dulspampie;
						textpie = '으악~! 덜익은 스팸 파이가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element1[0].goodspampie;
						textpie = '우와~! 맛있는 스팸 파이가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element1[0].tanspampie;
						textpie = '헉!! 완전히 탄 스팸 파이가 돼버렸잖아..!';
						condition = 'tan';
					}
				}
			}
		} else if (selectedtime == '8:00') {
			document.querySelector('.re').src = element1[0].burnt1;
			textpie = '헉!! 다 타버려서 석탄이 돼버렸잖아..!';
			condition = 'verytan';
		}

		// 쿠키
		if (selectedtime != '8:00') {
			if (id === 'middlebutter' || id === 'middlemargarine') {
				if (main_ingredient === 'apple') {
					josou = 'apple';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulapplecookie;
						textpie = '으악~! 덜익은 사과 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodapplecookie;
						textpie = '우와~! 맛있는 사과 쿠키가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanapplecookie;
						textpie = '헉!! 완전히 탄 사과 쿠키가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'blueberry') {
					josou = 'blueberry';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulblueberrycookie;
						textpie = '으악~! 덜익은 블루베리 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodblueberrycookie;
						textpie = '우와~! 맛있는 블루베리 쿠키가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanblueberrycookie;
						textpie = '헉!! 완전히 탄 블루베리 쿠키가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'inseon') {
					josou = 'herring';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulinseoncookie;
						textpie = '으악~! 덜익은 정어리 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodinseoncookie;
						textpie = '우와~! 맛있는 정어리 쿠키가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].taninseoncookie;
						textpie = '헉!! 완전히 탄 정어리 쿠키가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'meat') {
					josou = 'meat';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulmeatcookie;
						textpie = '으악~! 덜익은 고기 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodmeatcookie;
						textpie = '우와~! 맛있는 고기 쿠키가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanmeatcookie;
						textpie = '헉!! 완전히 탄 고기 쿠키가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'mintchoco') {
					josou = 'mincho';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulmintchococookie;
						textpie = '으악~! 덜익은 민트초코 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodmintchococookie;
						textpie = '우와~! 맛있는 민트초코 쿠키가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanmintchococookie;
						textpie = '헉!! 완전히 탄 민트초코 쿠키가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'pump') {
					josou = 'pumpkin';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulpumpkincookie;
						textpie = '으악~! 덜익은 호박 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodpumpkincookie;
						textpie = '우와~! 맛있는 호박 쿠키가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanpumpkincookie;
						textpie = '헉!! 완전히 탄 호박 쿠키가 돼버렸잖아..!';
						condition = 'tan';
					}
				} else if (main_ingredient === 'spam') {
					josou = 'spam';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element[0].dulspamcookie;
						textpie = '으악~! 덜익은 스팸 쿠키가 완성됐잖아..';
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element[0].goodspamcookie;
						textpie = '우와~! 맛있는 스팸 쿠키가 완성됐다!!';
						condition = 'good';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element[0].tanspamcookie;
						textpie = '헉!! 완전히 탄 스팸 쿠키가 돼버렸잖아..!';
						condition = 'tan';
					}
				}
			}
		} else if (selectedtime === '8:00') {
			document.querySelector('.re').src = element[0].burnt;
			textpie = '헉!! 다 타버려서 석탄이 돼버렸잖아..!';
			condition = 'verytan';
		}
		//크래시는 안된다

		// 빵

		if (selectedtime != '8:00') {
			if (id === 'strongbutter' || id === 'strongmargarine') {
				josou = 'apple-bread';
				if (main_ingredient === 'apple') {
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[0].dulapplebread;
						textpie = element2[0].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[1].goodapplebread;
						textpie = element2[1].text;
						condition = 'normal';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[2].tanapplebread;
						textpie = element2[2].text;
						condition = 'tan';
					}
				} else if (main_ingredient === 'blueberry') {
					josou = 'blueberry-bread';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[3].dulblueberrybread;
						textpie = element2[3].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[4].goodblueberrybread;
						textpie = element2[4].text;
						condition = 'normal';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[5].tanblueberrybread;
						textpie = element2[5].text;
						condition = 'tan';
					}
				} else if (main_ingredient === 'inseon') {
					josou = 'herring-bread';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[6].dulinseonbread;
						textpie = element2[6].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[7].goodinseonbread;
						textpie = element2[7].text;
						condition = 'normal';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[8].taninseonbread;
						textpie = element2[8].text;
						condition = 'tan';
					}
				} else if (main_ingredient === 'meat') {
					josou = 'meat-bread';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[9].dulmeatbread;
						textpie = element2[9].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[10].goodmeatbread;
						textpie = element2[10].text;
						condition = 'normal';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[11].tanmeatbread;
						textpie = element2[11].text;
						condition = 'tan';
					}
				} else if (main_ingredient === 'mintchoco') {
					josou = 'mincho-bread';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[12].dulmintchocobread;
						textpie = element2[12].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[13].goodmintchocobread;
						textpie = element2[13].text;
						condition = 'normal';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[14].tanmintchocobread;
						textpie = element2[14].text;
						condition = 'tan';
					}
				} else if (main_ingredient === 'pump') {
					josou = 'pumpkin-bread';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[15].dulpumpkinbread;
						textpie = element2[15].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[16].goodpumpkinbread;
						textpie = element2[16].text;
						condition = 'normal';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[17].tanpumpkinbread;
						textpie = element2[17].text;
						condition = 'tan';
					}
				} else if (main_ingredient === 'spam') {
					josou = 'spam-bread';
					if (selectedtime === '0:30') {
						document.querySelector('.re').src = element2[18].dulspambread;
						textpie = element2[18].text;
						condition = 'dul';
					} else if (selectedtime === '1:00') {
						document.querySelector('.re').src = element2[19].goodspambread;
						textpie = element2[19].text;
						condition = 'normal';
					} else if (selectedtime === '1:30') {
						document.querySelector('.re').src = element2[20].tanspambread;
						textpie = element2[20].text;
						condition = 'tan';
					}
				}
			}
		} else if (selectedtime === '8:00') {
			document.querySelector('.re').src = element2[21].burnt;
			textpie = element2[21].text;
			condition = 'verytan';
		}
	});

	function go() {
		if (condition == 'dul') {
			//커밋
			if (id == 'parkbutter' || id == 'parkmargarine') window.location.href = `/pie/dul/${josou}/1`;
			if (id == 'strongbutter' || id == 'strongmargarine')
				window.location.href = `/bread/dul/${josou}/1`;
			if (id == 'middlebutter' || id == 'middlemargarine')
				window.location.href = `/cookie/dul/${josou}-cookie/1`;
		}

		else if (condition == 'good') {
			if (id == 'parkbutter') {
				if (id_liquid == 'water') {
					window.location.href = `/${josou}/1`;
				} 
				else if (id_liquid != 'water') {
					window.location.href = `/pie/strange/${josou}/1`;
				}
			} else if (id == 'parkmargarine') {
				window.location.href = `/pie/strange/${josou}/1`;
			}
			else if (id == 'middlebutter') {
				if(id_liquid == 'water') {
					window.location.href = `/cookie/normal/${josou}-cookie/1`;
				} 
				else if(id_liquid != 'water') {
					window.location.href = `/cookie/strange/${josou}-cookie/1`;
				}
			}
			else if(id == 'middlemargarine') {
				window.location.href = `/cookie/strange/${josou}-cookie/1`;
			}
		} 

		else if (condition == 'tan') {
			if (id == 'parkbutter' || id == 'parkmargarine') window.location.href = `pie/tan/${josou}/1`;
			if (id == 'strongbutter' || id == 'strongmargarine')
				window.location.href = `/bread/tan/${josou}/1`;
			if (id == 'middlebutter' || id == 'middlemargarine')
				window.location.href = `/cookie/tan/${josou}-cookie/1`;
		} 

		else if (condition == 'normal') {
			if (id == 'strongbutter') {
				if (id_liquid == 'water') {
					window.location.href = `/bread/normal/${josou}/1`;
				} else if (id_liquid != 'water') {
					window.location.href = `/bread/strange/${josou}/1`;
				}
			} else if (id == 'strongmargarine') {
				window.location.href = `/bread/strange/${josou}/1`;
			}
		} 

		else if (condition == 'tan') {
			if (id == 'parkbutter' || id == 'parkmargarine') window.location.href = `pie/tan/${josou}/1`;
		} 

		else if (condition == 'verytan') {
			window.location.href = '/burnt';
		}
	}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
<div class="container">
	<div class="back">
		<img class="background" src={background} alt="배경" />
	</div>
	<img src={imagePath} class="re" alt="결과 이미지" />
	<div class="foot">
		<p class="text">{textpie}</p>
	</div>

	<button type="button" class="bot" onclick={go()}>
		<img src={next_button} alt="단추" class="botten" />
	</button>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #b071cd;
		overflow: hidden;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.back {
		width: 100%;
		height: 100vh;
	}
	.background {
		width: 100%;
		height: auto;
	}

	.foot {
		width: 100vw;
		height: 20vh;

		background-color: #9744bf;
		z-index: 1000;

		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		margin-top: 70vh;
	}

	.text {
		width: 100vw;
		height: 20vh;

		display: flex;
		justify-content: center;
		align-items: center;

		position: absolute;
		z-index: 1001;

		font-size: 55px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;
		text-align: center;
		border-radius: 10px;

		color: white;
		border: none;
	}

	.re {
		overflow: hidden;
		width: 100vh;
		height: 100vh;
		margin-bottom: 20vh;

		position: absolute;
		z-index: 1002;
	}

	.bot {
		width: 10vh;
		height: 10vh;

		margin-top: 35vh;
		margin-left: 80vw;

		display: flex;
		justify-content: center;

		background-color: rgba(0, 0, 0, 0);
		border: none;

		position: absolute;
		z-index: 10000;
		cursor: pointer;
	}

	.botten {
		width: 10vh;
		height: 10vh;

		position: absolute;
		z-index: 1500;
	}
</style>
