<template>
  <div class="home">
    <had></had>
    <table></table>
    <!-- 大背景图部分 -->
    <div id="bgpic">
      <div class="boy_girl">
        <h2>免费制定您的个人计划</h2>
        <p>最专业的健身动作库：超过3000+动作</p>
        <p>最全面的健身计划库：超过500+计划</p>
        <div class="btn">
          <button>我是男生</button>
          <button>我是女生</button>
        </div>
      </div>
    </div>
    <!-- ********************************* -->
    <!-- 第二部分 -->
    <div class="second">
      <div class="sd-first f-25">
        <p>
          <span class="fl">|</span><span class="fl fw-b">热点</span><span class="fr">更多+</span>&nbsp;
        </p>
        <a href="javascript:;" class="new_img">
          <img src="../img/index/index4.png" alt="">
          <h3>关节炎朋友看过来，网红美食还有这功效</h3>
        </a>
        <a href="javascript:;" class="fr img_left">
          <img src="../img/index/index5.png" alt="">
          <h3 class="fz-20">男儿有泪请轻弹！强忍伤身，哭出来还会帮助减重</h3>
        </a>
        <a href="javascript:;" class="fl img_right">
          <img src="../img/index/index1.png" alt="">
          <h3 class="fz-20">预防高温中暑，千万不要大量饮冰水！</h3>
        </a>

      </div>
      <div class="sd-second f-25">
        <p>
          <span class="fl">|</span><span class="fl fw-b">推荐</span><span class="fr">更多+</span>&nbsp;
        </p>
        <div class="neirong">
          <a href="javascript:;" class="card">
            <h3 class="fl card_h3">训练也会过度，阻碍肌肉生长，影响正常生活</h3>
            <p class="fl card_p">
              所谓的过度训练就是指身体在进行强度较大的运动后，没有足够的时间让身体恢复就继...
            </p>
            <img src="../img/index/index1.jpg" alt="" class="fr">
            <div style="clear:both"></div>
          </a>
          <p>孤独也是种病，其对健康的危害不亚于大量吸烟 <span>07-09</span></p>
          <p>红白火龙果，营养差异如此之大！<span>07-06</span></p>
          <p>看不惯台湾馆长，拳王下战书打算好好教育下！<span>07-05</span></p>
        </div>
        <div class="neirong">
          <a href="javascript:;" class="card">
            <h3 class="fl card_h3">训受伤后到底要不要冰敷？谨记POLICE原则</h3>
            <p class="fl card_p">
              冰敷、热敷，谁对受伤有效？
              在肌肉受伤的当下，会感觉到肌肉
            </p>
            <img src="../img/index/index3.jpeg" alt="" class="fr">
            <div style="clear:both"></div>
          </a>
          <p>这竟是王力宏！不好好唱歌改做健身模特了？<span>07-09</span></p>
          <p>不健身就算了，还敢吃夜宵？而且危害还不止于令人肥胖<span>07-06</span></p>
          <p>十人九痔！如厕也有大学问！<span>07-05</span></p>
        </div>
      </div>
      <div class="sd-third">
        <div class="logo">
          <div class="huawei fl">
            <a href="javascript:;" class="ios banben">
              <img src="../img/index/ios.png" alt="">
              ios版</a>
            <a href="javascript:;" class="android banben">
              <img src="../img/index/android (1).png">android版</a>
          </div>
          <div class="erweima">
            <img src="../img/index/web6.png" alt="">
            <p>扫一扫下载</p>
          </div>
        </div>
        <div>
          <div class="qq fl">
            <p>微信公众号：heishui</p>
            <img src="../img/index/web6.png" alt="" class="erweima2">
          </div>
          <div class="qq fr">
            <p>QQ交流群 微博</p>
            <p>官方交流群：1473791203</p>
            <img src="../img/index/web59.png" alt="">
            <img src="../img/index/web58.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 第三部分 -->

    <!--第四部分 -->
    <div class="common4">
      <div class="navvv">
        <div>
          <img src="../img/index/nav1.png" alt="" class="fl nav1">
        </div>
        <div class="fr nava">
          <a href="javascript:;">八分钟P4P锻炼</a>
          <a href="javascript:;">郑多燕</a>
          <a href="javascript:;">Focus T25</a>
          <a href="javascript:;">莱美搏击操</a>
          <a href="javascript:;">巴西翘臀健身</a>
          <a href="javascript:;">腹肌撕裂者</a>
          <a href="javascript:;">囚徒健身</a>
          <a href="javascript:;">更多&nbsp;+</a>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="hrr"></div>
      <div class="datils">
        <div>
          <div class="ph3">
            <span class="fl">|</span>
            <h3 class="fl">名人课程</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
          </div>
          <a href="javascript:;" class="juedui">
            <img src="../img/index/web31.png" alt="">
            <h3>杰·卡特8周增肌计划</h3>
          </a>
          <a href="javascript:;" class="juedui">
            <img src="../img/index/web8.png" alt="">
            <h3>阿诺德·施瓦辛格的蓝图-增肌篇</h3>
          </a>
        </div>
        <div>
          <div class="ph3">
            <span class="fl">|</span>
            <h3 class="fl">家庭健身计划</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
          </div>
          <div v-for="(item,i) of stronge" :key="i">
            <a href="javascript:;" class="carda">
              <img :src="urlImg+item.pic">
              <div class="fr carda-title">
                <p v-text="item.title"></p>
                <span class="fl">课时：{{item.class}}周</span>
                <span class="fr">天/周：{{item.tian}}天</span><br>
                <p>强度&nbsp;&nbsp;&nbsp;
                  <span>
                    <span class="water" :style='waterstyle+item.stronge'></span>
                  </span>
                </p>
              </div>
            </a>
          </div>

        </div>
        <div>
          <div class="ph3">
            <span class="fl">|</span>
            <h3 class="fl">锻炼动作</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
          </div>
          <img src="../img/index/make-plan.jpg" alt="" class="geren">
          <p class="font-orange">共<span>1265</span>/健身房器械</p>
          <ul class="sports">
            <li>
              <img src="../img/index/web17.png" alt="">
              <h3>胸部</h3>
              <div class="opacity1"></div>
            </li>
            <li>
              <img src="../img/index/web19.png" alt="">
              <h3>二头</h3>
              <div class="opacity1"></div>
            </li>
            <li>
              <img src="../img/index/web21.png" alt="">
              <h3>腰部</h3>
              <div class="opacity1"></div>
            </li>
            <li>
              <img src="../img/index/web23.png" alt="">
              <h3>肩部</h3>
              <div class="opacity1"></div>
            </li>
            <li>
              <img src="../img/index/web25.png" alt="">
              <h3>背部</h3>
              <div class="opacity1"></div>
            </li>
            <li>
              <img src="../img/index/web27.png" alt="">
              <h3>小腿</h3>
              <div class="opacity1"></div>
            </li>
          </ul>
        </div>
        <div>
          <div class="ph3 clear">
            <span class="fl">|</span>
            <h3 class="fl">热门课程</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
          </div>
          <ul class="class1 clear">
            <li>
              <a href="javascript:;">
                <h3>完美胸背打造</h3>
                <p>家里-无器械</p>
                <p>初级-四天胸背</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <h3>腹肌撕裂者</h3>
                <p>腹肌撕裂者</p>
                <p>初级-1天腹肌</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <h3>HIIT全身脂肪燃动</h3>
                <p>家里-无器械</p>
                <p>初级-七天全身</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <h3>臀线塑造</h3>
                <p>家里-无器械</p>
                <p>初级-六天全身</p>
              </a>
            </li>
            <div style="clear:both"></div>
          </ul>
          <ul class="title">
            <li>
              <a href="javascript:;">Slim in 6</a>|
              <a href="javascript:;">30天家庭减脂</a>|
              <a href="javascript:;" class="f45c5c">翘臀圣经</a>|
              <a href="javascript:;">10分钟健身</a>
            </li>
            <li>
              <a href="javascript:;" class="f45c5c">P4P腹肌</a>|
              <a href="javascript:;">郑多燕瘦身操</a>|
              <a href="javascript:;">腹肌撕裂者</a>|
              <a href="javascript:;">囚徒健身</a>
            </li>
            <li>
              <a href="javascript:;">Focus T25</a>|
              <a href="javascript:;">P90X</a>|
              <a href="javascript:;">P90-2014</a>|
              <a href="javascript:;">P90X2</a>|
              <a href="javascript:;">P90X3</a>
            </li>
            <li>
              <a href="javascript:;">Insanity 63</a>|
              <a href="javascript:;">莱美搏击操</a>|
              <a href="javascript:;">尊巴健身</a>|
              <a href="javascript:;">Insanity 30</a>
            </li>
            <li>
              <a href="javascript:;">Power 90</a>|
              <a href="javascript:;">Rev Abs</a>|
              <a href="javascript:;">Rockin Body</a>|
              <a href="javascript:;">Hip-Hop Abs</a>|
              <a href="javascript:;">aaa</a>
            </li>
          </ul>
        </div>
        <div>
          <div class="ph3">
            <span class="fl">|</span>
            <h3 class="fl">健身房训练计划</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
          </div>
          <strongetwo></strongetwo>
        </div>
        <div>
          <div class="ph3">
            <span class="fl">|</span>
            <h3 class="fl">按器械分类</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
            <div class="qicai">
              <div>
                <img src="../img/index/web28.png" alt="">
                <div class="zhechapceng"></div>
                <p>杠铃</p>
              </div>
              <div>
                <img src="../img/index/web29.png" alt="">
                <div class="zhechapceng"></div>
                <p>壶铃</p>
              </div>
              <div>
                <img src="../img/index/web9.png" alt="">
                <div class="zhechapceng"></div>
                <p>划船机</p>
              </div>
              <div>
                <img src="../img/index/web10.png" alt="">
                <div class="zhechapceng"></div>
                <p>夹胸器</p>
              </div>
              <div>
                <img src="../img/index/web11.png" alt="">
                <div class="zhechapceng"></div>
                <p>罗马椅</p>
              </div>
              <div>
                <img src="../img/index/web12.png" alt="">
                <div class="zhechapceng"></div>
                <p>牧师凳</p>
              </div>
              <div>
                <img src="../img/index/web13.png" alt="">
                <div class="zhechapceng"></div>
                <p>弹力带</p>
              </div>
              <div>
                <img src="../img/index/web14.png" alt="">
                <div class="zhechapceng"></div>
                <p>史密斯机</p>
              </div>
              <div>
                <img src="../img/index/web15.png" alt="">
                <div class="zhechapceng"></div>
                <p>哑铃</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- 第五部分 -->
    <div>
      <div class="navvv">
        <div>
          <img src="../img/index/nav2.png" alt="" class="fl nav1">
        </div>
        <div class="fr nava">
          <a href="javascript:;">麦当劳</a>
          <a href="javascript:;">肯德基</a>
          <a href="javascript:;">必胜客</a>
          <a href="javascript:;">汉堡王</a>
          <a href="javascript:;">星巴克</a>
          <a href="javascript:;">德克士</a>
          <a href="javascript:;">更多&nbsp;+</a>
        </div>
        <div style="clear:both"></div>
      </div>
      <div id="food">
        <div class="food-img">
          <div class="ph3">
            <span class="fl">|</span>
            <h3 class="fl">饮食查询</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
          </div>
          <div class="food-as">
            <div>
              <img src="../img/index/web51.png" alt="">
              <p>谷薯芋、杂豆、主食</p>
            </div>
            <div>
              <img src="../img/index/web49.png" alt="">
              <p>蛋类、肉类及制品</p>
            </div>
            <div>
              <img src="../img/index/web39.png" alt="">
              <p>奶类及制品</p>
            </div>
            <div>
              <img src="../img/index/web48.png" alt="">
              <p>蔬果和菌藻</p>
            </div>
            <div>
              <img src="../img/index/web37.png" alt="">
              <p>坚果、大豆及制品</p>
            </div>
            <div>
              <img src="../img/index/web57.png" alt="">
              <p>饮料</p>
            </div>
            <div>
              <img src="../img/index/web56.png" alt="">
              <p>食用油、油脂及制品</p>
            </div>
            <div>
              <img src="../img/index/web50.png" alt="">
              <p>调味品</p>
            </div>
            <div>
              <img src="../img/index/web54.png" alt="">
              <p>零食、点心、冷饮</p>
            </div>
            <div>
              <img src="../img/index/web35.png" alt="">
              <p>其它</p>
            </div>
            <div>
              <img src="../img/index/web47.png" alt="">
              <p>菜肴</p>
            </div>
          </div>
        </div>
        <div class="food-people">
          <div class="ph3">
            <span class="fl">|</span>
            <h3 class="fl">饮食知识</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
          </div>
          <div>
            <div class="judui">
              <img src="../img/index/web43.jpeg" alt="">
              <div class="neirongone">
                <h3>用手掌控制饮食量 简简单单吃出健康</h3>
                <p>如果你是一个认真减肥的人，肯定会比较关注食物的卡路里。实际上，卡路里含量只是一...</p>
              </div>
              <div></div>
            </div>
            <div class="judui">
              <img src="../img/index/web42.jpeg" alt="">
              <div class="neirongone">
                <h3>有助于瘦身的4种食材 这个夏天要多吃</h3>
                <p>进入夏天以后，绝对是帅哥靓女展示好身材的最佳时刻。但不是每个人都是那种穿衣显...</p>
              </div>
              <div></div>
            </div>
            <div class="judui">
              <img src="../img/index/web53.jpeg" alt="">
              <div class="neirongone">
                <h3>运动前，运动中，运动后的进食方法</h3>
                <p>分享一下在运动前、中、后的饮食小诀窍，可以更好的帮助你达到健身效果。在健身房...</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div class="food-pic">
          <div class="ph3">
            <span class="fl">|</span>
            <h3 class="fl">计算工具</h3>
            <span class="fr colorf00">更多&nbsp;+</span>
            <div style="clear:both"></div>
          </div>
        </div>
        <div class="tubiao">
          <a href="javascript:;">
            <img src="../img/index/web_01.jpg" alt="">
            <p>饮食计算</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_02.jpg" alt="">
            <p>了解自己</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_03.jpg" alt="">
            <p>身体质量</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_4.jpg" alt="">
            <p>标准体重</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_5.jpg" alt="">
            <p>代谢循环</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_6.jpg" alt="">
            <p>燃脂运动</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_7.jpg" alt="">
            <p>最大维度</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_8.jpg" alt="">
            <p>体脂率</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_9.jpg" alt="">
            <p>最终体重</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_10.jpg" alt="">
            <p>蛋白质含量</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_11.jpg" alt="">
            <p>热量计算</p>
          </a>
          <a href="javascript:;">
            <img src="../img/index/web_12.jpg" alt="">
            <p>补水计算</p>
          </a>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <!-- 第六部分 -->
    <div class="navvv">
      <div>
        <img src="../img/index/nav3.png" alt="" class="fl nav1">
      </div>
      <div class="fr nava">
        <a href="javascript:;">健身知识</a>
        <a href="javascript:;">健身故事</a>
        <a href="javascript:;">增肌</a>
        <a href="javascript:;">减肥</a>
        <a href="javascript:;">饮食计划</a>
        <a href="javascript:;">健身食谱</a>
        <a href="javascript:;">更多&nbsp;+</a>
      </div>
      <div style="clear:both"></div>
    </div>
    <div class="sixDiv">
      <div>
        <div class="ph3">
          <span class="fl">|</span>
          <h3 class="fl">计算工具</h3>
          <span class="fr colorf00">更多&nbsp;+</span>
          <div style="clear:both"></div>
        </div>
        <a href="javascript:;" class="new_img">
          <img src="../img/index/index4.png" alt="">
          <h3>关节炎朋友看过来，网红美食还有这功效</h3>
        </a>
        <a href="javascript:;" class="fr img_left">
          <img src="../img/index/web36.jpeg" alt="">
          <h3 class="fz-20">男儿有泪请轻弹！强忍伤身，哭出来还会帮助减重</h3>
        </a>
        <a href="javascript:;" class="fl img_right">
          <img src="../img/index/web41.png" alt="">
          <h3 class="fz-20">预防高温中暑，千万不要大量饮冰水！</h3>
        </a>
      </div>
      <div>
        <div class="ph3">
          <span class="fl">|</span>
          <h3 class="fl">推荐阅读</h3>
          <span class="fr colorf00">更多&nbsp;+</span>
          <div style="clear:both"></div>
        </div>
        <div class="jianshenzhishi" @click="dianji($event)">
          <a href="javascript:;" data-index="1">增肌</a>
          <a href="javascript:;" data-index="2">减肥</a>
          <a href="javascript:;" data-index="3">健身知识</a>
          <a href="javascript:;" data-index="4">瑜伽</a>
          <a href="javascript:;" data-index="5">资讯</a>
          <a href="javascript:;" data-index="6">健身器材</a>
          <a href="javascript:;" data-index="7">Hi健身学堂</a>
        </div>
        <ul v-for="(elem,i) of wenzi" :key="i">
          <li class="w100">
            <span v-text="elem.conment" class="w80 fl"></span>
            <span v-text="elem.time" class="w20 fr"></span>
            <hr>
          </li>
        </ul>
      </div>
      <div>
        <div class="ph3">
          <span class="fl">|</span>
          <h3 class="fl">健身视频</h3>
          <span class="fr colorf00">更多&nbsp;+</span>
          <div style="clear:both"></div>
        </div>
        <ul class="videoUrl" v-for="(elem,i) of video" :key="i">
          <li>
            <video-player class="video-player vjs-custom-skin" ref="videoPlayer"     :playsinline="true"
              :options="playerOptions"
               >
            </video-player>

          </li>

        </ul>
      </div>
    </div>
    <navv></navv>
    <foot></foot>>
  </div>
