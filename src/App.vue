<template>
  <div v-if="!store.isLoading">
    <el-container class="container">
        <el-row class="content">
          <ItemsList class="items-list"/>
          <ItemInfo class="item-info"
            v-if="store.showInfo" 
          />
        </el-row>
    </el-container>
  </div>
</template>

<script>
  import { useInfoStore } from './stores/info';
  import { defineAsyncComponent, onMounted } from 'vue';
  import ItemsList from './components/ItemsList.vue';
  const ItemInfo = defineAsyncComponent(() => import('./components/ItemInfo.vue'))

  export default{

    components: {
      ItemsList,
      ItemInfo
    },

    setup() {
      const store = useInfoStore();
      onMounted(() => {
        store.getInfo();
      }) 
      return {
        store
      }
    }
  } 
</script>
<style>
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdcece;
  }
  .content {
    display: flex;
    flex-direction: row;
    height: 90%;
    width: 80%;
    background-color: #fff;
    border-radius: 15px;
  }
  .items-list {
    width: 40%;
  }
  .item-info {
    width: 60%;
  }

  @media (max-width: 768px) {
    .content {
      width: 95%;
      height: 95%;
    }
  }
</style>
