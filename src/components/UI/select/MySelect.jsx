import React from 'react'

export const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {/* почему в стрелочной функции не ставятся скобки? */}
            {options.map(option =>
                <option key={option.value} value={option.value.toString()}>
                    {option.name}
                </option>

            )}
        </select>
    )
}
