<template>
	<div class="main">
		<tab v-model='activeKey'>
			<pane label='标签一' name='1'>
				标签一内容
			</pane>
			<pane label='标签二' name='2'>
				标签二内容
			</pane>
			<pane label='标签三' name='3'>
				标签三内容
			</pane>
		</tab>
	</div>
</template>

<script>
	import tab from '../components/tab.vue';
	import pane from '../components/pane.vue';
	export default {
		name:'tabIndex',
		data(){return{
			activeKey:'1'
		}},
		components:{
			'tab':tab,
			'pane':pane
		}
	}
</script>