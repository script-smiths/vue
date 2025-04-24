// src/members/cm/router/index.js
import CmHome from '@/members/cm/views/CmHome.vue'
import DataBinding from '@/members/cm/views/DataBinding.vue'
import DataBindingList from '@/members/cm/views/DataBindingList2.vue'
import NestedComponent from '@/members/cm/views/NestedComponent.vue'
import ParentView from '@/members/cm/views/ParentView.vue'
import EmitParent from '@/members/cm/views/EmitParent.vue'
import ModelParent from '@/members/cm/views/ModelParent.vue'
import SlotUseModalLayout from '@/members/cm/views/SlotUseModalLayout.vue'
import ParentPage from '@/members/cm/views/ParentPage.vue'

const cmRoutes = [
    { path: '/cm', name: 'CmHome', component: CmHome },
    { path: '/cm/databinding', name: 'DataBinding', component: DataBinding },
    { path: '/cm/databindinglist', name: 'DataBindingList', component: DataBindingList },
    { path: '/cm/nestedcomponenet', name: 'NestedComponent', component: NestedComponent },
    { path: '/cm/parentview', name: 'ParentView', component: ParentView },
    { path: '/cm/emitparent', name: 'EmitParent', component: EmitParent },
    { path: '/cm/ModelParent', name: 'ModelParent', component: ModelParent },
    { path: '/cm/SlotUseModalLayout', name: 'SlotUseModalLayout', component: SlotUseModalLayout },
    { path: '/cm/ParentPage', name: 'ParentPage', component: ParentPage },


]

export default cmRoutes