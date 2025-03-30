export interface Review {
  score: number
  strengths: string
  weaknesses: string
  recommendations: string
}

export interface Reviews {
  community: Review
  equity: Review
  efficiency: Review
  sustainability: Review
  innovation: Review
}

export interface Application {
  id: string
  title: string
  author: string
  submittedAt: string
  abstract: string
  status: "pending" | "approved" | "rejected"
  reviews: Reviews
  averageScore: number
  votes?: number
  website?: string
}

