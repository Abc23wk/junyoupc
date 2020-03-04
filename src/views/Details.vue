<template>
  <div id="app">
    <el-carousel :interval="5000" arrow="always" class="banner">
      <el-carousel-item v-for="item in images" :key="item.id" class="banner">
        <img :src="item.bannerurl" alt class="banner" />
      </el-carousel-item>
    </el-carousel>
    <div class="main">
      <el-page-header @back="goBack" content="首页" class="Back"></el-page-header>
      <el-tabs tab-position="left" @tab-click="handleClick">
        <el-tab-pane label="常见问题">
          <h1>常见问题</h1>
          <div>
            <span style="font-size:14px;">
              <span style="color:#696969;">
                <span style="font-size:16px;">
                  <strong>【如何通过其它方式联系到客服】</strong>
                </span>
                <br />
                <b>1：</b>PC端在线咨询：打开网址：,
                <a href="https://junyouvip.cn">https://junyouvip.cn</a> ，点击右边的在线咨询。
                <br />
                <b>2：</b>官方邮箱：admin@junyouvip.com
                <br />
                <b>3：</b>咨询QQ：3011693230、2304354204
                <br />
                <b>4：</b>联系电话：13414577855、13413171385、15816497832、15816324956
                <br />
              </span>
            </span>
            <br />
            <span style="font-size:14px;">
              <span style="color:#696969;">
                <span style="font-size:16px;">
                  <strong>【如何发布高质量的职位】</strong>
                </span>
                <br />
                <b>职位名称：</b>请准确填写职位名称，不要填写无关信息，发布后职位名称尽量不要修改，以免求职者投递前后职位名称不一样。
                <br />
                <b>职位描述：</b>请详细描述岗位职责与任职条件，还可以添加福利待遇，晋升信息，交通信息等内容。（注：编写职位描述的时候，请勿输入公司邮箱，联系电话以及外链，请不要包含性别歧视语）
                <br />
              </span>
            </span>
            <br />
            <span style="font-size:14px;">
              <span style="color:#696969;">
                <span style="font-size:16px;">
                  <strong>【为什么企业信息审核不通过】</strong>
                </span>
                <br />
                <b>企业信息审核不通过的原因如下：</b>
                <br />• 单位证照太模糊
                <br />• 单位证照已过期
                <br />• 单位证照主营范围不符
                <br />• 单位证照有水印或备注等无关信息
                <br />• 单位名称与单位证照不符
                <br />• 不是单位审核所需证照
                <br />• 在工商信用网异常目录中
                <br />• 其它原因导致审核不通过，请咨询客服。
                <br />
              </span>
            </span>
            <br />
            <span style="font-size:14px;">
              <span style="color:#696969;">
                <span style="font-size:16px;">
                  <strong>【如何查看我或者别人发布的信息】</strong>
                </span>
                <br />
                <b>您可扫码下载个人用户端，在个人用户端查看自己/其它企业发布的职位或企业信息。</b>
                <br />
                <img src="../../static/download.png" alt />
              </span>
            </span>
            <br />
            <span style="font-size:14px;">
              <span style="color:#696969;">
                <span style="font-size:16px;">
                  <strong>【企业/职位信息，多久可以通过审核】</strong>
                </span>
                <br />• 信息提交后，我们会在24小时内审核，节假日除外。
                <br />• 为确保您的信息能正常过审，编写职位描述的时候，请勿输入公司邮箱，联系电话以及外链，请不要包含性别歧视语。
                <br />
              </span>
            </span>
            <br />
            <span style="font-size:14px;">
              <span style="color:#696969;">
                <span style="font-size:16px;">
                  <strong>【如何提升招聘职位的曝光】</strong>
                </span>
                <br />职位发布后，担心帖子会沉下去？你可以点击该职位信息中的设置，点击刷新即可，无需重新发布职位。
                <br />
                <img src="../../static/dis1.png" alt />
                <br />
                <img src="../../static/dis2.png" alt />
                <br />
              </span>
            </span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="法律声明">
          <h1>法律声明</h1>
        </el-tab-pane>
        <el-tab-pane label="隐私声音">
          <h1>隐私声音</h1>
        </el-tab-pane>
        <el-tab-pane label="企业介绍">
          <h1>企业介绍</h1>
          <div class="about_foot2">
            <p></p>
            <div>&nbsp;</div>
            <span style="font-size:14px;">
              <span style="color:#696969;">军优会，广东天润网科技有限公司旗下退役军人专属一站式综合服务互联网共享公益平台。</span>
            </span>
            <span style="font-size:14px;">
              <span
                style="color:#696969;"
              >军优会在退役军人管理事务部门和爱国拥军促进会的支持下，以公益为目的，通过最新的互联网科技，整合各行业资源，同步各地区拥军优属信息，以“互联网+拥军优属”服务模式，汇聚天下之爱心，共享社会之责任，为军属排忧解难，免军人后顾之忧。</span>
            </span>
            <br />
            <br />
            <div>
              <span style="font-size:16px;">
                <span style="color:#696969;">
                  <p style="text-align:center">
                    <a href="http://t.cn/AiDjCSgc">军优会企业宣传片点击查看</a>
                  </p>
                </span>
              </span>
            </div>
            <br />
            <span style="font-size:16px;">
              <span style="color:#696969;">
                <strong>【功能板块】</strong>
              </span>
            </span>
            <br />
            <span style="font-size:14px;">
              <span style="color:#696969;">
                <b>军优资讯：</b>最新的拥军优属新闻报道、政策解读、各地方动态、通知公告、优待抚恤条例等，提供全面的退役军人、军烈属办事指南。
                <br />
                <b>军优就业：</b>联合大型人才服务中心，免费提供全国各地的名企优质岗位，结合线下就业基地，帮扶退役军人、军烈属快速线上应聘就业，线下无忧创业。
                <br />
                <b>军优商城：</b>布局线上商城和线下实体店的新零售商业模式，联合国内多个品牌商，为军人军属提供低于市场价20%以上的优质商品。线上直接交易，线下体验，100%正品，对军人军属天天有折扣！
                <br />
                <b>军优特惠：</b>平台下单，线下体验或办理。为军人军属提供银行、通讯、酒店、餐饮、医疗、保险、教育、出行、房车等综合性生活服务。优惠套餐，特价尊享，优先服务。
                <br />
                <b>惠军企业：</b>展示拥军优属企业的图文宣传信息、产品信息、服务内容等，彰显公益精神，提升企业的品牌形象和价值。
                <br />&nbsp;
                <br />
                <span style="font-size:16px;">
                  <strong>【平台特色】</strong>
                </span>
                <br />
                <b>互联网+实业：</b>线上开发PC端网站、APP、小程序、微信公众号等互联网产品，全网覆盖，整合营销；线下新零售商城、就业培训基地、后勤服务中心等实体项目同步线上推广，帮扶创业就业。
                <br />
                <b>专业性：</b>组建专业的互联网开发技术团队，二十多年的平台运营推广经验，专业的退役军人参与线下项目运营管理，提供专业的线上线下服务。
                <br />
                <b>专属性：</b>军优会是退役军人、军属军烈属的专属平台。入驻平台的商户都要经过资质审核，择优甄选；享受平台优惠的用户也要通过军人身份认证，严格把关。
                <br />
                <b>公益性：</b>平台以公益为主，不以营利为目的。商家免费入驻，履行拥军优属责任；军人军属无条件享受优惠优先优待服务，平台绝不向军人军属谋一分之利。
                <br />
                <b>共享性：</b>平台共享政策资讯，共享社会资源，共享各行各业的优抚优待优惠优先，突破局限性，让全国各个地区的退役军人军属尽量享受同等的福利待遇。
                <br />&nbsp;
                <br />
                <span style="font-size:16px;">
                  <strong>【平台优势】</strong>
                </span>
                <br />
                <b>政策优势：</b>拥军优属是维护**长治久安、社会稳定、经济发展的重要工作之一，**号召，政策支持，**大习主席提出：“让军人成为全社会最尊崇的职业”。军优会顺势而为！
                <br />
                <b>环境优势：</b>拥军优属、拥政爱民的政策已经得到了*社会的认可，双拥活动蓬勃兴起，持久不衰，广大军民在经济建设的主战场上通力合作，军政军民团结显示了强大的力量。军优会应势而发！
                <br />
                <b>公益优势：</b>军优会推行“互联网+公益”拥军优属模式，践行社会责任，为行业作出公益表率，助推全社会形成拥军优属新风尚。
                <br />
                <b>模式优势：</b>以线下商务结合互联网的O2O模式为基础，布局军优商城的新零售模式，规划军优创就业的线下培训就业基地（兵哥配送项目）+线上招聘的新型创业就业平台。
                <br />
                <b>资源优势：</b>优质的军政资源、企业资源、社会资源相结合，携手中国联通、中国移动、中国电信、中国建设银行、中国工商银行、中国平安银行、平安保险、中国石化、中国石油、沃尔玛、富绅集团等国内行业巨头，洽谈意向合作商8000多家，服务5700万的现有退役军人和3亿多的军烈属用户。
                <br />
                <b>品牌优势：</b>在军优网平台，企业的品牌将因公益而提升，产品的销量会因慈善而暴涨，有付出才能有收获，有奉献就会美名远扬，入驻军优的企业将永载爱国拥军史册！
                <br />&nbsp;
                <br />
                <span style="font-size:16px;">
                  <strong>【企业文化】</strong>
                </span>
                <br />
                <b>企业愿景：</b>爱*拥军，让军人成为全社会最尊崇的职业
                <br />
                <b>企业使命：</b>让退役军人过上美好幸福的生活
                <br />
                <b>企业精神：</b>敬业，创新，务实，高效
                <br />
                <b>价值观念：</b>主人翁，责任感，感恩，奉献
                <br />
                <b>经营理念：</b>弘扬公益精神，践行拥军责任
                <br />
                <b>服务宗旨：</b>遵纪守法，诚实有信，正道经营，互助共赢
              </span>
            </span>
            <br />
            <br />
            <span style="font-size:14px;">
              <span style="color:#696969;">
                <span style="font-size:16px;">
                  <strong>【创始人】</strong>
                </span>
                <br />叶军舰，湖北随州人，出生在部队，长大在军营，父母都是军人，他从小耳濡目染，立志长大后参军报国。可惜后来当兵心愿未能实现，作为一个骨子里有着爱国拥军情怀的军二代，在商海沉浮二三十年获得初步成功后，重拾昔日梦想，以一腔热血搭建了军优会公益平台，拥军优属，拥政爱民，弘扬公益精神，践行社会责任。
              </span>
            </span>
            <br />
            <br />
            <p></p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="联系方式">
          <h1>联系方式</h1>
        </el-tab-pane>
        <el-tab-pane label="公司地址">
          <h1>公司地址</h1>
          <!-- 地图 -->
          <baidu-map
            class="bm-view"
            center="惠州"
            :zoom="zoom"
            @ready="handler"
            :scroll-wheel-zoom="true"
            ak="4lV2k0WfbldNGwlmHxO4sBhM09SU8QnN"
          >
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-marker
              :position="{lng: 114.421833, lat: 23.10859}"
              :dragging="true"
              animation="BMAP_ANIMATION_BOUNCE"
            >
              <bm-label
                content="天润网科技有限公司"
                :labelStyle="labelStyle"
                :offset="{width: -75, height: 30}"
              />
            </bm-marker>
            <bm-geolocation
              anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
              :showAddressBar="true"
              :autoLocation="true"
            ></bm-geolocation>
            
            <bm-copyright
              anchor="BMAP_ANCHOR_TOP_RIGHT"
              :copyright="[{id: 1, content: '中国军优会', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>我是版权信息</a>'}]"
            ></bm-copyright>
          </baidu-map>
          <div style="font-size:16px;margin:20px 0">
            <strong style="text-align: center;">官方邮箱：</strong>
            <span style="text-align: center;">
              <a href="mailto:admin@junyouvip.com">admin@junyouvip.com</a> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
            </span>
            <strong style="text-align: center;">公司地址：</strong>
            <span style="text-align: center;">
              广东省惠州市江北文昌一路7号华贸大厦1单元2805&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <strong>客服电话：</strong>
            </span>
            <a href="tel:0752-2235636">0752-2235636</a>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <top>123</top>
  </div>
