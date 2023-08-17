import Card from '@ui/Card'
import Input from '@ui/Input'

export default function Inputs() {
  return (
    <Card title="Inputs">
      <Input placeholder="Enter your name" size="small" />
      <Input variant="outlined" size="medium" placeholder="Search" />
      <Input
        variant="outlined"
        size="large"
        placeholder="Type your message here"
      />
    </Card>
  )
}
