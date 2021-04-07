import Select from 'react-select';

const FdSelect = () => {
  const selectOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return <Select options={selectOptions} />;
};

export { FdSelect };
