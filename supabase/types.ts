export type Application = {
  id: string;
  hash: string;
  name: string;
  description: string;
  website: string;
  content: string; // json
  created_at: string;
  updated_at: string;
};

export type Review = {
  id: string;
  application_id: string;
  score: number;
  reviewer: string;
  content: string; // json
  created_at: string;
  updated_at: string;
};
export type Research = {
  id: string;
  application_id: string;
  content: string; // json
  created_at: string;
  updated_at: string;
};

export type Database = {
  public: {
    Tables: {
      applications: {
        Row: Application;
        Insert: Omit<Application, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Application, "id" | "created_at" | "updated_at">>;
      };
      reviews: {
        Row: Review;
        Insert: Omit<Review, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Review, "id" | "created_at" | "updated_at">>;
      };
      research: {
        Row: Research;
        Insert: Omit<Research, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Research, "id" | "created_at" | "updated_at">>;
      };
    };
  };
};
