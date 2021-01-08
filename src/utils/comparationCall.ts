import { Price } from '~/store/price';

export interface ComparationCallProps {
  origin: string;
  destiny: string;
  duration: number;
  plan: number;
  prices: Price[];
}

export interface ComparationCallReturn {
  error: boolean;
  data: {
    promotionPrice: number;
    realPrice: number;
  };
}

const findPrice = (
  origin: string,
  destiny: string,
  prices: Price[],
): Price | undefined => {
  return prices.find(
    item => item.origin === origin && item.destiny === destiny,
  );
};

export const comparationCall = ({
  origin,
  destiny,
  duration,
  plan,
  prices,
}: ComparationCallProps): ComparationCallReturn => {
  const price = findPrice(origin, destiny, prices);

  if (price) {
    const promotionTime = Math.max(0, duration - plan);

    const promotionPrice =
      Math.max(0, price.price * 0.1 + price.price) * promotionTime;

    const realPrice = duration * price.price;
    return {
      error: false,
      data: {
        promotionPrice: parseFloat(promotionPrice.toFixed(2)),
        realPrice: parseFloat(realPrice.toFixed(2)),
      },
    };
  }
  return { error: true, data: { promotionPrice: 0, realPrice: 0 } };
};
