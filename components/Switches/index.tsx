import Card from '@ui/Card'
import Switch from '@ui/Switch'

export default function Switches() {
  return (
    <Card title="Switches">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-4">
          <Switch isActive={true} />
          <Switch isActive={false} />
        </div>
        <div className="flex flex-col gap-4">
          <Switch label={['ON', 'OFF']} isActive={false} />
          <Switch label={['Expert', 'Simple']} isActive={true} />
        </div>
      </div>
    </Card>
  )
}
