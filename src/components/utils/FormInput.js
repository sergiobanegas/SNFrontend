import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'semantic-ui-react';
import { Field } from 'redux-form';

export default class FormInput extends Component {
  render () {
    const {type, name, label, options} = this.props;
    switch(type) {
      case "text":
      return <Field name={name} component={ TextFormField} type={type} label={label}/>
      case "password":
      return <Field name={name} component={ TextFormField} type={type} label={label}/>
      case "email":
      return <Field name={name} component={ TextFormField} type={type} label={label}/>
      case "select":
      return <Field name={name} component={ DropdownFormField} label={label} options={options}/>
      default:
      return <Field name={name} component={ TextFormField} type={type} label={label}/>
    }
  }

}

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
};

const TextFormField = props => (
 <Form.Field>
   <Form.Input
             value={props.input.value}
             type={props.type}
             onChange={(param,data) => props.input.onChange(data.value)}
             placeholder={props.label}
    />
  </Form.Field>
);

const DropdownFormField = props => (
 <Form.Field>
   <Select options={props.options}
             value={props.input.value}
             onChange={(param,data) => props.input.onChange(data.value)}
             placeholder={props.label}
    />
  </Form.Field>
)
