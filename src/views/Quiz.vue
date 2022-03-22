<template>
	<main class="">
		<h1 class="">Таймер запущен! 5 минут на тест.</h1>
		<p class="timer">{{ timer }} сек.</p>
		<div class="progress">
			<div class="progress-bar" :style="{ width: barWidth }"></div>
			<div class="progress-status">{{ bar }} / {{ getQuestions.length }}</div>
		</div>

		<form class="card">
			<h3>{{ getQuestions[index]["question"] }}</h3>
			<div class="img" v-if="getQuestions[index]['img']">
				<img :src="getQuestions[index]['img']" alt="" />
			</div>
			<div class="answers">
				<label
					v-for="(answer, key) in getQuestions[index]['answers']"
					:key="answer"
					:for="key"
					class="label"
				>
					<input
						type="radio"
						:value="key"
						:id="key"
						:disabled="selectedAnswer"
						@change="answered"
					/>
					{{ answer }}
				</label>
			</div>
			<div class="controls">
				<button
					v-show="selectedAnswer && !isLastQuestion"
					@click="increment"
					type="button"
				>
					Дальше
				</button>
				<router-link
					v-show="selectedAnswer && isLastQuestion"
					to="/results"
					@click="saveResults"
					class="button"
				>
					Результат
				</router-link>
			</div>
		</form>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			index: 0,
			selectedAnswer: null,
			correctAnswers: 0,
			wrongAnswers: 0,
			bar: 0,
			timer: 0,
			timeout: 300,
			interval: "",
			answers: [],
		};
	},
	computed: {
		...mapGetters(["getUserCredentials", "getQuestions"]),
		answerSelected() {
			return { focus: this.selectedAnswer };
		},
		isLastQuestion() {
			return this.index === this.getQuestions.length - 1;
		},
		barWidth() {
			return (this.bar / this.getQuestions.length) * 100 + "%";
		},
	},
	beforeMount() {
		this.getQuestions;
	},
	mounted() {
		this.setTimer();
	},
	methods: {
		answered(event) {
			this.selectedAnswer = event.target.value;
			if (
				this.selectedAnswer == this.getQuestions[this.index]["correctAnswer"]
			) {
				this.correctAnswers++;
			} else {
				this.wrongAnswers++;
			}
			this.answers.push(this.selectedAnswer);

			this.bar++;
			this.increment();
		},
		increment() {
			if (!this.isLastQuestion) {
				this.index++;
				this.selectedAnswer = null;
			}
		},
		async saveResults() {
			const user = this.getUserCredentials;
			const result = {
				correctAnswers: this.correctAnswers,
				wrongAnswers: this.getQuestions.length - this.correctAnswers,
				time: this.timer,
				username: user.username,
				age: user.age,
				sex: user.sex,
			};
			const answers = this.answers;

			this.$store.dispatch("saveResults", result);
			this.$store.dispatch("addUserAnswers", answers);
			this.$store.dispatch("addUserResult", result);
		},
		setTimer() {
			this.interval = setInterval(() => {
				if (this.bar === this.getQuestions.length) {
					clearInterval(this.interval);
				} else {
					this.timer++;
				}
			}, 1000);
		},
		gameOver() {
			this.wrongAnswers = this.getQuestions.length - this.correctAnswers;
			this.saveResults();
			this.$router.replace("/results");
		},
	},
	watch: {
		timer() {
			if (this.timer === this.timeout) {
				this.gameOver();
			}
		},
	},
};
</script>

<style lang="scss" scoped>
h1 {
	@media (max-width: $mobile) {
		font-size: 18px;
	}
}
.progress {
	position: relative;
	margin-bottom: 40px;

	@media (max-width: $mobile) {
		margin-bottom: 20px;
	}
}
.progress-bar {
	display: flex;
	height: 30px;
	transition: all 0.5s ease-in;
	text-align: center;
	background-image: repeating-linear-gradient(
		-60deg,
		#3feeeb,
		#3feeeb 10px,
		#19d8d5 10px,
		#19d8d5 20px
	);
}

.progress-status {
	position: absolute;
	border: 1px solid #19d8d5;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 50%;
	text-align: center;
	line-height: 30px;
	color: $blue;
	transform: translate(-50%, -50%);
}

p {
	margin: 0 0 20px 0;
}
.card {
	max-width: 500px;
	width: 100%;
	align-self: center;
	display: flex;
	flex-direction: column;
	gap: 20px;
	transition: $tr;
}

form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	& h3 {
		margin-bottom: 0;
		text-align: center;
		user-select: none;

		@media (max-width: $mobile) {
			text-align: left;
		}
	}
}

.answers {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	width: 400px;
	user-select: none;

	@media (max-width: $mobile) {
		width: 100%;
	}
}

.img {
	width: 200px;

	& img {
		width: 100%;
		height: auto;
	}
}

.label {
	transition: $tr;
	border: 1px solid #afafaf;
	width: 100%;
	padding: 5px;

	&:hover {
		background-color: rgb(200, 227, 252);
		cursor: pointer;
	}

	&:active {
		background-color: rgb(145, 186, 224);
	}
}
</style>
