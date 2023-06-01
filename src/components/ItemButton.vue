<template>
  <el-card 
    class="box-card"
    :class="{ 'selected': isSelected }" 
    @click="onClick"
  >
          <div class="text item">Item-{{ item.id }}</div>
  </el-card>
</template>

<script setup>
  import { useInfoStore } from '@/stores/info';
  import { computed } from 'vue'

  const store = useInfoStore();

  const props = defineProps({
      item: Object,
  })

  const isSelected = computed(() => store.selectedItemId === props.item.id)

  const onClick = () => {
      store.selectItem(props.item);
  }
</script>

<style>
.text {
font-size: 16px;
}

.item {
      padding: 8px 0;
    }

.box-card {
background-color: #f9f9f9;
margin: 0 auto;
width: 80%;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;
}

.box-card:hover {
transform: scale(1.05);
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

.box-card.selected {
background-color: #fde498; 
}

@media (max-width: 768px) {
    .item {
      padding: 0;
    }
    .box-card {
      width: 100%;
    }
  }

  @media (max-width: 570px) {
    .item {
      padding: 0;
    }
    .box-card {
      width: 100%;
    }
  }
</style>
