<template>
	<div class="nav">
		<div class="nav_part" v-for="i in 4" @click="selectedFunction = i - 1">
			<div>{{ selectedFunctionList[lang][i - 1] }}</div>
		</div>
	</div>
</template>

<script>
export default {

	props: {
		language: {
			type: String,
			required: true
		}
	},

	data() {
		return {

			// Constant
			selectedFunctionList: {
				en: [
					"Game page",
					"Join a room",
					"Blank",
					"Account",
				],
				zh: [
					"主页",
					"加入房间",
					"空白页",
					"账号页",
				],
			},

			// Variable

			lang: this.language,

			// selectedFunction == 0 means: Game page;
			// selectedFunction == 1 means: Join a room;
			// selectedFunction == 2 means: Blank;
			// selectedFunction == 3 means: Settings;
			selectedFunction: 0,
		}
	},

	watch: {
		selectedFunction() {
			this.$emit('pageChanged', this.selectedFunction);
		}
	},
}
</script>

<style>
.nav {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 0;
	user-select: none;
}

.nav_part {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 6rem;
	height: 2rem;
	font-size: 1rem;
	margin: 2rem 0.4rem;
	border-radius: 0.4rem;
	transition-property: background-color, color;
	transition-duration: 0.2s, 0.2s;
}

.nav_part:hover {
	background-color: #404040;
	color: #f0f0f0;
}

.nav_part:active {
	background-color: #606060;
}
</style>