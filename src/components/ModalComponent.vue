<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">Создать папку</div>
          <div class="modal-body">
            <input class="modal-input" placeholder="Введите название" v-model="name">
          </div>
          <div class="modal-footer">
            <button class="modal-default-button" @click="add(name)">Добавить</button>
            <button class="modal-default-button" @click="$emit('close')">Отменить</button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    show: Boolean,
    add: Function
  },
  data(){
    return {
      name: ''
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}
.modal-input{
  height: 30px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #b9b9b9;
  box-sizing: border-box;
  border-radius: 4px;
}
.modal-footer{
  margin: 10px 0;
  display: flex;
  justify-content: end;
}
.modal-default-button {
  margin-left: 10px;
}


.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>