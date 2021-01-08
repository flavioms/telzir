import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '~/store';
import { getPrices } from '~/store/price';
import { getPlans } from '~/store/plan';
import { getDDD } from '~/store/ddd';
import {
  comparationCall,
  ComparationCallReturn,
} from '~/utils/comparationCall';
import { currencyBRL } from '~/utils/currencyFormat';

import SelectField from '~/components/SelectField';
import InputField from '~/components/InputField';
import Button from '~/components/Button';

import validation from './validation';
import { Container, Form, Results, Title, Subtitle, Price } from './styles';

interface Result {
  comparation: ComparationCallReturn;
}
const Result: React.FC<Result> = ({ comparation }) => {
  return (
    <Results>
      {!comparation && (
        <Title>Preencha os campos e descupra como economizar!</Title>
      )}
      {comparation && comparation.error && (
        <>
          <Title>Ops, Algo deu errado!</Title>
          <Subtitle>Confira os campos e tente novamente!</Subtitle>
        </>
      )}
      {comparation && !comparation.error && (
        <>
          <Price
            smaller={
              comparation.data.promotionPrice <= comparation.data.realPrice
            }
          >
            Fale Mais:
            <span>{currencyBRL(comparation.data.promotionPrice)}</span>
          </Price>

          <Price
            smaller={
              comparation.data.promotionPrice >= comparation.data.realPrice
            }
          >
            Comum:
            <span>{currencyBRL(comparation.data.realPrice)}</span>
          </Price>
        </>
      )}
    </Results>
  );
};
const Home: React.FC = () => {
  const { prices } = useSelector((state: RootState) => state.price);
  const { plans } = useSelector((state: RootState) => state.plan);
  const { ddd } = useSelector((state: RootState) => state.ddd);

  const dispatch = useAppDispatch();
  const [comparation, setComparation] = useState<ComparationCallReturn | null>(
    null,
  );

  useEffect(() => {
    dispatch(getPrices());
    dispatch(getPlans());
    dispatch(getDDD());
  }, [dispatch]);

  return (
    <Container>
      <Formik
        validationSchema={validation}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          origin: ddd[0],
          destiny: ddd[0],
          plan: plans[0],
          duration: 0,
        }}
        onSubmit={(values, actions) => {
          const res = comparationCall({
            origin: values.origin,
            destiny: values.destiny,
            duration: Number(values.duration),
            plan: Number(values.plan),
            prices,
          });
          setComparation(res);
          actions.setSubmitting(false);
        }}
      >
        {({ errors }) => (
          <>
            <Form>
              <SelectField
                id="origin"
                name="origin"
                placeholder="Origem"
                label="Origem"
                error={errors.origin}
                options={ddd.map(item => {
                  return { value: item, label: `DDD - ${item}` };
                })}
                defaultOption={{
                  label: 'Escolha a origem da ligação',
                  value: '',
                }}
              />
              <SelectField
                id="destiny"
                name="destiny"
                placeholder="Destino"
                label="Destino"
                error={errors.destiny}
                options={ddd.map(item => {
                  return { value: item, label: `DDD - ${item}` };
                })}
                defaultOption={{
                  label: 'Escolha a origem da ligação',
                  value: '',
                }}
              />
              <SelectField
                id="plan"
                name="plan"
                placeholder="Plano"
                label="Plano"
                error={errors.plan}
                options={plans.map(item => {
                  return { value: item, label: `FaleMais ${item}` };
                })}
                defaultOption={{ label: 'Escolha o plano desejado', value: '' }}
              />

              <InputField
                label="Duração em minutos"
                id="duration"
                name="duration"
                type="number"
                error={errors.duration}
                placeholder="Tempo"
              />

              <Button type="submit" label="Calcular" color="#57A773" />
            </Form>
            {comparation && <Result comparation={comparation} />}
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Home;
