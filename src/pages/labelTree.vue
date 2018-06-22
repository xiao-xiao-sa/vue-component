<template>
	<div class="main-tree">
		<div class="left" :style="{'height':fullHeight+'px'}">
			<ul v-for="labelItem in labelList" >
				<tree :label='labelItem'></tree>
			</ul>
		</div>
		<div class="right">
			<tree-view></tree-view>
		</div>
	</div>
</template>

<script>
	import tree from '../components/tree.vue';
	import treeView from '../components/treeView.vue';
	export default {
		name:'labelTree',
		data(){return{
			labelList: [
			 {
			 'id': '1',
			 'menuName': '基础管理',
			 'menuCode': '10',
			 'children': [
				 {
				 'menuName': '用户管理',
				 'menuCode': '11'
				 },
				 {
					 'menuName': '角色管理',
					 'menuCode': '12',
					 'children': [
						 {
						 'menuName': '管理员',
						 'menuCode': '121'
						 },
						 {
						 'menuName': 'CEO',
						 'menuCode': '122'
						 },
						 {
						 'menuName': 'CFO',
						 'menuCode': '123'
						 },
						 {
						 'menuName': 'COO',
						 'menuCode': '124'
						 },
						 {
						 'menuName': '普通人',
						 'menuCode': '124'
						 }
					 ]
				 },
				 {
				 'menuName': '权限管理',
				 'menuCode': '13'
				 }
				 ]
			 },
			 {
			 'id': '2',
			 'menuName': '商品管理',
			 'menuCode': ''
			 },
			 {
			 'id': '3',
			 'menuName': '订单管理',
			 'menuCode': '30',
			 'children': [
				 {
				 'menuName': '订单列表',
				 'menuCode': '31'
				 },
				 {
				 'menuName': '退货列表',
				 'menuCode': '32',
				 'children': []
				 }
				]
			 },
			 {
			 'id': '4',
			 'menuName': '商家管理',
			 'menuCode': '',
			 'children': []
			 }
			],
			fullHeight: document.documentElement.clientHeight
		}},
		components:{
			'tree':tree,
			'tree-view':treeView
		},
		mounted:function(){
			// var that=this;
			// window.onresize=()=>{
		 //        return (() => {
		 //          window.fullHeight = document.documentElement.clientHeight
		 //          that.fullHeight = window.fullHeight
		 //        })()
		 //    }
		 //    console.log(this.fullHeight)
		},
		watch: {
	      // fullHeight (val) {
	      //   if(!this.timer) {
	      //     this.fullHeight = val
	      //     this.timer = true
	      //     let that = this
	      //     setTimeout(function (){
	      //       that.timer = false
	      //     },400)
	      //   }
	      // }
	    }
	}
</script>

<style>
	.main-tree{
		display: flex;
		flex-wrap: nowrap;
		justify-content: flex-start;
		height: 100%;
	}
	.left{
		width:250px;
		height: 100%;
		background-color: #efefef;
	}
</style>