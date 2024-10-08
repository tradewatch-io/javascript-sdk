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
import CommodityType from '../model/CommodityType';
import CommodityTypesList from '../model/CommodityTypesList';
import CursorPageTCustomizedSymbolsOutFull from '../model/CursorPageTCustomizedSymbolsOutFull';
import HTTPValidationError from '../model/HTTPValidationError';
import LastQuote from '../model/LastQuote';
import SymbolsListMode from '../model/SymbolsListMode';

/**
* Commodities service.
* @module api/CommoditiesApi
* @version 3.1.0
*/
export default class CommoditiesApi {

    /**
    * Constructs a new CommoditiesApi. 
    * @alias module:api/CommoditiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getQuote operation.
     * @callback module:api/CommoditiesApi~getQuoteCallback
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
     * @param {module:api/CommoditiesApi~getQuoteCallback} callback The callback function, accepting three arguments: error, data, response
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
        '/commodities/symbols/{symbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSymbols operation.
     * @callback module:api/CommoditiesApi~getSymbolsCallback
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
     * @param {module:model/CommodityType} [type] 
     * @param {Number} [page = 1)] Page number
     * @param {String} [cursor] Cursor for the next page
     * @param {module:api/CommoditiesApi~getSymbolsCallback} callback The callback function, accepting three arguments: error, data, response
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
        'type': opts['type'],
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
        '/commodities/symbols', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTypes operation.
     * @callback module:api/CommoditiesApi~getTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommodityTypesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Available Types
     * Get list of available commodity types
     * @param {module:api/CommoditiesApi~getTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommodityTypesList}
     */
    getTypes(callback) {
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
      let returnType = CommodityTypesList;
      return this.apiClient.callApi(
        '/commodities/types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
