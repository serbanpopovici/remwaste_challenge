import React, { useState } from 'react';
import optionsData from '../../options.json';
import { Option } from '../types/options';
import OptionCard from './OptionCard';

const OptionsList: React.FC = () => {
    const [options] = useState<Option[]>(optionsData as Option[]);
    const [selectedOption, setSelectedOption] = useState<Option>({} as Option);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3'>
            {options.map((option, index) => (
                <OptionCard
                    key={index}
                    option={option}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                />
            ))}
        </div>
    );
};

export default OptionsList;