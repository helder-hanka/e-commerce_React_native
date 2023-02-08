import CourseModal from "../../data/CourseModel";
import COURSES from "../../data/testData";
import {
  ADD_TO_CART,
  REMOVE_COURSE_CART,
  DELETE_COURSE,
  EDIT_COURSE,
  CREATE_COURSE,
} from "../constants";

const initialState = {
  existingCourses: COURSES,
  loggedInMemberCourses: COURSES.filter(
    (course) => course.instructorId === "1"
  ),
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const copyExistingCourse = indexCourseToModify(
        state.existingCourses,
        action.course.id,
        true
      );
      return {
        ...state,
        existingCourses: copyExistingCourse,
        loggedInMemberCourses: state.loggedInMemberCourses,
      };
    case REMOVE_COURSE_CART:
      const recoverExistingCourse = indexCourseToModify(
        state.existingCourses,
        action.prodId,
        false
      );

      return {
        ...state,
        existingCourses: recoverExistingCourse,
        loggedInMemberCourses: state.loggedInMemberCourses,
      };
    case DELETE_COURSE:
      return {
        ...state,
        existingCourses: filterCourses(state.existingCourses, action.courseId),
        loggedInMemberCourses: filterCourses(
          state.loggedInMemberCourses,
          action.courseId
        ),
      };

    case EDIT_COURSE:
      const idCourse = action.idCourse;
      const indexCourseToUpdate = courseFindIndex(
        state.loggedInMemberCourses,
        idCourse
      );

      const udatedCourse = new CourseModal(
        idCourse,
        action.updatedCourse.title,
        action.updatedCourse.desc,
        action.updatedCourse.img,
        state.loggedInMemberCourses[indexCourseToUpdate].price,
        state.loggedInMemberCourses[indexCourseToUpdate].selected,
        state.loggedInMemberCourses[indexCourseToUpdate].instructorId
      );

      const newLoggedInMemberCourses = [...state.loggedInMemberCourses];
      newLoggedInMemberCourses[indexCourseToUpdate] = udatedCourse;

      const indexExistingCourses = courseFindIndex(
        state.existingCourses,
        idCourse
      );
      const newExistingCourses = [...state.existingCourses];
      newExistingCourses[indexExistingCourses] = udatedCourse;

      return {
        ...state,
        existingCourses: newExistingCourses,
        loggedInMemberCourses: newLoggedInMemberCourses,
      };
    case CREATE_COURSE:
      const newCourse = new CourseModal(
        Date.now().toString(),
        action.newCourse.title,
        action.newCourse.description,
        action.newCourse.image,
        action.newCourse.price,
        false,
        "1"
      );
      return {
        ...state,
        existingCourses: state.existingCourses.concat(newCourse),
        loggedInMemberCourses: state.loggedInMemberCourses.concat(newCourse),
      };

    default:
      return state;
  }
};

const courseFindIndex = (state, actionCourseId) => {
  return state.findIndex((course) => course.id === actionCourseId);
};

const indexCourseToModify = (
  stateExistingCourses,
  actionCourseId,
  selected
) => {
  const indexCourseToModify = courseFindIndex(
    stateExistingCourses,
    actionCourseId
  );
  const copyExistingCourse = [...stateExistingCourses];
  copyExistingCourse[indexCourseToModify].selected = selected;
  return copyExistingCourse;
};

const filterCourses = (courses, actionCourseId) => {
  return courses.filter((course) => course.id !== actionCourseId);
};

export default reducerCourses;
