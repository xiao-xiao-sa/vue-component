<template>
	<div class="shop-item" :class='{active:isActive}' @mouseenter='handleShowActive' @mouseleave='handleCloseActive'>
		<router-link :to="'/shopDetail/'+sid">
			<div class="shop-img">
				<img :src="imgUrl" :alt="title">
			</div>
			<h3 class="shop-title">{{title}}</h3>
			<p class="shop-color">{{color}}</p>
			<p class="shop-price">&yen;{{price | priceType}}</p>
			<a href="" @click.prevent='handleAddCart'>加入购物车</a>
		</router-link>	
	</div>
</template>
<script>
	export default {
	  name: 'shopItem',
	  data () {
	    return {
	    	isActive:false
	    }
	  },
	  props:{
	  	sid:{
	  		type:String,
	  		default:''
	  	},
	  	imgUrl:{
	  		type:String,
	  		default:require('../assets/logo.png')
	  	},
	  	title:{
	  		type:String,
	  		default:'这是商品的标题'
	  	},
	  	price:{
	  		type:Number,
	  		default:0.00
	  	},
	  	color:{
	  		type:String,
	  		default:''
	  	}
	  },
	  methods:{
	  	handleShowActive:function(){
	  		this.isActive=true;
	  	},
	  	handleCloseActive:function(){
	  		this.isActive=false;
	  	},
	  	handleAddCart:function(){
			this.$store.dispatch('addCart',this.sid);
		}
	  },
	  filters:{

	  }
	}
</script>

<style>
	.shop-item{
		width: 280px;
		height: 400px;
		border-radius: 5px;
		overflow: hidden;
		box-sizing: border-box;
		padding:10px 0;
	}
	.shop-item.active{
		box-shadow: 0 0 10px #a0a0a0;
	}
</style>