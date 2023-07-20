import React from 'react'
import { Collapse } from 'antd';

const Faq = () => {

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    const items = [
        {
            key: '1',
            label: 'This is panel header 1',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'This is panel header 2',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'This is panel header 3',
            children: <p>{text}</p>,
        },
        {
            key: '4',
            label: 'This is panel header 4',
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: 'This is panel header 5',
            children: <p>{text}</p>,
        },
        {
            key: '6',
            label: 'This is panel header 6',
            children: <p>{text}</p>,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className='faq_wrapper'>
            <h2>Frequently Asked Questions</h2>
            <Collapse bordered={false} items={items} defaultActiveKey={['1', '3', '5']} onChange={onChange} />
        </div>
    )
}

export default Faq