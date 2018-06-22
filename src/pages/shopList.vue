<template>
	<div class="main">
		<div class="shop-list" v-if="shopList.length">
			<!-- 使用v-for时，加个key，否则会出现警告 -->
			<shop-item class='shop-item' v-for="(item,index) in shopList" :key="index" :sid='item.sid' :imgUrl='item.imgUrl' :title='item.title' :price='item.price' :color='item.color'></shop-item>
		</div>
		<div v-else>没有商品</div>
		<car></car>
	</div>
</template>

<script>
	import shopItem from '../components/shopItem.vue';
	import car from '../components/car.vue';
	import shopData from '../assets/js/product.js';
	export default {
		name:'shopList',
		data(){return{
			shopList:[]
		}},
		created:function(){
			this.shopList=shopData;
		},
		components:{
			'shop-item':shopItem,
			'car':car
		}
	}
</script>

<style>
	.shop-list{
		width: 1200px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.shop-item{
		margin-right: 20px;
		margin-top:20px;
		background-color: #efefef;
	}
</style>