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
 * The ApiUsageDataTransfer model module.
 * @module model/ApiUsageDataTransfer
 * @version 3.1.0
 */
class ApiUsageDataTransfer {
    /**
     * Constructs a new <code>ApiUsageDataTransfer</code>.
     * Data transfer
     * @alias module:model/ApiUsageDataTransfer
     * @param request {Number} 
     * @param response {Number} 
     */
    constructor(request, response) { 
        
        ApiUsageDataTransfer.initialize(this, request, response);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, request, response) { 
        obj['request'] = request;
        obj['response'] = response;
    }

    /**
     * Constructs a <code>ApiUsageDataTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiUsageDataTransfer} obj Optional instance to populate.
     * @return {module:model/ApiUsageDataTransfer} The populated <code>ApiUsageDataTransfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiUsageDataTransfer();

            if (data.hasOwnProperty('request')) {
                obj['request'] = ApiClient.convertToType(data['request'], 'Number');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApiUsageDataTransfer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApiUsageDataTransfer</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApiUsageDataTransfer.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ApiUsageDataTransfer.RequiredProperties = ["request", "response"];

/**
 * @member {Number} request
 */
ApiUsageDataTransfer.prototype['request'] = undefined;

/**
 * @member {Number} response
 */
ApiUsageDataTransfer.prototype['response'] = undefined;






export default ApiUsageDataTransfer;
