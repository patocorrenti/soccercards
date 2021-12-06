import Styles from './CardEmv.module.scss'

export default function CardEmv ({ emv }) {
  return (
    <div className={Styles.emv}>
      <span className={Styles.legend}>
        EMV
      </span>
      <span className={Styles.value}>
        { emv.emv || '???' }
      </span>
      { emv.evolution && emv.evolution }
    </div>
  )
}
