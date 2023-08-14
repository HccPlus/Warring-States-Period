<template>
	<div>
		<h1>{{ text[lang].title }}</h1>
	</div>
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
			// Language pack
			text: {
				en: {
					title: 'Join a room',
				},
				zh: {
					title: '加入房间',
				}
			},
			lang: this.language,
		}
	},

	mounted() {
		// 暂时没有内容
	},

}
</script>

<style></style>