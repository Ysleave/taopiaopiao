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
            path : 'detail/1/:movieId',
            components: {
                default:()=> import('@/components/Playing'),
                detail : () => import('@/views/movie/detail')
            },
            props:{
                detail:true
            }
        },
        {
            path : 'detail/2/:movieId',
            components: {
                default:()=> import('@/components/Coming'),
                detail : () => import('@/views/movie/detail')
            },
            props:{
                detail:true
            }
        },
        {
            path:'/movie',
            redirect: '/movie/playing'
        }
    ]
}