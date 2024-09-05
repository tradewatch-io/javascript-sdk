# Tradewatch.AccountApi

All URIs are relative to *https://api.tradewatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsage**](AccountApi.md#getUsage) | **GET** /account/usage | Usage statistics



## getUsage

> Object getUsage(opts)

Usage statistics

Get the usage statistics of your API account

### Example

```javascript
import Tradewatch from 'tradewatch';
let defaultClient = Tradewatch.ApiClient.instance;
// Configure API key authorization: api_key_query
let api_key_query = defaultClient.authentications['api_key_query'];
api_key_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_query.apiKeyPrefix = 'Token';
// Configure API key authorization: api_key_header
let api_key_header = defaultClient.authentications['api_key_header'];
api_key_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_header.apiKeyPrefix = 'Token';

let apiInstance = new Tradewatch.AccountApi();
let opts = {
  'limit': 56, // Number | 
  'interval': new Tradewatch.AccountUsageStatisticsInterval() // AccountUsageStatisticsInterval | 
};
apiInstance.getUsage(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**|  | [optional] 
 **interval** | [**AccountUsageStatisticsInterval**](.md)|  | [optional] 

### Return type

**Object**

### Authorization

[api_key_query](../README.md#api_key_query), [api_key_header](../README.md#api_key_header)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

