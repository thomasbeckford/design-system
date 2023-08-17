import Card from '@ui/Card'
import Spinner from '@ui/Spinner'

export default function Spinners() {
  return (
    <Card title="Spinners">
      <div>Small</div>
      <Spinner size="sm" />

      <div>Medium</div>
      <Spinner size="md" />

      <div>Large</div>
      <Spinner size="lg" />
    </Card>
  )
}
