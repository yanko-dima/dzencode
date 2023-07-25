import Spinner from 'react-bootstrap/Spinner';

export const Loader = () => {
  return (
    <div className="text-center py-5">
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};
