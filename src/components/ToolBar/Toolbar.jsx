import { Formik, Field } from 'formik';
import {
  MileageWrapper,
  PriceSelectStyles,
  StyledForm,
  StyledInput,
  StyledToolbar,
  ToolWrapper,
  makeSelectStyles,
} from './Toolbar.styled';
import { MAKES } from '../../constants/makes';
import { createArrayRange } from '../../utils/utils';
import { SectionTitle } from '../../pages/CatalogPage/CatalogPage.styled';
import Button from '../Button/Button';

const Toolbar = ({ params, setParams }) => {
  const initialValues = {
    make: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  };

  const prices = createArrayRange(30, 500, 10);

  const Submit = async (values) => {
    setParams({ ...params, ...values, page: 1 });
  };

  return (
    <StyledToolbar>
      <SectionTitle $hidden>Search Tools</SectionTitle>
      <Formik initialValues={initialValues} onSubmit={Submit}>
        {({ isSubmitting }) => (
          <StyledForm>
            <ToolWrapper>
              <label htmlFor="">Car brand</label>
              <Field name="make" as="select" style={makeSelectStyles}>
                <option value="">All</option>
                {MAKES.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </Field>
            </ToolWrapper>

            <ToolWrapper>
              <label htmlFor="price">Price/ 1 hour</label>
              <Field name="price" as="select" style={PriceSelectStyles}>
                <option value="" disabled className="placeholder">
                  To $
                </option>
                {prices.map((price) => (
                  <option key={price} value={price}>
                    {price}
                  </option>
                ))}
              </Field>
            </ToolWrapper>

            <ToolWrapper>
              <p role="label">Сar mileage / km</p>
              <MileageWrapper>
                <StyledInput
                  name="mileageFrom"
                  placeholder="From"
                  type="number"
                  min="0"
                />
                <StyledInput
                  name="mileageTo"
                  placeholder="To"
                  type="number"
                  min="0"
                />
              </MileageWrapper>
            </ToolWrapper>

            <Button type="submit" text={'Search'} disabled={isSubmitting} />
          </StyledForm>
        )}
      </Formik>
    </StyledToolbar>
    //
  );
};

export default Toolbar;
