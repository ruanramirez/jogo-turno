new Vue({
	el: '#app',
	data: {
		running: false,
		playerLife: 100,
		monsterLife: 100,
	},
	computed: {
		hasResult() {
			return this.playerLife == 0 || this.monsterLife == 0
		}
	},
	methods: {
		startGame() {
			this.running = true
			this.playerLife = 100
			this.monsterLife = 100
		},
		attack(special) {
			this.hurt('playerLife', 7, 12, false)
			this.hurt('monsterLife', 5, 10, special)
		},
		hurt(prop, min, max, special) {
			const plus = special ? 5 : 0
			const hurt = this.getRandom(min + plus, max + plus)
			this[prop] = Math.max(this.playerLife - hurt, 0)
		},
		getRandom(min, max) {
			const value = Math.random() * (max - min) + min
			return Math.round(value)
		}
	},
	watch: {
		hasResult(value) {
			if (value) this.running = false
		}
	},
});
