// src/members/sw/router/index.js

import HomeView from '@/members/sw/views/HomeView.vue'
import AboutView from '@/members/sw/views/AboutView.vue'
import DataBinding from '@/members/sw/views/DataBinding.vue'
import DataBindingHtml from '@/members/sw/views/DataBindingHtml.vue'
import DataBindingInputText from '@/members/sw/views/DataBindingInputText.vue'
import DataBindingInputNumber from "@/members/sw/views/DataBindingInputNumber.vue"
import DataBindingTextarea from "@/members/sw/views/DataBindingTextarea.vue"
import DataBindingSelect from "@/members/sw/views/DataBindingSelect.vue"
import DataBindingCheckbox from "@/members/sw/views/DataBindingCheckbox.vue"
import DataBindingCheckbox2 from "@/members/sw/views/DataBindingCheckbox2.vue"
import DataBindingRadio from "@/members/sw/views/DataBindingRadio.vue"
import DataBindingAttribute from "@/members/sw/views/DataBindingAttribute.vue"
import DataBindingButton from "@/members/sw/views/DataBindingButton.vue"
import DataBindingClass from "@/members/sw/views/DataBindingClass.vue"
import DataBindingClass2 from "@/members/sw/views/DataBindingClass2.vue"
import DataBindingStyle from "@/members/sw/views/DataBindingStyle.vue"
import DataBindingStyle2 from "@/members/sw/views/DataBindingStyle2.vue"

const swRoutes = [
    { path: '/sw', name: 'HomeView', component: HomeView },
    { path: '/sw/about', name: 'SwAbout', component: AboutView },
    { path: '/sw/databinding', name: 'SwDataBinding', component: DataBinding },
    { path: '/sw/databinding-html', name: 'SwDataBindingHtml', component: DataBindingHtml },
    { path: '/sw/databinding-input-text', name: 'SwDataBindingInputText', component: DataBindingInputText },
    { path: '/sw/databinding-input-number', name: 'SwDataBindingInputNumber', component: DataBindingInputNumber },
    { path: '/sw/databinding-input-textarea', name: 'SwDataBindingTextarea', component: DataBindingTextarea },
    { path: '/sw/databinding-input-select', name: 'SwDataBindingSelect', component: DataBindingSelect },
    { path: '/sw/databinding-input-checkbox', name: 'SwDataBindingCheckbox', component: DataBindingCheckbox },
    { path: '/sw/databinding-input-checkbox2', name: 'SwDataBindingCheckbox2', component: DataBindingCheckbox2 },
    { path: '/sw/databinding-input-radio', name: 'SwDataBindingRadio', component: DataBindingRadio },
    { path: '/sw/databinding-input-attribute', name: 'SwDataBindingAttribute', component: DataBindingAttribute },
    { path: '/sw/databinding-input-button', name: 'SwDataBindingButton', component: DataBindingButton },
    { path: '/sw/databinding-class', name: 'SwDataBindingClass', component: DataBindingClass },
    { path: '/sw/databinding-class2', name: 'SwDataBindingClass2', component: DataBindingClass2 },
    { path: '/sw/databinding-style', name: 'SwDataBindingStyle', component: DataBindingStyle },
    { path: '/sw/databinding-style2', name: 'SwDataBindingStyle2', component: DataBindingStyle2 }
]

export default swRoutes
