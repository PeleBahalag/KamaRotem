import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../components/HomeScreen.vue'
import EducationLayout from '../components/education/EducationLayout.vue'
import ZahalSpirit from '../components/education/ZahalSpirit.vue'
import IndependenceDecleration from '../components/education/independenceDecleration.vue'
import WarsOperations from '../components/education/WarsOperations.vue'
import ImportantPeople from '../components/education/ImportantPeople.vue'
import CalendarHolidays from '../components/education/CalendarHolidays.vue'

const routes = [
  { path: '/KamaRotem', component: HomeScreen },
  {
    path: '/KamaRotem/education' , component : EducationLayout,
    redirect: '/KamaRotem/education/spirit', children :[
      {path:'spirit' , component : ZahalSpirit},
      {path:'decleration' , component : IndependenceDecleration},
      {path:'wars' , component : WarsOperations},
      {path:'vips' , component : ImportantPeople},
      {path:'holidays' , component : CalendarHolidays}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router