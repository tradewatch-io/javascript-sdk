# Tradewatch.IndicesApi

All URIs are relative to *https://api.tradewatch.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getQuote**](IndicesApi.md#getQuote) | **GET** /indices/symbols/{symbol} | Last Quote
[**getSymbols**](IndicesApi.md#getSymbols) | **GET** /indices/symbols | Available Symbols



## getQuote

> LastQuote getQuote(symbol, opts)

Last Quote

Get the last quote tick for the provided symbol.

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

let apiInstance = new Tradewatch.IndicesApi();
let symbol = "symbol_example"; // String | 
let opts = {
  'precision': 5 // Number | 
};
apiInstance.getQuote(symbol, opts, (error, data, response) => {
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
 **symbol** | **String**|  | 
 **precision** | **Number**|  | [optional] [default to 5]

### Return type

[**LastQuote**](LastQuote.md)

### Authorization

[api_key_query](../README.md#api_key_query), [api_key_header](../README.md#api_key_header)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSymbols

> CursorPageTCustomizedSymbolsOutFull getSymbols(mode, opts)

Available Symbols

Get list of available symbols

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

let apiInstance = new Tradewatch.IndicesApi();
let mode = new Tradewatch.SymbolsListMode(); // SymbolsListMode | Listing mode
let opts = {
  'size': 50, // Number | Page offset
  'page': 1, // Number | Page number
  'cursor': "cursor_example" // String | Cursor for the next page
};
apiInstance.getSymbols(mode, opts, (error, data, response) => {
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
 **mode** | [**SymbolsListMode**](.md)| Listing mode | 
 **size** | **Number**| Page offset | [optional] [default to 50]
 **page** | **Number**| Page number | [optional] [default to 1]
 **cursor** | **String**| Cursor for the next page | [optional] 

### Return type

[**CursorPageTCustomizedSymbolsOutFull**](CursorPageTCustomizedSymbolsOutFull.md)

### Authorization

[api_key_query](../README.md#api_key_query), [api_key_header](../README.md#api_key_header)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
