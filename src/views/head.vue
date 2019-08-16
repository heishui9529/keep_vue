<template>
  <div>
    <div id="skeleton">
      <div class="head">
        <img src="../img/pubilc_img/logo3.png" alt="" @click="index">
        <div class="head_a">
          <a href="javascript:;" @click="ku">健身动作库</a>
          <a href="javascript:;">训练计划</a>
          <a href="javascript:;" @click="curriculum">特色课程</a>
          <a href="javascript:;" @click="food">饮食查询</a>
          <a href="javascript:;" @click="knowledge">健身知识</a>
          <a href="javascript:;">健身视频</a>
          <a href="javascript:;">健身工具</a>
          <a href="javascript:;">下载App</a>
        </div>
        <div class="login" v-if="nicheng">
          <a href="javascript:;" @click="enroll">注册</a>
          &nbsp;<span>|</span>&nbsp;
          <a href="javascript:;" @click="show=true">登录</a>
        </div>
        <div class="login1" v-if="!nicheng">
          账号{{uname}}
        </div>
      </div>
    </div>
    <div class="zhezhao" v-if="show">
      <div v-if="show" class="logina">
        <span class="fr del" @click="show=false">关闭</span>
        <div class="bgcolor">
          <img src="../img/index/logo3.png" alt=""> |
          <span>登录</span>
        </div>
        <div class="Uinput">
          <p class="w50">
            请输入手机号
            <span class="fr" v-if="phone"><i style="color:red">*</i>手机号为11数字</span>
          </p>
          <input type="text" :placeholder="unameHolder" v-model="uname" class="uname" autofocus="autofocus"
            @click="phone=true" maxlength="11" minlength="11"><br>
          <p class="w50">
            请输入密码
            <span class="fr" v-if="Upwd"><i style="color:red">*</i>密码为6-12数字或英语字母</span>
          </p>
          <input type="password" :placeholder="upwdHolder" v-model="upwd" class="upwd" maxlength="15"
            @click="Upwd=true"><br>
          <span @click="login" class="tijiao">提交</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        unameHolder: "请输入手机号",
        upwdHolder: "请输入密码",
        uname: "",
        upwd: "",
        show: false,
        Upwd: false,
        phone: false,
        nicheng:true,
      }
    },
    created(){
       var u= sessionStorage.getItem("uname");
       if(u==null){
         this.nicheng=true;
       }else{
         this.uname=u;
         this.nicheng=false;
       }
    },
    methods: {
      login() {
        console.log(this.uname)
        console.log(this.upwd)
      },
      knowledge(){
       this.$router.push("/knowledge")
      },
      enroll(){
        this.$router.push("/enroll")
      },
      index() {
        this.$router.push("/")
      },
      ku() {
        this.$router.push("/sport")
      },
      curriculum() {
        this.$router.push("/curriculum")
      },
      food() {
        this.$router.push("/food")
      },
      login() {
        var u = this.uname;
        var p = this.upwd;
        var reg =/^1[3456789]\d{9}$/;
        console.log(u);
        console.log(p)
        if (!u) {
              return this.$message({
                    showClose: true,
                    message: '手机号不能为空',
                    type: 'error'
              });
        if (!reg.test(u)){
            return this.$message({
            showClose: true,
            message: '手机号格式不正确',
            type: 'error'
          });
         }
        }
        if (!p) {
          return this.$message({
            showClose: true,
            message: '密码不能为空',
            type: 'error'
          });
        }
        var url = "login";
        var obj = {phone:u,upwd:p};
        
         this.axios.get(url,{params:obj}).then(
         result=>{
        if(result.data.code > 0){
            this.$router.push("/");
            this.show=false;
            this.nicheng=false;
            localStorage.setItem("uname",u)
        }else{
            this.$message({
                  showClose: true,
                  message: '滚回去从新输',
                  type: 'error'
                  });
                  this.uname="";
                  this.upwd=""
        }
       });
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: white;
    font-size: 12px;
  } 

  #skeleton {
    width: 1680px;
    height: 50px;
    background: #202023;
    position: fixed;
    z-index: 5;
  }

  .head {
    width: 75%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .head img {
    width: 84px;
    height: 34px;

  }

  .head_a {
    width: 70%;
    vertical-align: middle;
  }

  .head_a a {
    display: inline-block;
    width: 12%;
  }


  .zhezhao {
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 1800px;
    z-index: 3;
    position: fixed;
  }

  .logina {
    width: 700px;
    height: 450px;
    color: #000;
    background: #fff;
    transition: .2s;
    z-index: 15;
    margin-top: 80px;
    margin-left: calc(50% - 350px);
    position: fixed;
  }

  .bgcolor img {
    margin-left: calc(45% - 40px);
    vertical-align: middle;
  }

  .bgcolor {
    font-size: 26px;
    color: #fff;
  }

  .del:hover {
    color: red
  }

  .bgcolor {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: linear-gradient(to bottom, #26262e 0, #46464c 100%)
  }

  .del {
    font-size: 16px;
    color: #fff
  }

  .Uinput {
    width: 50%;
    margin: 0 auto;
  }

  .w50 {
    width: 100%;
    margin: 0px 0px 10px 0;
  }

  .uname,
  .upwd {
    width: 100%;
    height: 50px;
    border: 1px solid #666;
    border-radius: 3px;
  }

  .tijiao {
    display: block;
    width: 40%;
    height: 40px;
    margin: 20px auto;
    line-height: 40px;
    background: #cecece;
    text-align: center;
  }

  .tijiao:hover {
    background: rgba(206, 206, 206, .8);
  }
  .login1{color:#fff}
</style>