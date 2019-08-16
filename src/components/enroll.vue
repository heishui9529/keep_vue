<template>
  <div>
    <myhead></myhead>
    <div class="container">
      <div class="InputDiv">
        <div class="myheader">
          <div class="jz">
            <img src="../img/index/logo3.png" alt="">&nbsp;&nbsp;&nbsp;
            <span> |&nbsp;&nbsp;&nbsp;注册</span>
          </div>
        </div>
        <div class="w50">
          <p><img src="../img/index/phone.png" alt="">
            <span>手机号</span></p>
          <input type="text" :placeholder="Pplaceholder" v-model="phone" class="inputU"> <br>
          <p><img src="../img/index/upwd.png" alt="">
            <span>密码</span></p>
          <input type="password" :placeholder="Wplaceholder" v-model="pwd" class="inputU"><br>
          <p><img src="../img/index/user.png" alt="">
            <span>昵称</span></p>
          <input type="text" :placeholder="Nplaceholder" v-model="name" class="inputU"><br>
          <button @click="enroll" class="submit">完成注册</button>
        </div>
      </div>
    </div>
    <myfoot></myfoot>
  </div>
</template>

<script>
  import myhead from "../views/head"
  import myfoot from "../views/foot"
  export default {
    data() {
      return {
        Pplaceholder: "请输入你的手机号",
        Wplaceholder: "请输入你的密码",
        Nplaceholder: "请输入你的昵称",
        phone: "",
        pwd: "",
        name: ""
      }
    },
    methods: {
      enroll() {
        var reg = /^1[3456789]\d{9}$/i;
        if (!reg.test(this.phone)) {
          return this.$message({
            showClose: true,
            message: '滚回去重新输入手机号,手机号11位',
            type: 'error'
          });
        }
        if (!this.pwd) {
          return this.$message({
            showClose: true,
            message: '滚回去重新输入密码,至少10次，最多20次',
            type: 'error'
          });
        }
        if (!this.name) {
          return this.$message({
            showClose: true,
            message: '请输入昵称',
            type: 'error'
          });
        }
      }
    },
    components: {
      "myhead": myhead,
      "myfoot": myfoot
    },
  }
</script>

<style scoped>
  .container {
    width: 1580px;
    height: 700px;
    padding-top: 50px;
    margin: 0 auto;
  }

  .InputDiv {
    width: 70%;
    height: 560px;
    margin: 20px auto;
    box-shadow:4px 3px 9px #333333;
  }

  .myheader {
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, #26262e 0, #46464c 100%);
    line-height: 100px
  }

  .jz {
    margin: 0 auto;
    width: 50%;
    text-align: center
  }

  .myheader img {
    vertical-align: middle;
    width: 100px;
  }

  .myheader span {
    font-size: 30px;
    color: #fff;
    vertical-align: middle;
  }

  .w50 {
    width: 40%;
    height: 400px;
    margin: 0 auto;
    background: #fff;
  }

  .w50 img {
    vertical-align: middle;
  }
.w50>p{
  font-size: 16px;
  color:#000;
  padding:5px 0;
}
  .inputU {
    width: 100%;
    box-sizing: border-box;
    padding: 15px 5px;
    border-radius:1px;
  }
  .submit{width: 50%;
          height: 40px;
          font-size: 20px;
          line-height: 40px;
          color:#fff;
          margin-top:20px;
          margin-left:calc(50% - 25%);
          background: #f12b24;
          border:none;}
</style>