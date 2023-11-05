import { Formik, Field } from 'formik';
import {
  StyledForm,
  StyledInput,
  // StyledSelect,
  StyledToolbar,
  ToolWrapper,
} from './Toolbar.styled';
import { MAKES } from '../../constants/makes';
import { useDispatch } from 'react-redux';
import { getCarsThunk } from '../../redux/operations';
import { createArrayRange } from '../../utils/utils';
import { SectionTitle } from '../../pages/CatalogPage/CatalogPage.styled';

const Toolbar = ({ page }) => {
  const dispatch = useDispatch();
  const initialValues = {
    make: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  };

  const prices = createArrayRange(30, 500, 10);

  const Submit = async (values) => {
    dispatch(getCarsThunk({ page, ...values }));
  };

  return (
    <StyledToolbar>
      <SectionTitle $hidden>Search Tools</SectionTitle>
      <Formik initialValues={initialValues} onSubmit={Submit}>
        {({ isSubmitting }) => (
          <StyledForm>
            <ToolWrapper>
              <label htmlFor="">Car brand</label>
              <Field name="make" as="select">
                <option value="" disabled className="placeholder">
                  Enter the text
                </option>
                {MAKES.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </Field>
            </ToolWrapper>

            <ToolWrapper>
              <label htmlFor="price">Price/ 1 hour</label>
              <Field name="price" as="select" placeholder="To $">
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
              <div>
                <StyledInput
                  name="mileageFrom"
                  placeholder="From"
                  type="number"
                />
                <StyledInput name="mileageTo" placeholder="To" type="number" />
              </div>
            </ToolWrapper>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </StyledForm>
        )}
      </Formik>
    </StyledToolbar>
    //
  );
};

export default Toolbar;
