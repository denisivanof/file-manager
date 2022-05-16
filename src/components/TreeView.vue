<template>
  <li class="li-item">
    <div class="item_name" @click="toggle" @mouseover="OnMouseover" @mouseout="OnMouseout">
      <span class="material-symbols-outlined" style="margin-right: 5px">
        {{ model.file ? model.file : isOpen ? 'folder_open':'folder' }}
      </span>
      {{ model.name }}
    </div>
    <div class="info" v-if="isMouseover">{{model.info}}</div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeView
          class="item"
          v-for="model in model.children"
          :key="model"
          :model="model">
      </TreeView>
    </ul>
  </li>
</template>

<script>
export default {
  name: "TreeView",
  props: {
    model: Object
  },
  data() {
    return {
      isOpen: false,
      isMouseover: false
    }
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    OnMouseover(){
     this.isMouseover = true
    },
    OnMouseout(){
      this.isMouseover = false
    }
  }
}
</script>

<style scoped>
.info{
  position: absolute;
  right: 10px;
  background: #d8e7f6;
  border-radius: 4px;
  height: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item {
  cursor: pointer;
  line-height: 1.5;
}
.li-item{
  position: relative;
  margin-left: 10px;
}
.item_name:hover{
  background: #e0e0e0;
}
.item_name{
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 5px;
}
</style>