<template>
	<main class="wrapper">
		<h2>Правильные ответы:</h2>
		<ul class="total-list">
			<li v-for="(index, key) in getStatistics" :key="key">
				<ul class="total-list card">
					<div class="top">
						<h3>{{ key + 1 }}. {{ index.question }}</h3>
						<div class="img">
							<img :src="index.img" :alt="index.correctAnswer" />
						</div>
					</div>
					<li
						v-for="(answer, key) in index.answers"
						:key="key"
						class="answer-bar"
						:class="{ correct: index.correctAnswer == answer.letter }"
					>
						<div>{{ answer.title }}</div>
						<div>Ответов: {{ answer.statistics }}</div>
					</li>
				</ul>
			</li>
		</ul>
	</main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["getStatistics"]),
		// isCorrect() {
		// 	return this.getStatistics.stats.question.correctAnswer == "";
		// },
	},
};
</script>

<style lang="scss" scoped>
.total-list {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.answer-bar {
	background-image: repeating-linear-gradient(
		-60deg,
		#ffe9f9,
		#ffe9f9 10px,
		$lady 10px,
		$lady 20px
	);
	padding: 2px 10px;
	display: flex;
	justify-content: space-between;
}

.top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 50px;

	& h3 {
		text-align: left;
		margin: 0;
	}

	.img {
		max-width: 100px;
	}
}

.correct {
	background-image: repeating-linear-gradient(
		-60deg,
		#8affbf,
		#8affbf 10px,
		#50f299 10px,
		#50f299 20px
	);
}
</style>
