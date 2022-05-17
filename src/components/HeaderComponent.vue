<template>
  <div class="header">
    <div class="header__main">
      <div class="btn" @click="openModelAddFolder">Создать Папку</div>
      <div class="btn" @click="delFolder">Удалить Папку</div>
      <div class="btn" @click="uploadFile">Загрузить файл</div>
      <div class="btn" @click="downloadFile">Скачать файл</div>
      <div class="btn" @click="deleteFile">Удалить файл</div>
      <div class="btn" @click="rename">Переименовать</div>
    </div>
    <Teleport to="body">
      <ModalComponent :show="showModal" :add="addFolder" @close="closeModel"></ModalComponent>
    </Teleport>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import ModalComponent from "@/components/ModalComponent";
import GeneratorUID from "@/utils/genUid";


export default {
  name: "HeaderComponent",
  components: {ModalComponent},
  data(){
    return{
      showModal: false,
    }
  },
  methods:{
    closeModel(){
      this.showModal = false
    },
    openModelAddFolder(){
      this.showModal = true
    },
    addFolder(name){
      console.log(name)
      if(name){
        this.showModal = false
        this.setFolder({id: GeneratorUID(), name, children:[]})
      }
    },
    delFolder(){
      console.log('delFolder')
    },
    uploadFile(){
      console.log('uploadFile')
    },
    downloadFile(){
      console.log('downloadFile')
    },
    deleteFile(){
      console.log('deleteFile')
    },
    rename(){
      console.log('rename')
    },
    ...mapMutations({
      setFolder: 'fileManager/setFolder'
    }),
  }
}
</script>

<style scoped>
.header{
}
.header__main{
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  background: #e0e0e0;
}
.btn{
  height: 30px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  border-radius: 4px;
}
</style>