export class Campo<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  placeholder: string;
  validations: {
    validation: string,
    value?: any,
    message?: string
  }[];
  options: {
    key: string,
    value: any
  }[];

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    type?: string,
    placeholder?: string;
    options?: {key: string, value: any}[],
    validations?: {validation: string, value?: any, message?: string}[]
  } = {}) {

    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.placeholder = options.placeholder || '';
    this.options = options['options'] || [];
    this.validations = options['validations'] || [];
  }
}
