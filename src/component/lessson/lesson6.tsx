import { Button, Form, Input, Select, Space, Radio } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const lesson6 = () => {

    const optionsTag = [
        { value: 'kylapplikationer', label: 'kylapplikationer' },
        { value: 'program', label: 'program' },
        { value: 'inklusive', label: 'inklusive' },
        { value: 'komplete', label: 'komplete' },
        { value: 'vid', label: 'vid' },
        { value: 'bygghanding', label: 'bygghanding' },
        { value: 'sweeden', label: 'sweeden' },
    ]

    const optionsColumn = [
        { value: 'firstName', label: 'FIRST_NAME' },
        { value: 'lastname', label: 'LAST_NAME' },
        { value: 'birthYear', label: 'BIRTH_YEAR' },
        { value: 'personalNumber', label: 'PERSONAL_NUMBER' },
        { value: 'gender', label: 'GENDER' },
        { value: 'dateRecorded', label: 'DATE_RECORDED' },
        { value: 'businessArea', label: 'BUSINESS_AREA' },
    ]

    const optionsIs = [
        { value: 'Is', label: 'IS' },
        { value: 'isNot', label: 'IS_NOT' },
        { value: 'contains', label: 'CONTAINS' },
        { value: 'notContain', label: 'NOT_CONTAINS' },
        { value: 'greaterThan', label: 'GREATER_THAN' },
        { value: 'lessThan', label: 'LESS_THAN' },
    ]
    return (
        <div>
            <h1 className='mb-6 font-bold'>Thực hành extend form</h1>
            <Form className='flex flex-col'>
                <h2 className='mb-8 text-2xl'>Filter</h2>
                <div className='flex'>
                    <div className='mr-[40px]'>
                        <label>Search</label>
                        <Form.Item name={"Search"}>
                            <Input placeholder='Search...' />
                        </Form.Item>
                    </div>
                    <div>
                        <label>Tag</label>
                        <Form.Item name={"Tag"}>
                            <Select placeholder="Tag..." style={{ width: '300px' }}>
                                {optionsTag.map((option) => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>

                        </Form.Item>
                    </div>

                </div>
                <div className='flex flex-col'>
                    <label className='text-base opacity-60'>Show Only Records With</label>
                    <div className='flex w-full justify-between gap-6 mt-[10px]'>
                        <Form.Item name={"Column"}>
                            <Select placeholder="Column" style={{ width: '300px' }}>
                                {optionsColumn.map((option) => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <p>That</p>
                        <Form.Item name={"Is"}>
                            <Select placeholder="Column" style={{ width: '300px' }}>
                                {optionsIs.map((option) => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                        <Form.Item name={"Text"}>
                            <Input placeholder='Text' />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.List name={"students"}>
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map((field, index) => {
                                        return (
                                            <Space key={field.key} direction='horizontal'>
                                                <div className='flex w-full flex-col gap-6 mt-[10px]'>
                                                    <div>
                                                        <Radio.Group>
                                                            <Radio value={1}>AND</Radio>
                                                            <Radio value={2}>OR</Radio>
                                                        </Radio.Group>
                                                    </div>
                                                    <div className="flex w-full justify-between gap-6 mt-[10px]">
                                                        <Form.Item name={[field.name, "Column"]}>
                                                            <Select placeholder="Column" style={{ width: '300px' }}>
                                                                {optionsColumn.map((option) => (
                                                                    <Select.Option key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </Select.Option>
                                                                ))}
                                                            </Select>
                                                        </Form.Item>
                                                        <p>That</p>
                                                        <Form.Item name={[field.name, "Is"]}>
                                                            <Select placeholder="Is" style={{ width: '300px' }}>
                                                                {optionsIs.map((option) => (
                                                                    <Select.Option key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </Select.Option>
                                                                ))}
                                                            </Select>
                                                        </Form.Item>
                                                        <Form.Item name={[field.name, "Text"]}>
                                                            <Input placeholder='Text' />
                                                        </Form.Item>
                                                        <Button
                                                            icon={<DeleteOutlined />}
                                                            onClick={() => remove(field.name)}
                                                        />
                                                    </div>
                                                </div>

                                            </Space>

                                        )
                                    })}
                                    <div>
                                    <Form.Item>
                                        <Button onClick={() => {
                                            add();
                                        }}>
                                            More Filter
                                        </Button>
                                    </Form.Item>
                                    </div>

                                    <div className="flex">
                                    <Form.Item>
                                        <Button onClick={() => {
                                            
                                        }}>
                                            filter
                                        </Button>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button onClick={() => {
                                            
                                        }}>
                                            Clear
                                        </Button>
                                    </Form.Item>
                                    </div>
                                </>
                            )}
                        </Form.List>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default lesson6;