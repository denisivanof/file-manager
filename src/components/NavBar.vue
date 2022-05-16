<template>
<div class="navBar">
  <ul>
    <TreeView class="item" :model="treeData"></TreeView>
  </ul>
</div>
</template>

<script>

import TreeView from "@/components/TreeView";
import {mapState} from "vuex";

export default {
  name: "NavBar",
  components: {TreeView},
  data(){
    return{
    }
  },
  methods: {
  },
  computed:{
    ...mapState({
      treeData: state => state.fileManager.treeData
    })
  }
}
</script>

<style scoped>
.navBar{
  background: #f8f7f7;
  width: 300px;
  height: 100%;
  max-height: 600px;
  padding-left: 50px;
}
</style>