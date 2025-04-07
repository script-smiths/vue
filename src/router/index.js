import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from "@/views/DataBindingInputNumber.vue";
import DataBindingTextarea from "@/views/DataBindingTextarea.vue";
import DataBindingSelect from "@/views/DataBindingSelect.vue";
import DataBindingCheckbox from "@/views/DataBindingCheckbox.vue";
import DataBindingCheckbox2 from "@/views/DataBindingCheckbox2.vue";
import DataBindingRadio from "@/views/DataBindingRadio.vue";
import DataBindingAttribute from "@/views/DataBindingAttribute.vue";
import DataBindingButton from "@/views/DataBindingButton.vue";
import DataBindingClass from "@/views/DataBindingClass.vue";
import DataBindingClass2 from "@/views/DataBindingClass2.vue";
import DataBindingStyle from "@/views/DataBindingStyle.vue";
import DataBindingStyle2 from "@/views/DataBindingStyle2.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'Databinding',
    component: DataBinding
  },
  {
    path: '/databinding-html',
    name: 'Databindinghtml',
    component: DataBindingHtml
  },
  {
    path: '/databinding-input-text',
    name: 'DatabindinginputText',
    component: DataBindingInputText
  },
  {
    path: '/databinding-input-number',
    name: 'DatabindinginputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/databinding-input-textarea',
    name: 'DatabindinginputTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/databinding-input-select',
    name: 'DatabindinginputSelect',
    component: DataBindingSelect
  },
  {
    path: '/databinding-input-checkbox',
    name: 'DatabindinginputCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/databinding-input-checkbox2',
    name: 'DatabindinginputCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/databinding-input-radio',
    name: 'DatabindinginputRadio',
    component: DataBindingRadio
  },
  {
    path: '/databinding-input-attribute',
    name: 'DatabindinginputAttribute',
    component: DataBindingAttribute
  },
  {
    path: '/databinding-input-button',
    name: 'DatabindinginputButton',
    component: DataBindingButton
  },
  {
    path: '/databinding-class',
    name: 'Databindingclass',
    component: DataBindingClass
  },
  {
    path: '/databinding-class2',
    name: 'Databindingclass2',
    component: DataBindingClass2
  },
  {
    path: '/databinding-style',
    name: 'Databindingstyle',
    component: DataBindingStyle
  },
  {
    path: '/databinding-style2',
    name: 'Databindingstyle2',
    component: DataBindingStyle2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
