<template>
 <div class="title neon">
    <h1>{{ msg }}</h1>
 </div>
</template>

<script setup>
import { defineProps} from 'vue'

defineProps({
  msg: String
})

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Dawning+of+a+New+Day|Sniglet:800|Monoton|Fredoka+One|Lobster);
.neon {
	font: 100 64px/64px 'Dawning of a New Day', cursive;
	color:purple;
	text-transform: capitalize;
	text-shadow: 0 -1px 0 #f00,
		0 2px 0 #f00,
		0 4px 0 #60f,
		-2px -2px 15px #f06,
		2px -2px 15px #f06,
		-2px 2px 15px #f06,
		2px 2px 15px #f06;
}
</style>
