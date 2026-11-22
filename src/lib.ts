import type { Story } from './types'
const originalAssets='https://raw.githubusercontent.com/sqc77323/xiaohestreet-digital-stories/main/public/'
export const asset=(p:string)=>p.startsWith('http')?p:p==='media/images/custom-cover.jpg'?import.meta.env.BASE_URL+p:originalAssets+p.replace(/^\//,'')
export const storiesPath=(id:string)=>'#/stories/'+encodeURIComponent(id)
export const visibleStories=(items:Story[])=>items.filter(x=>x.visible).sort((a,b)=>a.order-b.order)
