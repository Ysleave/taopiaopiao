export default {
    path : '/movie',
    component:() => import('@/views/movie'),
    //二级路由 
    children:[
        {
            path:'city',
            component:() => import('@/components/City')
        },
        {
            path:'playing',
            component:() => import('@/components/Playing')
        },
        {
            path:'coming',
            component:() => import('@/components/Coming')
        },
        {
            path:'search',
            component:() => import('@/components/Search')
        },
        {
            path:'/movie',
            redirect: '/movie/playing'
        }
    ]
}