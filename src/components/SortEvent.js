import React, {useState} from "react";
import { useSelector } from "react-redux";

const SortEvent = (props) => {
  const [selectedCategoryCheckbox, setSelectedCategoryCheckbox] = useState('');
  const categories = useSelector(
    (state) => state.categoryEventReducers.categories
  );

  const handleCheckboxSelected = (value) => {
    props.handleChangeCategory(parseInt(value))
    setSelectedCategoryCheckbox(parseInt(value))
  }

  return (
    <div className="flex flex-wrap">
      <div className="border-2 h-60 w-10/12 rounded-lg ml-10 mt-5">
        <p className="px-4 pt-3">Tipe Event</p>
        <div className="px-10 mr-32 w-full">
          {categories.map((category, index) => {
            return (
              <div className="flex" key={index}>
                <label className="inline-flex items-center mt-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600 -ml-5"
                    value={category.id}
                    onChange={(e) => handleCheckboxSelected(e.target.value)}
                    checked={ selectedCategoryCheckbox === category.id }
                  />
                  <span className="ml-2 text-gray-700">{category.category_name}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SortEvent;
