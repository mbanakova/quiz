<template>
	<main>
		<div class="my-result" v-if="getUserResult">
			<h3>Твой последний результат:</h3>
			<p>{{ getUserResult.correctAnswers }} правильных ответа</p>
			<p>{{ getUserResult.wrongAnswers }} неправильных ответа</p>
			<p>{{ getUserResult.time }} секунд</p>
		</div>
		<RatingList />
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
};
</script>

<style lang="scss" scoped>
.my-result {
	display: flex;
	gap: 20px;
	border: 2px dashed #d40ff3;
	padding: 0 20px;
	margin-bottom: 20px;
}
</style>
