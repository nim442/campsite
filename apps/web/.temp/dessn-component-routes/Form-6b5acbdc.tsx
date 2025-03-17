import React from 'react';
import { useParentState } from '../useIframeState';
import { Form } from '../../components/OrgOnboarding/Components';
import { useForm } from 'react-hook-form';

export default function ComponentPreview() {
  const [state, setState] = useParentState({
    className: {
      type: "string",
      value: "custom-form-class",
      label: "Class Name"
    }
  });

  const form = useForm();

  return (
    <Form 
      className={state.className.value}
      onSubmit={form.handleSubmit((data) => console.log(data))}
    >
      <input type="text" placeholder="Sample input" />
      <button type="submit">Submit</button>
    </Form>
  );
}