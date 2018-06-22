<template>
    <li>
        <span @click="toggle">
		 	<i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
		 	<i v-if="!isFolder" class="icon file-text"></i>
		 	{{ label.menuName }}
		</span>
		<ul v-show="open" v-if="isFolder">
		 	<tree v-for="(item,index) in label.children" :key="index" :label="item"></tree>
		</ul>
    </li>
</template>

<script>
	export default {
		name:'tree',
		data(){return{
			open:false
		}},
		props:['label'],
		mounted:function(){
			console.log(100)
		},
		computed:{
			isFolder:function(){
				return this.label.children && this.label.children.length;
			}
		},
		methods:{
			toggle:function(){
				if (this.isFolder) {
				   	this.open = !this.open
				}else{
					this.$store.state.menuName=this.label.menuName;
				}
			}
		}
	}
</script>

<style>
	ul{
		list-style-type: none;
		text-align: left;
	}
	li{
		cursor: pointer;
	}
	i.icon {
		display: inline-block;
		width: 15px;
		height: 15px;
		background-repeat: no-repeat;
		vertical-align: middle;
	}
	i.file-text{
		background-image:url(../assets/icon/file-text.png);
	}
	i.folder{
		background-image:url(../assets/icon/folder.png);
	}
	i.folder-open{
		background-image: url(../assets/icon/folder-open.png);
	}
</style>