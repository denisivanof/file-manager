<template>
<div class="navBar">
  <ul>
    <TreeView class="item" :model="treeData" :selectItem="selectItem" :select="select"></TreeView>
  </ul>
</div>
</template>

<script>

import TreeView from "@/components/TreeView";
import {mapMutations, mapState} from "vuex";

export default {
  name: "NavBar",
  components: {TreeView},
  data(){
    return{
    }
  },
  methods: {
    ...mapMutations({
      selectItem: 'fileManager/selectItem'
    }),
  },
  computed:{
    ...mapState({
      treeData: state => state.fileManager.treeData,
      select: state => state.fileManager.select
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