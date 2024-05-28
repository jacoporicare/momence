import { Rate } from '../../api/exchangeRates';

type Props = {
  rates: Rate[];
};

export default function RateList(props: Props) {
  return (
    <ul>
      {props.rates.map((rate) => (
        <li key={rate.code}>{rate.rate}</li>
      ))}
    </ul>
  );
}
