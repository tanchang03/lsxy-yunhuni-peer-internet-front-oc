<template>
	<div class="admin-table-header">
		<div class="bg-section-margin remove-margin-bottom  ">
			<div class="select-box inline-block">
				<search
					:value.sync="search"
					:action="query"
					placeholder="请输入会员名称"
				></search>
			</div>
			<span class='datetime-picker-label'>发票类型: </span>
			<select class="form-control"  v-model='type'>
				<option value="0">全部</option>
				<option value="1">个人增值税普通发票</option>
				<option value="2">企业增值税普通发票</option>
				<option value="3">企业增值税专用发票</option>
			</select>
			<button class="btn btn-primary admin-button-margin" @click="query" >查询</button>

		</div>
	</div>
	<div>
		<div class="admin-table">
			<div class="table-total flex flex-1 justify-content-e float-r">
				共<span class="text-danger">{{invoice.totalCount}}</span>条
			</div>
			<table class="table">
				<thead>
				<tr>
					<th class="text-align-c">申请时间</th>
					<th>会员名称</th>
					<th>开票金额</th>
					<th>发票类型</th>
					<th>发票抬头</th>
					<th>异常原因</th>
					<th>收件人</th>
					<th class="text-align-c">操作</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for='message in invoice.result'>
					<td class="message-time text-align-c">{{message.applyTime | totalDate }}</td>
					<td><a v-link="'/admin/tenant/detail/'+message.tenant.id" >{{message.tenant.tenantName}}</a></td>
					<td>{{message.amount}}</td>
					<td v-if='message.type==1'>个人增值税普通发票</td>
					<td v-if='message.type==2'>企业增值税普通发票</td>
					<td v-if='message.type==3'>企业增值税专用发票</td>
					<td>{{message.title}}</td>
					<td>{{message.reason}}</td>
					<td>{{message.receivePeople}}</td>
					<td class="text-align-c">
						<a v-link="'/admin/finance/invoice/detail/'+message.id" >查看详情</a>
					</td>
				</tr>
				</tbody>
			</table>
			<div class="more">
				<a v-show='this.invoice.totalPageCount==this.invoice.currentPageNo || this.invoice.totalPageCount==0'>加载完毕</a>
				<a @click="moreMessage" class="text-none" v-show='this.invoice.totalPageCount!=this.invoice.currentPageNo && this.invoice.totalPageCount!=0' >加载更多<i class="icon iconfont icon-oc-dropdown"></i></a>
			</div>
		</div>
	</div>
</template>
<script>
	import {getInvoiceList,getMoreInvoiceList} from '../../../../../vuex/actions'
	export default {
		vuex:{
			getters: {
				invoice: ({finance}) =>finance.invoicelist.abnormal
			},
			actions: {
				getInvoiceList,
				getMoreInvoiceList
			}
		},
		components: {
			'datetime-picker': require('../../../../ui/datetimepicker.vue'),
			'search': require('../../../../ui/search-input.vue')
		},
		data(){
			return {
				messages: [],
				total: 0,
				type: 0,
				status:'unauth',
				search:''
			}
		},
		methods: {
			moreMessage(){
				let params = {}
				let nextPage = this.invoice.currentPageNo+1
				params.status = this.status
				if(this.search){
					params.name=this.search
				}
				if(this.type!=0){
					params.type = this.type
				}
				params.pageNo = nextPage
				this.getMoreInvoiceList(params)	
			},
			query(){
				let params = {}
				params.status = this.status
				if(this.search!=''){
					params.name = this.search
				}
				if(this.type!=0){
					params.type = this.type
				}
				this.getInvoiceList(params)
			}
		},
		route: {
			
		},
		ready(){
			let params = {}
			params.status = 'unauth'
			this.getInvoiceList(params)
		}

	}

</script>
