<template>
  <div >
    <ul>
      <li class="card" v-for="(item,i) of strongeTwo" :key="i">
        <img :src="url+item.pic" alt="" class="fl">
        <div class="fr carda-title1">
          <p class="p12">{{item.title}}</p>
          <p class="p1">
            <span class="fl">课时：{{item.class1}}周</span>
            <span class="fr">天/周：{{item.tian}}天</span>
          </p><br>
          <p><span class="asdf fl">
              强度<span class="water1">
                <span class="waterstyle1" :style="waterstyle+item.stronge">
                </span>
              </span>
            </span>
            <span class="asdf fl">
              星级<span class="star">
                <span class="starstyle" :style="waterstyle+item.star">
                </span>
              </span>
            </span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stronge2: [],
        url: "http://127.0.0.1:3000/image/",
       strongeTwo:[],
        waterstyle: "width:"
      }
    },
    props: {
      // url: {
      //   default: ""
      // },
      item: {
        default: ""
      },
      pic: {
        default: ""
      },
      title: {
        default: ""
      },
      class1: {
        default: ""
      },
      tian: {
        default: ""
      },
      stronge: {
        default: ""
      },
      star: {
        default: ""
      }
    },
    methods:{
      loadMore2() {
        var url2 = "strongetwo";
        this.axios.get(url2).then(result => {
          this.strongeTwo = result.data;

        })
      },
    },
    created() {
      this.loadMore2();
    }
  }
</script>

<style scoped>
  .card {
    display: block;
    width:98%;
    height: 80px;
    padding: 10px 0;
    margin-bottom: 5px;
    
  }
.card:hover .p12{
  color:#666
}
  .card img {
    width: 152px;
    height: 82px;
  }

  .carda-title1 {
    width: 60%;
  }

  .carda-title p:first-child {
    font-size: 14px;
    font-weight: bolder;
  }
.p12{
  font-size: 16px;
  font-weight: bolder
}
  .p1 {
    margin: 8px 7px 16px 0;
  }

  .asdf {
    width: 120px;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
  }

  .water1,
  .star {
    width: 86px;
    height: 20px;
    display: inline-block;
    background: url(../img/index/global_x.png);
    background-position: 0 0;
    vertical-align: middle;
  }

  .star {
    background-position: 0 41px
  }

  .waterstyle1,
  .starstyle {
    display: inline-block;
    width: 32px;
    height: 20px;
    background: url(../img/index/global_x.png);
    background-position: 0 -23px;
  }

  .starstyle {
    background-position: 0 65px;
  }
</style>