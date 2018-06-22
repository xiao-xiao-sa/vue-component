<template>
	<div class="main">
		<div class="top">
			<div class="shop-img left">
				<img :src="shopInfo.imgUrl" :alt="shopInfo.title">
			</div>
			<div class="right">
				<h3 class="shop-title">{{shopInfo.title}}</h3>
				<p class="shop-color">{{shopInfo.color}}</p>
				<p class="shop-price">&yen;{{shopInfo.price | priceType}}</p>
				<a href="" @click.prevent='handleAddCart'>加入购物车</a>
			</div>
		</div>
		<car></car>
	</div>
</template>

<script>
	import car from '../components/car.vue';
	import shopData from '../assets/js/product.js';
	export default {
		name:'shopDetail',
		data(){return {
			shopInfo:{}
		}},
		created:function(){
			var sid=this.$route.params.sid;
			var shopInfo=shopData.find(function(item){
				if(item.sid==sid){
					return item;
				}
			});
			this.shopInfo=shopInfo;
		},
		methods:{
			handleAddCart:function(){
				this.$store.dispatch('addCart',this.shopInfo.sid);
			}
		},
		components:{
			'car':car
		}
	}
</script>

<style>
	.top{
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		box-sizing: border-box;
		padding:20px 90px;
	}
	.left{
		width: 380px;
		height: 300px;
		border:1px solid green;
		background-color: green;
	}
	.right{
		width: 560px;
		height: 300px;
		text-align: left;
		border:1px solid red;
		padding:20px;
		box-sizing: border-box;
	}
	.bottom{
		width: 1000px;
		box-sizing: border-box;
		border:1px solid gray;
		margin:50px auto;
		padding:20px;
	}
</style>