</template>

<script>
import top from '../components/Top';
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import { BmScale,BmMarker,BmLabel,BmGeolocation,BmCopyright } from "vue-baidu-map";
export default {
  name: "App",
  components: {
    top,
    BaiduMap,
    BmScale,
    BmMarker,
    BmLabel,
    BmGeolocation,
    BmCopyright
  },
  data() {
    return {
      images: [
        { bannerurl: "../../static/banner1.png", id: 1 },
        { bannerurl: "../../static/banner2.png", id: 2 },
        { bannerurl: "../../static/banner3.png", id: 3 }
      ],
      center: { lng: 114.421833, lat: 23.10859 }, //经度、纬度
      zoom: 14,
      labelStyle: { color: "red", fontSize: "18px" }
    };
  },
  created() {},
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 116.404;
      this.center.lat = 39.915;
      this.zoom = 15;
    },
    handleClick(e) {
      console.log(e);
    },
    goBack() {
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="less" scoped>

#app {
  /deep/
    .el-page-header__left{
    color: #409EFF;
    font-weight: 600;
    font-size: 50px
  }
  .bm-view {
    width: 95%;
    height: 460px;
    margin-top: 30px;
  }
  .main {
    width: 1200px;
    margin: 20px auto;
    background: #ffffff;
    a {
      list-style: none;
      text-decoration: none;
      color: #000;
    }
    h1 {
      text-align: center;
    }
    strong {
      margin-top: 30px;
      display: inline-block;
    }
    img {
      text-align: center;
      margin: 0 auto;
      display: block;
    }
    span {
      line-height: 30px;
    }
    .Back {
      padding: 20px 0 20px 25px;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .banner {
    height: 470px;
  }
}

</style>
