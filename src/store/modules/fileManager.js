const state = {

    files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
    },
    tree: [],
    items: [
        {
            name: '.git',
        },
        {
            name: 'node_modules',
        },
        {
            name: 'public',
            children: [
                {
                    name: 'static',
                    children: [{
                        name: 'logo.png',
                        file: 'png',
                    }],
                },
                {
                    name: 'favicon.ico',
                    file: 'png',
                },
                {
                    name: 'index.html',
                    file: 'html',
                },
            ],
        },
        {
            name: '.gitignore',
            file: 'txt',
        },
        {
            name: 'babel.config.js',
            file: 'js',
        },
        {
            name: 'package.json',
            file: 'json',
        },
        {
            name: 'README.md',
            file: 'md',
        },
        {
            name: 'vue.config.js',
            file: 'js',
        },
        {
            name: 'yarn.lock',
            file: 'txt',
        },
    ],
    treeData: {
        name: 'My Tree',
        info: 'info',
        children: [
            { name: 'hello', info: 'info'},
            { name: 'wat',info: 'info' },
            {
                name: 'child folder',
                info: 'info',
                children: [
                    {name: 'index.html', file: 'html',info: 'index.html'},
                    {name: 'index.js', file: 'javascript',info: 'index.js'},
                    {name: 'style.css', file: 'css',info: 'style.css'},
                    { name: 'hello' ,info: 'info'},
                ]
            }
        ]
    },

};

const getters = {};

const mutations = {

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