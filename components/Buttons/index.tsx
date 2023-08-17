import Button from '@ui/Button'
import Card from '@ui/Card'
import Twitter from '@/public/icons/twitter.svg'
import Home from '@/public/icons/home.svg'

export default function Buttons() {
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <Card title="Buttons">
      <div className="space-y-5">
        <p>Small</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="secondary" size="sm" onClick={handleClick}>
            Small Secondary
          </Button>
          <Button
            intent="primary"
            size="sm"
            onClick={handleClick}
            leftIcon={<Twitter />}
          >
            Left
          </Button>
          <Button intent="secondary" size="sm" onClick={handleClick} outline>
            Small Primary Outline
          </Button>
          <Button
            intent="primary"
            size="sm"
            onClick={handleClick}
            isLoading
            loadingText="Still loading..."
            outline
          >
            Loading
          </Button>
        </div>

        <p>Medium</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="secondary" onClick={handleClick}>
            Medium Primary
          </Button>
          <Button intent="primary" onClick={handleClick} leftIcon={<Twitter />}>
            Left
          </Button>
          <Button intent="secondary" onClick={handleClick} outline>
            Medium Primary Outline
          </Button>
          <Button
            intent="primary"
            onClick={handleClick}
            isLoading
            loadingText="Loading..."
          >
            Loading
          </Button>
        </div>

        <p>Large</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="secondary" size="lg" onClick={handleClick}>
            Large Primary
          </Button>
          <Button
            intent="primary"
            size="lg"
            onClick={handleClick}
            leftIcon={<Home />}
          >
            Email
          </Button>
          <Button intent="secondary" size="lg" onClick={handleClick} outline>
            Large Primary Outline
          </Button>
          <Button
            intent="primary"
            size="lg"
            onClick={handleClick}
            isLoading
            loadingText="Submitting..."
            outline
            spinnerPlacement="end"
          >
            Loading
          </Button>
        </div>

        <p>Full width</p>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="secondary" size="lg" fullWidth>
            Secondary Button
          </Button>
          <Button
            intent="primary"
            fullWidth
            size="lg"
            onClick={handleClick}
            leftIcon={<Home />}
          >
            Left
          </Button>
        </div>
        <div className="flex gap-3 flex-col md:flex-row">
          <Button intent="primary" outline fullWidth>
            Secondary Button
          </Button>
          <Button
            intent="primary"
            onClick={handleClick}
            isLoading
            size="lg"
            fullWidth
            loadingText="Loading..."
          >
            Loading
          </Button>
        </div>
      </div>
    </Card>
  )
}
