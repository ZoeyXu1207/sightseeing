<template>
	<div class="loginend">
		<form>
			<input type="text" v-model="iphone" placeholder="请输入手机号"/>
			<div class="verififcation">
				<input type="text" placeholder="请输入验证码" v-model="code" />
				<input v-show="!epmty" type="button" :disabled="!send" :class="{active:sendcode, 'begin':codein, 'ver-input':funikm}" :value="codetext" @click="seedCode" v-bind='teSting'/>
				<!--前端验证手机号码的错误提示-->
				<input v-show="epmty" type="button" class="ver-input" :value="codetext" @click="epmtyCode"/>
			</div>
			<input type="password" placeholder="请设置密码" v-model="password" />
			<div class="loginend-input">
				<input type="button" @click="stertRegis"  value="注册并登录" v-bind:="minitor" :disabled="!isregist" :class="{regid_active: sendregis, 'regis_begin': regisin}"/>
			</div>
		</form> 
	</div>
</template>

<script>
import cookie from '../../../axios/cookie.js' 
import { getcode, register} from '../../../api/api';	
export default{
	name:'register',
	data(){
		return{
			iphone:'',
			code:'',
			password:'',
			isregist:false,
			//输入空为空时
			sendregis:true,
			//必填的填写完毕
			regisin:false,
			codetext:'发送验证码',
			send:true,
			//验证码样式
			sendcode:true,
			codein:false,
			funikm:true,
			epmty:true,
			iphones:''
		}
	},
	
	methods:{
		//发送验证码
		seedCode(){
			var that = this
			//时间
			var countdown = 60;
			codetime();
			function codetime(){
				if(countdown == 0){
					that.codetext = "发送验证码";
					countdown = 60;
					that.send = true;
					that.codein = false;
					that.sendcode = true
					return;
				}else{
					countdown--;
					that.codetext = "" + countdown + "秒后重发";
					that.send = false;
					that.codein = true;
					that.sendcode = false
				}
				setTimeout(function(){
					codetime();
				},1000)
			}
			//发送验证码
			getcode({
				mobile:that.iphone
			}).then((res) => {
//				console.log(res)
			}).catch((error) => {
//				console.log(error)
				//手机号码已经存在
				that.iphones = error.mobile[0]
				that.showToast()
			})
		},
		
		//注册
		stertRegis(){
			register({
				username:this.iphone,
				code:this.code,
				password:this.password
			}).then((res) => {
//				console.log(res)
				cookie.setCookie('name',res.data.username,7);
				cookie.setCookie('token',res.data.token,7);
				//更新数据仓库的数据
				this.$store.dispatch('users')
				//跳转到首页
				this.$router.push({name:'home'})
			}).catch((error) => {
//				console.log(error)
				this.iphones = error.code[0];
				this.showToast()
			})
		},
		
		//手机号码不正确的提示
		epmtyCode(){
			this.iphones = '手机号码不正确';
			this.showToast()
		},
		//提示框
		showToast(){
			this.$popups(this.iphones)
		}
	},
	//监听
	computed:{
		minitor(){
			if(this.iphone && this.code && this.password != ""){
			this.isregist = true;
			this.sendregis = false;
			this.regisin = true
			}else{
				this.isregist = false;
				this.sendregis = true;
				this.regisin = false
			}	
		},
		//验证手机号码是否正确
		teSting(){
			if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.iphone))){
//				console.log('手机号码不正确')
				this.send = false;
				this.epmty = true
			}else{
//				console.log('手机号码正确')
				this.send = true;
				this.epmty = false
			}
		}
	}
}	
</script>

<style scoped="scoped">
	input{display: block; width: 100%;
			border: 1px solid #909090;
			padding: 0.2rem 0;
			border-radius: 3px;}
	.loginend{margin: 0 0.5rem;}	
	.verififcation{display: flex; margin: 0.3rem 0;}	
	.ver-input{width: 50%;
				border-left: 0;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				background: #3091e7;
				border: 0;
				color: white;}	
	.verififcation input:nth-child(1){
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
	}			
	.loginend-input{margin-top: 0.8rem;}
	.loginend-input input{border-radius: 20px;
							font-size: 0.3rem;
							color: white;
							/*background: #6cd868;*/
							border: 0;}	
	.regid_active{background: #6cd868;}
	.regis_begin{background: #02bf03;}	
	.active{background: #3091e7;}
	.begin{background: #909090;}					
</style>