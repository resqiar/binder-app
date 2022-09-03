export interface IData {
  id: number;
  title: string;
  description?: string | null;
  image_url?: string | null;
  youtube_url?: string | null;
  created_at: string;
  updated_at: string;
  statusCode?: number;
  message?: string;
}
