<template>
	<h1>Общий рейтинг:</h1>
	<table>
		<thead>
			<tr>
				<th>Участник:</th>
				<th @click="sort('best')" :class="{ selected: sorting === 'best' }">
					Правильных ответов:
				</th>
				<th @click="sort('worst')" :class="{ selected: sorting === 'worst' }">
					Неправильных ответов:
				</th>
				<th @click="sort('fast')" :class="{ selected: sorting === 'fast' }">
					Время:
				</th>
				<th @click="sort('young')" :class="{ selected: sorting === 'young' }">
					Возраст:
				</th>
			</tr>
		</thead>
		<tbody>
			<tr
				class="card"
				v-for="(user, key) in displayedUsers"
				:key="key"
				:class="[
					{ lady: user.sex == 'female' },
					{ me: user.username == getUserName },
				]"
			>
				<td>{{ user.username }}</td>
				<td>
					{{ user.correctAnswers }} / {{ getQuestionsLength }} (
					{{
						((user.correctAnswers / getQuestionsLength) * 100).toFixed(0) + "%"
					}})
				</td>
				<td>
					{{ user.wrongAnswers }} /
					{{
						((user.wrongAnswers / getQuestionsLength) * 100).toFixed(0) + "%"
					}}
				</td>
				<td>{{ user.time }} cек.</td>
				<td>{{ user.age }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	data() {
		return {
			sorting: "best",
			rating: [],
		};
	},
	computed: {
		...mapGetters(["getQuestionsLength", "getUserName"]),
		displayedUsers() {
			return this.rating.slice().sort((u1, u2) => {
				if (this.sorting === "worst" && u1.correctAnswers > u2.correctAnswers) {
					return 1;
				} else if (this.sorting === "worst") {
					return -1;
				} else if (
					this.sorting === "best" &&
					u1.correctAnswers > u2.correctAnswers
				) {
					return -1;
				} else if (this.sorting === "fast" && u1.time < u2.time) {
					return -1;
				} else if (this.sorting === "young" && u1.age < u2.age) {
					return -1;
				} else {
					return 1;
				}
			});
		},
	},
	created() {
		this.fetchRating();
	},
	methods: {
		sort(mode) {
			this.sorting = mode;
		},

		async fetchRating() {
			try {
				await this.$store.dispatch("fetchRating");
			} catch (error) {
				console.log(error);
			}
			console.log("action fetchRating");
			this.rating = this.$store.getters.getRating;
			console.log("getter getRating");
		},
	},
};
</script>

<style lang="scss" scoped>
.top-users {
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px;
}

table {
	text-align: center;
	border-collapse: collapse;

	& td,
	& th {
		padding: 10px;
		border-spacing: unset;

		@media (max-width: $mobile) {
			padding: 5px;
		}
	}

	@media (max-width: $mobile) {
		font-size: 10px;
		line-height: 12px;
	}
}
thead {
	background-color: $navy;
	color: $white;
}
th {
	border: 1px solid $dark;
	cursor: pointer;
}

tr.card {
	background-color: $man;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	&.lady {
		background-color: $lady;
	}

	&.me {
		border: 4px dashed #4c709f;
		@media (max-width: $mobile) {
			border-width: 2px;
		}
	}

	@media (max-width: $mobile) {
		padding: 5px;
	}
}

.selected {
	background-color: $bright;
	color: $white;
}
</style>
