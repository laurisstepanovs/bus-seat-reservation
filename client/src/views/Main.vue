<template>
    <div><router-link to="/bus/1" class="bus-card-wrapper bus-wrapper-1">
      <div class="bus-card-bg">
          <div class="bus-card">
        1
      </div>
      </div>
    </router-link>
    <router-link to="/bus/2" class="bus-card-wrapper bus-wrapper-2">
       <div class="bus-card-bg">
          <div class="bus-card">
        2
      </div>
      </div>
    </router-link>
    <router-link to="/bus/3" class="bus-card-wrapper bus-wrapper-3">
       <div class="bus-card-bg">
          <div class="bus-card">
        3
      </div>
      </div>
    </router-link></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'main',
  components: {},
});
</script>
