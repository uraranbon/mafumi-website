import styles from '../styles/MenuItem.module.scss'

export default function MenuItem({ja,en,explain,price}) {
  const explainArea = explain ? <p className={styles.explain}>{explain}</p> : ""

  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <p className={styles.ja}>{ja}</p>
        <p className={styles.en}>{en}</p>
        {explainArea}
      </div>
      <p className={styles.price}>￥{price}</p>
    </div>
  )
}