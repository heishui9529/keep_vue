<template>
  <div class="w1600px">
    <myhead></myhead>
    <div class="container">
      <div class="leftNav fl">
        <p class="inputP">
          <input type="text" class="fl" v-model="caie" placeholder="课程名">
          <span class="ingBG fr" @click="sousuo">
            <img src="../img/sport/sousuo.png" alt="">
          </span>
        </p>
        <ul>
          <li class="headone" @click="shows=true">
            <img src="../img/sport/moue.png" alt="" class="moue">
            <span>训练课程</span>
            <img src="../img/sport/sanjiao.png" alt="">
          </li>
          <li class="" v-if="shows">
            <ul class="fontColor">
              <li class="borderBottom">
                <p class="marginHead">训练目标</p>
                <p>
                  <a href="javascript:;">不限目标</a>
                  <a href="javascript:;">减脂</a>
                  <a href="javascript:;">塑形</a>
                  <a href="javascript:;">增肌</a>
                </p>
              </li>
              <li class="borderBottom">
                <p class="marginHead">每周训练天数</p>
                <p>
                  <a href="javascript:;">不限天数</a>
                  <a href="javascript:;">2天</a>
                  <a href="javascript:;">3天</a>
                  <a href="javascript:;">4天</a>
                  <a href="javascript:;">5天/以上</a>
                </p>
              </li>
              <li class="borderBottom">
                <p class="marginHead">器械要求</p>
                <p>
                  <a href="javascript:;">不限器械</a>
                  <a href="javascript:;">徒手</a>
                  <a href="javascript:;">哑铃</a>
                  <a href="javascript:;">健身房</a>
                </p>
              </li>
              <li class="borderBottom">
                <p class="marginHead">训练部位</p>
                <p>
                  <a href="javascript:;">不限部位</a>
                  <a href="javascript:;">胸部</a>
                  <a href="javascript:;">背部</a>
                  <a href="javascript:;">肩部</a>
                  <a href="javascript:;">腹部</a>
                  <a href="javascript:;">臀部</a>
                  <a href="javascript:;">腿部</a>
                  <a href="javascript:;">肱二头肌</a>
                  <a href="javascript:;">肱三头肌</a>
                  <a href="javascript:;">全身</a>
                </p>
              </li>
              <li class="borderBottom">
                <p class="marginHead">训练难度</p>
                <p>
                  <a href="javascript:;">不限难度</a>
                  <a href="javascript:;">H1</a>
                  <a href="javascript:;">H2</a>
                  <a href="javascript:;">H3</a>
                  <a href="javascript:;">H4</a>
                  <a href="javascript:;">H5</a>
                </p>
              </li>
            </ul>
          </li>
          <li class="headone" @click="shows=false">
            <img src="../img/sport/sport.png" alt="">
            <span>训练课程</span>
            <img src="../img/sport/sanjiao.png" alt="">
          </li>
          <li class="" v-if="!shows">
            <ul class="fontColor">
              <li class="borderBottom">
                <p class="marginHead">器械要求</p>
                <p>
                  <a href="javascript:;">不限器械</a>
                  <a href="javascript:;">徒手训练</a>
                  <a href="javascript:;">双人训练</a>
                  <a href="javascript:;">哑铃</a>
                  <a href="javascript:;">杠铃</a>
                  <a href="javascript:;">壶铃</a>
                  <a href="javascript:;">弹力带</a>
                  <a href="javascript:;">TRX绳</a>
                  <a href="javascript:;">战绳</a>
                  <a href="javascript:;">药球</a>
                  <a href="javascript:;">瑞士球</a>
                  <a href="javascript:;">波速球</a>
                </p>
              </li>
              <li class="borderBottom">
                <p class="marginHead">固定器械</p>
                <p>
                  <a href="javascript:;">龙门架</a>
                  <a href="javascript:;">史密斯机</a>
                  <a href="javascript:;">推胸机</a>
                  <a href="javascript:;">悍马机</a>
                  <a href="javascript:;">夹胸器</a>
                  <a href="javascript:;">划船机</a>
                  <a href="javascript:;">下拉机</a>
                  <a href="javascript:;">地雷架</a>
                  <a href="javascript:;">推肩器</a>
                  <a href="javascript:;">倒蹬机</a>
                  <a href="javascript:;">哈克机</a>
                  <a href="javascript:;">腿弯举机</a>
                  <a href="javascript:;">腿屈伸机</a>
                  <a href="javascript:;">提踵机</a>
                  <a href="javascript:;">单杠</a>
                  <a href="javascript:;">双杠</a>
                  <a href="javascript:;">仰卧板</a>
                  <a href="javascript:;">罗马椅</a>
                  <a href="javascript:;">牧师凳</a>
                  <a href="javascript:;">有氧器械</a>

                </p>
              </li>
              <li class="borderBottom">
                <p class="marginHead">训练部位</p>
                <p>
                  <a href="javascript:;">不限部位</a>
                  <a href="javascript:;">肱二头肌</a>
                  <a href="javascript:;">胸肌</a>
                  <a href="javascript:;">前臂</a>
                  <a href="javascript:;">中背部</a>
                  <a href="javascript:;">下背部</a>
                  <a href="javascript:;">颈部</a>
                  <a href="javascript:;">股四头肌 </a>
                  <a href="javascript:;">腘绳肌</a>
                  <a href="javascript:;">小腿肌群</a>
                  <a href="javascript:;">肱三头肌 </a>
                  <a href="javascript:;">斜方肌</a>
                  <a href="javascript:;">肩部</a>
                  <a href="javascript:;">腹肌</a>
                  <a href="javascript:;">臀部肌群</a>
                  <a href="javascript:;">内收肌群</a>
                  <a href="javascript:;">外展肌群 </a>
                  <a href="javascript:;">背阔肌</a>
                  <a href="javascript:;">髂腰肌</a>
                </p>
              </li>
              <li class="borderBottom">
                <p class="marginHead">训练难度</p>
                <p>
                  <a href="javascript:;">不限难度</a>
                  <a href="javascript:;">初级</a>
                  <a href="javascript:;">中级</a>
                  <a href="javascript:;">高级</a>
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right fr">
        <div class="marginl20">
          <h2>所有训练计划</h2>
          <ul v-for="(item,i) of mycard" :key="i">
            <li class="card">
              <img :src="imgUrl+item.img" alt="" class="fl">
              <div class="fr cardDiv">
                <h4 v-text="item.title"></h4>
                <p class="neirong" v-text="item.neirong">
                </p>
                <p class="dayWeek">
                  <span>
                    课时：{{item.week}}周
                  </span>
                  <span>
                    天/周：{{item.day}}天
                  </span>
                </p>
                <p class="WaterStar">
                  <span>
                    强度
                    <span class="water">
                      <span class="waterWidth" :style="Width+item.water"></span>
                    </span>
                  </span>
                  <span>
                    星级
                    <span class="star">
                      <span class="starWidth" :style="Width+item.star"></span>
                    </span>
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
       <el-pagination :page-size="15" :pager-count="5" layout="prev, pager, next" :total="100">
      </el-pagination>
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
        activeName: '1',
        caie: "",
        shows: true,
        mycard: [],
        imgUrl: "http://127.0.0.1:3000/card/",
        Width: "width:"
      }
    },
    created() {
      this.loadMore1();
    },
    components: {
      "myhead": myhead,
      "myfoot": myfoot
    },
    methods: {
      sousuo() {

      },
      loadMore1() {
        var url = "card";
        this.axios.get(url).then(result => {
          this.mycard = result.data;
          console.log(this.mycard)
        })
      },

    }
  }
