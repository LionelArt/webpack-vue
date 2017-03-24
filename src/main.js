import Vue from 'vue';
import Vuex from 'vuex';
import App from './app.vue';

Vue.use(Vuex);
// new Vue({
// 	el: '#vue-app',
// 	render: h => h(App)
// });
const store = new Vuex.Store({
	state: {
		total: 0
	},
	mutations: {
		increment: (state, counter) => state.total += counter
	}
});

let Child = {
	props: {
		myMessage: String,
		myCounter: Number
	},
	template:
		`<div class="son-component">
			<h1>{{myMessage}}</h1>
			<span>{{counter}}: </span>
			<button v-on:click="increment">
				<span v-if="myCounter > 0">+</span>
				<span v-if="myCounter < 0">-</span>
			</button>
		</div>`,
	data: function() {
		return {
			counter: 0
		};
	},
	methods: {
		increment: function() {
			this.counter += this.myCounter;
			this.$store.commit('increment', this.myCounter);
		}
	}
};

window.vueApp = new Vue({
	el: '#vue-app',
	store,
	components: {
		// <my-component>将只在父模板可用
		'my-component': Child
	},
	computed: {
		total: () => store.state.total
	},
	data: {
		message: 'Son Component'
	},
	methods: {
		clickEvent: () => console.log('Click事件')
	}
});