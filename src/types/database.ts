export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string | null
          avatar_url: string | null
          provider: string
          last_sign_in: string | null
        }
        Insert: {
          id: string
          created_at?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          provider: string
          last_sign_in?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          provider?: string
          last_sign_in?: string | null
        }
      }
      course_progress: {
        Row: {
          id: string
          created_at: string
          user_id: string
          course_id: string
          completed_lessons: string[]
          last_accessed: string
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          course_id: string
          completed_lessons?: string[]
          last_accessed?: string
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          course_id?: string
          completed_lessons?: string[]
          last_accessed?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 