 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdsPixelRealTimeEventLogResult
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelRealTimeEventLogResult extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      data_json: 'data_json',
      dedup_data: 'dedup_data',
      device_type: 'device_type',
      domain_control_rule_rejection: 'domain_control_rule_rejection',
      event: 'event',
      event_detection_method: 'event_detection_method',
      in_iframe: 'in_iframe',
      matched_rule_conditions: 'matched_rule_conditions',
      resolved_link: 'resolved_link',
      source_rule_condition: 'source_rule_condition',
      timestamp: 'timestamp',
      trace_id: 'trace_id',
      url: 'url',
    });
  }

}
