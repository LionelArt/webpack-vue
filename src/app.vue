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
	height: 100vh;
	background-color: #EEE;
}
</style>