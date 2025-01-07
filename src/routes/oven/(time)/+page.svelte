<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const ASSETS_PREFIX = '/src/public/element/otherthing/otherelement';
	
	import background from "/src/public/element/otherthing/otherelement/background.png";
	import next from '/src/public/element/otherthing/otherelement/nextbotten.png';
	import chep from '/src/public/element/otherthing/otherelement/파이굽기 간판.png';
	import oven from '/src/public/element/otherthing/otherelement/oven.png';
	import danger from '/src/public/element/otherthing/otherelement/choseoven.png';
	
	const ovenImages = {
		'thr': `${ASSETS_PREFIX}/oven1.png`,
		'one': `${ASSETS_PREFIX}/oven2.png`,
		'onethr': `${ASSETS_PREFIX}/oven3.png`,
		'eig': `${ASSETS_PREFIX}/oven4.png`
	};
	
	const timeMapping = {
		'thr': '0:30',
		'one': '1:00',
		'onethr': '1:30',
		'eig': '8:00'
	};
	
	let selectedtime: any = '';
	let showWarning = false;
	let id: any | null = null;
	let id_liquid: any | null = null;
	let main_ingredient: any | null = null;
	
	function select(timeId: string) {
		console.log('Selected time: ', timeId);
		selectedtime = timeId;
	
		const ovenElement = document.querySelector('.oven');
		if (ovenElement instanceof HTMLImageElement && ovenImages[timeId]) {
			ovenElement.src = ovenImages[timeId];
		}
	}
	
	onMount(() => {
		const queryParams = new URLSearchParams($page.url.search);
		id = queryParams.get('id');
		id_liquid = queryParams.get('id_liquid');
		main_ingredient = queryParams.get('main_ingredient');
		sessionStorage.setItem('currentURL', window.location.href);
	});
	
	async function showDan() {
		if (selectedtime && timeMapping[selectedtime]) {
			await goto(
				`result?id=${id}&id_liquid=${id_liquid}&main_ingredient=${main_ingredient}&selectedtime=${timeMapping[selectedtime]}`
			);
		} else {
			showWarning = true;
			setTimeout(() => {
				showWarning = false;
			}, 3000);
		}
	}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">

<div class="container">
	<div class="back">
		<img src={background} alt="배경" />
	</div>

	<button class="n" onclick={showDan}>
		<img src={next} alt="다음" />
	</button>

	<div class="c">
		<img src={chep} alt="단계" /> 
	</div> 

	<div class="foot">
		<button
			id="thr"
			onclick={() => select('thr')}
			class:active={selectedtime === 'thr'}
			class="thr"
			type="button">0:30</button
		>
		<button
			id="one"
			onclick={() => select('one')}
			class:active={selectedtime === 'one'}
			class="one"
			type="button">1:00</button
		>
		<button
			id="onethr"
			onclick={() => select('onethr')}
			class:active={selectedtime === 'onethr'}
			class="onethr"
			type="button">1:30</button
		>
		<button
			id="eig"
			onclick={() => select('eig')}
			class:active={selectedtime === 'eig'}
			class="eig"
			type="button">8:00</button
		>
	</div>

	<div class="dan" class:show={showWarning}>
		<img src={danger} alt="경고" />
	</div>

	<div class="o">
		<img src={oven} alt="오븐" id="oven" class="oven" />
	</div>
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		position: relative;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		background-color: #b071cd;
		overflow: hidden;
	}

	.back {
		width: 90%;
		height: 80%;
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 5%;
	}

	.back img {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.foot {
		width: 100vw;
		height: 20vh;
		background-color: #9744bf;
		z-index: 1000;
		top: 77vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: 10%;
		gap: 10%;
	}

	.thr,
	.one,
	.onethr,
	.eig {
		width: 25vh;
		height: 10vh;
		background-color: #ffd400;
		font-size: 55px;
		font-family: 'Jua', sans-serif;
		font-style: normal;
		line-height: 1.6;
		text-align: center;
		border-radius: 10px;
		text-shadow: 1px 1px 1px #e89d3a;
		color: #ff7f00;
		text-shadow: 5px 2px 3px #fdfecf;
		border: none;
		z-index: 3;
		background-image: linear-gradient(
			to top left,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2) 30%,
			rgba(0, 0, 0, 0)
		);
	}

	.one:hover,
	.thr:hover,
	.onethr:hover,
	.eig:hover,
	.one:active,
	.thr:active,
	.onethr:active,
	.eig:active {
		background-color: #fdfecf;
		border: 4px solid yellow;
	}

	.active {
		background-color: #fdfecf !important;
		border: 4px solid yellow !important;
	}

	.n {
		position: absolute;
		right: 4%;
		top: 65%;
		transform: translateY(-50%);
		background-color: #b071cd;
		border: none;
		z-index: 100;
	}

	.o {
		position: absolute;
		width: 100%;
		height: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.oven {
        width: 100vw;
        height: 150vh;
    }

	.c {
		position: absolute;
		left: 2.5%;
		top: 4%;
	}

	.dan {
		position: absolute;
		top: 20%;
		left: 32.5%;
		z-index: -1;
		cursor: pointer;
		transition:
			z-index 0.5s,
			opacity 0.5s;
	}

	.show {
		z-index: 2000;
		opacity: 1;
	}
</style>
