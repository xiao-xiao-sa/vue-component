<template>
	<div class="shop-car">
		<router-link to='/shopcart'>购物车
			<span class="shop-car-num" v-if='cartList.length'>{{cartList.length}}</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		computed:{
			cartList(){
				return this.$store.state.cartList;
			}
		}
	}
</script>

<style>
	.shop-car{
		position: fixed;
		top:20px;
		right: 20px;
	}
	.shop-car-num{
		color: red;
	}
</style>