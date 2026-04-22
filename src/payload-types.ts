/* eslint-disable */
/**
 * Temporary generated-types fallback.
 * Replace with `npx payload generate:types --config src/payload.config.ts`
 * once Payload CLI is fixed for the current runtime.
 */

export interface User {
  id: number
  email: string
}

export interface Media {
  id: number
  alt: string
  url?: string | null
}

export interface University {
  id: number
  name: string
  location: string
  description?: string | null
  logo?: number | Media | null
}

export interface Service {
  id: number
  title: string
  icon: string
  duration: string
  price: string
  short: string
  full: string
}

export interface CostTableRow {
  id: number
  program: string
  price: string
  note: string
}

export interface Review {
  id: number
  category: string
  text: string
}

export interface Config {
  collections: {
    users: User
    media: Media
    universities: University
    services: Service
    costtable: CostTableRow
    reviews: Review
  }
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
