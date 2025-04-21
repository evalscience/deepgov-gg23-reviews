export interface Review {
  score: number;
  strengths: string;
  weaknesses: string;
  recommendations: string;
}

export interface Reviews {
  community: Review;
  equity: Review;
  efficiency: Review;
  sustainability: Review;
  innovation: Review;
}
