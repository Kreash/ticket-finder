'use client';

import { selectBasketTotalQuantities } from '@/store/features/basket/selector';
import { QuantityIndicator } from '@/ui/quantity-indicator/quantity-indicator';
import { useSelector } from 'react-redux';

export function BasketQuantityIndicator() {
  const total = useSelector(selectBasketTotalQuantities);

  return <>{Boolean(total) && <QuantityIndicator quantity={total} />}</>;
}
