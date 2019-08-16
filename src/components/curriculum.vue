<template>
  <div>
    <myhead></myhead>
    <div class="container">
      <div class="className">
        <div class="NamehTwo">
          <h2>全部课程</h2>
          部位<select name="Buwei" class="yourId"  v-on:change="indexSelect($event)">
            <option value="不限部位">不限部位</option>
            <option value="默认">默认</option>
            <option value="胸部">胸部</option>
            <option value="肩部">肩部</option>
            <option value="背部">背部</option>
            <option value="臀部">臀部</option>
            <option value="腿部">腿部</option>
            <option value="腹部">腹部</option>
            <option value="手臂">手臂</option>
            <option value="全身">全身</option>
          </select>
          难度
          <select name="Stronge" class="yourId"
          v-on:change="indexSelectStronge($event)">
            <option value="不限难度">不限难度</option>
            <option value="H1">H1</option>
            <option value="H2">H2</option>
            <option value="H3">H3</option>
            <option value="H4">H4</option>
            <option value="6H5">H5</option>

          </select>
          <span class="fr HoverRed"><span>人气排行</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>最新发布</span></span>
        </div>
        <ul class="imgUrl" v-for="(item,i) of mygemes" :key="i">
          <li>
            <img :src="imgUrl+item.gpic" alt="">
            <h2 v-text="item.hTwo"></h2>
            <p class="pOne" v-text=
            "item.pOne"></p>
            <p class="pTwo" v-text=
            "item.pTwo"></p>
            <div class="zhezhaocheng">
            </div>
          </li>
        </ul>
      </div>
      <div style="clear:both"></div>
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
        mygemes:[],
        imgUrl: "http://127.0.0.1:3000/game/",
        
      }
    },
    created(){
    this.load();
    },
    components: {
      "myhead": myhead,
      "myfoot": myfoot
    },
    methods:{
      load(){
        var url="game";
        this.axios.get(url).then(result => {
          this.mygemes = result.data;
        })
      },
      indexSelect(event){
       var buwei=event.target.value;
        
      },
      indexSelectStronge(event){
       var stronge=event.target.value
      }
      
    }
  }
</script>

<style scoped>
  .container {
    width: 1580px;
    padding-top: 50px;
    
  }

  .className {
    width: 90%;
   
    margin: 0 auto;
  }

  .NamehTwo {
    width: 100%;
    height: 100px;
   
    padding: 20px 20px;
    box-sizing: border-box;
  }

  .NamehTwo h2 {
    margin-bottom: 5px;
  }

  .yourId {
    margin: 10px;
    padding: 0px 5px 0px 5px;
  }

  .HoverRed>span:hover {
    color: red;
  }

  .imgUrl {
    width: 100%;
  }

  .imgUrl li {
    position: relative;
    width: 30%;
    float: left;
    border-top: 2px solid #666;
    color: #fff;
    margin: 15px 30px 15px 17px;
    border-radius:3px;
  }

  .zhezhaocheng {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: .3;
    background: linear-gradient(to right, #000 0%, #fff 100%);
    transition: opacity ease 200ms;
  }
  .zhezhaocheng:hover{
    opacity: .05;
  }

  .imgUrl li img {
    width: 100%;
  }

  .imgUrl li h2 {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
  }

  .pOne {
    position: absolute;
    top: 60px;
    left: 20px;
    z-index: 2;
  }

  .pTwo {
    position: absolute;
    top: 85px;
    left: 20px;
    z-index: 2;
  }
</style>