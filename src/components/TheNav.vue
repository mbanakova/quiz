<template>
	<nav>
		<router-link to="/">Start</router-link>
		<router-link to="/intro">Intro</router-link>
		<router-link to="/quiz">Quiz</router-link>
		<router-link to="/results">Results</router-link>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	justify-content: center;
	gap: 30px;
	padding: 10px;
	background-color: $blue;
	color: $white;
	@media (max-width: $mobile) {
		gap: 10px;
	}
	& a {
		color: inherit;
		text-decoration: none;
		padding: 5px 20px;

		@media (max-width: $mobile) {
			padding: 5px 15px;
		}

		&.router-link-active {
			border: 1px solid $bright;
		}
	}
}
</style>
