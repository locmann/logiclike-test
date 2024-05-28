import {CourseType} from "../../types/CourseType.ts";
import styles from './Course.module.scss'
const Course = ({course}: { course: CourseType }) => {
  return <div style={{backgroundColor: `${course.bgColor}`}} className={styles.wrapper}>
    <img src={course.image}/>
    <span>{course.name}</span>
  </div>
}

export default Course