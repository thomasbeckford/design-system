import Button from '@ui/Button'
import Card from '@ui/Card'
import Twitter from '@/public/icons/twitter.svg'

export default function Buttons() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <Card title="Buttons">
      <div className="space-y-5">
        <p>Small</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="primary" size="sm" onClick={handleClick}>
            Button
          </Button>
          <Button
            intent="secondary"
            size="sm"
            onClick={handleClick}
            leftIcon={<Twitter />}
          >
            Button
          </Button>
          <Button intent="inverted" size="sm" onClick={handleClick}>
            Button
          </Button>
          <Button intent="secondary" size="sm" onClick={handleClick}>
            Button
          </Button>
          <Button
            size="sm"
            onClick={handleClick}
            isLoading
            loadingText="Still loading..."
          >
            Button
          </Button>
        </div>

        <p>Medium</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="primary" onClick={handleClick}>
            Button
          </Button>
          <Button
            intent="secondary"
            onClick={handleClick}
            leftIcon={<Twitter />}
          >
            Button
          </Button>
          <Button intent="inverted" onClick={handleClick}>
            Button
          </Button>
          <Button intent="secondary" onClick={handleClick}>
            Button
          </Button>
          <Button
            onClick={handleClick}
            isLoading
            loadingText="Still loading..."
            spinnerPlacement="end"
          >
            Button
          </Button>
        </div>

        <p>Large</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="primary" size="lg" onClick={handleClick}>
            Button
          </Button>
          <Button
            intent="secondary"
            size="lg"
            onClick={handleClick}
            leftIcon={<Twitter />}
          >
            Button
          </Button>
          <Button intent="inverted" size="lg" onClick={handleClick}>
            Button
          </Button>
          <Button intent="secondary" size="lg" onClick={handleClick}>
            Button
          </Button>
          <Button
            size="lg"
            onClick={handleClick}
            isLoading
            loadingText="Loading.."
          >
            Button
          </Button>
        </div>

        <p>Full width</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="primary" size="lg" fullWidth onClick={handleClick}>
            Button
          </Button>
          <Button
            intent="secondary"
            size="lg"
            fullWidth
            onClick={handleClick}
            leftIcon={<Twitter />}
          >
            Button
          </Button>
          <Button intent="inverted" size="lg" fullWidth onClick={handleClick}>
            Button
          </Button>
          <Button intent="secondary" size="lg" fullWidth onClick={handleClick}>
            Button
          </Button>
          <Button
            size="lg"
            fullWidth
            onClick={handleClick}
            isLoading
            loadingText="Loading.."
          >
            Button
          </Button>
        </div>
      </div>
    </Card>
  )
}
