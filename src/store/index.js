import { createStore } from 'vuex'
import fileManager from "@/store/modules/fileManager";


const store = createStore({
    modules: {
        fileManager
    }
})

export default store

