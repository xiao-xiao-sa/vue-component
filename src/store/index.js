import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);


export default new vuex.Store({
	state:{
		cartList:[],
		menuName:''
	},
	//相当于组件的计算属性
	getters:{},
	mutations:{
		addCart:function(state,sid){
			var isAdded = state.cartList.find( item => item.sid==sid);
			if(isAdded){
				isAdded.count++;
			}else{
				state.cartList.push({
					sid:sid,
					count:1
				})
			}
		},
		delCart:function(state,sid){
			console.log(sid)
			for(var i=0,len=state.cartList.length;i<len;i++){
				console.log(state)
				if(state.cartList[i].sid==sid){
					state.cartList.splice(i,1);
					console.log(state)
					break;
				}
			}
		},
		updateCart:function(state,data){
			for(var i=0,len=state.cartList.length;i<len;i++){
				if(state.cartList[i].sid==data.sid){
					state.cartList[i].count=data.currentCount;
				}
			}
		}
	},
	actions:{
		addCart:function(context,sid){
			setTimeout(function(){
				alert('添加成功')
				context.commit('addCart',sid)
			},500)
		},
		delCart:function(context,sid){
			setTimeout(function(){
				alert('删除成功')
				context.commit('delCart',sid)
			},500)
		},
		updateCart:function(context,data){
			setTimeout(function(){
				alert('更新成功')
				context.commit('updateCart',data)
			},500)
		}
	}
})