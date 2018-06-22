<template>
	<div class="main">
		<div><h3>购物清单</h3></div>
		<div class="cart-list">
			<div v-for='item in cartListData' class="cart-item" >
				<img :src="item.imgUrl" alt="" class="cart-img">
				<span class="cart-title">{{item.title}}</span>
				<span class="cart-price">&yen;{{item.price | priceType}}</span>
				<change-count v-model="item.count" class='cart-count' :min='1' :max='100' :sid='item.sid' @count='updateCount'></change-count>
				<button class="cart-del" @click='delCartShop(item.sid)'>删除</button>
			</div>
		</div>
		<div>合计：&yen;{{totalFee | priceType}}</div>
	</div>
</template>

<script>
	import shopData from '../assets/js/product.js';
	import changeCount from '../components/changeCount.vue';
	export default {
		name:'shopCart',
		data(){return{
		}},
		created:function(){

		},
		components:{
			'change-count':changeCount
		},
		computed:{
			cartListData(){
				var cartList=this.$store.state.cartList;
				var cartListData=[];
				for(var i=0,l1=cartList.length;i<l1;i++){
					for(var j=0,l2=shopData.length;j<l2;j++){
						if(cartList[i].sid==shopData[j].sid){
							shopData[j].count=cartList[i].count;
							cartListData.push(shopData[j]);
						}
					}
				}
				return cartListData;
			},
			totalFee(){
				var cartList=this.$store.state.cartList;
				var totalFee=0;
				for(var i=0,l1=cartList.length;i<l1;i++){
					for(var j=0,l2=shopData.length;j<l2;j++){
						if(cartList[i].sid==shopData[j].sid){
							totalFee +=parseFloat(shopData[j].price*cartList[i].count);
						}
					}
				}
				return totalFee;
			}
		},
		methods:{
			delCartShop:function(sid){
				console.log(sid);
				this.$store.dispatch('delCart',sid);
			},
			updateCount:function(data){
				console.log(data.sid,data.currentCount)
				this.$store.dispatch('updateCart',data);
			}
		}
	}
</script>

<style>
	.cart-item{
		border-bottom: 1px solid #efefef;
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		vertical-align: middle;
		line-height: 100px;
	}
	.cart-img{
		width: 100px;
		height: 100px;
		margin:0 50px;
	}
	.cart-title{
		width:300px;
		text-align: left;
		margin:0 50px;
	}
	.cart-price{
		width: 100px;
		text-align: left;
		margin:0 50px;
	}
	.cart-count{
		margin-top:35px;
	}
	.cart-del{
		width: 50px;
		height: 30px;
		margin-top:35px;
		margin-left: 50px;
	}
</style>