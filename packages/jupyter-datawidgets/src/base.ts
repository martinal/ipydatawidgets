// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import {
  ObjectHash
} from 'backbone';

import {
  WidgetModel, ManagerBase
} from '@jupyter-widgets/base';


export
const version = (require('../package.json') as any).version;


export
interface ISerializers {
  [key: string]: {
    deserialize?: (value?: any, manager?: ManagerBase<any>) => any;
    serialize?: (value?: any, widget?: WidgetModel) => any;
  }
}


export
class DataModel extends WidgetModel {
  defaults() {
    return {...super.defaults(), ...{
      _model_module: DataModel.model_module,
      _model_module_version: DataModel.model_module_version,
      _view_name: DataModel.view_name,
      _view_module: DataModel.view_module!,
      _view_module_version: DataModel.view_module_version,
    }};
  }

  static serializers = {
    ...WidgetModel.serializers,
  }

  static model_module = 'jupyter-datawidgets';
  static model_module_version = version;
  static view_name = null;
  static view_module = null;
  static view_module_version = '';
}
