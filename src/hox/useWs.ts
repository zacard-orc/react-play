import useWebSocket from 'react-use-websocket';
import { createModel } from 'hox';
import { useEffect, useState } from 'react';
import PubSub from 'pubsub-js';

enum FlowType {
  OrderBook = 'OrderBook',
  Klines = 'Klines',
  SymbolMarkets = 'SymbolMarkets',
}

function _useWs(initialValue: number) {
  const socketUrl = 'ws://localhost:18080/';

  const [pdSymbol, setPdSymbol] = useState<FlowSymbolMarkets | undefined>(
    undefined,
  );
  const [pdOrderBook, setPdOrderBook] = useState<FlowOrderBook | undefined>(
    undefined,
  );
  const [pdKlines, setPdKlines] = useState<FlowKlines | undefined>(undefined);

  const { sendMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    PubSub.publish('rx-ws', lastJsonMessage?.payload);

    switch (lastJsonMessage?.type as FlowType) {
      case FlowType.SymbolMarkets:
        setPdSymbol(lastJsonMessage.payload as FlowSymbolMarkets);
        return;
      case FlowType.OrderBook:
        setPdOrderBook(lastJsonMessage.payload as FlowOrderBook);
        return;
      case FlowType.Klines:
        setPdKlines(lastJsonMessage.payload as FlowKlines);
        return;
      default:
        void 0;
    }
  }, [lastJsonMessage]);

  return {
    sendMessage,
    readyState,
    pdSymbol,
    pdOrderBook,
    pdKlines,
  };
}

export default createModel(_useWs);
