// No changes from the previous version
export interface Product {
  id: string
  name: string
  price: number
  image: string
  description?: string
  category?: string
}

export interface CartItem extends Product {
  quantity: number
}

export interface Category {
  id: string
  name: string
  image: string
}

// Add new type for InfoForm props
export interface InfoFormProps {
  handleNextPage: () => void
  setName: (name: string) => void
  setPhone: (phone: string) => void
  total:string
}
