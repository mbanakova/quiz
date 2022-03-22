<template>
	<main>
		<div class="my-result" v-if="getUserResult">
			<h3>Итог:</h3>
			<p>{{ getUserResult.correctAnswers }} правильных ответа,</p>
			<p>{{ getUserResult.wrongAnswers }} неправильных ответа,</p>
			<p>{{ getUserResult.time }} секунд</p>
		</div>
		<RatingList />
		<router-link to="/statistics" @click="loadStatistics" class="button"
			>смотреть ответы</router-link
		>
	</main>
</template>

<script>
import RatingList from "@/components/RatingList";
import { mapGetters } from "vuex";

export default {
	components: { RatingList },
	computed: {
		...mapGetters(["getUserResult"]),
	},
	methods: {
		async loadStatistics() {
			await this.$store.dispatch("combineStatistics");
		},
	},
};
</script>

<style lang="scss" scoped>
.my-result {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 20px;
	border: 3px dashed #4c709f;
	padding: 10px 20px;
	margin-bottom: 20px;
	@media (max-width: $mobile) {
		gap: 10px;
		padding: 10px;
	}
	& h3,
	& p {
		margin: 0;

		@media (max-width: $mobile) {
			font-size: 12px;
			line-height: 15px;
		}
	}
}

.button {
	align-self: flex-end;
}
</style>
