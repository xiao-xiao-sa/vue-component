<template>
	<div class="change-count-box">
		<span class="jian" @click='redCount'>－</span>
		<input type="text" :value="cartItem.currentCount" @change='handleChange'>
		<span class="jia" @click='addCount'>＋</span>
	</div>
</template>

<script>
	function isValueNumber(val){
		return (/^\d+$/).test(val+'');
	}
	export default {
		name:'changeCount',
		data(){return{
			cartItem:{
				sid:this.sid,
				currentCount:this.count
			}
			
		}},
		props:{
			sid:{
				type:String,
				default:''
			},
			min:{
				type:Number,
				default:-Infinity
			},
			max:{
				type:Number,
				default:Infinity
			},
			count:{
				type:Number,
				default:1
			}
		},
		methods:{
			redCount:function(){
				if(this.cartItem.currentCount<=this.min) return;
				this.cartItem.currentCount-=1;
				this.$emit('count',this.cartItem);
			},
			addCount:function(){
				if(this.cartItem.currentCount>=this.max) return;
				this.cartItem.currentCount+=1;
				this.$emit('count',this.cartItem);
			},
			updateCount:function(val){
				if(val<this.min) val=this.min;
				if(val>this.max) val=this.max;
				this.cartItem.currentCount=val;
				this.$emit('count',this.cartItem);
			},
			handleChange:function(e){
				var val = e.target.value.trim();
				var max=this.max;
				var min=this.min;
				console.log(val);
				console.log(isValueNumber(val))
				if(isValueNumber(val)){
					val = Number(val);
					this.cartItem.currentCount = val;
					if(val>max){
						this.cartItem.currentCount=max;
					}else if(val<min){
						this.cartItem.currentCount=min;
					}
				}else{
					e.target.value=this.cartItem.currentCount;
				}
			}
		},
		mounted:function(){
			this.updateCount(this.count);
		}
	}
</script>
	
<style>
	.change-count-box{
		width:100px;
		height: 30px;
		border:1px solid #efefef;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between; 
		overflow: hidden;
	}
	.change-count-box span{
		display: inline-block;
		width: 30px;
		height: 30px;
		background-color: #efefef;
		font-size: 20px;
		text-align: center;
		line-height: 30px;
		cursor: pointer;
	}
	.change-count-box input{
		border:none;
		outline: none;
		text-align: center;
		width:40px;
		height: 30px; 
	}
</style>