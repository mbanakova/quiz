<template>
	<main class="start">
		<div class="card">
			<h1>Данные для рейтинга:</h1>
			<form @submit.prevent="saveCredentials" class="credentials">
				<div class="form-group" :class="{ invalid: !username.isValid }">
					<input
						type="text"
						id="name"
						placeholder="Имя Фамилия"
						v-model.trim="username.val"
						@blur="clearValidity('username')"
					/>
				</div>
				<div class="form-group" :class="{ invalid: !age.isValid }">
					<input
						type="number"
						id="age"
						placeholder="Возраст"
						v-model.number="age.val"
						@blur="clearValidity('age')"
					/>
				</div>
				<div class="form-group">
					<input
						type="radio"
						name="sex"
						id="male"
						value="male"
						checked
						v-model="sex.val"
					/>
					<label for="male"> Мужчина </label>

					<input
						type="radio"
						name="sex"
						id="female"
						value="female"
						v-model="sex.val"
					/><label for="female"> Женщина</label>
				</div>
				<p v-if="!formIsValid">Все поля обязательны. Возраст от 3 до 99 лет.</p>
				<button class="button">Поехали!</button>
			</form>
		</div>
	</main>
</template>

<script>
export default {
	name: "Start",
	components: {},
	data() {
		return {
			username: {
				val: "",
				isValid: true,
			},
			age: {
				val: null,
				isValid: true,
			},
			sex: {
				val: "male",
				isValid: true,
			},
			formIsValid: true,
		};
	},
	methods: {
		validateCredentials() {
			this.formIsValid = true;
			if (this.username.val === "") {
				this.username.isValid = false;
				this.formIsValid = false;
			}
			if (!this.age.val || this.age.val < 3 || this.age.val > 99) {
				this.age.isValid = false;
				this.formIsValid = false;
			}
		},
		clearValidity(input) {
			[input].isValid = true;
		},
		async saveCredentials() {
			this.validateCredentials();
			if (!this.formIsValid) {
				return;
			}
			const userCredentials = {
				username: this.username.val,
				age: this.age.val,
				sex: this.sex.val,
			};

			await this.$store.dispatch("saveCredentials", userCredentials);

			this.$router.replace("/intro");
		},
	},
};
</script>
<style lang="scss" scoped>
.card {
	max-width: 500px;
	width: 100%;
	align-self: center;
}

.credentials {
	align-self: center;
	display: flex;
	flex-direction: column;
	gap: 20px;

	& .button {
		align-self: flex-end;
	}
}
.invalid label {
	color: $med-accent;
}

.invalid input,
.invalid textarea {
	border: 1px solid $med-accent;
}

label {
	padding: 5px 20px;
	margin-right: 20px;
	cursor: pointer;
}

input[type="radio"] {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	position: absolute;
	padding: 0;
	margin: 0;
}
#male:checked ~ label[for="male"] {
	background-color: $man;
}

#female:checked ~ label[for="female"] {
	background-color: $lady;
}
</style>
