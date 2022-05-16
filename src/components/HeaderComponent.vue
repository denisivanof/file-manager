<template>
  <div class="header">
    <div class="header__main">
      <div class="btn" @click="addFolder">Создать Папку</div>
      <div class="btn" @click="delFolder">Удалить Папку</div>
      <div class="btn" @click="uploadFile">Загрузить файл</div>
      <div class="btn" @click="downloadFile">Скачать файл</div>
      <div class="btn" @click="deleteFile">Удалить файл</div>
      <div class="btn" @click="rename">Переименовать</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data(){
    return{

    }
  },
  methods:{
    addFolder(){
      console.log('addFolder')
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