// src/members/cm/router/index.js
import CmHome from '@/members/cm/views/CmHome.vue'
import DataBinding from '@/members/cm/views/DataBinding.vue'
import DataBindingList from '@/members/cm/views/DataBindingList2.vue'
import NestedComponent from '@/members/cm/views/NestedComponent.vue'


const cmRoutes = [
    { path: '/cm', name: 'CmHome', component: CmHome },
    { path: '/cm/databinding', name: 'DataBinding', component: DataBinding },
    { path: '/cm/databindinglist', name: 'DataBindingList', component: DataBindingList },
    { path: '/cm/nestedcomponenet', name: 'NestedComponent', component: NestedComponent },


]

export default cmRoutes