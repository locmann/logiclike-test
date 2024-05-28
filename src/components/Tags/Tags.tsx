import styles from './Tags.module.scss'
import {useAppContext} from "../../services/context.ts";

const Tags = () => {
  const {themes, filter, setFilter} = useAppContext()

  const handleClick = (tag: string) => {
    setFilter(tag)
  }

  const tags = ['Все темы', ...themes];
  return (
    <div className={styles.wrapper}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={`${styles.tag} ${filter === tag ? styles.active : ''}`}
          onClick={() => handleClick(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags