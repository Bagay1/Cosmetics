export interface Service {
  category_services_id: null
  descriptions: string
  html_content: string
  id: number
  old_price: string
  price: string
  title: string
  url: string
}

export interface Pages {
  current_page: number
  data: Service[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: []
  next_page_url:string
  path:string
  per_page:number
  prev_page_url:string
  to:number
  total: number

}

export interface Links{
  active:boolean
  label:string
  url:string

}


export interface CategoryService {
  background:string
  description:string
  id:number
  image:string
  title:string
  url:string
  services:Service[]
}


