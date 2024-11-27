<a href="https://tradewatch.io/">
  <img src="https://pub-e8bb70a6cc1844138d6a55fa4a44ba42.r2.dev/logo-purple.png" alt="TradeWatch.io logo" title="TradeWatch.io" align="right" height="60" />
</a>

# TradeWatch.io JavaScript SDK

[TradeWatch.io](https://tradewatch.io) offers a comprehensive financial data API designed for developers and businesses. The platform provides real-time access to market data, covering a wide range of assets such as currencies, cryptocurrencies, stocks, indices, and commodities. It emphasizes seamless integration, reliability, and scalability, making it ideal for building financial tools and services. Additional features include serverless functions, customizable API domains, and webhook notifications for market events, all aimed at enhancing business efficiency and informed decision-making.

## Table of Contents
- [Quick start](#-quick-start)
- [Installation & usage](#-installation--usage)
- [Authorization](#-authorization)
- [Feedback and Contributions](#-feedback-and-contributions)
- [License](#-license)
- [Contact and Support](#-contact-and-support)

## 🚀 Quick start

Visit our [Dashboard](https://dash.tradewatch.io/register) and register a free account.

Follow the [Getting started](https://tradewatch.io/docs/platform/getting-started) section in our Developer Portal.

## 🔨 Installation & usage

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install tradewatch --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your tradewatch from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/tradewatch-io/javascript-sdk
then install it via:

```shell
    npm install tradewatch-io/javascript-sdk --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## 👨‍💻 Example

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Tradewatch = require('tradewatch');

var defaultClient = Tradewatch.ApiClient.instance;
// Configure API key authorization: api_key_query
var api_key_query = defaultClient.authentications['api_key_query'];
api_key_query.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_query.apiKeyPrefix['api-key'] = "Token"
// Configure API key authorization: api_key_header
var api_key_header = defaultClient.authentications['api_key_header'];
api_key_header.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key_header.apiKeyPrefix['api-key'] = "Token"

var api = new Tradewatch.AccountApi()
var opts = {
  'limit': 56, // {Number} 
  'interval': new Tradewatch.AccountUsageStatisticsInterval() // {AccountUsageStatisticsInterval} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getUsage(opts, callback);

```

## 📖 Available methods

All URIs are relative to *https://api.tradewatch.io*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Tradewatch.AccountApi* | [**getUsage**](docs/AccountApi.md#getUsage) | **GET** /account/usage | Usage statistics
*Tradewatch.CommoditiesApi* | [**getQuote**](docs/CommoditiesApi.md#getQuote) | **GET** /commodities/symbols/{symbol} | Last Quote
*Tradewatch.CommoditiesApi* | [**getSymbols**](docs/CommoditiesApi.md#getSymbols) | **GET** /commodities/symbols | Available Symbols
*Tradewatch.CommoditiesApi* | [**getTypes**](docs/CommoditiesApi.md#getTypes) | **GET** /commodities/types | Available Types
*Tradewatch.CryptoApi* | [**convert**](docs/CryptoApi.md#convert) | **GET** /crypto/convert/{from}/{to} | Conversion
*Tradewatch.CryptoApi* | [**cryptoGetExchanges**](docs/CryptoApi.md#cryptoGetExchanges) | **GET** /crypto/exchanges | Available Exchanges
*Tradewatch.CryptoApi* | [**getQuote**](docs/CryptoApi.md#getQuote) | **GET** /crypto/symbols/{symbol} | Last Quote
*Tradewatch.CryptoApi* | [**getSymbols**](docs/CryptoApi.md#getSymbols) | **GET** /crypto/symbols | Available Symbols
*Tradewatch.CurrenciesApi* | [**convert**](docs/CurrenciesApi.md#convert) | **GET** /currencies/convert/{from}/{to} | Conversion
*Tradewatch.CurrenciesApi* | [**getQuote**](docs/CurrenciesApi.md#getQuote) | **GET** /currencies/symbols/{symbol} | Last Quote
*Tradewatch.CurrenciesApi* | [**getSymbols**](docs/CurrenciesApi.md#getSymbols) | **GET** /currencies/symbols | Available Symbols
*Tradewatch.IndicesApi* | [**getQuote**](docs/IndicesApi.md#getQuote) | **GET** /indices/symbols/{symbol} | Last Quote
*Tradewatch.IndicesApi* | [**getSymbols**](docs/IndicesApi.md#getSymbols) | **GET** /indices/symbols | Available Symbols
*Tradewatch.StocksApi* | [**getCountries**](docs/StocksApi.md#getCountries) | **GET** /stocks/countries | Available Countries
*Tradewatch.StocksApi* | [**getQuote**](docs/StocksApi.md#getQuote) | **GET** /stocks/symbols/{symbol} | Last Quote
*Tradewatch.StocksApi* | [**getSymbols**](docs/StocksApi.md#getSymbols) | **GET** /stocks/symbols | Available Symbols


## 📖 Available models

 - [Tradewatch.AccountUsageStatisticsInterval](docs/AccountUsageStatisticsInterval.md)
 - [Tradewatch.ApiUsageDataTransfer](docs/ApiUsageDataTransfer.md)
 - [Tradewatch.ApiUsageEntry](docs/ApiUsageEntry.md)
 - [Tradewatch.CommodityType](docs/CommodityType.md)
 - [Tradewatch.CommodityTypeObj](docs/CommodityTypeObj.md)
 - [Tradewatch.CommodityTypesList](docs/CommodityTypesList.md)
 - [Tradewatch.Conversion](docs/Conversion.md)
 - [Tradewatch.ConversionInfo](docs/ConversionInfo.md)
 - [Tradewatch.ConversionQuery](docs/ConversionQuery.md)
 - [Tradewatch.CountriesList](docs/CountriesList.md)
 - [Tradewatch.Country](docs/Country.md)
 - [Tradewatch.CountryObj](docs/CountryObj.md)
 - [Tradewatch.CryptoConversion](docs/CryptoConversion.md)
 - [Tradewatch.CryptoConversionQuery](docs/CryptoConversionQuery.md)
 - [Tradewatch.CryptoExchangeItem](docs/CryptoExchangeItem.md)
 - [Tradewatch.CryptoExchangesList](docs/CryptoExchangesList.md)
 - [Tradewatch.CursorPageTCustomizedSymbolsOutFull](docs/CursorPageTCustomizedSymbolsOutFull.md)
 - [Tradewatch.ErrorDetails](docs/ErrorDetails.md)
 - [Tradewatch.ErrorResponseBody](docs/ErrorResponseBody.md)
 - [Tradewatch.HTTPValidationError](docs/HTTPValidationError.md)
 - [Tradewatch.LastQuote](docs/LastQuote.md)
 - [Tradewatch.SymbolsListMode](docs/SymbolsListMode.md)
 - [Tradewatch.SymbolsOutFull](docs/SymbolsOutFull.md)
 - [Tradewatch.ValidationError](docs/ValidationError.md)
 - [Tradewatch.ValidationErrorLocInner](docs/ValidationErrorLocInner.md)


## 🔑 Authorization


Authentication schemes defined for the API:
### api_key_header


- **Type**: API key
- **API key parameter name**: api-key
- **Location**: HTTP header

### api_key_query


- **Type**: API key
- **API key parameter name**: api-key
- **Location**: URL query string


## 🤝 Feedback and Contributions

We appreciate your support and look forward to making our product even better with your help!

## ©️ License

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).


## 🗨️ Contact and Support

For more details about our products, services, or any general information, feel free to reach out to us.

See the list of available [Support Channels](https://tradewatch.io/docs/support/channels).
