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
import ConversionInfo from './ConversionInfo';
import ConversionQuery from './ConversionQuery';

/**
 * The Conversion model module.
 * @module model/Conversion
 * @version 3.1.0
 */
class Conversion {
    /**
     * Constructs a new <code>Conversion</code>.
     * @alias module:model/Conversion
     * @param info {module:model/ConversionInfo} 
     * @param query {module:model/ConversionQuery} 
     * @param result {Number} 
     */
    constructor(info, query, result) { 
        
        Conversion.initialize(this, info, query, result);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, info, query, result) { 
        obj['info'] = info;
        obj['query'] = query;
        obj['result'] = result;
    }

    /**
     * Constructs a <code>Conversion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Conversion} obj Optional instance to populate.
     * @return {module:model/Conversion} The populated <code>Conversion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Conversion();

            if (data.hasOwnProperty('info')) {
                obj['info'] = ConversionInfo.constructFromObject(data['info']);
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ConversionQuery.constructFromObject(data['query']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Conversion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Conversion</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Conversion.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `info`
        if (data['info']) { // data not null
          ConversionInfo.validateJSON(data['info']);
        }
        // validate the optional field `query`
        if (data['query']) { // data not null
          ConversionQuery.validateJSON(data['query']);
        }

        return true;
    }


}

Conversion.RequiredProperties = ["info", "query", "result"];

/**
 * @member {module:model/ConversionInfo} info
 */
Conversion.prototype['info'] = undefined;

/**
 * @member {module:model/ConversionQuery} query
 */
Conversion.prototype['query'] = undefined;

/**
 * @member {Number} result
 */
Conversion.prototype['result'] = undefined;






export default Conversion;
