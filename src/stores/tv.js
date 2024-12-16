import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import api from '@/plugins/axios';

export const useTvStore = defineStore('Tv', () => {
  const state = reactive({
    currentTv: {},
  });

  const currentTv = computed(() => state.currentTv);

  const getTvDetail = async (tvId) => {
    const response = await api.get(`Tv/${tvId}`);
    state.currentTv = response.data;
  };

  return { currentTv, getTvDetail };
});
