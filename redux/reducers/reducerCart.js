import PaidCourse from "../../data/PaidCoursModel";
import {
  ADD_TO_CART,
  REMOVE_COURSE_CART,
  ADD_PAYMENT,
  DELETE_COURSE,
} from "../constants";

const initialState = {
  cartCourses: [],
  total: 0,
};

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const course = action.course;
      const idCourse = course.id;
      const price = course.price;
      const title = course.title;

      const newCouse = new PaidCourse(idCourse, price, title);

      return {
        ...state,
        cartCourses: state.cartCourses.concat(newCouse),
        total: state.total + price,
      };
    case REMOVE_COURSE_CART:
      const indexResult = state.cartCourses.findIndex(
        (course) => course.id === action.prodId
      );

      const newCoursesArray = [...state.cartCourses];
      newCoursesArray.splice(indexResult, 1);
      const coursePrice = state.cartCourses[indexResult].price;

      return {
        ...state,
        cartCourses: newCoursesArray,
        total: state.total - coursePrice,
      };
    case ADD_PAYMENT:
      return initialState;
    case DELETE_COURSE:
      return {
        ...state,
        cartCourses: filterCourses(state.cartCourses, action.courseId),
        total: SubstractionCoursePrice(
          state.cartCourses,
          action.courseId,
          state.total
        ),
      };
    default:
      return state;
  }
};

const SubstractionCoursePrice = (course, actionId, stateTotal) => {
  const indexCourse = course.findIndex((course) => course.id === actionId);
  if (indexCourse < 0) {
    return stateTotal;
  }
  const newCoursesArray = [...course];
  return stateTotal - newCoursesArray[indexCourse].price;
};

const filterCourses = (course, actionId) => {
  return course.filter((course) => course.id !== actionId);
};

export default reducerCart;
