// src/members/sw/router/index.js

import SwHome from "@/members/sw/views/SwHome.vue";
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
import ComputedExample from "@/members/sw/views/ComputedExample.vue";
import ComputedExample2 from "@/members/sw/views/ComputedExample2.vue";
import ComputedAndWatch from "@/members/sw/views/ComputedAndWatch.vue";
import EventClick from "@/members/sw/views/EventClick.vue";
import EventChange from "@/members/sw/views/EventChange.vue";
import WatchExample from "@/members/sw/views/WatchExample.vue";
import WatchExample2 from "@/members/sw/views/WatchExample2.vue";


const swRoutes = [
    { path: '/sw', name: 'swHome', component: SwHome },
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
    { path: '/sw/databinding-style2', name: 'SwDataBindingStyle2', component: DataBindingStyle2 },
    { path: '/sw/computed-example', name: 'ComputedExample', component: ComputedExample },
    { path: '/sw/computed-example2', name: 'ComputedExample2', component: ComputedExample2 },
    { path: '/sw/computed-and-watch-example', name: 'ComputedAndWatchExample', component: ComputedAndWatch },
    { path: '/sw/event-click', name: 'EventClick', component: EventClick },
    { path: '/sw/event-change', name: 'EventChange', component: EventChange },
    { path: '/sw/watch-example', name: 'WatchExample', component: WatchExample },
    { path: '/sw/watch-example2', name: 'WatchExample2', component: WatchExample2 },
]

export default swRoutes