</script>

<style scoped>
  .w1600px {
    width: 1600px;
  }

  .container {
    padding-top: 49px;
    width: 100%;
    height: 800px;
    margin: 0 auto;
    /* border: 1px solid red; */
  }

  .leftNav {
    width: 20%;
    height: 800px;
    background: #2d2c2e;
  }

  .inputP {
    width: 80%;
    height: 32px;
    line-height: 32px;
    background: #29282a;
    text-align: center;
    margin: 40px auto;
    border-radius: 5px
  }

  .inputP input {
    border: none;
    height: 30px;
    width: 80%;
    box-sizing: border-box;
    background: #29282a;
    border-radius: 5px 5px 5px 5px;
    padding: 2px 5px;
    outline: none;
  }

  .ingBG {
    width: 20%;
    height: 32px;
    background: #252326;
    border-radius: 0px 5px 5px 0px;
  }

  .headone {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #252426;
    padding: 0 0 0 25px;
    box-sizing: border-box
  }

  .headone:hover {
    background: #c83838;
    color: #fff
  }

  .headone>span {
    font-size: 24px;
    color: #fff;
    vertical-align: middle;
    margin: 2px 5px;
  }

  .headone>img {
    vertical-align: middle
  }

  .fontColor {
    color: #fff;
    padding: 5px 5px;
  }

  .fontColor a {
    color: #677;
    display: inline-block;
    font-size: 14px;
    width: 65px;
    text-align: center;
    height: 20px;
    line-height: 20px;
    margin: 0px 11px 5px 0;
    background: #3f3f3f;
    border-radius: 2px;

  }

  .fontColor a:hover {
    background: #c83838;
    color: #fff
  }

  .marginHead {
    margin: 20px 0px;
  }

  .borderBottom {
    border-bottom: 1px solid #252426
  }

  .hid {
    display: none
  }

  .block {
    display: block
  }

  .right {
    background: #f2f2f2;
    width: 80%;


  }

  .marginl20 {
    margin-left: 30px;
    background: #ffffff;
    width: 65%;
    margin-top: 20px;
    border-radius: 5px;
    height: 780px;
    overflow-y: scroll;
  }

  .card {
    height: 150px;
    /* border: 1px solid red; */
    padding: 5px;
    box-sizing: border-box;

    transition: .5s;

  }

  .card img {
    width: 28%;
    height: 130px;
  }

  .cardDiv {
    width: 70%;
    padding: 5px
  }

  .cardDiv h4 {
    margin-bottom: 10px;
  }

  .neirong {
    width: 100%;
    height: 50px;
    overflow: hidden;
  }

  .dayWeek span {
    width: 40%;
    display: inline-block;
    float: left;
  }

  .WaterStar>span {
    width: 45%;
    display: inline-block;
    float: left;
  }

  .water,
  .star {
    display: inline-block;
    width: 86px;
    height: 20px;
    background: url(../img/index/global_x.png);
    background-position: 0 0;
    vertical-align: middle;
  }

  .star {
    background-position: 0 40px
  }

  .waterWidth,
  .starWidth {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(../img/index/global_x.png);
    background-position: 0 110px;
  }

  .starWidth {
    background-position: 0 64px;
  }

  .card:hover {
    box-shadow: 5px 2px 5px #666;
  }
</style>