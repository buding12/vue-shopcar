<template>
  <div>
    <!-- 使用各个组件 -->
    <MyHeader background="orange" title="购物车案例"></MyHeader>
    <MyFooter @changeAll="allFn" :arr="list"></MyFooter>
    <div class="main">
      <MyGoods v-for="obj in list" :key="obj.id" :gObj="obj"></MyGoods>
    </div>
  </div>
</template>

<script>
// 将各个组件引入到App.vue
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyGoods from "./components/MyGoods.vue";
export default {
  data() {
    return {
      list: [], //所有商品数据
    };
  },
  created() {
    // 直接使用全局的axios
    this.$axios({
      url: "/api/cart",
    }).then((res) => {
      console.log(res);
      this.list = res.data.list;
    });
  },
 
  methods: {
    allFn(bool) {
      this.list.forEach((obj) => (obj.goods_state = bool));
    },
  },
  //  注册各个组件
  components: {
    MyHeader,
    MyFooter,
    MyGoods,
  },
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
