<template>
<div>
  <el-scrollbar class="scrollbar">
    <div class="cards">
       <ItemButton 
          v-for="item in store.items" 
          :key="item.id" 
          :item="item"
          
        />
    </div>
  </el-scrollbar>
</div>
</template>

<script>
import ItemButton from './ItemButton.vue';
import { useInfoStore } from "@/stores/info";

export default {
  components: {
    ItemButton
  },

  setup() {
    const store = useInfoStore();
    return {store}  
  }
};
</script>

<style lang="scss" scoped>
  .scrollbar {
    height: 90vh;
    width: 100%;
    border-radius: 15px 0 0 15px;
  }
  .cards {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  @media (max-width: 768px) {
    .cards {
    padding: 10px;
  }
  .scrollbar {
    height: 95vh;
  }
  }
</style>