</template>
<script>
  import had from './head.vue'
  import navv from './nav.vue'
  import foot from './foot.vue'
  import strongetwo from "./stronge2.vue"
  export default {
    data() {
      return {
        stronge: [],
        urlImg: "http://127.0.0.1:3000/image/",
        urlVideo: "http://127.0.0.1:3000/video/",
        waterstyle: "width:",
        stronge: [],
        strongeTwo: [],
        num: 8,
        wenzi: [],
        video: [],
        playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0], 
                    //如果true,浏览器准备好时开始回放。
                    autoplay: false, 
                    // 默认情况下将会消除任何音频。
                    muted:true, 
                    // 导致视频一结束就重新开始。
                    loop: false, 
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto', 
                    language: 'zh-CN',
                     // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '16:9',
                     // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    sources: [{
                        //类型
                        type: "video/mp4",
                        //url地址
                       src:"http://127.0.0.1:3000/video/02.mp4"
                    }],
                    //你的封面地址
                    poster: '', 
                     //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true  
                    }
                }


      }
    },
    components: {
      "had": had,
      "navv": navv,
      "foot": foot,
      "strongetwo": strongetwo
    },
    mounted() {

    },
    methods: {
      // 第一个stronge的数据库调用
      loadMore() {
        var url = "stronge";
        this.axios.get(url).then(result => {
          this.stronge = result.data;

        })
      },
      dianjione() {
        var state = this.num;
        var url = "state"
        this.axios.get(url, {
          params: {
            state: state
          }
        }).then(
          result => {
            this.wenzi = result.data;
          }
        )
      },
      dianji(e) {
        var state = e.target.dataset.index;
        if (!state) {
          state = 8
        }
        var url = "state"
        this.axios.get(url, {
          params: {
            state: state
          }
        }).then(
          result => {
            this.wenzi = result.data;
          }
        )
      },
      videoavi() {
        var url = "video";
        this.axios.get(url).then(result => {

          this.video = result.data;
          console.log(this.video)
        })
      },



    },
    created() {
      this.loadMore();
      this.dianjione();
      this.videoavi()
    },
  }
