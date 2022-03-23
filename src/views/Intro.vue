<template>
	<main>
		<div class="card">
			<h2>Привет, {{ getUserName }}!</h2>
			<p>Считаешь себя человеком с широким кругозором? Давай проверим!</p>
			<p>
				Впереди тест из 20&nbsp;вопросов на&nbsp;самые разнообразные темы —
				окружающий мир, история, быт, математика, география, еда, культура,
				животные и&nbsp;другие.
			</p>
			<p>
				Важно не только ответить правильно, но и&nbsp;справиться за
				5&nbsp;минут.
			</p>
			<p>В конце ты&nbsp;увидишь своё место в&nbsp;рейтинге.</p>
			<router-link to="/quiz" class="button">Прекрасно</router-link>
			<router-link to="/quiz" @click="beketov" class="beketov"
				>Я Бекетов А. и мне мало 5 минут...</router-link
			>
		</div>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["getUserName"]),
		// timeout() {
		// 	return 300;
		// },
	},
	methods: {
		beketov() {
			this.$store.commit("timeout", 3000);
		},
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

.beketov {
	align-self: flex-end;
	color: $bright;
	transition: $tr;

	&:hover {
		color: $blue;
	}

	&:active {
		color: $grey;
	}
}
</style>
