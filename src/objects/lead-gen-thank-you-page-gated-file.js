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
 * LeadGenThankYouPageGatedFile
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LeadGenThankYouPageGatedFile extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      file_cdn_url: 'file_cdn_url',
      file_name: 'file_name',
      file_size_bytes: 'file_size_bytes',
      id: 'id',
    });
  }

}
