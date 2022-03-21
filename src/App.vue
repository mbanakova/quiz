<template>
	<TheNav />
	<router-view />
</template>
<script>
import TheNav from "@/components/TheNav";

export default {
	components: {
		TheNav,
	},
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
// $dark: #030105;

*,
*::before,
*::after {
	box-sizing: border-box;
}

html {
	font-family: "Roboto", sans-serif;
}

body {
	margin: 0;
	overflow-x: hidden;
	font-size: 16px;
	line-height: 20px;
	overflow-y: scroll;
}

main {
	max-width: 1240px;
	width: 100%;
	padding: 40px 20px 20px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
}
.route-enter-from {
	opacity: 0;
	transform: translateY(30px);
}

.route-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

.route-enter-active {
	transition: all 0.3s ease-out;
}

.route-leave-active {
	transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
	opacity: 1;
	transform: translateY(0);
}

#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	overflow-x: hidden;
}

.wrapper {
	max-width: 1440px;
	width: 100%;
	padding: 30px 20px 50px;
	margin: 0 auto;

	@media (max-width: $tablet) {
		padding-top: 90px;
	}
}

.card {
	padding: 20px;
	border-radius: 6px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
	background-color: $white;
}

h1 {
	margin: 0 auto 15px;
	font-size: 26px;
	line-height: 110%;
	align-self: center;

	@media (max-width: $tablet) {
		font-size: 28px;
	}

	@media (max-width: $mobile) {
		font-size: 26px;
	}
}

h2 {
	margin: 0 auto 15px;
	font-size: 24px;
	line-height: 110%;

	@media (max-width: $tablet) {
		font-size: 24px;
	}

	@media (max-width: $mobile) {
		font-size: 22px;
	}
}

h3 {
	margin: 0 auto 15px;
	font-size: 22px;
	line-height: 110%;
	@media (max-width: $tablet) {
		font-size: 20px;
	}

	@media (max-width: $mobile) {
		font-size: 18px;
	}
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

input,
textarea {
	display: block;
	width: 100%;
	border: 1px solid #ccc;
	font-family: "Roboto", sans-serif;
	padding: 10px;
	transition: $tr;
}

input:focus {
	background-color: $light;
	outline: none;
	border-color: $bright;
}

input[type="radio"] {
	display: inline;
	width: auto;
	border: none;
}

.invalid label {
	color: $med-accent;
}

.invalid input {
	border: 1px solid $med-accent;
}

button,
.button {
	padding: 10px 25px;
	color: white;
	background-color: $blue;
	border: none;
	border-radius: 4px;
	text-decoration: none;
	font-family: "Roboto", sans-serif;
	cursor: pointer;
	transition: $tr;

	&:hover {
		background-color: $bright;
	}

	&:active {
		background-color: $navy;
	}
}
</style>
