/**
当页面超过屏幕时候 ，footer在页面末尾
当页面 没有超过时候，footer在页面底部
*/

<template>
  <div class="wrapper">
    <div class="content">
      <div class="details">
        2018年11月5日习近平总书记于宣布将在上海证券交易所设立科创板并试点注册制。这是党中央根据当前世界经济金融形势，立足全国改革开放大局作出的重大战略部署，是资本市场的重大制度创新，是完善我国多层次资本市场体系的重大举措。 科创板旨在补齐资本市场服务科技创新的短板，是资本市场的增量改革，将在盈利状况、股权结构等方面作出更为妥善的差异化安排，增强对创新企业的包容性和适应性。 科创板在发行上市审核制度、交易规则、信息披露、风险等方面与主板、创业板、中小板等有明显区别。 投资者在开通科创板权限前，应先接受投资者教育。您可以点击
       ，立足全国改革开放大局作出的重大战略部署，是资本市场的重大制度创新，是完善我国多层次资本市场体系的重大举措。 科创板旨在补齐资本市场服务科技创新的短板，是资本市场的增量改革，将在盈利状况、股权结构等方面作出更为妥善的差异化安排，增强对创新企业的包容性和适应性。 科创板在发行上市审核制度、交易规则、信息披露、风险等方面与主板、创业板、中小板等有明显区别。 投资者在开通科创板权限前，应先接受投资者教育。您可以点击

      </div>
    </div>
    <div class="btn" @click="_back">返回</div>

  </div>

</template>

<script>
  export default {
    name: "stickFooter",
    methods: {
      _back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

  .wrapper {
    margin: 0;
    padding: 0;
     display: flex;
    height: 100%;
     flex-direction: column;
  }

  .content {
    /*min-height: 100%;*/
    flex:1 ;
  }

  .details {
    padding-bottom: 64px;
    zoom: 1;
    background-color: wheat;
  }
  .btn {
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: brown;
    color: white;
    flex: none;
    font-size: 16px;
  }
</style>
