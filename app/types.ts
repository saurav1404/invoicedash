export interface Invoice {
    label: string
    unit_price: string
    amount: number
    quantity: number
    tax: number
    total: number
    from: string
    to: string
    type: string
}

export interface Products {
  summary: Summary
  lineItems: LineItems
  tagLineItems: TagLineItems
}

export type DonutData = {
  name: string
  sales: number
}

export type Summary = {
  id: number
  tenantId: number
  yearMonth: string
  invoiceDate: number
  dueDate: number
  state: string
  amount: number
  forecastAmount: number
  totalOnDemandAmount: number
  discountedCommitAmount: number
}

export type LineItems = {
  productId: string
  meterId: number
  amount: number
  instanceCount: number
  meteredUnits: number
  unitPrice: number
  forecastAmount: number
  subscriptionLineItems: SubscriptionLineItems[]
}

export type TagLineItems = {
  tagId: number
  tagName: string
  amount: number
  instanceCount: number
  onDemandAmount: number
  discountAmount: number
  detailTagLineItems: DetailTagLineItems[]
}

type SubscriptionLineItems = {
  productId: string
  subscriptionMeterId: number
  subscriptionName: string
  amount: number
  meteredUnits: number
  unitPrice: number
  forecastAmount: number
}

type DetailTagLineItems = {
  tagName: string
  productId: string
  subscriptionName: string
  subscriptionInternalName: string
  amount: number
}