</script>
<style scoped>
  /*大背景图部分*/
  * {
    margin: 0;
    padding: 0
  }

  .home {
    width: 1600px;
    margin: 0 auto;
  }


  #bgpic {
    margin-top: 50px;
    width: 100%;
    height: 460px;
    background: url(../img/index/index.jpg) no-repeat;
    position: relative;
    margin: 0 auto;
  }

  .boy_girl {
    width: 328px;
    height: 435px;
    position: absolute;
    color: #fff;
    top: 24px;
    left: 1095px;
    text-align: center;
  }

  .boy_girl h2 {
    margin-top: 80px;
    margin-bottom: 50px;
  }

  .boy_girl p {
    margin-top: 30px;
  }

  .btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 50px;
  }

  .btn button {
    color: #fff;
    font-size: 16px;
    width: 90px;
    height: 50px;
    line-height: 50px;
    background: #f83636;
    border: none;
    border-radius: 3px;
    float: left;
  }

  .btn button:last-child {
    float: right;
  }

  /**************************************/
  .second {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    height: 450px;
  }

  .second>div {
    width: 100%;
    padding: 3px;
  }

  .f-25 p {
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
    vertical-align: middle;
    margin-bottom: 5px;
  }

  .fw-b {
    font-size: 20px;
    font-weight: bolder;
  }

  .f-25 p span:first-child {
    font-size: 25px;
    font-weight: bolder;
    color: #e13030;
  }

  .f-25 p span:last-child:hover {
    color: red;
  }

  .new_img {
    display: block;
    position: relative;
    width: 100%;
    background: linear-gradient(rgba(90, 90, 54, 0), rgba(90, 90, 54, 0.5));
  }

  .new_img img {
    width: 100%;
    height: 230px;
    border-radius: 3px;
  }

  .new_img h3 {
    color: #fff;
    position: absolute;
    top: 87%;
  }

  .img_left,
  .img_right {
    display: block;
    width: 48%;
    height: 150px;
    border-radius: 5px;
    position: relative;
  }

  .img_left img {
    width: 205px;
    height: 177px;
    border-radius: 3px;
  }

  .img_right img {
    width: 205px;
    height: 177px;
    border-radius: 3px;
  }

  .img_right h3 {
    color: #fff;
    position: absolute;
    top: 155px;
  }

  .img_left h3 {
    color: #fff;
    position: absolute;
    top: 155px;
  }

  .fz-20 {
    width: 100%;
    height: 30px;
    overflow: hidden;
    font-size: 16px;
  }

  .neirong {
    width: 100%;
  }

  .card {
    width: 100%;
    display: block;
    position: relative;
    padding: 5px 0;
    margin-top: 5px;
  }

  .card img {
    width: 145px;
    height: 85px;
    position: absolute;
    top: 0;
    left: 296px;
  }

  .card .card_h3 {
    width: 63%;
    height: 27px;
    overflow: hidden;
  }

  .card .card_p {
    width: 63%;
    height: 40px;
    font-size: 14px;
    padding: 13px 0px;
    overflow: hidden;
    margin: 0px;
    color: #666;
  }

  .neirong p {
    font-size: 14px;
    padding: 0;
    margin: 0
  }

  .neirong p span {
    color: #666 !important;
    font-size: 12px !important;
    float: right;
    padding-right: 1rem
  }

  .sd-third {
    background: url(../img/index/down-logo.png) no-repeat;
    background-position: 68px 30px;
  }

  .logo {
    margin-top: 20px;
  }

  .huawei {
    width: 55%;
    height: 132px;
  }

  .banben {
    display: block;
    width: 70%;
    height: 50px;
    border-radius: 5px;
    background: rgb(99, 99, 99);
    margin: 10px 30px;
    text-align: center;
    line-height: 50px;
    color: white;
    font-size: 16px;
    vertical-align: middle
  }

  .banben img {
    vertical-align: middle;
  }

  .android {
    background: rgb(138, 193, 129);
  }

  .banben:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  .android:hover {
    background: rgba(138, 193, 129, 0.8);
  }

  .erweima {
    margin-top: 150px;
    text-align: center;
  }

  .erweima img {
    width: 80px;
  }

  .qq {
    width: 50%;
    padding: 15px 0px;
    text-align: center
  }

  .erweima2 {
    width: 100px;
  }

  .qq p {
    color: #666;
    font-size: 16px;
  }

  .qq p:first-child {
    font-size: 18px;
    font-weight: bolder;
    color: black;
    margin-top: 5px;
  }

  .qq img {
    transition: 0.3s
  }

  .qq img:hover {
    transform: scale(1.1);
  }

  .navvv {
    width: 80%;
    margin: 0 auto;
    height: 80px;
    line-height: 80px;
  }

  .nav1 {
    padding: 22px
  }

  .nava a {
    display: inline-block;
    margin-left: 35px;
    font-size: 14px;
  }

  .nava a:hover {
    color: #f00
  }

  /* 第四部分 */
  .common4 {
    width: 100%;
    margin: 0 auto;
    background: #f8f8f8;
  }

  .hrr {
    width: 85%;
    height: 1px;
    background: #eee;
    margin: 0 auto;
    margin-bottom: 5px;
  }

  .datils {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }

  .datils>div {
    width: 33%;
    height: 450px;

    margin-bottom: 1rem;
    position: relative;
  }

  .ph3 {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }

  .ph3 h3 {
    display: inline-block;
    margin-top: 2px
  }

  .ph3 span:first-child {
    color: #e13030;
    font-weight: bolder;
    font-size: 22px;
  }

  .colorf00:hover {
    color: #f00
  }

  .juedui {
    position: relative;
    display: block;
  }


  .juedui img {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .juedui h3 {
    position: absolute;
    top: 170px;
    color: #fff;
    left: 5px;
  }

  .carda {
    display: block;
    width: 90%;
    height: 80px;
    padding: 10px 0;
    margin-bottom: 5px;

  }

  .carda img {
    width: 152px;
    height: 82px;
  }

  .carda-title {
    width: 56%;
  }

  .carda-title p:first-child {
    font-size: 16px;
    font-weight: bolder;
  }

  .carda-title p {
    padding: 5px 0;
    color: #666;
    font-size: 16px;

  }

  .carda-title>p>span {
    background: url(../img/index/global_x.png);
    width: 87px;
    height: 21px;
    display: inline-block;
    background-position: 0px 1px;
    vertical-align: middle
  }

  .water {
    display: inline-block;
    background: url(../img/index/global_x.png);
    width: 35px;
    height: 20px;
    background-position: 0 110px;
  }

  .font-orange {
    font-size: 12px;
    color: #f0922e;
  }

  .font-orange span {
    font-size: 25px;
    font-weight: bolder;
  }

  .geren {
    width: 100%;
  }

  .sports {
    list-style: none;
  }

  .sports li {
    float: left;
    padding: 7px;
    position: relative;
  }

  .sports li:hover .opacity1 {
    opacity: 1;
  }

  .opacity1 {
    width: 122px;
    height: 81px;
    position: absolute;
    left: 6px;
    top: 7px;
    background: rgba(101, 101, 101, 0.5);
    color: #ffffff;
    opacity: 0;
    padding: 7px;
  }

  .sports li img {
    width: 134px;
    height: 91px;
  }

  .sports li h3 {
    color: #fff;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 94px;
    text-align: center;
    font-size: 24px;
    color: #fff;
  }

  .class1 {
    padding: 0 30px;
  }

  .class1 li {
    float: left;
    padding: 7px 4px;
    padding-left: 12px;
    width: 42%;
    margin-bottom: 5px;
    height: 70px;
    border-radius: 3px;
    border-left: 3px solid #f45c5c;
    background: #fff;
  }

  .title {
    margin-top: 20px;
    background: #ececec;
    padding: 0 30px;
  }

  .title li {
    text-align: center;
    padding: 7px 4px;
    display: flex;
    justify-content: space-between;
  }

  .title li a {
    display: inline-block;
    width: 75px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #666;
    border-radius: 3px;
  }

  .title li a:hover {
    background: #f45c5c;
    color: #fff
  }

  .f45c5c {
    background: #f45c5c;
    color: #fff !important;
  }

  .qicai div {
    width: 33%;
    height: 130px;
    float: left;
  }

  .qicai div p {
    float: left;
    margin-left: -36px;
  }

  .qicai div img {
    width: 135px;
  }

  #food {
    width: 85%;
    height: 640px;
    margin: 0 auto;

  }

  #food>div {
    width: 33%;
    float: left;
    margin: 3px 2px;
  }

  .food-as {
    margin-top: 2px;
  }

  .food-as>div {
    width: 30%;
    float: left;
    height: 148px;
    margin-left: 1px;

    border: 1px solid #eee;
    overflow: hidden;
  }

  .food-as>div img {
    width: 100px;

  }

  .food-as>div p {
    font-size: 14px;
    margin-top: 22px;
  }

  .judui {
    position: relative;
    width: 90%;
    height: 200px;
    margin: 0 auto;
    border-radius: 5px;

  }

  .judui img {
    width: 100%;
    margin-bottom: 3px;
  }

  .neirongone {
    width: 100%;
    height: 46px;
    padding: 100px 0px 0 0px;
    position: absolute;
    background: -webkit-gradient(linear, left top, left bottom, from(rgba(90, 90, 54, 0)), to(rgba(90, 90, 54, 0.5)));
    background: linear-gradient(rgba(90, 90, 54, 0), rgba(90, 90, 54, 0.5));
    left: 0;
    top: 44px;
    color: #fff;
    overflow: hidden;
    -webkit-transition: .3s;
    transition: .3s;
  }


  .neirongone:hover {
    width: 100%;
    height: 45%;
    background: rgba(60, 58, 52, .9);
    position: absolute;
    top: 0;
  }

  .tubiao {
    width: 100%;
    height: 600px;
  }

  .tubiao a {
    display: inline-block;
    width: 33%;
    height: 160px;
    float: left;
    text-align: center;
    margin-top: 5px;
  }

  .sixDiv {
    width: 85%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  }

  .sixDiv>div {
    width: 33%;
    height: 470px;
    border: 1px solid red;
    float: left;
    margin-right: 2px;
    box-sizing: border-box;
    padding: 0 5px
  }

  .jianshenzhishi {
    width: 100%;
    height: 58px;
    padding: 2px 0px;
    border: 1px solid red;

  }

  .jianshenzhishi a {
    display: inline-block;
    border: 1px solid #f87163;
    color: #f87163;
    font-size: 12px;
    width: 70px;
    height: 20px;
    line-height: 20px;
    border-radius: 3px;
    padding: 2px 3px;
    text-align: center;
    margin: 2px 3px;
  }

  .jianshenzhishi a:hover {
    background: #f87163;
    color: #fff;
  }

  .w100 {
    width: 100%;
    height: 35px;
    line-height: 35px;
  }

  .w100 hr {
    width: 85%;

    border-bottom: 1px solid #e6e6e6;

    /* margin: 0 auto; */
  }

  .w80 {
    width: 85%;
    height: 35px;
    overflow: hidden;
    font-size: 14px;
  }

  .w20 {
    width: 10%;
    font-size: 14px;
  }

  .videoUrl {
    text-align: center
  }

  .videoUrl li {
    width: 40%;
    height: 100px;
    float: left;
    margin: 5px 1px;
  }

  .videoUrl li video {
    width: 100%;
    height: 100px;
  }
  .demo{
    display: inline-block;
    width:200px;
    height: 338px;
    text-align: center;
    line-height: 100px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }
  
  .demo:hover{
    display: block;
  }

</style>