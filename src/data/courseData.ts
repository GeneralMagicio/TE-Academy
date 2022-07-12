import {
  getACourse,
  getCourseAnalytics,
  getCourseContents,
  getAllCourses,
} from "./sample/lmsSampleData";

interface Author {
  name: string;
  image: string | null;
}

interface Course {
  title: string;
  description: string;
  author: Author;
  courseImage: string | null;
  numberEnrollments: number;
  numberCourseSections: any;
}

export function getCourseData(courseId: string): Course {
  const course = {
    title: getACourse.title,
    description: getACourse.description,
    author: getACourse.author,
    courseImage: getACourse.courseImage,
    numberEnrollments: getCourseAnalytics.students,
    numberCourseSections: getCourseContents.sections[0].learningUnits.length,
  };
  return course;
}

export function getAllCoursesData(): Array<Course> {
  const allCourses: Array<Course> = getAllCourses.data.map((course) => {
    return {
      title: course.title,
      description: course.description,
      author: course.author,
      courseImage: course.courseImage,
      numberEnrollments: getCourseAnalytics.students,
      numberCourseSections: getCourseContents.sections[0].learningUnits.length,
    };
  });
  return allCourses;
}
