<template>
	<main>
		<div class="card">
			<h2>Привет, {{ getUserName }}!</h2>
			<p>Считаешь себя человеком с широким кругозором? Давай проверим!</p>
			<p>
				Впереди тест из 20 вопросов на самые разнообразные темы — окружающий
				мир, история, быт, математика, география, еда, культура, животные и
				другие.
			</p>
			<p>
				Важно не только ответить правильно, но и сделать это быстрее других.
			</p>
			<p>В конце ты увидишь своё место в рейтинге.</p>
			<router-link to="/quiz" class="button">Прекрасно</router-link>
		</div>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getUserName"]),
	},
};
</script>

<style lang="scss" scoped>
.card {
	max-width: 500px;
	width: 100%;
	align-self: center;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

h2 {
	margin-bottom: 0;
}
p {
	margin: 0;

	@media (max-width: $mobile) {
		font-size: 15px;
		line-height: 18px;
	}
}
.button {
	align-self: flex-end;
}
</style>
