import { BaseRequestOptions , RequestOptionsArgs, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { AppConfig } from './config';

@Injectable()
export class AppRequestOptions extends BaseRequestOptions  {

    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    merge(options?: RequestOptionsArgs): BaseRequestOptions  {
        options.url = AppConfig.webApiBaseUrl + options.url;
        if (options.method === 'put' ||
            options.method === 'post' ||
            options.method === 'patch') {

            options.headers = this.headers;
        }

        return super.merge(options);
    }

}
