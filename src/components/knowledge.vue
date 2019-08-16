<template>
  <div>
    <myhead></myhead>
    <div class="container">
      <div class="w80">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/knowledge' }">>健身</el-breadcrumb-item>
          <el-breadcrumb-item>{{jianbu}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="Bcontainer">
        <div class="w65 fl">
          <div class="DivA">
            <h2>{{jianbu}}</h2>
            <div @click="dianji($event)" class="PA">
              <a href="javascript:;" data-index="1">上肢</a>
              <a href="javascript:;" data-index="2">肩部</a>
              <a href="javascript:;" data-index="3">胸肌</a>
              <a href="javascript:;" data-index="4">背部</a>
              <a href="javascript:;" data-index="5">腹肌</a>
              <a href="javascript:;" data-index="6">臀部</a>
              <a href="javascript:;" data-index="7">腿部</a>
              <a href="javascript:;" data-index="8">臀部视频</a>
              <a href="javascript:;" data-index="9">腿部视频</a>
              <a href="javascript:;" data-index="10">手臂视频</a>
              <a href="javascript:;" data-index="11">胸部视频</a>
              <a href="javascript:;" data-index="12">肩部视频</a>
              <a href="javascript:;" data-index="13">背部视频</a>
              <a href="javascript:;" data-index="14">腹肌视频</a>
              <a href="javascript:;" data-index="15">腰部视频</a>
              <a href="javascript:;" data-index="16">全身肌群</a>
            </div>
          </div>
          <ul v-for="(item,i) of neirong" :key="i">
            <li class="title">
              <img :src="IMGurl+item.Kpic" alt="" class="fl">
              <div class="fl LIright">
                <h3 v-text="item.Ktitle"></h3>
                <em v-text="item.Kwriter"></em>
                <p v-text="item.Kneirong"><span>详情</span></p>
              </div>
              <div style="clear:both"></div>
            </li>
          </ul>
        </div>
        <div class="w34 fr">
          <div class="sousuo">
            <input type="text" v-model="title" class="fl" @keyup.enter="currentPage(5)" :placeholder="Lplaceholder">
            <button @click="sousuo" class="fl">
              <img src="../img/index/search.png" alt="">
            </button>
            <div class="fudong"></div>
          </div>
          <div class="baner">
             <div class="ios"></div>
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
    <navv></navv>
    <myfoot></myfoot>
  </div>
</template>

<script>
  import myhead from "../views/head"
  import navv from '../views/nav.vue'
  import myfoot from "../views/foot"
  export default {
    data() {
      return {
        index: 17,
        neirong: [],
        jianbu: "肩部",
        IMGurl: "http://127.0.0.1:3000/zengji/",
        title: "",
        Lplaceholder: "请输入关键字"
      }
    },
    created() {
      this.load()
    },
    methods: {
      currentPage() {
        console.log(this.title)
        this.title = ""
      },
      sousuo() {
        console.log(this.title)
        this.title = ""
      },
      dianji(e) {
        e.stopPropagation();
        e.preventDefault();
        var classify = e.target.dataset.index;
        this.jianbu = e.target.innerHTML
        if (!classify) {
          classify = 17
          this.jianbu = "肩部"
        }
        var url = "knowledge";
        this.axios.get(url, {
          params: {
            classify: classify
          }
        }).then(relust => {
          this.neirong = relust.data

        })
      },
      load() {
        var url = "knowledge";
        this.axios.get(url, {
          params: {
            classify: this.index
          }
        }).then(relust => {
          this.neirong = relust.data

        })
      }

    },
    components: {
      "myhead": myhead,
      "myfoot": myfoot,
      "navv": navv
    },
  }
</script>

<style scoped>
  .container {
    width: 1580px;
    height: 1200px;
    padding-top: 50px;

    margin: 0 auto;
  }

  .w80 {
    width: 80%;
    height: 50px;
    line-height: 50px;
    padding: 1rem 2rem;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .Bcontainer {
    width: 80%;
    margin: 0 auto;

  }

  .w65,
  .w34 {
    width: 65%;
    height: 870px;

  }

  .w34 {
    width: 34%;
  }

  .PA a {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    padding: 3px 5px;
    border: 1px solid #f87163;
    color: #f87163;
    margin: 5px;
    ;
    border-radius: 3px;
  }

  .PA a:hover {
    color: #fff;
    background: #f87163;
  }

  .title {
    width: 100%;
    padding: 2px 5px;
    margin-bottom: 5px;
    box-sizing: border-box;
    transition: .5s
  }

  .title:hover {
    box-shadow: 0 0 8px #bdbcbc;
  }

  .title img {
    width: 35%;
    height: 130px;
  }

  .LIright {
    width: 63%;
    padding: 6px 5px;
  }

  .LIright h3 {
    margin-bottom: .8rem;
  }

  .LIright em {
    font-size: 10px;
    color: #666
  }

  .LIright p {
    width: 100%;
    height: 60px;
    margin-top: 5px;
    overflow: hidden;
  }

  .LIright p span {
    color: #7481bb;
    display: inline-block;
  }

  .sousuo input {
    width: 70%;
    background: #f1f1f1;
    height: 40px;
    border: none;
    padding: 2px 5px;
    outline: none;
    font-size: 16px;
  }

  .sousuo button {
    width: 10%;
    height: 44px;
    border: none;
    background: #f1f1f1;
    padding: 2px 5px;
    display: inline-block;
    outline: none;
  }
  .fudong{display: inline-block;
         clear: both;}
  .baner {
    margin-top:40px;
    border-radius:5px;
    width: 100%;
    height: 300px;
    background: url(../img/knowledge/aside-top.jpg) no-repeat;
    background-size:cover;
    position: relative;
  }
  .ios{width: 100%;
       height: 150px;
       border:1px solid red;
       position: absolute;
       top:50%}
</style>