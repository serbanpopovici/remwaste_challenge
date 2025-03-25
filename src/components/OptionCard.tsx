import React from 'react';
import { Option } from '../types/options';

interface Props {
    option: Option;
    selectedOption: Option;
    setSelectedOption: Function;
}

const OptionCard: React.FC<Props> = (props: Props) => {
    const handleOptionSelection = () => {
        if (props.option.forbidden)
            return;

        props.setSelectedOption(props.option);
    }

    return (
        <div className={`flex flex-col h-[320px] min-w-[240px] justify-between rounded-2xl ${props.option.forbidden ? 'opacity-[0.5] cursor-not-allowed' : 'hover:cursor-pointer'} ${props.selectedOption.id !== props.option.id ? 'border-2 border-gray-200' : 'border-3 border-yellow-500'}`}
            onClick={() => handleOptionSelection()}
        >
            <div>
                <div className='flex justify-between align-middle p-3 bg-gray-50 rounded-t-2xl text-xl font-bold'>
                    <div className='flex gap-2'>
                        <div className='h-[30px] w-[30px] text-center align-middle bg-yellow-500 rounded-lg'>{props.option.size}</div>
                        <span>Yards</span>
                    </div>
                </div>
                <div className='flex-col p-3 text-lg'>
                    <div className='flex justify-between mb-3'>
                        <span>
                            Price
                        </span>
                        <span>
                            £ {props.option.price_before_vat}
                        </span>
                    </div>
                    <div className='flex justify-between mb-3'>
                        <span>
                            Hire Period
                        </span>
                        <span>
                            {props.option.hire_period_days} days
                        </span>
                    </div>
                    {!!!props.option.allows_heavy_waste &&
                        <div className='size-fit px-2 mb-3 rounded-md text-red-500 border-1 border-red-500 bg-red-100'>
                            N/A for Heavy Waste
                        </div>
                    }
                    {!!!props.option.allowed_on_road &&
                        <div className='size-fit px-2 mb-3 rounded-md text-yellow-500 border-1 border-yellow-500 bg-yellow-100'>
                            Private Property Only
                        </div>
                    }
                </div>
            </div>

            <div className={`p-2 m-3 text-center rounded-lg ${props.option.forbidden ? 'cursor-not-allowed' : 'hover:cursor-pointer hover:bg-yellow-600'} bg-yellow-500 text-xl font-bold`}>
                {props.selectedOption.id == props.option.id ? "Selected" : "Select This Skip"}
            </div>
        </div>
    );
}

export default OptionCard;