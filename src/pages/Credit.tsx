import { useNavigate } from 'react-router-dom';
const Credit = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <>
      <h1>Credit</h1>
      <button onClick={goHome}>Thank you!</button>
    </>
  );
};

export default Credit;
