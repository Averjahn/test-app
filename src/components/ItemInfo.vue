<template>
    <div class="info-container">
      <div class="info-card">
        <h2 class="id">ID: {{ store.selectedItem.id }}</h2>
        <h2 class="title">Title: {{ store.selectedItem.title }}</h2>
        <p>Discription: {{ store.selectedItem.body }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
    import { useInfoStore } from '@/stores/info';

    const store = useInfoStore();
  
  
  </script>
  <style scoped>
  .info-container {
    border-radius: 15px;
  }
  .info-card {
    font-family: 'Nevd';
    border-radius: 0 15px 15px 0;
    height: 100%;
    padding: 20px;
  }
  .info-card h2 {
    font-size: 52px;
    margin: 0;
    margin-bottom: 10px;
  }
  .info-card p {
    font-size: 48px;
    color: #7e0000;
  }

  .id {
    color: #046b00;
  }

  .title {
    height: 200px;
    color: #976700; 
  }

  @media (max-width: 768px) {
    .info-card h2 {
      font-size: 38px;
    }
    .info-card p {
      font-size: 38px;
    }
    .title {
      height: 150px;
    }
  }

  @media (max-width: 570px) {
    .info-card h2 {
      font-size: 28px;
    }
    .info-card p {
      font-size: 28px;
    }
  }
</style>