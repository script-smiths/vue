// src/members/cm/router/index.js
import CmHome from '@/members/cm/views/CmHome.vue'
import DataBinding from '@/members/cm/views/DataBinding.vue'


const cmRoutes = [
    { path: '/cm', name: 'CmHome', component: CmHome },
    { path: '/cm/databinding', name: 'DataBinding', component: DataBinding },

]

export default cmRoutes
