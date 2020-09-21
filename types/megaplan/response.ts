export interface Response<T> {
    meta: Meta;
    data: T[] | T;
}

export interface Meta {
    status: number;
    errors: any[];
    pagination: Pagination;
}

export interface Pagination {
    count: number;
    limit: number;
}