// src/members/cm/router/index.js
import CmHome from '@/members/cm/views/CmHome.vue'
import DataBinding from '@/members/cm/views/DataBinding.vue'
import DataBindingList from '@/members/cm/views/DataBindingList2.vue'

const cmRoutes = [
    { path: '/cm', name: 'CmHome', component: CmHome },
    { path: '/cm/databinding', name: 'DataBinding', component: DataBinding },
    { path: '/cm/databindinglist', name: 'DataBindingList', component: DataBindingList },

]

export default cmRoutes
