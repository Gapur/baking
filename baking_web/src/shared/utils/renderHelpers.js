import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

export const renderInput = ({ input, classFormItem, meta: { submitFailed, error }, ...rest }) => (
  <FormItem
    validateStatus={submitFailed ? (error && 'error') : ''}
    className={classFormItem}
  >
    <Input
      {...input}
      {...rest}
    />
    {submitFailed && (error && <span className="message-error"><i className="icon-error" />{error}</span>)}
  </FormItem>
);
