import Card from '@ui/Card'
import Input from '@ui/Input'
import Search from '@/public/icons/search.svg'

export default function Inputs() {
  return (
    <Card title="Inputs">
      <div className="flex flex-col gap-3">
        <div>
          <Input
            placeholder="Search by name or paste address"
            size="sm"
            autoFocus={true}
          />
        </div>
        <div>
          <Input
            placeholder="Search by name or paste address"
            leftIcon={<Search />}
          />
        </div>
        <div>
          <Input
            isDisabled
            placeholder="Search by name or paste address"
            size="lg"
          />
        </div>
      </div>
    </Card>
  )
}
