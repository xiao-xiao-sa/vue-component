<template>
	<div>
		<h1>{{content}}</h1>
	</div>
</template>

<script>
	export default {
		name:'treeView',
		computed:{
			content:function(){
				return this.$store.state.menuName;
			}
		}
	}

</script>