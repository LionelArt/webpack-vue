<template>
	<div id="vue-app">
		<h1>{{title}}</h1>
		<ul>
			<li v-for="n in 5">{{n}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			title: 'Vue App'
		}
	}
}
</script>

<style>
body {
	margin: 0;
}

* {
	margin: 0;
}

#vue-app {
	text-align: center;
	height: 100vh;
	background-color: #EEE;
}
#vue-app h1 {
	line-height: 50px;
}
#vue-app button {
	line-height: 20px;
}

.son-component {
	line-height: 26px;
	vertical-align: top;
}
.son-component span {
	display: inline-block;
	vertical-align: top;
}
.son-component button {
	vertical-align: top;
}
</style>