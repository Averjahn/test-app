import axios from 'axios';
import { defineStore } from 'pinia';

export const useInfoStore = defineStore("info", {
  state: () => ({
    items: [],
    selectedItem: {},
    selectedItemId: null,
    showInfo: false
  }),
  actions: {
    async getInfo() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      this.items = res.data.slice(0, 100);
    },
    selectItem(item) {
      this.selectedItem = item;
      this.selectedItemId = item.id;
      this.showInfo = true;
    }
  }
});


