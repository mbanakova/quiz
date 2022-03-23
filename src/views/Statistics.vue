<template>
	<main class="wrapper">
		<h2>Правильные ответы:</h2>
		<ul class="total-list">
			<div
				v-for="(index, key) in getStatistics"
				:key="key"
				class="total-list card"
			>
				<div class="top">
					<h3>{{ key + 1 }}. {{ index.question }}</h3>
					<div class="img">
						<img :src="index.img" :alt="index.correctAnswer" />
					</div>
				</div>
				<div
					v-for="(answer, key) in index.answers"
					:key="key"
					class="answer-bar"
					:class="{ correct: index.correctAnswer == answer.letter }"
				>
					<div
						class="percent-bar"
						:style="{
							width:
								(100 /
									(index.answers.a.statistics +
										index.answers.b.statistics +
										index.answers.c.statistics +
										index.answers.d.statistics)) *
									answer.statistics +
								'%',
						}"
					></div>
					<div class="z-layer">{{ answer.title.title }}</div>
					<div class="z-layer">Ответили: {{ answer.statistics }}</div>
				</div>
			</div>
		</ul>
	</main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters(["getStatistics"]),
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
	position: relative;
	padding: 5px 15px 7px;
	background-color: #ffc9ca;
	display: flex;
	justify-content: space-between;
}
.correct {
	background-color: #ccfdd0;
}
.percent-bar {
	position: absolute;
	bottom: 0;
	left: 0;
	height: 5px;
	background-image: repeating-linear-gradient(
		-60deg,
		#ca0910,
		#ca0910 10px,
		$med-accent 10px,
		$med-accent 20px
	);

	.correct & {
		background-image: repeating-linear-gradient(
			-60deg,
			#099b15,
			#099b15 10px,
			#088212 10px,
			#088212 20px
		);
	}
}

.z-layer {
	position: relative;
	z-index: 1;
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
</style>
