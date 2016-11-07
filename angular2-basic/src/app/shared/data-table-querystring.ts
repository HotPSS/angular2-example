import { DataTableParams } from 'angular-2-data-table';

export class DataTableQueryString {
    constructor() { }

    paramsToQueryString(params: DataTableParams) {
        let result = [];

        if (params.offset != null) {
            result.push(['_start', params.offset]);
        }
        if (params.limit != null) {
            result.push(['_limit', params.limit]);
        }
        if (params.sortBy != null) {
            result.push(['_sort', params.sortBy]);
        }
        if (params.sortAsc != null) {
            result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
        }

        return result.map(param => param.join('=')).join('&');
    }
}
