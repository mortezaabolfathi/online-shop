const classNameInput =
  "bg-gray-50 border text-left  text-sm rounded-lg  block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const classNameLabel =
  "text-left font-bold block mb-2 text-2xl text-amber-500";


const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <div className="formControl w-1/2">
      <div className="mb-6">
      <label htmlFor={name} className={classNameLabel}>{label}</label>
      <input
        id={name}
        type={type}
        {...formik.getFieldProps(name)}
        name={name}
        className={classNameInput}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error text-red-600 font-bold bg-neutral-900 w-full md:w-1/2 flex items-center justify-center">{formik.errors[name]}</div>
      )}

      </div>
    </div>
  );
};

export default Input;
