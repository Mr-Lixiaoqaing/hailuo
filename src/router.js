import Vue from 'vue'
import Router from 'vue-router'
import Detail from './views/detail'
import Booked from './views/booked'
import Index from './views/index'
import List from './views/list'
import Login from './views/Login'
import Reg from './views/Reg'
import NotFind from './views/Notfind'
Vue.use(Router)

export default new Router({
    routes:
        [  
            {
                path: "/booked", 
                component: Booked
            },
            {
                path: "/",
                component: Index
            },
            {
                path:'/detail',
                component:Detail
            },
            {
                path: '/list',
                component:List,
                props: true

            },
            {
                path: "/Login",
                component: Login
            }, {
                path: "/Reg",
                component: Reg
            },{
                path:'*',
                component:NotFind
            }
            
        ]
        


    
})