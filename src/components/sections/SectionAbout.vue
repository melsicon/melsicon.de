<template>
    <h3>About</h3>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="sass">

.services
	grid-column: 1 / -1
	display: grid
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
	grid-auto-rows: repeat(4, auto)
	grid-gap: 1rem
	margin: 1.5rem 0

.service
	background: $color-primary
	height: 80px

.clients
	display: grid
	grid-template-columns: 1fr 1fr
	grid-gap: 1rem
	margin: 2rem 0

	.client
		background: $color-secondary
		height: 80px
</style>
