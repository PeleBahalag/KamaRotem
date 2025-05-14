import { createRouter, createWebHistory } from 'vue-router'
import HomeScreen from '../components/HomeScreen.vue'
import EducationLayout from '../components/education/EducationLayout.vue'
import ZahalSpirit from '../components/education/ZahalSpirit.vue'
import IndependenceDecleration from '../components/education/independenceDecleration.vue'
import WarsOperations from '../components/education/WarsOperations.vue'
import ImportantPeople from '../components/education/ImportantPeople.vue'
import CalendarHolidays from '../components/education/CalendarHolidays.vue'
import SilentMap from '../components/SilentMap.vue'
import HeritageBackground from '../components/heritage/HeritageBackground.vue'
import ChailHistory from '../components/heritage/ChailHistory.vue'
import GdudimComp from '../components/heritage/GdudimComp.vue'
import WeaponMenu from '../components/WeaponMenu.vue'
import TopoComp from '../components/topography/TopoComp.vue'
import TopoOne from '../components/topography/TopoOne.vue'
import TopoTwo from '../components/topography/TopoTwo.vue'
import TopoThree from '../components/topography/TopoThree.vue'
import TopoFour from '../components/topography/TopoFour.vue'

const routes = [
  { path: '/KamaRotem', component: HomeScreen },
  {
    path: '/KamaRotem/education' , component : EducationLayout,
    redirect: '/KamaRotem/education/spirit', children :[
      {path:'spirit' , component : ZahalSpirit},
      {path:'decleration' , component : IndependenceDecleration},
      {path:'wars' , component : WarsOperations},
      {path:'vips' , component : ImportantPeople},
      {path:'holidays' , component : CalendarHolidays},
      {path:'map' , component: SilentMap},
      {path:'background' , component:HeritageBackground},
      {path: 'history' , component : ChailHistory} , 
      {path:'gdudim' , component : GdudimComp},
      {path:'weapon' , component : WeaponMenu},
      {path:'topography' , component: TopoComp, children : [
        {path:'1' , component: TopoOne},
        {path:'2' , component: TopoTwo},
        {path:'3' , component: TopoThree},
        {path:'4' , component: TopoFour}
      ]}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router