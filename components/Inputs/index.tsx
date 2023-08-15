import Card from '@ui/Card'
import Input from '@ui/Input'

export default function Inputs() {
  return (
    <Card title="Inputs">
      <Input
        placeholder="Enter your name"
        size="small"
        addClass="bg-gray-200"
      />
      <Input
        variant="outlined"
        size="medium"
        placeholder="Search"
        addClass="border-blue-500"
      />
      <Input
        variant="outlined"
        size="large"
        placeholder="Type your message here"
        addClass="text-red-600"
      />
    </Card>
  )
}
