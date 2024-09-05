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

import ApiClient from '../ApiClient';

/**
 * The SymbolsOutFull model module.
 * @module model/SymbolsOutFull
 * @version 3.1.0
 */
class SymbolsOutFull {
    /**
     * Constructs a new <code>SymbolsOutFull</code>.
     * @alias module:model/SymbolsOutFull
     * @param symbol {String} 
     * @param name {String} 
     */
    constructor(symbol, name) { 
        
        SymbolsOutFull.initialize(this, symbol, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, name) { 
        obj['symbol'] = symbol;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>SymbolsOutFull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SymbolsOutFull} obj Optional instance to populate.
     * @return {module:model/SymbolsOutFull} The populated <code>SymbolsOutFull</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SymbolsOutFull();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SymbolsOutFull</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SymbolsOutFull</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SymbolsOutFull.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

SymbolsOutFull.RequiredProperties = ["symbol", "name"];

/**
 * @member {String} symbol
 */
SymbolsOutFull.prototype['symbol'] = undefined;

/**
 * @member {String} name
 */
SymbolsOutFull.prototype['name'] = undefined;






export default SymbolsOutFull;
