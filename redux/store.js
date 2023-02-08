import { configureStore } from "@reduxjs/toolkit";

import reducerCart from "./reducers/reducerCart";
import reducerCourses from "./reducers/reducerCourses";
import reducerPayment from "./reducers/reducerPayment";

export default configureStore({
  reducer: {
    courses: reducerCourses,
    cart: reducerCart,
    payments: reducerPayment,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
