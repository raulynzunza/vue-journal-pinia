<template>
  <button class="btn btn-primary"> 
    <i class="fa fa-2x" :class="icon"></i>
  </button>
</template>

<script>
import { useCounterStore } from "../stores/journal/index";
export default {
  props:{
    icon: {
      type: String,
      default: 'fa-plus'
    }
  },
  created(){
    useCounterStore()
  }

}
</script>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    bottom: 20px;
    height: 60px;
    position: fixed;
    right: 20px;
    width: 60px;
}
</style>