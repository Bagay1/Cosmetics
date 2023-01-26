export interface CompanyInfo{
  address: Adress[]
  full_name:string
  id:number
  name:string
  number_kpp:string
  number_ogrn:string
  numder_inn:string
  phone:number
  url_lic:string
}

export interface Adress {
  id: 1,
  card_companies_id: 1,
  address: 'Уфа, р-н Октябрьский, ул. Энтузиастов, д. 15, офис 10',
  work_time: 'с 9:00 до 18:00',
  map_code: '0'

}
