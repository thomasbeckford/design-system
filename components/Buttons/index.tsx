import Button from '@ui/Button'
import Card from '@ui/Card'

export default function Buttons() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <Card title="Buttons">
      <div className="space-y-5">
        <div className="flex gap-3">
          <Button intent="primary" size="small" onClick={handleClick}>
            Small Primary
          </Button>
          <Button intent="primary" size="small" onClick={handleClick} outline>
            Small Primary Outline
          </Button>
        </div>
        <div className="flex gap-3">
          <Button intent="primary" size="large" onClick={handleClick}>
            Large Primary
          </Button>
          <Button intent="secondary" size="large" onClick={handleClick} outline>
            Large Primary Outline
          </Button>
        </div>

        <Button intent="secondary" outline fullWidth>
          Secondary Button
        </Button>
        <Button intent="secondary" size="large" fullWidth>
          Secondary Button
        </Button>
      </div>
    </Card>
  )
}
