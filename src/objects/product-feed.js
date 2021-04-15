/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import AutomotiveModel from './automotive-model';
import Destination from './destination';
import Flight from './flight';
import HomeListing from './home-listing';
import Hotel from './hotel';
import ProductItem from './product-item';
import ProductFeedRule from './product-feed-rule';
import ProductFeedSchedule from './product-feed-schedule';
import ProductFeedUpload from './product-feed-upload';
import VehicleOffer from './vehicle-offer';
import Vehicle from './vehicle';

/**
 * ProductFeed
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeed extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      country: 'country',
      created_time: 'created_time',
      default_currency: 'default_currency',
      deletion_enabled: 'deletion_enabled',
      delimiter: 'delimiter',
      encoding: 'encoding',
      file_name: 'file_name',
      id: 'id',
      item_sub_type: 'item_sub_type',
      latest_upload: 'latest_upload',
      migrated_from_feed_id: 'migrated_from_feed_id',
      name: 'name',
      override_type: 'override_type',
      product_count: 'product_count',
      quoted_fields_mode: 'quoted_fields_mode',
      schedule: 'schedule',
      update_schedule: 'update_schedule',
    });
  }

  static get Delimiter (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      bar: 'BAR',
      comma: 'COMMA',
      semicolon: 'SEMICOLON',
      tab: 'TAB',
      tilde: 'TILDE',
    });
  }
  static get QuotedFieldsMode (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      off: 'OFF',
      on: 'ON',
    });
  }
  static get Encoding (): Object {
    return Object.freeze({
      autodetect: 'AUTODETECT',
      latin1: 'LATIN1',
      utf16be: 'UTF16BE',
      utf16le: 'UTF16LE',
      utf32be: 'UTF32BE',
      utf32le: 'UTF32LE',
      utf8: 'UTF8',
    });
  }
  static get FeedType (): Object {
    return Object.freeze({
      auto: 'AUTO',
      destination: 'DESTINATION',
      flight: 'FLIGHT',
      home_listing: 'HOME_LISTING',
      hotel: 'HOTEL',
      hotel_room: 'HOTEL_ROOM',
      local_inventory: 'LOCAL_INVENTORY',
      market: 'MARKET',
      media_title: 'MEDIA_TITLE',
      offer: 'OFFER',
      products: 'PRODUCTS',
      transactable_items: 'TRANSACTABLE_ITEMS',
      vehicles: 'VEHICLES',
      vehicle_offer: 'VEHICLE_OFFER',
    });
  }
  static get ItemSubType (): Object {
    return Object.freeze({
      appliances: 'APPLIANCES',
      baby_feeding: 'BABY_FEEDING',
      baby_transport: 'BABY_TRANSPORT',
      beauty: 'BEAUTY',
      bedding: 'BEDDING',
      cameras: 'CAMERAS',
      cell_phones_and_smart_watches: 'CELL_PHONES_AND_SMART_WATCHES',
      cleaning_supplies: 'CLEANING_SUPPLIES',
      clothing: 'CLOTHING',
      clothing_accessories: 'CLOTHING_ACCESSORIES',
      computers_and_tablets: 'COMPUTERS_AND_TABLETS',
      diapering_and_potty_training: 'DIAPERING_AND_POTTY_TRAINING',
      electronics_accessories: 'ELECTRONICS_ACCESSORIES',
      furniture: 'FURNITURE',
      health: 'HEALTH',
      home_goods: 'HOME_GOODS',
      jewelry: 'JEWELRY',
      nursery: 'NURSERY',
      printers_and_scanners: 'PRINTERS_AND_SCANNERS',
      projectors: 'PROJECTORS',
      shoes_and_footwear: 'SHOES_AND_FOOTWEAR',
      software: 'SOFTWARE',
      toys: 'TOYS',
      tvs_and_monitors: 'TVS_AND_MONITORS',
      video_game_consoles_and_video_games: 'VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES',
      watches: 'WATCHES',
    });
  }
  static get OverrideType (): Object {
    return Object.freeze({
      catalog_segment_customize_default: 'CATALOG_SEGMENT_CUSTOMIZE_DEFAULT',
      country: 'COUNTRY',
      language: 'LANGUAGE',
      language_and_country: 'LANGUAGE_AND_COUNTRY',
      local: 'LOCAL',
    });
  }

  getAutomotiveModels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AutomotiveModel,
      fields,
      params,
      fetchFirstPage,
      '/automotive_models'
    );
  }

  getDestinations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Destination,
      fields,
      params,
      fetchFirstPage,
      '/destinations'
    );
  }

  getFlights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Flight,
      fields,
      params,
      fetchFirstPage,
      '/flights'
    );
  }

  getHomeListings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      HomeListing,
      fields,
      params,
      fetchFirstPage,
      '/home_listings'
    );
  }

  getHotels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Hotel,
      fields,
      params,
      fetchFirstPage,
      '/hotels'
    );
  }

  getProducts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductItem,
      fields,
      params,
      fetchFirstPage,
      '/products'
    );
  }

  getRules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductFeedRule,
      fields,
      params,
      fetchFirstPage,
      '/rules'
    );
  }

  createRule (fields: Array<string>, params: Object = {}): Promise<ProductFeedRule> {
    return this.createEdge(
      '/rules',
      fields,
      params,
      ProductFeedRule
    );
  }

  getUploadSchedules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductFeedSchedule,
      fields,
      params,
      fetchFirstPage,
      '/upload_schedules'
    );
  }

  createUploadSchedule (fields: Array<string>, params: Object = {}): Promise<ProductFeed> {
    return this.createEdge(
      '/upload_schedules',
      fields,
      params,
      ProductFeed
    );
  }

  getUploads (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductFeedUpload,
      fields,
      params,
      fetchFirstPage,
      '/uploads'
    );
  }

  createUpload (fields: Array<string>, params: Object = {}): Promise<ProductFeedUpload> {
    return this.createEdge(
      '/uploads',
      fields,
      params,
      ProductFeedUpload
    );
  }

  getVehicleOffers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      VehicleOffer,
      fields,
      params,
      fetchFirstPage,
      '/vehicle_offers'
    );
  }

  getVehicles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Vehicle,
      fields,
      params,
      fetchFirstPage,
      '/vehicles'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): ProductFeed {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): ProductFeed {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
