// src/members/sw/router/index.js


function loadView(view) {
    return () =>
        import(/* webpackChunkName: "view-[request]" */ `@/members/sw/views/${view}.vue`)
}

const swRoutes = [
    {path: '/sw', name: 'swHome', component: loadView('SwHome')},
    {path: '/sw/about', name: 'SwAbout', component: loadView('AboutView')},
    {path: '/sw/databinding', name: 'SwDataBinding', component: loadView('DataBinding')},
    {path: '/sw/databinding-html', name: 'SwDataBindingHtml', component: loadView('DataBindingHtml')},
    {path: '/sw/databinding-input-text', name: 'SwDataBindingInputText', component: loadView('DataBindingInputText')},
    {
        path: '/sw/databinding-input-number',
        name: 'SwDataBindingInputNumber',
        component: loadView('DataBindingInputNumber')
    },
    {path: '/sw/databinding-input-textarea', name: 'SwDataBindingTextarea', component: loadView('DataBindingTextarea')},
    {path: '/sw/databinding-input-select', name: 'SwDataBindingSelect', component: loadView('DataBindingSelect')},
    {path: '/sw/databinding-input-checkbox', name: 'SwDataBindingCheckbox', component: loadView('DataBindingCheckbox')},
    {
        path: '/sw/databinding-input-checkbox2',
        name: 'SwDataBindingCheckbox2',
        component: loadView('DataBindingCheckbox2')
    },
    {path: '/sw/databinding-input-radio', name: 'SwDataBindingRadio', component: loadView('DataBindingRadio')},
    {
        path: '/sw/databinding-input-attribute',
        name: 'SwDataBindingAttribute',
        component: loadView('DataBindingAttribute')
    },
    {path: '/sw/databinding-input-button', name: 'SwDataBindingButton', component: loadView('DataBindingButton')},
    {path: '/sw/databinding-class', name: 'SwDataBindingClass', component: loadView('DataBindingClass')},
    {path: '/sw/databinding-class2', name: 'SwDataBindingClass2', component: loadView('DataBindingClass2')},
    {path: '/sw/databinding-style', name: 'SwDataBindingStyle', component: loadView('DataBindingStyle')},
    {path: '/sw/databinding-style2', name: 'SwDataBindingStyle2', component: loadView('DataBindingStyle2')},
    {path: '/sw/computed-example', name: 'SwComputedExample', component: loadView('ComputedExample')},
    {path: '/sw/computed-example2', name: 'SwComputedExample2', component: loadView('ComputedExample2')},
    {
        path: '/sw/computed-and-watch-example',
        name: 'SwComputedAndWatchExample',
        component: loadView('ComputedAndWatch')
    },
    {path: '/sw/event-click', name: 'SwEventClick', component: loadView('EventClick')},
    {path: '/sw/event-change', name: 'SwEventChange', component: loadView('EventChange')},
    {path: '/sw/watch-example', name: 'SwWatchExample', component: loadView('WatchExample')},
    {path: '/sw/watch-example2', name: 'SwWatchExample2', component: loadView('WatchExample2')},
    {path: '/sw/databinding-list2', name: 'SwDataBindingList2', component: loadView('DataBindingList2')},
]

export default swRoutes
