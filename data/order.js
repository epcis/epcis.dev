import { createMachine } from 'xstate'

export const order = createMachine({
  id: "Order",
  initial: "Ordered",
  states: {
    Ordered: {
      meta: {
        lat: 44.7818,
        lng: -93.5165,
        logo: "Apple",
      },
      on: {
        Confirm: {
          target: "Confirmed",
        },
      },
    },
    Confirmed: {
      meta: {
        colo: "SEA",
        logo: "",
      },
      on: {
        Pick: {
          target: "Picked",
        },
      },
    },
    Picked: {
      meta: {
        colo: "ORD",
        logo: "",
      },
      on: {
        Pack: {
          target: "Packed",
        },
      },
    },
    Packed: {
      meta: {
        colo: "ORD",
        logo: "",
      },
      on: {
        Ship: {
          target: "Shipped",
        },
      },
    },
    Shipped: {
      meta: {
        colo: "ORD",
        shipped: "",
      },
      on: {
        Deliver: {
          target: "Delivered",
        },
      },
    },
    Delivered: {
      meta: {
        lat: 44.7818,
        lng: -93.5165,
        logo: "FedEx",
      },
      type: "final",
    },
  },
  context: {},
  predictableActionArguments: true,
  preserveActionOrder: true,
})