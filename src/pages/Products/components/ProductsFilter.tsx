import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { selectStatusFilter } from '../../../redux/filter/selectors';
import { setStatusFilter } from '../../../redux/filter/filterSlice';
import { useAppDispatch } from '../../../hooks/redux';
import { statusFilter } from '../../../constants/filter';

export const ProductsFilter = () => {
  const dispatch = useAppDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = (value: string) => {
    dispatch(setStatusFilter(value));
  };

  return (
    <div className="products-filter">
      <h3 className="products-filter__title">Filter by type:</h3>
      <div className="products-filter__wrapper">
        <Button
          className="products-filter__button"
          variant={filter === statusFilter.all ? 'primary' : 'light'}
          size="sm"
          onClick={() => handleFilterChange(statusFilter.all)}
        >
          All
        </Button>
        <Button
          className="products-filter__button"
          variant={filter === statusFilter.brash ? 'primary' : 'light'}
          size="sm"
          onClick={() => handleFilterChange(statusFilter.brash)}
        >
          Brash
        </Button>
        <Button
          className="products-filter__button"
          variant={filter === statusFilter.scrunchy ? 'primary' : 'light'}
          size="sm"
          onClick={() => handleFilterChange(statusFilter.scrunchy)}
        >
          Scrunchy
        </Button>
      </div>
    </div>
  );
};
