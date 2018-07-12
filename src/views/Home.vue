<template>
    <main class="wrapper"/>
</template>

<script>
export default {
    name: 'home'
}
</script>

<style lang="sass">

.wrapper
	max-width: 1280px
	min-height: 100vh
	margin: auto
	display: grid
	grid-template-columns: repeat(10, 1fr)
	grid-template-rows: repeat(5, auto)
	grid-gap: 1rem
	padding: 0 1rem

</style>
