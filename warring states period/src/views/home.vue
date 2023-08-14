<template>
	<h1>{{ text[lang].title }}</h1>
	<hr class="split" />
	<p>{{ text[lang].text }}</p>
</template>

<script>
export default {

	props: {
		language: {
			type: String,
			required: true,
		}
	},

	data() {
		return {
			text: {
				en: {
					title: "Welcome to Warring states period. ",
					text: "The game is developing. ",
				},
				zh: {
					title: "欢迎来到战国时代游戏。",
					text: "游戏正在开发中。",
				}
			},
			lang: this.language,

		}
	},

}
</script>

<style>
h1 {
	font-size: 2.4rem;
	font-weight: bold;
	user-select: none;
}

p {
	font-size: 1.6rem;
	user-select: none;
}

.split {
	margin: 1rem 0;
}
</style>