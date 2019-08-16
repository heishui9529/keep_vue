<template>
  <div>
    <myhead></myhead>
    <div class="w1580">
      <div class="bgImg">
        <div class="juzhong">
          <p class="w42">专业全面的食物数据库</p>
          <p>
            <input type="text" v-model="value" class="fl">
            <span @click="sousuo" class="fl">搜索</span>
          </p>
        </div>
      </div>
      <div class="container">
        <div class="left fl">
          <p class="navv">|<span>常见食物分类</span></p>
          <ul v-for="(item,i) of food" :key="i">
            <li class="pad5 zhezhao">
              <img :src="Imgurl+item.Fpic" alt="" class="fl">
              <div class="fl w80">
                <h4 v-text="item.Ftitle"></h4>
                <p v-text="item.Fneirong"></p>
                <span>更多的...</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="right fl">
          <p class="navv">|<span>常见餐厅分类</span></p>
          <ul v-for="(item,i) of dining" :key="i">
            <li class="w90 zhezhao">
              <img :src="Imgurl+item.Dpic" alt="" class="fl">
              <div class="fl dining">
                <h4 v-text="item.Dtitle">肯德基</h4>
                <p v-text="item.Dneirong" :title="item.Dneirong">薯条（肯德基），鸡肉汉堡（肯德基），新奥尔良鸡翅（肯德基），劲爆鸡米花（肯德基），玉米沙拉（肯德基）</p>
                <span>详情</span>
              </div>
              <div style="clear:both"></div>
            </li>
          </ul>
        </div>
        <div style="clear:both"></div>
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
        food: [],
        value: "",
        Imgurl: "http://127.0.0.1:3000/food/",
        dining: []
      }

    },
    created() {
      this.load();
      this.house();
    },
    methods: {
      load() {
        var url = "foot";
        this.axios.get(url).then(result => {
          this.food = result.data;
        })

      },
      house() {
        var url = "dining";
        this.axios.get(url).then(result => {
          this.dining = result.data;
          console.log(this.dining)
        })
       },
      sousuo() {
        console.log(this.value)
      }
    },
    components: {
      "myhead": myhead,
      "myfoot": myfoot
    },
  }
</script>
<style scoped>
  .w1580 {
    width: 1583px;
    padding-top: 50px;
    margin: 0 auto;
}

  .bgImg {
    width: 100%;
    height: 400px;
    background: url(../img/food/food-bg.jpg) no-repeat center center;
    position: relative;
    margin: 0 auto;
    color: #fff;

  }

  .juzhong {
    width: 700px;
    height: 150px;
    margin: 0 auto;
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 350px);
    text-align: center;
  }

  .juzhong p {
    width: 80%;
    margin: 30px auto;
  }

  .w42 {
    font-size: 42px;
    font-weight: bolder;
  }

  .juzhong input {
    border: none;
    width: 450px;
    height: 40px;
    line-height: 40px;
    padding: 5px;
    border-radius: 5px 0px 0 5px;
    outline: none;
  }

  .juzhong span {
    display: inline-block;
    width: 80px;
    height: 40px;
    padding: 5px;
    line-height: 40px;
    background: #f33;
    border-radius: 0px 5px 5px 0px;
  }

  .container {
    width: 85%;
    margin: 0 auto;
    padding: 5px 10px;
  }

  .navv {
    font-size: 25px;
    font-weight: bolder;
    color: #e13030
  }

  .navv span {
    font-size: 22px;
    font-weight: bolder;
    color: #000
  }

  .left {
    width: 70%;
    margin-right: 5px;
    background: #fff;
  }

  .right {
    width: 29%;
    
  }

  .pad5 {
    width: 45%;
    height: 101px;
    padding: 5px;
    margin-right: 15px;
    float: left;
  }

  .pad5 img {
    box-shadow: 2px 2px 2px #888888;
    width: 100px;
  }

  .w80 {
    width: 70%;
    margin-left: 16px;
  }

  .w80 h4 {
    margin-bottom: 5px;
    color: #3f73de
  }

  .w80 p {
    width: 70%;
    height: 40px;
    overflow: hidden;
    font-size: 14px;
    margin-bottom: 10px;
  }

  .w80 span {
    font-size: 14px;
    color: #3f73de
  }

  .w90 {
    width: 100%;
    padding: 5px;
  }

  .w90 img {
    width: 150px;
    height: 100px;
  }

  .dining {
    width: 57%;
    height: 100px;
    margin-left: 5px;
  }

  .dining h4 {
    font-size: 16px;
    font-weight: bolder;
    color: #3f73de
  }

  .dining p {
    width: 100%;
    height: 40px;
    font-size: 14px;
    overflow: hidden;
  }

  .dining span {
    font-size: 14px;
    color: #3f73de;
    padding-top: 20px;
    display: inline-block;
  }
  .zhezhao:hover{background:rgba(0,0,0,.1);}
</style>