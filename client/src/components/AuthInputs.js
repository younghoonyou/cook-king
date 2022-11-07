import '../pages/Auth.css';

const AuthInputs = (props) => {
  const { title, type, name, value, onChange } = props;

  return (
    <>
      <label className='Auth-email' htmlFor={title}>
        {title.toUpperCase()}
      </label>
      <input
        type={type ?? title}
        name={name ?? title}
        value={value}
        onChange={onChange}
        className='Auth-authInputs'
      />
    </>
  );
};

export default AuthInputs;
