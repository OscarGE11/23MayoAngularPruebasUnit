import { User } from "./user";

export type ApiResponse = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    results: User[];
  }