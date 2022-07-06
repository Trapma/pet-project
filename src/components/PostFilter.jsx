import React from 'react'
import { MyInput } from './UI/input/MyInput'
import { MySelect } from './UI/select/MySelect'

const PostFilter = ({ filter, setFilter }) => {


    return (
        <div>
            <MyInput
                placeholder="Поиск..."
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSorted => setFilter({ ...filter, sort: selectedSorted })}
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" },
                ]}
                defaultValue={"Сортировка"}
            />

        </div>
    )
}

export default PostFilter
