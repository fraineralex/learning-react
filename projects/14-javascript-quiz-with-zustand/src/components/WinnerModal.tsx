import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useQuestionsStore } from '../store/questions'
import confetti from 'canvas-confetti'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

interface Props {
  correctAnswers: number
  incorrectAnswers: number
}

export default function WinnerModal ({
  correctAnswers,
  incorrectAnswers
}: Props) {
  const [open, setOpen] = React.useState(true)
  const resetGame = useQuestionsStore(state => state.reset)

  const handleClose = () => {
    resetGame()
    //setOpen(false)
  }

  confetti()

  const calification =
    (correctAnswers * 100) / (correctAnswers + incorrectAnswers)

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id='transition-modal-title'
              variant='h4'
              component='h2'
              textAlign='center'
            >
              <strong>
                {calification >= 50 ? 'Congratulations! 😀' : 'Try again! 🥲'}
              </strong>
            </Typography>
            <Typography
              id='transition-modal-description'
              sx={{ mt: 2 }}
              textAlign='center'
            >
              <strong>
                {`You got ${correctAnswers} correct answers and ${incorrectAnswers} incorrect answers. `}
                That give you {calification >= 50 ? '' : 'just'} a{' '}
                {calification}% of hits. {calification >= 50 ? '🎉' : '🎯'}
              </strong>
              <div style={{ marginTop: '16px' }}>
                <Button onClick={handleClose} color='info'>Reset Game</Button>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
