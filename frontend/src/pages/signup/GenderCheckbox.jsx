//import React from 'react'

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={
            'label gap-2 mr-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} '
          }
        >
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            className="checkboc border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          ></input>
        </label>
      </div>

      <div className="form-control">
        <label
          className={
            'label gap-2 ml-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}'
          }
        >
          <span className="label-text text-white">Female</span>
          <input
            type="checkbox"
            className="checkboc border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          ></input>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

//starter code

// const GenderCheckbox = () => {
//   return (
//     <div className="flex">
//       <div className="form-control">
//       <label className={"label gap-2 mr-2 cursor-pointer"}>
//         <span className="label-text text-white">Male</span>
//         <input type="checkbox" className="checkboc border-slate-900"></input>
//       </label>
//       </div>

//       <div className="form-control">
//       <label className={"label gap-2 ml-2 cursor-pointer"}>
//         <span className="label-text text-white">Female</span>
//         <input type="checkbox" className="checkboc border-slate-900"></input>
//       </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckbox
