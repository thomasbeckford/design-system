import Button from '@ui/Button'
import Card from '@ui/Card'
import Comment from '@/public/icons/comment.svg'

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
          <Button intent="danger" size="sm" onClick={handleClick}>
            Button
          </Button>

          <Button
            intent="secondary"
            size="sm"
            onClick={handleClick}
            leftIcon={<Comment />}
          >
            Button
          </Button>
          <Button intent="inverted" size="sm" onClick={handleClick}>
            Button
          </Button>
          <Button intent="invertedFlat" size="sm" onClick={handleClick}>
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
          <Button intent="danger" onClick={handleClick}>
            Button
          </Button>

          <Button
            intent="secondary"
            onClick={handleClick}
            leftIcon={<Comment />}
          >
            Button
          </Button>
          <Button intent="inverted" onClick={handleClick}>
            Button
          </Button>
          <Button intent="invertedFlat" onClick={handleClick}>
            Button
          </Button>

          <Button
            onClick={handleClick}
            isLoading
            loadingText="Submitting..."
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
          <Button intent="danger" size="lg" onClick={handleClick}>
            Button
          </Button>

          <Button
            intent="secondary"
            size="lg"
            onClick={handleClick}
            leftIcon={<Comment />}
          >
            Button
          </Button>
          <Button intent="inverted" size="lg" onClick={handleClick}>
            Button
          </Button>
          <Button intent="invertedFlat" size="lg" onClick={handleClick}>
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
        <div className="flex gap-3 flex-col ">
          <Button intent="primary" size="lg" fullWidth onClick={handleClick}>
            Button
          </Button>
          <Button intent="danger" size="lg" fullWidth onClick={handleClick}>
            Button
          </Button>

          <Button
            intent="secondary"
            size="lg"
            fullWidth
            onClick={handleClick}
            leftIcon={<Comment />}
          >
            Button
          </Button>
          <Button intent="inverted" size="lg" fullWidth onClick={handleClick}>
            Button
          </Button>
          <Button
            intent="invertedFlat"
            size="lg"
            fullWidth
            onClick={handleClick}
          >
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
