const state = {
    treeData: {
        id: 'bbbca704-8a54-4995-aa58-eec10e29d77c',
        name: 'My Tree',
        info: 'info',
        children: [
            { id: '4065dac5-cfbc-4e2b-93fb-051be70a4be5', name: 'wat',info: 'info' },
            {
                id: '69703720-502f-400d-a24d-7aff798ba9ad',
                name: 'child folder',
                info: 'info',
                children: [
                    {id: 'fd5868e7-2904-40b6-9cf9-e536bcc42c29',name: 'index.html', file: 'html',info: 'index.html'},
                    {id: '544f6556-b22c-4927-a893-8beb4267bfac',name: 'index.js', file: 'javascript',info: 'index.js'},
                    {id: 'b787992e-9cbe-40a1-a9bb-a75a328c5d73',name: 'style.css', file: 'css',info: 'style.css'},
                    {id: '3d0a5c8e-2702-4887-afde-78bd25bd16df', name: 'hello' ,info: 'info', children:[]},
                ]
            }
        ]
    },
    select: null,
    treeDataX: {
        tree: ['1'],
        data: [
            {
                id: 1,
                name: 'My Tree',
                type: 'folder',
                info: 'info',
                children: ['2','3']
            },
            { id: 2, name: 'wat', type: 'folder',info: 'info' },
            {
                id: 3,
                name: 'child folder',
                info: 'info',
                type: 'folder',
                children: ['4','5','6','7']
            },
            {id: 4, name: 'index.html', file: 'html',info: 'index.html'},
            {id: 5, name: 'index.js', file: 'javascript',info: 'index.js'},
            {id: 6, name: 'style.css', file: 'css',info: 'style.css'},
            {id: 7, name: 'hello' ,info: 'info', type: 'folder', children:[]},
        ]
    },

};

const getters = {};

const mutations = {
    selectItem: (state, val)=>state.select= val,
    setFolder: (state, val)=>{
        let data = state.treeData
        let id = state.select
        const setData = (data, id) => {
          if(data.id === id){
              data.children.push(val)
          } else{
              if(data.children){
                  data.children.forEach(item=>{
                      setData(item, id)
                  })
              }
          }
        }
        setData(data, id)
    },
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};