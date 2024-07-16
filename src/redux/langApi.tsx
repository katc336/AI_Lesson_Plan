import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const langApi = createApi({
    //name of the api slice
    reducerPath: "langApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.tavily.com",// base URL for all API calls
        prepareHeaders: (headers) => headers.set("Content-Type", "application/json")
    }),
    // API endpoints
    endpoints: (builder) => ({
        getSearch: builder.query({
            query: () => `/search`
        }),
        postSearch: builder.mutation({
            query: ({
                api_key,
                query,
                search_depth,
                include_answer,
                include_images,
                include_raw_content,
                max_results,
                include_domains,
                exclude_domains
            }) => ({
                url: `/search`,
                method: 'POST',
                body: {
                   api_key,
                   query,
                   search_depth,
                   include_answer,
                   include_images,
                   include_raw_content,
                   max_results,
                   include_domains,
                   exclude_domains
                }
            }),
        }),        
    })
});

export default langApi;

export const {
    useGetSearchQuery,
    usePostSearchMutation,
} = langApi;