export type ApiResponse<T> = {
  data: T;
  error?: string;
};

export type Pagination = {
  page: number;
  pageSize: number;
  total: number;
};
