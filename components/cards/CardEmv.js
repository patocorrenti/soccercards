export default function CardEmv ({ emv }) {
  return (
    <div>
      EMV
      { emv.emv || '???' }
      { emv.evolution && emv.evolution }
    </div>
  )
}
