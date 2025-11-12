export interface JwtUserPayload {
  id: number;
  name: string;
  username: string;
  user_type: string;
  status: string;
  created_at: string;
  updated_at: string;
  branches: {
    id: number;
    name: string;
  }[];
  permissions: { group: string; action: string }[];
}
