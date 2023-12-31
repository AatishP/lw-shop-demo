import {OrderHistoryRow} from 'components/molecules/OrderHistoryRow';
import {AppScreen} from 'components/layouts/AppScreen';
import {AppText} from 'components/atoms/AppText';
import {Space} from 'components/atoms/Space';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectOrderHistory} from 'store/orderHistory/selectors';

export const OrderHistory = () => {
  const orderHistory = useSelector(selectOrderHistory);

  return (
    <AppScreen>
      <AppText type="title" weight="bold">
        Your orders
      </AppText>
      <Space size={32} />
      {orderHistory?.length > 0 ? (
        orderHistory?.map(orderHistoryItem => {
          const numberOfItems = orderHistoryItem.order.items.length;
          const itemNumberString = `${numberOfItems} item${
            numberOfItems > 1 ? 's' : ''
          }`;
          return (
            <OrderHistoryRow
              key={orderHistoryItem.orderId}
              title={`#${orderHistoryItem.orderId}`}
              subtitle={itemNumberString}
            />
          );
        })
      ) : (
        <AppText alignment="center">No orders placed</AppText>
      )}
    </AppScreen>
  );
};
