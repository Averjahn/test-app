<template>
  <el-container style="height: 100vh;">
    <el-main>
      <el-row>
        <el-scrollbar>
          <el-card class="box-card">
            <div 
              v-for="item in items" 
              :key="item.id" 
              :class="{ 'item-selected': selectedItem && selectedItem.id === item.id }" 
              @click="selectItem(item)" 
              class="item"
              >
              <h4>Item-{{ item.id }}</h4>
            </div>
          </el-card>
        </el-scrollbar>
        <el-col :span="16">
          <el-card>
            <h2 v-if="selectedItem">ID: {{ selectedItem.id }}</h2>
            <h2 v-if="selectedItem">Title: {{ selectedItem.title }}</h2>
            <h2 v-if="selectedItem">Discription: {{ selectedItem.body }}</h2>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const items = ref([]);
    const selectedItem = ref(null);

    const selectItem = item => {
      selectedItem.value = item;
    };

    onMounted(async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      items.value = res.data.slice(0, 100);
    });

    return {
      items,
      selectedItem,
      selectItem
    };
  }
};
</script>

<style scoped>

.box-card {
  overflow: auto;
  height: 90vh;
  width: 35rem;
  text-align: center;
}

.item {
  cursor: pointer;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding-bottom: 10px;
}

.item-selected {
  background-color: #9b9b9b;
}
</style>
