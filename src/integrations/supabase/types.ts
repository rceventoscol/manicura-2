export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      businesses: {
        Row: {
          city: string | null
          country: string | null
          created_at: string
          currency: string | null
          id: string
          name: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string
          currency?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string
          currency?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      calendar: {
        Row: {
          business_id: string | null
          created_at: string
          created_by: string | null
          description: string | null
          end_time: string | null
          id: string
          start_time: string | null
          title: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          id?: string
          start_time?: string | null
          title?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          id?: string
          start_time?: string | null
          title?: string | null
        }
        Relationships: []
      }
      finances: {
        Row: {
          amount: number | null
          business_id: string | null
          category: string | null
          created_at: string
          date: string | null
          description: string | null
          id: string
          type: string | null
        }
        Insert: {
          amount?: number | null
          business_id?: string | null
          category?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          id?: string
          type?: string | null
        }
        Update: {
          amount?: number | null
          business_id?: string | null
          category?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          id?: string
          type?: string | null
        }
        Relationships: []
      }
      invitations: {
        Row: {
          business_id: string | null
          created_at: string
          email: string | null
          id: string
          percentage: number | null
          role: string | null
          status: string | null
          token: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          email?: string | null
          id?: string
          percentage?: number | null
          role?: string | null
          status?: string | null
          token?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          email?: string | null
          id?: string
          percentage?: number | null
          role?: string | null
          status?: string | null
          token?: string | null
        }
        Relationships: []
      }
      newsfeed: {
        Row: {
          business_id: string | null
          content: string | null
          created_at: string
          created_by: string | null
          id: string
          is_pinned: boolean | null
          title: string | null
          type: string | null
        }
        Insert: {
          business_id?: string | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_pinned?: boolean | null
          title?: string | null
          type?: string | null
        }
        Update: {
          business_id?: string | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          is_pinned?: boolean | null
          title?: string | null
          type?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string
          id: string
          role: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name: string
          id: string
          role: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string
          id?: string
          role?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          business_id: string | null
          created_at: string
          email: string | null
          full_name: string
          id: string
          notifications_enabled: boolean | null
          role: string | null
        }
        Insert: {
          avatar_url?: string | null
          business_id?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          notifications_enabled?: boolean | null
          role?: string | null
        }
        Update: {
          avatar_url?: string | null
          business_id?: string | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          notifications_enabled?: boolean | null
          role?: string | null
        }
        Relationships: []
      }
      vote_responses: {
        Row: {
          created_at: string
          id: string
          selected_option: string | null
          user_id: string | null
          vote_id: string | null
          weight: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          selected_option?: string | null
          user_id?: string | null
          vote_id?: string | null
          weight?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          selected_option?: string | null
          user_id?: string | null
          vote_id?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      votes: {
        Row: {
          business_id: string | null
          created_at: string
          created_by: string | null
          deadline: string | null
          id: string
          options: Json | null
          question: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          created_by?: string | null
          deadline?: string | null
          id?: string
          options?: Json | null
          question?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          created_by?: string | null
          deadline?: string | null
          id?: string
          options?: Json | null
          question?: string | null
        }
        Relationships: []
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
