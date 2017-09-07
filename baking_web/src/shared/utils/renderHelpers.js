import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const renderInput = ({ input, itemStyle, meta: { submitFailed, error }, ...rest }) => (
  <div>
    <FormItem
      validateStatus={submitFailed ? (error && 'error') : ''}
      style={itemStyle}
      className="input"
    >
      <Input
        {...input}
        {...rest}
      />
      {submitFailed && (error && <span className="message-error"><i className="icon-error" />{error}</span>)}
    </FormItem>
  </div>
);
