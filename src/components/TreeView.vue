<template>
  <li class="li-item">
    <div class="item_name"
         :class="{item_name_select: isSelect(model.id)}"
         @dblclick="toggle"
         @click="selectItem(model.id)"
         @mouseover="OnMouseover"
         @mouseout="OnMouseout">
      <span class="material-symbols-outlined" style="margin-right: 5px" @click="toggle">
        {{ model.file ? model.file : isOpen ? 'folder_open':'folder' }}
      </span>
      {{ model.name }}
    </div>
    <div class="info" v-if="isMouseover">{{model.info}}</div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeView
          :select="select"
          :selectItem="selectItem"
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
    model: Object,
    select: String,
    selectItem: Function
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
    isSelect(name){
      return name === this.select
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
  background: #eaeaea;
}
.item_name_select{
  background: #cbcbcb;
}
.item_name{
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 5px;
}
</style>