/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

 'use strict';
const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;
const CustomAudience = bizSdk.CustomAudience;

const access_token = '<ACCESS_TOKEN>';
const app_secret = '<APP_SECRET>';
const app_id = '<APP_ID>';
const id = '<AD_ACCOUNT_ID>';
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.
if (showDebugingInfo) {
  api.setDebug(true);
}

const logApiCallResult = (apiCallName, data) => {
  console.log(apiCallName);
  if (showDebugingInfo) {
    console.log('Data:' + JSON.stringify(data));
  }
};

let fields, params;
fields = [
];
params = {
  'name' : 'My Test Website Custom Audience',
  'rule' : {'inclusions':{'operator':'or','rules':[{'event_sources':[{'id':'<pixelID>','type':'pixel'}],'retention_seconds':8400,'filter':{'operator':'and','filters':[{'field':'url','operator':'i_contains','value':'shoes'}]}}]}},
  'prefill' : '1',
};
const customaudiences = (new AdAccount(id)).createCustomAudience(
  fields,
  params
);
logApiCallResult('customaudiences api call complete.', customaudiences);