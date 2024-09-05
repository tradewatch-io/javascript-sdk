/**
 * tradewatch.io
 * Financial market data for Developers
 *
 * The version of the OpenAPI document: 3.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CountriesList from '../model/CountriesList';
import Country from '../model/Country';
import CursorPageTCustomizedSymbolsOutFull from '../model/CursorPageTCustomizedSymbolsOutFull';
import HTTPValidationError from '../model/HTTPValidationError';
import LastQuote from '../model/LastQuote';
import SymbolsListMode from '../model/SymbolsListMode';

/**
* Stocks service.
* @module api/StocksApi
* @version 3.1.0
*/
export default class StocksApi {

    /**
    * Constructs a new StocksApi. 
    * @alias module:api/StocksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getCountries operation.
     * @callback module:api/StocksApi~getCountriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CountriesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Available Countries
     * Get list of available countries
     * @param {module:api/StocksApi~getCountriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CountriesList}
     */
    getCountries(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_query', 'api_key_header'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CountriesList;
      return this.apiClient.callApi(
        '/stocks/countries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getQuote operation.
     * @callback module:api/StocksApi~getQuoteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LastQuote} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Last Quote
     * Get the last quote tick for the provided symbol.
     * @param {String} symbol 
     * @param {Object} opts Optional parameters
     * @param {Number} [precision = 5)] 
     * @param {module:api/StocksApi~getQuoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LastQuote}
     */
    getQuote(symbol, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling getQuote");
      }

      let pathParams = {
        'symbol': symbol
      };
      let queryParams = {
        'precision': opts['precision']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_query', 'api_key_header'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LastQuote;
      return this.apiClient.callApi(
        '/stocks/symbols/{symbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSymbols operation.
     * @callback module:api/StocksApi~getSymbolsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CursorPageTCustomizedSymbolsOutFull} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Available Symbols
     * Get list of available symbols
     * @param {module:model/SymbolsListMode} mode Listing mode
     * @param {Object} opts Optional parameters
     * @param {Number} [size = 50)] Page offset
     * @param {module:model/Country} [country] 
     * @param {Number} [page = 1)] Page number
     * @param {String} [cursor] Cursor for the next page
     * @param {module:api/StocksApi~getSymbolsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CursorPageTCustomizedSymbolsOutFull}
     */
    getSymbols(mode, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'mode' is set
      if (mode === undefined || mode === null) {
        throw new Error("Missing the required parameter 'mode' when calling getSymbols");
      }

      let pathParams = {
      };
      let queryParams = {
        'size': opts['size'],
        'country': opts['country'],
        'page': opts['page'],
        'cursor': opts['cursor'],
        'mode': mode
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key_query', 'api_key_header'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CursorPageTCustomizedSymbolsOutFull;
      return this.apiClient.callApi(
        '/stocks/symbols', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
