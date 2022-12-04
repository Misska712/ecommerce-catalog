import Men from './components/MenSection.vue'
import Women from './components/WomenSection.vue'
import Unavaible from './components/UnavaibleSection.vue'

export default [{
    path: '/',
    component: Men,
    name: 'MenSection'
  },{
    path: '/women',
    component: Women,
    name: 'WomenSection'
  },{
    path: '/unavaible',
    component: Unavaible,
    name: 'UnavaibleSection'
  }
];